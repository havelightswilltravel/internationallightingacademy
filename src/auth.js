'use strict';
const crypto = require('node:crypto');
const session = require('express-session');
const db = require('./db');

// ---------- passwords (scrypt, no native deps) ----------
function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const hash = crypto.scryptSync(password, salt, 64);
  return `scrypt$${salt.toString('hex')}$${hash.toString('hex')}`;
}

function verifyPassword(password, stored) {
  if (!stored || !stored.startsWith('scrypt$')) return false;
  const [, saltHex, hashHex] = stored.split('$');
  const expected = Buffer.from(hashHex, 'hex');
  const actual = crypto.scryptSync(password, Buffer.from(saltHex, 'hex'), expected.length);
  return crypto.timingSafeEqual(expected, actual);
}

function passwordProblem(pw) {
  if (!pw || pw.length < 10) return 'Password must be at least 10 characters.';
  if (!/[A-Za-z]/.test(pw) || !/[0-9]/.test(pw)) return 'Password must include letters and numbers.';
  return null;
}

function randomPassword() {
  return crypto.randomBytes(9).toString('base64url') + '7a';
}

// ---------- SQLite session store ----------
class SqliteStore extends session.Store {
  get(sid, cb) {
    try {
      const row = db.one('SELECT sess, expires FROM sessions WHERE sid = ?', sid);
      if (!row || row.expires < Date.now()) return cb(null, null);
      cb(null, JSON.parse(row.sess));
    } catch (e) { cb(e); }
  }
  set(sid, sess, cb) {
    try {
      const maxAge = (sess.cookie && sess.cookie.maxAge) || 86400000;
      db.run(
        'INSERT INTO sessions (sid, sess, expires) VALUES (?, ?, ?) ON CONFLICT(sid) DO UPDATE SET sess = excluded.sess, expires = excluded.expires',
        sid, JSON.stringify(sess), Date.now() + maxAge
      );
      if (Math.random() < 0.01) db.run('DELETE FROM sessions WHERE expires < ?', Date.now());
      cb && cb(null);
    } catch (e) { cb && cb(e); }
  }
  destroy(sid, cb) {
    try { db.run('DELETE FROM sessions WHERE sid = ?', sid); cb && cb(null); } catch (e) { cb && cb(e); }
  }
  touch(sid, sess, cb) { this.set(sid, sess, cb); }
}

// ---------- roles ----------
const ROLES = ['owner', 'admin', 'evaluator', 'technician'];
const ROLE_LABELS = { owner: 'Platform Owner', admin: 'Company Admin', evaluator: 'Evaluator / Supervisor', technician: 'Technician' };
const isStaff = (u) => u && ['owner', 'admin', 'evaluator'].includes(u.role);
const isAdmin = (u) => u && ['owner', 'admin'].includes(u.role);

// Why an org's users may not sign in (null = OK).
function orgBlockReason(org) {
  if (!org) return null;
  if (org.status !== 'active') return 'Your company account is suspended. Contact your administrator.';
  if (org.license_expires_at && org.license_expires_at < new Date().toISOString().slice(0, 10)) {
    return 'Your company license has expired. Contact your administrator to renew.';
  }
  return null;
}

// Loads req.user from the session on every request.
function loadUser(req, res, next) {
  res.locals.user = null;
  if (req.session && req.session.userId) {
    const user = db.one('SELECT * FROM users WHERE id = ? AND active = 1', req.session.userId);
    const org = user && user.org_id ? db.one('SELECT * FROM organizations WHERE id = ?', user.org_id) : null;
    if (user && !orgBlockReason(org)) {
      req.user = user;
      req.org = org;
      res.locals.user = user;
      res.locals.org = org;
    } else {
      delete req.session.userId;
    }
  }
  next();
}

function requireLogin(req, res, next) {
  if (!req.user) return res.redirect('/login?next=' + encodeURIComponent(req.originalUrl));
  if (req.user.must_change_password && !['/account', '/logout'].includes(req.path)) {
    return res.redirect('/account?force=1');
  }
  next();
}

function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user) return res.redirect('/login');
    if (!roles.includes(req.user.role)) return res.status(403).render('error', { title: 'Not allowed', message: 'You do not have access to this page.' });
    next();
  };
}

// Staff may only act on users in their own organization (owners: everyone).
function canManageUser(actor, target) {
  if (!actor || !target) return false;
  if (actor.role === 'owner') return true;
  if (!isStaff(actor)) return actor.id === target.id;
  return actor.org_id === target.org_id && target.role !== 'owner';
}

// ---------- CSRF (synchronizer token in session) ----------
function csrfToken(req) {
  if (!req.session.csrf) req.session.csrf = crypto.randomBytes(24).toString('hex');
  return req.session.csrf;
}

function csrfValid(req) {
  const sent = (req.body && req.body._csrf) || req.get('x-csrf-token');
  const want = req.session && req.session.csrf;
  if (!sent || !want || sent.length !== want.length) return false;
  return crypto.timingSafeEqual(Buffer.from(sent), Buffer.from(want));
}

// Multipart forms are checked inside their routes after multer parses the body.
function csrfProtect(req, res, next) {
  res.locals.csrf = csrfToken(req);
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) return next();
  if ((req.get('content-type') || '').startsWith('multipart/form-data')) return next();
  if (!csrfValid(req)) return res.status(403).render('error', { title: 'Session expired', message: 'Your form session expired. Go back, refresh the page and try again.' });
  next();
}

function csrfAfterUpload(req, res, next) {
  if (!csrfValid(req)) return res.status(403).render('error', { title: 'Session expired', message: 'Your form session expired. Go back, refresh the page and try again.' });
  next();
}

module.exports = {
  hashPassword, verifyPassword, passwordProblem, randomPassword,
  SqliteStore, ROLES, ROLE_LABELS, isStaff, isAdmin, orgBlockReason,
  loadUser, requireLogin, requireRole, canManageUser,
  csrfProtect, csrfAfterUpload,
};
