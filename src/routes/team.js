'use strict';
const crypto = require('node:crypto');
const express = require('express');
const db = require('../db');
const auth = require('../auth');
const progress = require('../services/progress');
const { toArray } = require('../helpers');

const router = express.Router();
const staff = [auth.requireLogin, auth.requireRole('owner', 'admin', 'evaluator')];

function loadTech(req, res) {
  const tech = db.one('SELECT u.*, o.name AS org_name FROM users u LEFT JOIN organizations o ON o.id = u.org_id WHERE u.id = ?', Number(req.params.id));
  if (!tech || !auth.canManageUser(req.user, tech)) {
    res.status(404).render('error', { title: 'Not found', message: 'Technician not found.' });
    return null;
  }
  return tech;
}

function certificateNo(levelCode) {
  return `ILA-${levelCode}-${new Date().getFullYear()}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
}

// ---------- public certificate verification (for customers, inspectors, other employers) ----------
router.get('/verify/:no', (req, res) => {
  const cert = db.one(`SELECT p.*, u.name, l.title AS level_title, l.grade, o.name AS org_name FROM promotions p
    JOIN users u ON u.id = p.user_id JOIN levels l ON l.code = p.level_code LEFT JOIN organizations o ON o.id = u.org_id WHERE p.certificate_no = ?`, req.params.no);
  res.render('verify', { title: 'Certificate verification', cert });
});

// ---------- team list ----------
router.get('/team', staff, (req, res) => {
  const levels = progress.orderedLevels();
  const filter = req.user.role === 'owner' ? '' : 'AND u.org_id = ' + Number(req.user.org_id);
  const techs = db.all(`SELECT u.*, o.name AS org_name FROM users u LEFT JOIN organizations o ON o.id = u.org_id
    WHERE u.role = 'technician' AND u.active = 1 ${filter} ORDER BY u.name`).map((t) => {
    const w = progress.workingLevel(t, levels);
    return { ...t, working: w, lp: w ? progress.levelProgress(t, w) : null };
  });
  res.render('team', { title: 'My team', techs });
});

// ---------- technician record ----------
router.get('/team/:id', staff, (req, res) => {
  const tech = loadTech(req, res);
  if (!tech) return;
  const levels = progress.orderedLevels();
  const working = progress.workingLevel(tech, levels);
  const allLevels = [...levels, ...progress.standaloneLevels()];
  const viewCode = req.query.level || (working && working.code) || tech.current_level_code;
  const viewLevel = allLevels.find((l) => l.code === viewCode) || working;
  res.render('tech', {
    title: tech.name, tech, levels, allLevels, working, viewLevel,
    lp: viewLevel ? progress.levelProgress(tech, viewLevel) : null,
    promotions: db.all('SELECT p.*, l.title AS level_title, u.name AS approver FROM promotions p JOIN levels l ON l.code = p.level_code JOIN users u ON u.id = p.approved_by WHERE p.user_id = ? ORDER BY p.approved_at', tech.id),
    pendingHours: db.all("SELECT * FROM ojt_hours WHERE user_id = ? AND status = 'pending' ORDER BY work_date", tech.id),
    payRate: progress.payRateFor(tech.org_id, tech.current_level_code),
  });
});

// ---------- hands-on skill sign-off ----------
router.get('/team/:id/skills/:code', staff, (req, res) => {
  const tech = loadTech(req, res);
  if (!tech) return;
  const skill = db.one('SELECT * FROM skills WHERE code = ? AND active = 1', req.params.code);
  if (!skill) return res.status(404).render('error', { title: 'Not found', message: 'Skill not found.' });
  const history = db.all('SELECT s.*, u.name AS evaluator FROM skill_signoffs s JOIN users u ON u.id = s.evaluator_id WHERE s.user_id = ? AND s.skill_code = ? ORDER BY s.assessed_at DESC', tech.id, skill.code);
  res.render('skill-signoff', {
    title: `Assess: ${skill.title}`, tech, skill, history,
    criteria: JSON.parse(skill.criteria_json), equipment: JSON.parse(skill.equipment_json),
  });
});

router.post('/team/:id/skills/:code', staff, (req, res) => {
  const tech = loadTech(req, res);
  if (!tech) return;
  const skill = db.one('SELECT * FROM skills WHERE code = ? AND active = 1', req.params.code);
  if (!skill) return res.status(404).render('error', { title: 'Not found', message: 'Skill not found.' });
  if (tech.id === req.user.id) return res.status(403).render('error', { title: 'Not allowed', message: 'You cannot assess yourself.' });
  const criteria = JSON.parse(skill.criteria_json);
  const met = new Set(toArray(req.body.met).map(Number));
  const results = criteria.map((_, i) => met.has(i));
  const allMet = results.every(Boolean);
  const safetyDeviation = req.body.safety_deviation === '1';
  // Pass requires every criterion observed; critical skills also require zero safety deviations.
  const result = allMet && !(skill.critical && safetyDeviation) && req.body.result === 'pass' ? 'pass' : 'fail';
  const notes = String(req.body.notes || '').trim();
  if (result === 'fail' && !notes) {
    req.flash('error', 'Add notes explaining what the technician needs to work on.');
    return res.redirect(`/team/${tech.id}/skills/${skill.code}`);
  }
  db.run('INSERT INTO skill_signoffs (user_id, skill_code, evaluator_id, result, criteria_json, notes) VALUES (?, ?, ?, ?, ?, ?)',
    tech.id, skill.code, req.user.id, result, JSON.stringify(results), (safetyDeviation ? '[Safety deviation observed] ' : '') + notes);
  db.audit(req.user, 'skill_assessed', { tech: tech.id, skill: skill.code, result });
  req.flash(result === 'pass' ? 'success' : 'error', result === 'pass' ? `${skill.title}: PASSED` : `${skill.title}: not yet passed — recorded with notes.`);
  res.redirect(`/team/${tech.id}?level=${skill.level_code}`);
});

// ---------- OJT hours approvals ----------
router.get('/approvals', staff, (req, res) => {
  const filter = req.user.role === 'owner' ? '' : 'AND u.org_id = ' + Number(req.user.org_id);
  const pending = db.all(`SELECT h.*, u.name AS tech_name FROM ojt_hours h JOIN users u ON u.id = h.user_id
    WHERE h.status = 'pending' AND h.user_id != ? ${filter} ORDER BY h.work_date`, req.user.id);
  res.render('approvals', { title: 'Hours approvals', pending });
});

router.post('/approvals/:id', staff, (req, res) => {
  const h = db.one('SELECT h.*, u.org_id FROM ojt_hours h JOIN users u ON u.id = h.user_id WHERE h.id = ?', Number(req.params.id));
  const status = req.body.decision === 'approve' ? 'approved' : 'rejected';
  if (h && h.user_id !== req.user.id && (req.user.role === 'owner' || h.org_id === req.user.org_id) && h.status === 'pending') {
    db.run("UPDATE ojt_hours SET status = ?, reviewed_by = ?, reviewed_at = datetime('now'), review_note = ? WHERE id = ?",
      status, req.user.id, String(req.body.note || '').trim() || null, h.id);
    db.audit(req.user, 'hours_' + status, { entry: h.id, hours: h.hours });
  }
  res.redirect(req.body.back && /^\/(?!\/)/.test(req.body.back) ? req.body.back : '/approvals');
});

// ---------- promotion & placement ----------
router.post('/team/:id/promote', staff, (req, res) => {
  const tech = loadTech(req, res);
  if (!tech) return;
  const working = progress.workingLevel(tech);
  if (!working || working.code !== req.body.level) {
    req.flash('error', 'That level is not the technician\'s current working level.');
    return res.redirect(`/team/${tech.id}`);
  }
  const lp = progress.levelProgress(tech, working);
  if (!lp.readyForPromotion) {
    req.flash('error', 'Not every requirement has been met yet.');
    return res.redirect(`/team/${tech.id}`);
  }
  const no = certificateNo(working.code);
  db.tx(() => {
    db.run('INSERT INTO promotions (user_id, level_code, approved_by, notes, certificate_no) VALUES (?, ?, ?, ?, ?)', tech.id, working.code, req.user.id, String(req.body.notes || '').trim() || null, no);
    db.run('UPDATE users SET current_level_code = ? WHERE id = ?', working.code, tech.id);
  });
  db.audit(req.user, 'promoted', { tech: tech.id, level: working.code, certificate: no });
  req.flash('success', `${tech.name} promoted to ${working.code} — ${working.title}. Certificate ${no}.`);
  res.redirect(`/team/${tech.id}`);
});

// Placement lets an admin grade an experienced hire after an assessment, without retaking lower levels.
router.post('/team/:id/place', auth.requireLogin, auth.requireRole('owner', 'admin'), (req, res) => {
  const tech = loadTech(req, res);
  if (!tech) return;
  const code = req.body.level || null;
  const reason = String(req.body.reason || '').trim();
  if (code && !db.one('SELECT 1 AS x FROM levels WHERE code = ?', code)) return res.redirect(`/team/${tech.id}`);
  if (reason.length < 10) {
    req.flash('error', 'Placement requires a written reason (e.g., placement assessment results).');
    return res.redirect(`/team/${tech.id}`);
  }
  db.tx(() => {
    db.run('UPDATE users SET current_level_code = ? WHERE id = ?', code, tech.id);
    if (code) db.run('INSERT INTO promotions (user_id, level_code, approved_by, notes, certificate_no) VALUES (?, ?, ?, ?, ?)', tech.id, code, req.user.id, 'Placement: ' + reason, certificateNo(code));
  });
  db.audit(req.user, 'placed', { tech: tech.id, level: code, reason });
  req.flash('success', `${tech.name} placed at ${code || 'no grade'}.`);
  res.redirect(`/team/${tech.id}`);
});

// ---------- manager module (standalone levels for staff) ----------
router.get('/managers', staff, (req, res) => {
  const levels = progress.standaloneLevels().filter((l) => l.audience === 'staff');
  const filter = req.user.role === 'owner' ? '' : 'AND u.org_id = ' + Number(req.user.org_id);
  const people = db.all(`SELECT u.*, o.name AS org_name FROM users u LEFT JOIN organizations o ON o.id = u.org_id
    WHERE u.role IN ('admin', 'evaluator') AND u.active = 1 ${filter} ORDER BY u.name`).map((u) => ({
    ...u, rows: levels.map((l) => ({ level: l, lp: progress.levelProgress(u, l) })),
  }));
  res.render('managers', { title: 'Manager training', people, levels });
});

router.post('/managers/:id/certify', auth.requireLogin, auth.requireRole('owner', 'admin'), (req, res) => {
  const person = loadTech(req, res);
  if (!person) return;
  const level = progress.standaloneLevels().find((l) => l.code === req.body.level);
  if (!level || person.id === req.user.id) { req.flash('error', 'You cannot certify yourself.'); return res.redirect('/managers'); }
  const lp = progress.levelProgress(person, level);
  if (!lp.readyForPromotion) { req.flash('error', 'Not every requirement has been met yet.'); return res.redirect('/managers'); }
  const no = certificateNo(level.code);
  db.run('INSERT INTO promotions (user_id, level_code, approved_by, notes, certificate_no) VALUES (?, ?, ?, ?, ?)', person.id, level.code, req.user.id, 'Manager certification', no);
  db.audit(req.user, 'manager_certified', { user: person.id, level: level.code, certificate: no });
  req.flash('success', `${person.name} certified: ${level.title} (${no}).`);
  res.redirect('/managers');
});

// ---------- transcript (technicians see their own; staff see their team) ----------
router.get('/transcript/:id?', auth.requireLogin, (req, res) => {
  const id = req.params.id ? Number(req.params.id) : req.user.id;
  const tech = db.one('SELECT u.*, o.name AS org_name FROM users u LEFT JOIN organizations o ON o.id = u.org_id WHERE u.id = ?', id);
  if (!tech || !auth.canManageUser(req.user, tech)) return res.status(404).render('error', { title: 'Not found', message: 'Transcript not found.' });
  const levels = progress.orderedLevels();
  const rows = levels.map((l) => ({ level: l, lp: progress.levelProgress(tech, l) })).filter((r) => r.lp.promoted || r.lp.percent > 0);
  const totalHours = db.one("SELECT COALESCE(SUM(hours), 0) AS h FROM ojt_hours WHERE user_id = ? AND status = 'approved'", tech.id).h;
  res.render('transcript', { title: `Transcript — ${tech.name}`, tech, rows, totalHours, current: levels.find((l) => l.code === tech.current_level_code) });
});

module.exports = router;
