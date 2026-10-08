'use strict';
const fs = require('node:fs');
const path = require('node:path');
const express = require('express');
const db = require('../db');
const auth = require('../auth');
const progress = require('../services/progress');
const { uploader, toArray } = require('../helpers');

const router = express.Router();
router.use(auth.requireLogin, auth.requireRole('owner', 'admin'));

// Company admins always work in their own company. Platform owners pick a company
// (or none = platform-wide, which applies to videos and library guides).
function scopeOrgId(req) {
  return req.user.role === 'admin' ? req.user.org_id : req.session.adminOrgId || null;
}
router.use((req, res, next) => {
  if (req.user.role === 'owner' && req.query.org !== undefined) req.session.adminOrgId = Number(req.query.org) || null;
  const orgId = scopeOrgId(req);
  res.locals.scopeOrg = orgId ? db.one('SELECT * FROM organizations WHERE id = ?', orgId) : null;
  res.locals.allOrgs = req.user.role === 'owner' ? db.all('SELECT id, name FROM organizations ORDER BY name') : [];
  next();
});
function requireScopeOrg(req, res, next) {
  if (!scopeOrgId(req)) return res.render('admin/pick-org', { title: 'Choose a company' });
  next();
}

function seatsAvailable(orgId) {
  const org = db.one('SELECT license_seats FROM organizations WHERE id = ?', orgId);
  const used = db.one("SELECT COUNT(*) AS n FROM users WHERE org_id = ? AND role = 'technician' AND active = 1", orgId).n;
  return { used, total: org.license_seats, free: org.license_seats - used };
}

const ORG_ROLES = ['admin', 'evaluator', 'technician'];

// ---------- users ----------
router.get('/users', requireScopeOrg, (req, res) => {
  const orgId = scopeOrgId(req);
  const users = db.all('SELECT * FROM users WHERE org_id = ? ORDER BY active DESC, role, name', orgId);
  res.render('admin/users', { title: 'Users', users, seats: seatsAvailable(orgId), levels: progress.orderedLevels(), newPasswords: req.session.newPasswords || null });
  delete req.session.newPasswords;
});

function createUser(orgId, { name, email, role, employee_id }) {
  name = String(name || '').trim();
  email = String(email || '').trim().toLowerCase();
  role = ORG_ROLES.includes(role) ? role : 'technician';
  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return { error: `Invalid name or email: "${name}" <${email}>` };
  if (db.one('SELECT 1 AS x FROM users WHERE email = ?', email)) return { error: `Email already in use: ${email}` };
  if (role === 'technician' && seatsAvailable(orgId).free <= 0) return { error: `No technician seats left on the license (${email} not added).` };
  const password = auth.randomPassword();
  db.run('INSERT INTO users (org_id, email, name, password_hash, role, employee_id, must_change_password) VALUES (?, ?, ?, ?, ?, ?, 1)',
    orgId, email, name, auth.hashPassword(password), role, String(employee_id || '').trim() || null);
  return { email, name, password };
}

router.post('/users', requireScopeOrg, (req, res) => {
  const r = createUser(scopeOrgId(req), req.body);
  if (r.error) req.flash('error', r.error);
  else {
    db.audit(req.user, 'user_created', { email: r.email });
    req.session.newPasswords = [r];
  }
  res.redirect('/admin/users');
});

// Bulk add: one per line — "Name, email, role, employee id"
router.post('/users/bulk', requireScopeOrg, (req, res) => {
  const created = [];
  const errors = [];
  for (const line of String(req.body.lines || '').split(/\r?\n/).map((l) => l.trim()).filter(Boolean)) {
    const [name, email, role, employee_id] = line.split(',').map((s) => (s || '').trim());
    const r = createUser(scopeOrgId(req), { name, email, role: (role || 'technician').toLowerCase(), employee_id });
    if (r.error) errors.push(r.error); else created.push(r);
  }
  if (created.length) { req.session.newPasswords = created; db.audit(req.user, 'users_bulk_created', { count: created.length }); }
  if (errors.length) req.flash('error', errors.join(' | '));
  res.redirect('/admin/users');
});

