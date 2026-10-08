'use strict';
const express = require('express');
const db = require('../db');
const auth = require('../auth');
const progress = require('../services/progress');
const exams = require('../services/exams');

const router = express.Router();
router.use(auth.requireLogin);

function lessonVideo(lesson, orgId) {
  const org = orgId ? db.one('SELECT url FROM lesson_videos WHERE org_id = ? AND lesson_id = ?', orgId, lesson.id) : null;
  if (org) return org.url;
  const global = db.one('SELECT url FROM lesson_videos WHERE org_id IS NULL AND lesson_id = ?', lesson.id);
  return global ? global.url : lesson.video_url;
}

router.get('/', (req, res) => {
  const user = req.user;
  const levels = progress.orderedLevels();
  const data = { title: 'Dashboard', levels };
  if (user.role === 'technician') {
    const working = progress.workingLevel(user, levels);
    data.current = user.current_level_code ? levels.find((l) => l.code === user.current_level_code) : null;
    data.working = working;
    data.lp = working ? progress.levelProgress(user, working) : null;
    data.payRate = progress.payRateFor(user.org_id, user.current_level_code);
    data.nextPayRate = working ? progress.payRateFor(user.org_id, working.code) : null;
    data.recent = db.all(`SELECT a.*, COALESCE(c.title, l.title) AS target_title FROM exam_attempts a
      LEFT JOIN courses c ON a.kind = 'course' AND c.code = a.target_code LEFT JOIN levels l ON a.kind = 'level' AND l.code = a.target_code
      WHERE a.user_id = ? AND a.submitted_at IS NOT NULL ORDER BY a.submitted_at DESC LIMIT 5`, user.id);
    if (data.lp) {
      data.nextLesson = db.one(`SELECT l.*, c.title AS course_title FROM lessons l JOIN courses c ON c.code = l.course_code
        WHERE c.level_code = ? AND l.active = 1 AND c.active = 1 AND l.id NOT IN (SELECT lesson_id FROM lesson_progress WHERE user_id = ?)
        ORDER BY c.sort, l.sort LIMIT 1`, working.code, user.id);
    }
  } else {
    const orgFilter = user.role === 'owner' ? '' : 'AND u.org_id = ' + Number(user.org_id);
    const techs = db.all(`SELECT u.* FROM users u WHERE u.role = 'technician' AND u.active = 1 ${orgFilter}`);
    data.techCount = techs.length;
    data.byLevel = levels.map((l) => ({ ...l, n: techs.filter((t) => t.current_level_code === l.code).length }));
    data.ungraded = techs.filter((t) => !t.current_level_code).length;
    data.pendingHours = db.one(`SELECT COUNT(*) AS n FROM ojt_hours h JOIN users u ON u.id = h.user_id WHERE h.status = 'pending' ${orgFilter}`).n;
    data.ready = techs.map((t) => {
      const w = progress.workingLevel(t, levels);
      return w ? { tech: t, level: w, lp: progress.levelProgress(t, w) } : null;
    }).filter((x) => x && x.lp.readyForPromotion);
    if (user.role === 'owner') data.orgCount = db.one('SELECT COUNT(*) AS n FROM organizations').n;
  }
  res.render('dashboard', data);
});

router.get('/levels', (req, res) => {
  const levels = progress.orderedLevels();
  const tracks = db.all('SELECT * FROM tracks ORDER BY sort').map((t) => ({
    ...t,
    levels: levels.filter((l) => l.track_code === t.code).map((l) => ({
      ...l,
      access: progress.levelAccess(req.user, l.code, levels),
      courseCount: db.one('SELECT COUNT(*) AS n FROM courses WHERE level_code = ? AND active = 1', l.code).n,
      skillCount: db.one('SELECT COUNT(*) AS n FROM skills WHERE level_code = ? AND active = 1', l.code).n,
    })),
  }));
  res.render('levels', { title: 'Program map', tracks });
});

router.get('/levels/:code', (req, res) => {
  const level = db.one('SELECT * FROM levels WHERE code = ? AND active = 1', req.params.code);
  if (!level) return res.status(404).render('error', { title: 'Not found', message: 'Level not found.' });
  const access = progress.levelAccess(req.user, level.code);
  res.render('level', {
    title: `${level.code} — ${level.title}`, level, access, outcomes: JSON.parse(level.outcomes_json),
    lp: progress.levelProgress(req.user, level),
    openExam: exams.openAttempt(req.user.id, 'level', level.code),
  });
});

router.get('/courses/:code', (req, res) => {
  const course = db.one('SELECT * FROM courses WHERE code = ? AND active = 1', req.params.code);
  if (!course) return res.status(404).render('error', { title: 'Not found', message: 'Course not found.' });
  const level = db.one('SELECT * FROM levels WHERE code = ?', course.level_code);
  const lessons = db.all(`SELECT l.*, p.completed_at FROM lessons l LEFT JOIN lesson_progress p ON p.lesson_id = l.id AND p.user_id = ?
    WHERE l.course_code = ? AND l.active = 1 ORDER BY l.sort`, req.user.id, course.code);
  const attempts = db.all("SELECT * FROM exam_attempts WHERE user_id = ? AND kind = 'course' AND target_code = ? AND submitted_at IS NOT NULL ORDER BY submitted_at DESC", req.user.id, course.code);
  res.render('course', {
    title: `${course.code} — ${course.title}`, course, level, lessons, attempts,
    objectives: JSON.parse(course.objectives_json), cp: progress.courseProgress(req.user.id, course),
    access: progress.levelAccess(req.user, level.code), openQuiz: exams.openAttempt(req.user.id, 'course', course.code),
  });
});

