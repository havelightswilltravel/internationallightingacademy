'use strict';
const express = require('express');
const db = require('../db');
const auth = require('../auth');

const router = express.Router();

// Simple in-memory login throttle: 8 failures per email+IP per 15 minutes.
const failures = new Map();
const WINDOW_MS = 15 * 60 * 1000;
function throttled(key) {
  const f = failures.get(key);
  return f && f.count >= 8 && Date.now() - f.first < WINDOW_MS;
}
function recordFailure(key) {
  const f = failures.get(key);
  if (!f || Date.now() - f.first > WINDOW_MS) failures.set(key, { count: 1, first: Date.now() });
  else f.count++;
}

router.get('/login', (req, res) => {
  if (req.user) return res.redirect('/');
  res.render('login', { title: 'Sign in', error: null, email: '', next: req.query.next || '/' });
});

router.post('/login', (req, res) => {
  const email = String(req.body.email || '').trim().toLowerCase();
  const password = String(req.body.password || '');
  const nextUrl = /^\/(?!\/)/.test(req.body.next || '') ? req.body.next : '/';
  const key = `${email}|${req.ip}`;
  const fail = (error) => res.status(401).render('login', { title: 'Sign in', error, email, next: nextUrl });

  if (throttled(key)) return fail('Too many failed attempts. Wait 15 minutes and try again.');
  const user = db.one('SELECT * FROM users WHERE email = ?', email);
  if (!user || !user.active || !auth.verifyPassword(password, user.password_hash)) {
    recordFailure(key);
    return fail('Incorrect email or password.');
  }
  const org = user.org_id ? db.one('SELECT * FROM organizations WHERE id = ?', user.org_id) : null;
  const blocked = auth.orgBlockReason(org);
  if (blocked) return fail(blocked);

  failures.delete(key);
  req.session.regenerate((err) => {
    if (err) throw err;
    req.session.userId = user.id;
    db.run("UPDATE users SET last_login_at = datetime('now') WHERE id = ?", user.id);
    db.audit(user, 'login');
    res.redirect(user.must_change_password ? '/account?force=1' : nextUrl);
  });
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
});

router.get('/account', auth.requireLogin, (req, res) => {
  res.render('account', { title: 'My account', error: null, force: req.query.force === '1' || !!req.user.must_change_password });
});

router.post('/account/password', auth.requireLogin, (req, res) => {
  const { current, password, confirm } = req.body;
  const render = (error) => res.status(400).render('account', { title: 'My account', error, force: !!req.user.must_change_password });
  if (!auth.verifyPassword(String(current || ''), req.user.password_hash)) return render('Current password is incorrect.');
  if (password !== confirm) return render('New passwords do not match.');
  const problem = auth.passwordProblem(password);
  if (problem) return render(problem);
  db.run('UPDATE users SET password_hash = ?, must_change_password = 0 WHERE id = ?', auth.hashPassword(password), req.user.id);
  db.audit(req.user, 'password_changed');
  req.flash('success', 'Password updated.');
  res.redirect('/');
});

module.exports = router;