function orgUser(req) {
  const u = db.one('SELECT * FROM users WHERE id = ?', Number(req.params.id));
  return u && u.org_id === scopeOrgId(req) && u.role !== 'owner' ? u : null;
}

router.post('/users/:id', requireScopeOrg, (req, res) => {
  const u = orgUser(req);
  if (!u) return res.redirect('/admin/users');
  const role = ORG_ROLES.includes(req.body.role) ? req.body.role : u.role;
  const active = req.body.active === '1' ? 1 : 0;
  if (u.id === req.user.id && (role !== u.role || !active)) {
    req.flash('error', 'You cannot change your own role or deactivate yourself.');
    return res.redirect('/admin/users');
  }
  const becomingActiveTech = role === 'technician' && active && !(u.role === 'technician' && u.active);
  if (becomingActiveTech && seatsAvailable(u.org_id).free <= 0) {
    req.flash('error', 'No technician seats left on the license.');
    return res.redirect('/admin/users');
  }
  db.run('UPDATE users SET name = ?, role = ?, active = ?, employee_id = ?, hire_date = ? WHERE id = ?',
    String(req.body.name || u.name).trim(), role, active, String(req.body.employee_id || '').trim() || null, req.body.hire_date || null, u.id);
  db.audit(req.user, 'user_updated', { user: u.id, role, active });
  req.flash('success', 'User updated.');
  res.redirect('/admin/users');
});

router.post('/users/:id/reset-password', requireScopeOrg, (req, res) => {
  const u = orgUser(req);
  if (!u) return res.redirect('/admin/users');
  const password = auth.randomPassword();
  db.run('UPDATE users SET password_hash = ?, must_change_password = 1 WHERE id = ?', auth.hashPassword(password), u.id);
  db.run("DELETE FROM sessions WHERE sess LIKE ?", `%"userId":${u.id}%`);
  db.audit(req.user, 'password_reset', { user: u.id });
  req.session.newPasswords = [{ name: u.name, email: u.email, password }];
  res.redirect('/admin/users');
});

// ---------- pay scale tied to grade ----------
router.get('/pay', requireScopeOrg, (req, res) => {
  const orgId = scopeOrgId(req);
  const rates = Object.fromEntries(db.all('SELECT level_code, hourly_rate FROM org_pay_rates WHERE org_id = ?', orgId).map((r) => [r.level_code, r.hourly_rate]));
  res.render('admin/pay', { title: 'Pay scale by grade', levels: progress.orderedLevels(), rates });
});

router.post('/pay', requireScopeOrg, (req, res) => {
  const orgId = scopeOrgId(req);
  const codes = ['NONE', ...progress.orderedLevels().map((l) => l.code)];
  db.tx(() => {
    for (const code of codes) {
      const v = String(req.body['rate_' + code] ?? '').trim();
      if (v === '') db.run('DELETE FROM org_pay_rates WHERE org_id = ? AND level_code = ?', orgId, code);
      else if (Number(v) >= 0) db.run('INSERT INTO org_pay_rates (org_id, level_code, hourly_rate) VALUES (?, ?, ?) ON CONFLICT(org_id, level_code) DO UPDATE SET hourly_rate = excluded.hourly_rate', orgId, code, Number(v));
    }
  });
  db.audit(req.user, 'pay_scale_updated');
  req.flash('success', 'Pay scale saved.');
  res.redirect('/admin/pay');
});

// ---------- lesson videos ----------
router.get('/videos', (req, res) => {
  const orgId = scopeOrgId(req);
  const levelCode = req.query.level || 'LT1';
  const lessons = db.all(`SELECT l.id, l.title, l.video_url, l.video_suggestion, c.code AS course_code, c.title AS course_title,
      (SELECT url FROM lesson_videos WHERE org_id IS NULL AND lesson_id = l.id) AS global_url,
      (SELECT url FROM lesson_videos WHERE org_id = ? AND lesson_id = l.id) AS org_url
    FROM lessons l JOIN courses c ON c.code = l.course_code WHERE c.level_code = ? AND l.active = 1 ORDER BY c.sort, l.sort`, orgId || -1, levelCode);
  res.render('admin/videos', { title: 'Lesson videos', lessons, levels: progress.orderedLevels(), levelCode, orgId });
});