router.get('/lessons/:course/:slug', (req, res) => {
  const id = `${req.params.course}/${req.params.slug}`;
  const lesson = db.one('SELECT * FROM lessons WHERE id = ? AND active = 1', id);
  if (!lesson) return res.status(404).render('error', { title: 'Not found', message: 'Lesson not found.' });
  const course = db.one('SELECT * FROM courses WHERE code = ?', lesson.course_code);
  const siblings = db.all('SELECT id, title, sort FROM lessons WHERE course_code = ? AND active = 1 ORDER BY sort', course.code);
  const i = siblings.findIndex((s) => s.id === id);
  res.render('lesson', {
    title: lesson.title, lesson, course, videoUrl: lessonVideo(lesson, req.user.org_id),
    prev: siblings[i - 1] || null, next: siblings[i + 1] || null, position: i + 1, total: siblings.length,
    done: !!db.one('SELECT 1 AS x FROM lesson_progress WHERE user_id = ? AND lesson_id = ?', req.user.id, id),
  });
});

router.post('/lessons/:course/:slug/complete', (req, res) => {
  const id = `${req.params.course}/${req.params.slug}`;
  const lesson = db.one('SELECT * FROM lessons WHERE id = ? AND active = 1', id);
  if (!lesson) return res.status(404).render('error', { title: 'Not found', message: 'Lesson not found.' });
  db.run('INSERT OR IGNORE INTO lesson_progress (user_id, lesson_id) VALUES (?, ?)', req.user.id, id);
  const next = db.one('SELECT id FROM lessons WHERE course_code = ? AND active = 1 AND sort > ? ORDER BY sort LIMIT 1', lesson.course_code, lesson.sort);
  res.redirect(next ? `/lessons/${next.id}` : `/courses/${lesson.course_code}`);
});

// ---------- quizzes & exams ----------
router.post('/exams/start', (req, res) => {
  const kind = req.body.kind === 'level' ? 'level' : 'course';
  const code = String(req.body.code || '');
  const result = exams.start(req.user, kind, code);
  if (result.error) {
    req.flash('error', result.error);
    return res.redirect(kind === 'level' ? `/levels/${encodeURIComponent(code)}` : `/courses/${encodeURIComponent(code)}`);
  }
  res.redirect(`/exams/${result.attemptId}`);
});

function ownAttempt(req, res) {
  const a = db.one('SELECT * FROM exam_attempts WHERE id = ?', Number(req.params.id));
  if (!a) { res.status(404).render('error', { title: 'Not found', message: 'Exam not found.' }); return null; }
  const owner = db.one('SELECT * FROM users WHERE id = ?', a.user_id);
  if (a.user_id !== req.user.id && !(auth.isStaff(req.user) && auth.canManageUser(req.user, owner))) {
    res.status(403).render('error', { title: 'Not allowed', message: 'This is not your exam.' });
    return null;
  }
  return a;
}

function targetInfo(a) {
  if (a.kind === 'course') {
    const c = db.one('SELECT * FROM courses WHERE code = ?', a.target_code);
    return { title: `${c.code} — ${c.title} quiz`, back: `/courses/${c.code}` };
  }
  const l = db.one('SELECT * FROM levels WHERE code = ?', a.target_code);
  return { title: `${l.code} — ${l.title} final exam`, back: `/levels/${l.code}` };
}

router.get('/exams/:id', (req, res) => {
  const a = ownAttempt(req, res);
  if (!a) return;
  if (a.submitted_at) return res.redirect(`/exams/${a.id}/result`);
  if (a.user_id !== req.user.id) return res.redirect(`/exams/${a.id}/result`);
  const t = targetInfo(a);
  const expiresMs = a.expires_at ? new Date(a.expires_at.replace(' ', 'T') + 'Z').getTime() : null;
  res.render('exam', { title: t.title, attempt: a, info: t, paper: exams.paperFor(a), expiresMs });
});

router.post('/exams/:id/submit', (req, res) => {
  const a = ownAttempt(req, res);
  if (!a) return;
  if (a.user_id !== req.user.id) return res.status(403).render('error', { title: 'Not allowed', message: 'Only the technician can submit this exam.' });
  const answers = {};
  for (const [k, v] of Object.entries(req.body)) {
    if (k.startsWith('q_')) answers[k.slice(2)] = Array.isArray(v) ? v : [v];
  }
  const done = exams.submit(a, answers);
  db.audit(req.user, 'exam_submitted', { attempt: a.id, kind: a.kind, target: a.target_code, score: done.score, passed: !!done.passed });
  res.redirect(`/exams/${a.id}/result`);
});

router.get('/exams/:id/result', (req, res) => {
  const a = ownAttempt(req, res);
  if (!a) return;
  if (!a.submitted_at) return res.redirect(`/exams/${a.id}`);
  const t = targetInfo(a);
  // Level final exams don't reveal answer keys to technicians (keeps the bank secure); staff can see them.
  const showKey = a.kind === 'course' || auth.isStaff(req.user);
  res.render('exam-result', { title: t.title, attempt: a, info: t, review: showKey ? exams.review(a) : null });
});

module.exports = router;
