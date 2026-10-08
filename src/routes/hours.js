'use strict';
const express = require('express');
const db = require('../db');
const auth = require('../auth');
const progress = require('../services/progress');

const router = express.Router();
router.use('/hours', auth.requireLogin);

router.get('/hours', (req, res) => {
  const working = progress.workingLevel(req.user);
  const entries = db.all(`SELECT h.*, u.name AS reviewer FROM ojt_hours h LEFT JOIN users u ON u.id = h.reviewed_by
    WHERE h.user_id = ? ORDER BY h.work_date DESC, h.id DESC`, req.user.id);
  const totals = db.all(`SELECT level_code, SUM(CASE WHEN status='approved' THEN hours ELSE 0 END) AS approved,
    SUM(CASE WHEN status='pending' THEN hours ELSE 0 END) AS pending FROM ojt_hours WHERE user_id = ? GROUP BY level_code`, req.user.id);
  res.render('hours', { title: 'On-the-job hours', working, entries, totals });
});

router.post('/hours', (req, res) => {
  const working = progress.workingLevel(req.user);
  if (!working) { req.flash('error', 'You have completed every level.'); return res.redirect('/hours'); }
  const hours = Number(req.body.hours);
  const date = String(req.body.work_date || '');
  const description = String(req.body.description || '').trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date > new Date().toISOString().slice(0, 10)) {
    req.flash('error', 'Enter a valid work date (not in the future).');
  } else if (!(hours > 0 && hours <= 16)) {
    req.flash('error', 'Hours must be between 0.25 and 16 for a single day.');
  } else if (description.length < 10) {
    req.flash('error', 'Describe the work performed (at least 10 characters) so your supervisor can verify it.');
  } else {
    db.run('INSERT INTO ojt_hours (user_id, level_code, work_date, hours, description, supervisor_name) VALUES (?, ?, ?, ?, ?, ?)',
      req.user.id, working.code, date, Math.round(hours * 4) / 4, description, String(req.body.supervisor_name || '').trim() || null);
    req.flash('success', 'Hours submitted for supervisor approval.');
  }
  res.redirect('/hours');
});

router.post('/hours/:id/delete', (req, res) => {
  db.run("DELETE FROM ojt_hours WHERE id = ? AND user_id = ? AND status = 'pending'", Number(req.params.id), req.user.id);
  res.redirect('/hours');
});

module.exports = router;
