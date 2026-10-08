'use strict';
// Hiring: managers score candidates with the company's behavior-based interview kits,
// compare them, and convert a hire into a technician account.
const express = require('express');
const db = require('../db');
const auth = require('../auth');
const { toArray } = require('../helpers');

const router = express.Router();
router.use('/hiring', auth.requireLogin, auth.requireRole('owner', 'admin', 'evaluator'));

const STATUSES = { new: 'New', interviewed: 'Interviewed', offered: 'Offer made', hired: 'Hired', not_selected: 'Not selected', withdrew: 'Withdrew' };
const RECS = { strong_yes: 'Strong hire', yes: 'Hire', no: 'Do not hire', strong_no: 'Strong no' };

function orgId(req) {
  return req.user.role === 'owner' ? req.session.adminOrgId || null : req.user.org_id;
}

function loadKit(code, orgName) {
  const row = db.one('SELECT * FROM interview_kits WHERE code = ?', code);
  if (!row) return null;
  const sub = (s) => String(s).replace(/\{\{company\}\}/g, orgName || 'our company');
  const kit = JSON.parse(row.kit_json);
  return {
    ...kit,
    instructions: sub(kit.instructions || ''),
    background: (kit.background || []).map((b) => ({ ...b, q: sub(b.q) })),
    observe: (kit.observe || []).map(sub),
    requirements: (kit.requirements || []).map(sub),
    watch_for: (kit.watch_for || []).map(sub),
    closing: sub(kit.closing || ''),
  };
}

// Totals across the behavior-based questions.
function scoreOf(kit, responses) {
  const comp = (responses && responses.comp) || {};
  let total = 0; let scored = 0; let asked = 0; let answered = 0;
  const byCompetency = (kit.competencies || []).map((c, ci) => {
    const scores = c.questions.map((_, qi) => comp[`${ci}-${qi}`] || {});
    const vals = scores.map((s) => Number(s.score)).filter((n) => n >= 1 && n <= 9);
    scores.forEach((s) => { if (s.answered) { asked++; if (s.answered === 'Y') answered++; } });
    total += vals.reduce((a, b) => a + b, 0);
    scored += vals.length;
    return { competency: c.competency, avg: vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null };
  });
  const questions = (kit.competencies || []).reduce((a, c) => a + c.questions.length, 0);
  return { avg: scored ? total / scored : null, scored, questions, asked, answered, byCompetency };
}

function loadCandidate(req, res) {
  const c = db.one('SELECT c.*, u.name AS interviewer_name FROM candidates c LEFT JOIN users u ON u.id = c.interviewer_id WHERE c.id = ?', Number(req.params.id));
  if (!c || (req.user.role !== 'owner' && c.org_id !== req.user.org_id)) {
    res.status(404).render('error', { title: 'Not found', message: 'Candidate not found.' });
    return null;
  }
  return c;
}

router.get('/hiring', (req, res) => {
  const oid = orgId(req);
  if (!oid) return res.render('error', { title: 'Choose a company', message: 'Platform owners: choose a company under Admin first (company selector), then return to Hiring.' });
  const org = db.one('SELECT * FROM organizations WHERE id = ?', oid);
  const kits = db.all('SELECT code, title, position FROM interview_kits WHERE active = 1 ORDER BY title');
  const status = STATUSES[req.query.status] ? req.query.status : null;
  const candidates = db.all(`SELECT c.*, u.name AS interviewer_name FROM candidates c LEFT JOIN users u ON u.id = c.interviewer_id
    WHERE c.org_id = ? ${status ? 'AND c.status = ?' : ''} ORDER BY c.updated_at DESC`, oid, ...(status ? [status] : [])).map((c) => {
    const kit = loadKit(c.kit_code, org.name);
    return { ...c, score: kit ? scoreOf(kit, JSON.parse(c.responses_json)) : null };
  });
  const mgr = db.one("SELECT 1 AS x FROM promotions WHERE user_id = ? AND level_code = 'MGR'", req.user.id);
  const mgrLevel = db.one("SELECT code FROM levels WHERE code = 'MGR' AND active = 1");
  res.render('hiring/index', { title: 'Hiring', candidates, kits, statuses: STATUSES, recs: RECS, status, needsMgr: mgrLevel && !mgr });
});

