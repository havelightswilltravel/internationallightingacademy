'use strict';
// Platform-owner area: licensee companies, licenses/seats, and curriculum imports.
const express = require('express');
const db = require('../db');
const auth = require('../auth');
const curriculum = require('../curriculum');

const router = express.Router();
router.use(auth.requireLogin, auth.requireRole('owner'));

const slugify = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

router.get('/orgs', (req, res) => {
  const orgs = db.all(`SELECT o.*,
      (SELECT COUNT(*) FROM users u WHERE u.org_id = o.id AND u.role = 'technician' AND u.active = 1) AS techs,
      (SELECT COUNT(*) FROM users u WHERE u.org_id = o.id AND u.active = 1) AS users
    FROM organizations o ORDER BY o.name`);
  res.render('platform/orgs', { title: 'Licensed companies', orgs, created: req.session.orgCreated || null });
  delete req.session.orgCreated;
});

router.post('/orgs', (req, res) => {
  const name = String(req.body.name || '').trim();
  const adminEmail = String(req.body.admin_email || '').trim().toLowerCase();
  const adminName = String(req.body.admin_name || '').trim();
  if (!name || !adminName || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(adminEmail)) {
    req.flash('error', 'Company name, admin name and a valid admin email are required.');
    return res.redirect('/platform/orgs');
  }
  if (db.one('SELECT 1 AS x FROM users WHERE email = ?', adminEmail)) {
    req.flash('error', 'That admin email is already in use.');
    return res.redirect('/platform/orgs');
  }
  let slug = slugify(name) || 'company';
  while (db.one('SELECT 1 AS x FROM organizations WHERE slug = ?', slug)) slug += '-' + Math.floor(Math.random() * 1000);
  const password = auth.randomPassword();
  db.tx(() => {
    const r = db.run('INSERT INTO organizations (name, slug, plan, license_seats, license_expires_at, contact_name, contact_email) VALUES (?, ?, ?, ?, ?, ?, ?)',
      name, slug, req.body.plan || 'standard', Number(req.body.license_seats) || 25, req.body.license_expires_at || null, adminName, adminEmail);
    db.run("INSERT INTO users (org_id, email, name, password_hash, role, must_change_password) VALUES (?, ?, ?, ?, 'admin', 1)",
      Number(r.lastInsertRowid), adminEmail, adminName, auth.hashPassword(password));
  });
  db.audit(req.user, 'org_created', { name, adminEmail });
  req.session.orgCreated = { name, adminEmail, password };
  res.redirect('/platform/orgs');
});

router.get('/orgs/:id', (req, res) => {
  const org = db.one('SELECT * FROM organizations WHERE id = ?', Number(req.params.id));
  if (!org) return res.redirect('/platform/orgs');
  const users = db.all('SELECT * FROM users WHERE org_id = ? ORDER BY role, name', org.id);
  const activity = db.all('SELECT a.*, u.name FROM audit_log a LEFT JOIN users u ON u.id = a.user_id WHERE a.org_id = ? ORDER BY a.id DESC LIMIT 25', org.id);
  res.render('platform/org', { title: org.name, org, users, activity });
});

router.post('/orgs/:id', (req, res) => {
  const org = db.one('SELECT * FROM organizations WHERE id = ?', Number(req.params.id));
  if (!org) return res.redirect('/platform/orgs');
  db.run(`UPDATE organizations SET name = ?, status = ?, plan = ?, license_seats = ?, license_expires_at = ?, contact_name = ?, contact_email = ?, notes = ? WHERE id = ?`,
    String(req.body.name || org.name).trim(), req.body.status === 'suspended' ? 'suspended' : 'active', req.body.plan || org.plan,
    Math.max(0, Number(req.body.license_seats) || 0), req.body.license_expires_at || null, req.body.contact_name || null,
    req.body.contact_email || null, req.body.notes || null, org.id);
  db.audit(req.user, 'org_updated', { org: org.id, status: req.body.status, seats: req.body.license_seats });
  req.flash('success', 'Company updated.');
  res.redirect(`/platform/orgs/${org.id}`);
});

router.get('/curriculum', (req, res) => {
  const meta = Object.fromEntries(db.all('SELECT key, value FROM meta').map((r) => [r.key, r.value]));
  const stats = {
    levels: db.one('SELECT COUNT(*) AS n FROM levels WHERE active = 1').n,
    courses: db.one('SELECT COUNT(*) AS n FROM courses WHERE active = 1').n,
    lessons: db.one('SELECT COUNT(*) AS n FROM lessons WHERE active = 1').n,
    questions: db.one('SELECT COUNT(*) AS n FROM questions WHERE active = 1').n,
    skills: db.one('SELECT COUNT(*) AS n FROM skills WHERE active = 1').n,
    library: db.one("SELECT COUNT(*) AS n FROM library_docs WHERE active = 1 AND source = 'curriculum'").n,
    videos: db.one('SELECT COUNT(*) AS n FROM lesson_videos WHERE org_id IS NULL').n,
  };
  const byLevel = db.all(`SELECT l.code, l.title, (SELECT COUNT(*) FROM courses c WHERE c.level_code = l.code AND c.active = 1) AS courses,
      (SELECT COUNT(*) FROM lessons x JOIN courses c ON c.code = x.course_code WHERE c.level_code = l.code AND x.active = 1) AS lessons,
      (SELECT COUNT(*) FROM questions q JOIN courses c ON c.code = q.course_code WHERE c.level_code = l.code AND q.active = 1) AS questions,
      (SELECT COUNT(*) FROM skills s WHERE s.level_code = l.code AND s.active = 1) AS skills
    FROM levels l JOIN tracks t ON t.code = l.track_code WHERE l.active = 1 ORDER BY t.sort, l.sort`);
  res.render('platform/curriculum', { title: 'Curriculum', meta, stats, byLevel, result: req.session.importResult || null });
  delete req.session.importResult;
});

router.post('/curriculum/import', (req, res) => {
  const data = curriculum.load();
  if (data.errors.length) {
    req.session.importResult = { ok: false, errors: data.errors.slice(0, 50), warnings: data.warnings };
  } else {
    const counts = curriculum.importToDb(data);
    db.audit(req.user, 'curriculum_imported', counts);
    req.session.importResult = { ok: true, counts, warnings: data.warnings };
  }
  res.redirect('/platform/curriculum');
});

module.exports = router;
