'use strict';
const path = require('node:path');
const fs = require('node:fs');
const express = require('express');
const session = require('express-session');
const helmet = require('helmet');
const auth = require('./auth');
const helpers = require('./helpers');

const UPLOAD_DIR = process.env.UPLOAD_DIR || path.join(__dirname, '..', 'uploads');

function createApp() {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  const app = express();
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('trust proxy', 1);
  app.locals.UPLOAD_DIR = UPLOAD_DIR;
  Object.assign(app.locals, helpers.viewHelpers, { user: null, org: null, flash: null, path: '', csrf: '' });

  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", 'data:', 'https:'],
        mediaSrc: ["'self'", 'https:', 'blob:'],
        frameSrc: ['https://www.youtube-nocookie.com', 'https://www.youtube.com', 'https://player.vimeo.com'],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
      },
    },
  }));
  app.use('/static', express.static(path.join(__dirname, '..', 'public'), { maxAge: '1d' }));
  app.use(express.urlencoded({ extended: true, limit: '2mb' }));
  app.use(session({
    name: 'ila.sid',
    secret: process.env.SESSION_SECRET || 'dev-only-change-me',
    store: new auth.SqliteStore(),
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, sameSite: 'lax', secure: process.env.COOKIE_SECURE === '1', maxAge: 12 * 3600 * 1000 },
  }));
  app.use(auth.loadUser);
  app.use(auth.csrfProtect);
  app.use((req, res, next) => {
    res.locals.path = req.path;
    res.locals.flash = req.session.flash || null;
    delete req.session.flash;
    req.flash = (type, text) => { req.session.flash = { type, text }; };
    next();
  });

  // Uploaded videos and documents are only served to signed-in users.
  app.use('/uploads', auth.requireLogin, express.static(UPLOAD_DIR, { fallthrough: false }));

  app.use(require('./routes/auth'));
  app.use(require('./routes/team')); // first: includes the public /verify route
  app.use(require('./routes/hours'));
  app.use(require('./routes/library'));
  app.use(require('./routes/matrix'));
  app.use(require('./routes/hiring'));
  app.use(require('./routes/learn')); // requires login for everything after this point
  app.use('/admin', require('./routes/admin'));
  app.use('/platform', require('./routes/platform'));

  app.use((req, res) => res.status(404).render('error', { title: 'Not found', message: 'That page does not exist.' }));
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.error(err);
    const status = err.status || (err.code === 'LIMIT_FILE_SIZE' ? 413 : 500);
    res.status(status).render('error', { title: 'Something went wrong', message: status === 413 ? 'That file is too large.' : 'An unexpected error occurred.' });
  });
  return app;
}

module.exports = { createApp, UPLOAD_DIR };