router.post('/hiring', (req, res) => {
  const oid = orgId(req);
  const name = String(req.body.name || '').trim();
  const kit = db.one('SELECT code FROM interview_kits WHERE code = ? AND active = 1', String(req.body.kit_code || ''));
  if (!oid || !name || !kit) { req.flash('error', 'Candidate name and interview kit are required.'); return res.redirect('/hiring'); }
  const r = db.run(`INSERT INTO candidates (org_id, name, email, phone, position, kit_code, source, interviewer_id, created_by)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, oid, name, String(req.body.email || '').trim() || null, String(req.body.phone || '').trim() || null,
  String(req.body.position || '').trim() || null, kit.code, String(req.body.source || '').trim() || null, req.user.id, req.user.id);
  db.audit(req.user, 'candidate_created', { name });
  res.redirect(`/hiring/${r.lastInsertRowid}`);
});

// Blank kit for paper interviews.
router.get('/hiring/kits/:code', (req, res) => {
  const org = db.one('SELECT name FROM organizations WHERE id = ?', orgId(req) || 0);
  const kit = loadKit(req.params.code, org && org.name);
  if (!kit) return res.status(404).render('error', { title: 'Not found', message: 'Interview kit not found.' });
  res.render('hiring/scorecard', { title: kit.title, kit, c: null, responses: {}, statuses: STATUSES, recs: RECS, score: null, blank: true });
});

router.get('/hiring/:id', (req, res) => {
  const c = loadCandidate(req, res);
  if (!c) return;
  const org = db.one('SELECT name FROM organizations WHERE id = ?', c.org_id);
  const kit = loadKit(c.kit_code, org.name);
  const responses = JSON.parse(c.responses_json);
  res.render('hiring/scorecard', { title: `Interview — ${c.name}`, kit, c, responses, statuses: STATUSES, recs: RECS, score: scoreOf(kit, responses), blank: false });
});

router.post('/hiring/:id', (req, res) => {
  const c = loadCandidate(req, res);
  if (!c) return;
  if (c.status === 'hired') { req.flash('error', 'This candidate has been hired; the scorecard is locked.'); return res.redirect(`/hiring/${c.id}`); }
  const kit = loadKit(c.kit_code, '');
  const b = req.body;
  const responses = { bg: {}, comp: {}, observe: toArray(b.observe).map(Number), requirements: toArray(b.requirements).map(Number), closing: String(b.closing || '') };
  (kit.background || []).forEach((_, i) => { const v = String(b[`bg_${i}`] || '').trim(); if (v) responses.bg[i] = v; });
  (kit.competencies || []).forEach((comp, ci) => comp.questions.forEach((_, qi) => {
    const k = `${ci}-${qi}`;
    const score = Number(b[`score_${k}`]);
    const entry = {
      score: score >= 1 && score <= 9 ? score : null,
      answered: ['Y', 'N'].includes(b[`ans_${k}`]) ? b[`ans_${k}`] : null,
      notes: String(b[`notes_${k}`] || '').trim(),
    };
    if (entry.score || entry.answered || entry.notes) responses.comp[k] = entry;
  }));
  db.run(`UPDATE candidates SET name = ?, email = ?, phone = ?, position = ?, source = ?, status = ?, interview_date = ?, responses_json = ?,
      recommendation = ?, summary = ?, interviewer_id = COALESCE(interviewer_id, ?), updated_at = datetime('now') WHERE id = ?`,
  String(b.name || c.name).trim(), String(b.email || '').trim() || null, String(b.phone || '').trim() || null, String(b.position || '').trim() || null,
  String(b.source || '').trim() || null, STATUSES[b.status] && b.status !== 'hired' ? b.status : c.status, b.interview_date || null,
  JSON.stringify(responses), RECS[b.recommendation] ? b.recommendation : null, String(b.summary || '').trim() || null, req.user.id, c.id);
  req.flash('success', 'Scorecard saved.');
  res.redirect(`/hiring/${c.id}`);
});

// Hire: create the technician's account (uses a license seat).
router.post('/hiring/:id/hire', auth.requireRole('owner', 'admin'), (req, res) => {
  const c = loadCandidate(req, res);
  if (!c) return;
  if (c.status === 'hired') return res.redirect(`/hiring/${c.id}`);
  const email = String(c.email || '').toLowerCase();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { req.flash('error', 'Add a valid email address for the candidate first.'); return res.redirect(`/hiring/${c.id}`); }
  if (db.one('SELECT 1 AS x FROM users WHERE email = ?', email)) { req.flash('error', 'A user with that email already exists.'); return res.redirect(`/hiring/${c.id}`); }
  const org = db.one('SELECT license_seats FROM organizations WHERE id = ?', c.org_id);
  const used = db.one("SELECT COUNT(*) AS n FROM users WHERE org_id = ? AND role = 'technician' AND active = 1", c.org_id).n;
  if (used >= org.license_seats) { req.flash('error', 'No technician seats left on the license.'); return res.redirect(`/hiring/${c.id}`); }
  const password = auth.randomPassword();
  db.tx(() => {
    const r = db.run("INSERT INTO users (org_id, email, name, password_hash, role, hire_date, must_change_password) VALUES (?, ?, ?, ?, 'technician', date('now'), 1)",
      c.org_id, email, c.name, auth.hashPassword(password));
    db.run("UPDATE candidates SET status = 'hired', hired_user_id = ?, updated_at = datetime('now') WHERE id = ?", Number(r.lastInsertRowid), c.id);
  });
  db.audit(req.user, 'candidate_hired', { candidate: c.id, email });
  req.session.newPasswords = [{ name: c.name, email, password }];
  req.flash('success', `${c.name} hired and added as a technician. Give them the temporary password below. Experienced hires can be placed at a grade from their technician record.`);
  res.redirect(req.user.role === 'owner' ? `/admin/users?org=${c.org_id}` : '/admin/users');
});

module.exports = router;
