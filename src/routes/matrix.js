'use strict';
// Skills Matrix: technicians rate themselves 1–4 on each field system (seen / understand / perform / teach)
// and write out the troubleshooting steps and components; evaluators confirm the rating.
const express = require('express');
const db = require('../db');
const auth = require('../auth');

const router = express.Router();
const SCALE = { 1: 'I have seen it', 2: 'I understand it', 3: 'I perform it', 4: 'I can teach it' };

function areasFor(userId) {
  return db.all(`SELECT a.*, r.self_rating, r.steps_text, r.components_text, r.self_updated_at, r.eval_rating, r.eval_notes, r.eval_updated_at,
      u.name AS evaluator_name, d.id AS guide_id
    FROM competency_areas a
    LEFT JOIN competency_ratings r ON r.area_code = a.code AND r.user_id = ?
    LEFT JOIN users u ON u.id = r.evaluator_id
    LEFT JOIN library_docs d ON d.source_key = a.guide_key AND d.active = 1
    WHERE a.active = 1 ORDER BY a.sort`, userId).map((a) => ({
    ...a,
    courses: JSON.parse(a.courses_json).map((code) => db.one('SELECT code, title FROM courses WHERE code = ? AND active = 1', code)).filter(Boolean),
  }));
}

const rating = (v) => (['1', '2', '3', '4'].includes(String(v)) ? Number(v) : null);

router.get('/skills-matrix', auth.requireLogin, (req, res) => {
  res.render('matrix', { title: 'My Skills Matrix', areas: areasFor(req.user.id), scale: SCALE, open: req.query.area || null });
});

router.post('/skills-matrix/:code', auth.requireLogin, (req, res) => {
  const area = db.one('SELECT * FROM competency_areas WHERE code = ? AND active = 1', req.params.code);
  if (!area) return res.redirect('/skills-matrix');
  db.run(`INSERT INTO competency_ratings (user_id, area_code, self_rating, steps_text, components_text, self_updated_at)
    VALUES (?, ?, ?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, area_code) DO UPDATE SET self_rating = excluded.self_rating, steps_text = excluded.steps_text,
      components_text = excluded.components_text, self_updated_at = excluded.self_updated_at`,
  req.user.id, area.code, rating(req.body.self_rating), String(req.body.steps_text || '').slice(0, 8000), String(req.body.components_text || '').slice(0, 4000));
  req.flash('success', `Saved: ${area.title}`);
  res.redirect(`/skills-matrix#${area.code}`);
});

// ---------- staff ----------
const staff = [auth.requireLogin, auth.requireRole('owner', 'admin', 'evaluator')];

router.get('/team-matrix', staff, (req, res) => {
  const filter = req.user.role === 'owner' ? '' : 'AND org_id = ' + Number(req.user.org_id);
  const techs = db.all(`SELECT id, name, current_level_code FROM users WHERE role = 'technician' AND active = 1 ${filter} ORDER BY name`);
  const areas = db.all('SELECT code, title FROM competency_areas WHERE active = 1 ORDER BY sort');
  const ratings = {};
  if (techs.length) {
    for (const r of db.all(`SELECT * FROM competency_ratings WHERE user_id IN (${techs.map(() => '?').join(',')})`, ...techs.map((t) => t.id))) {
      ratings[`${r.user_id}|${r.area_code}`] = r;
    }
  }
  res.render('team-matrix', { title: 'Team Skills Matrix', techs, areas, ratings, scale: SCALE });
});

router.get('/team/:id/matrix', staff, (req, res) => {
  const tech = db.one('SELECT * FROM users WHERE id = ?', Number(req.params.id));
  if (!tech || !auth.canManageUser(req.user, tech)) return res.status(404).render('error', { title: 'Not found', message: 'Technician not found.' });
  res.render('matrix-review', { title: `Skills Matrix — ${tech.name}`, tech, areas: areasFor(tech.id), scale: SCALE });
});

router.post('/team/:id/matrix/:code', staff, (req, res) => {
  const tech = db.one('SELECT * FROM users WHERE id = ?', Number(req.params.id));
  const area = db.one('SELECT * FROM competency_areas WHERE code = ? AND active = 1', req.params.code);
  if (!tech || !area || !auth.canManageUser(req.user, tech) || tech.id === req.user.id) return res.redirect('/team');
  db.run(`INSERT INTO competency_ratings (user_id, area_code, eval_rating, eval_notes, evaluator_id, eval_updated_at)
    VALUES (?, ?, ?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, area_code) DO UPDATE SET eval_rating = excluded.eval_rating, eval_notes = excluded.eval_notes,
      evaluator_id = excluded.evaluator_id, eval_updated_at = excluded.eval_updated_at`,
  tech.id, area.code, rating(req.body.eval_rating), String(req.body.eval_notes || '').trim() || null, req.user.id);
  db.audit(req.user, 'competency_confirmed', { tech: tech.id, area: area.code, rating: req.body.eval_rating });
  res.redirect(`/team/${tech.id}/matrix#${area.code}`);
});

module.exports = router;
