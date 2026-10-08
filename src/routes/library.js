'use strict';
const express = require('express');
const db = require('../db');
const auth = require('../auth');

const router = express.Router();
router.use('/library', auth.requireLogin);

// Technicians see platform-wide guides plus their own company's guides.
function visibleClause(user) {
  if (user.role === 'owner') return { sql: '1=1', params: [] };
  return { sql: '(d.org_id IS NULL OR d.org_id = ?)', params: [user.org_id] };
}

router.get('/library', (req, res) => {
  const v = visibleClause(req.user);
  const q = String(req.query.q || '').trim();
  const cat = String(req.query.category || '');
  let sql = `SELECT d.*, o.name AS org_name FROM library_docs d LEFT JOIN organizations o ON o.id = d.org_id WHERE d.active = 1 AND ${v.sql}`;
  const params = [...v.params];
  if (cat) { sql += ' AND d.category = ?'; params.push(cat); }
  if (q) {
    sql += ' AND (d.title LIKE ? OR d.tags LIKE ? OR d.body_md LIKE ?)';
    const like = `%${q.replace(/[%_]/g, '')}%`;
    params.push(like, like, like);
  }
  sql += ' ORDER BY d.category, d.title';
  const docs = db.all(sql, ...params);
  const categories = db.all(`SELECT d.category, COUNT(*) AS n FROM library_docs d WHERE d.active = 1 AND ${v.sql} GROUP BY d.category ORDER BY d.category`, ...v.params);
  res.render('library', { title: 'Troubleshooting library', docs, categories, q, cat });
});

router.get('/library/:id', (req, res) => {
  const v = visibleClause(req.user);
  const doc = db.one(`SELECT d.*, o.name AS org_name FROM library_docs d LEFT JOIN organizations o ON o.id = d.org_id WHERE d.id = ? AND d.active = 1 AND ${v.sql}`, Number(req.params.id), ...v.params);
  if (!doc) return res.status(404).render('error', { title: 'Not found', message: 'Guide not found.' });
  res.render('library-doc', { title: doc.title, doc, levels: JSON.parse(doc.levels_json || '[]') });
});

module.exports = router;