const MAX_VIDEO_MB = Number(process.env.MAX_VIDEO_MB || 1024);
router.post('/videos', (req, res, next) => {
  uploader(req.app.locals.UPLOAD_DIR, { maxMb: MAX_VIDEO_MB, accept: /^\.(mp4|webm|m4v|mov)$/ }).single('file')(req, res, next);
}, auth.csrfAfterUpload, (req, res) => {
  const orgId = scopeOrgId(req);
  const lesson = db.one('SELECT * FROM lessons WHERE id = ?', String(req.body.lesson_id || ''));
  const back = `/admin/videos?level=${encodeURIComponent(req.body.level || 'LT1')}`;
  if (!lesson) return res.redirect(back);
  const url = req.file ? `/uploads/${req.file.filename}` : String(req.body.url || '').trim();
  db.run('DELETE FROM lesson_videos WHERE IFNULL(org_id, 0) = ? AND lesson_id = ?', orgId || 0, lesson.id);
  if (url) {
    if (!/^(https:\/\/|\/uploads\/)/.test(url)) { req.flash('error', 'Video link must start with https://'); return res.redirect(back); }
    db.run('INSERT INTO lesson_videos (org_id, lesson_id, url, updated_by) VALUES (?, ?, ?, ?)', orgId, lesson.id, url, req.user.id);
  }
  db.audit(req.user, 'video_set', { lesson: lesson.id, url, scope: orgId || 'platform' });
  req.flash('success', url ? `Video saved for "${lesson.title}".` : `Video removed for "${lesson.title}".`);
  res.redirect(back);
});

// ---------- library management ----------
router.get('/library', (req, res) => {
  const orgId = scopeOrgId(req);
  const docs = db.all(`SELECT * FROM library_docs WHERE active = 1 AND ${orgId ? 'org_id = ?' : 'org_id IS NULL'} ORDER BY category, title`, ...(orgId ? [orgId] : []));
  const due = docs.filter((d) => d.last_reviewed && req.app.locals.addMonths(d.last_reviewed, d.review_interval_months) <= new Date().toISOString().slice(0, 10));
  res.render('admin/library', { title: 'Manage library', docs, due, edit: null });
});

router.get('/library/:id/edit', (req, res) => {
  const orgId = scopeOrgId(req);
  const doc = db.one(`SELECT * FROM library_docs WHERE id = ? AND ${orgId ? 'org_id = ?' : 'org_id IS NULL'}`, Number(req.params.id), ...(orgId ? [orgId] : []));
  if (!doc) return res.redirect('/admin/library');
  res.render('admin/library-edit', { title: 'Edit guide', doc });
});

router.get('/library/new', (req, res) => res.render('admin/library-edit', { title: 'New guide', doc: null }));

const MAX_DOC_MB = Number(process.env.MAX_DOC_MB || 50);
router.post('/library', (req, res, next) => {
  uploader(req.app.locals.UPLOAD_DIR, { maxMb: MAX_DOC_MB, accept: /^\.(pdf|docx?|xlsx?|pptx?|png|jpe?g|txt|md)$/ }).single('file')(req, res, next);
}, auth.csrfAfterUpload, (req, res) => {
  const orgId = scopeOrgId(req);
  const id = Number(req.body.id) || null;
  const existing = id ? db.one(`SELECT * FROM library_docs WHERE id = ? AND ${orgId ? 'org_id = ?' : 'org_id IS NULL'}`, id, ...(orgId ? [orgId] : [])) : null;
  if (id && !existing) return res.redirect('/admin/library');
  if (existing && existing.source === 'curriculum') {
    req.flash('error', 'Guides that come from the curriculum files are edited in the curriculum/library folder and re-imported.');
    return res.redirect('/admin/library');
  }
  const title = String(req.body.title || '').trim();
  const category = String(req.body.category || '').trim().toLowerCase().replace(/[^a-z0-9-]+/g, '-') || 'general';
  if (!title) { req.flash('error', 'Title is required.'); return res.redirect('/admin/library/new'); }
  let body = String(req.body.body_md || '');
  if (req.file && /\.(md|txt)$/.test(req.file.filename) && !body.trim()) {
    body = fs.readFileSync(path.join(req.app.locals.UPLOAD_DIR, req.file.filename), 'utf8');
  }
  const fields = [category, title, String(req.body.tags || ''), JSON.stringify(toArray(req.body.levels)), body,
    req.body.last_reviewed || new Date().toISOString().slice(0, 10), Number(req.body.review_interval_months) || 12];
  const file = req.file ? [`/uploads/${req.file.filename}`, req.file.originalname] : null;
  if (existing) {
    db.run(`UPDATE library_docs SET category=?, title=?, tags=?, levels_json=?, body_md=?, last_reviewed=?, review_interval_months=?, updated_at=datetime('now') WHERE id = ?`, ...fields, existing.id);
    if (file) db.run('UPDATE library_docs SET file_path = ?, file_name = ? WHERE id = ?', ...file, existing.id);
  } else {
    db.run(`INSERT INTO library_docs (org_id, source, category, title, tags, levels_json, body_md, last_reviewed, review_interval_months, file_path, file_name, created_by)
      VALUES (?, 'app', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, orgId, ...fields, file ? file[0] : null, file ? file[1] : null, req.user.id);
  }
  db.audit(req.user, 'library_saved', { title });
  req.flash('success', `Saved "${title}".`);
  res.redirect('/admin/library');
});

router.post('/library/:id/delete', (req, res) => {
  const orgId = scopeOrgId(req);
  db.run(`UPDATE library_docs SET active = 0 WHERE id = ? AND source = 'app' AND ${orgId ? 'org_id = ?' : 'org_id IS NULL'}`, Number(req.params.id), ...(orgId ? [orgId] : []));
  res.redirect('/admin/library');
});

// ---------- reports ----------
function reportRows(orgId) {
  const levels = progress.orderedLevels();
  return db.all("SELECT * FROM users WHERE org_id = ? AND role = 'technician' ORDER BY name", orgId).map((t) => {
    const w = progress.workingLevel(t, levels);
    const lp = w ? progress.levelProgress(t, w) : null;
    return {
      name: t.name, email: t.email, employee_id: t.employee_id || '', active: t.active ? 'yes' : 'no',
      current_grade: t.current_level_code || 'None', working_on: w ? w.code : 'Complete', progress_pct: lp ? lp.percent : 100,
      courses: lp ? `${lp.coursesPassed}/${lp.courses.length}` : '', final_exam: lp ? (lp.exam.passed ? 'passed' : lp.exam.bestScore != null ? `best ${lp.exam.bestScore}%` : 'not taken') : '',
      hours: lp ? `${lp.hours.approved}/${lp.hours.required}` : '', skills: lp ? `${lp.skillsPassed}/${lp.skills.length}` : '',
      ready_for_promotion: lp && lp.readyForPromotion ? 'YES' : '', pay_rate: progress.payRateFor(orgId, t.current_level_code) ?? '',
      last_login: t.last_login_at || '',
    };
  });
}

router.get('/reports', requireScopeOrg, (req, res) => {
  res.render('admin/reports', { title: 'Reports', rows: reportRows(scopeOrgId(req)) });
});

router.get('/reports.csv', requireScopeOrg, (req, res) => {
  const rows = reportRows(scopeOrgId(req));
  const cols = rows.length ? Object.keys(rows[0]) : ['name'];
  const esc = (v) => {
    let s = String(v ?? '');
    if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; // prevent spreadsheet formula injection
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  res.type('text/csv').attachment(`training-report-${new Date().toISOString().slice(0, 10)}.csv`)
    .send([cols.join(','), ...rows.map((r) => cols.map((c) => esc(r[c])).join(','))].join('\n'));
});

module.exports = router;
