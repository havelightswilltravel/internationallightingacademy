'use strict';
// Computes where a technician stands: which level they are working on, and whether each
// promotion requirement (courses, final exam, OJT hours, hands-on skills) is satisfied.
const db = require('../db');

const EXAM_COOLDOWN_HOURS = 24;

function orderedLevels() {
  return db.all(`SELECT l.*, t.title AS track_title, t.sort AS track_sort FROM levels l JOIN tracks t ON t.code = l.track_code
    WHERE l.active = 1 ORDER BY t.sort, l.sort`);
}

function levelIndex(levels, code) {
  return code ? levels.findIndex((l) => l.code === code) : -1;
}

// The level a technician is currently working toward (null when the program is complete).
function workingLevel(user, levels = orderedLevels()) {
  const idx = levelIndex(levels, user.current_level_code);
  return levels[idx + 1] || null;
}

function levelAccess(user, levelCode, levels = orderedLevels()) {
  const cur = levelIndex(levels, user.current_level_code);
  const idx = levelIndex(levels, levelCode);
  if (idx < 0) return 'locked';
  if (idx <= cur) return 'completed';
  if (idx === cur + 1) return 'current';
  return 'locked';
}

function bestAttempt(userId, kind, code) {
  return db.one(`SELECT * FROM exam_attempts WHERE user_id = ? AND kind = ? AND target_code = ? AND submitted_at IS NOT NULL
    ORDER BY passed DESC, score DESC, submitted_at DESC LIMIT 1`, userId, kind, code);
}

function courseProgress(userId, course) {
  const lessonsTotal = db.one('SELECT COUNT(*) AS n FROM lessons WHERE course_code = ? AND active = 1', course.code).n;
  const lessonsDone = db.one(`SELECT COUNT(*) AS n FROM lesson_progress p JOIN lessons l ON l.id = p.lesson_id
    WHERE p.user_id = ? AND l.course_code = ? AND l.active = 1`, userId, course.code).n;
  const best = bestAttempt(userId, 'course', course.code);
  const attempts = db.one("SELECT COUNT(*) AS n FROM exam_attempts WHERE user_id = ? AND kind = 'course' AND target_code = ? AND submitted_at IS NOT NULL", userId, course.code).n;
  const hasQuiz = db.one('SELECT COUNT(*) AS n FROM questions WHERE course_code = ? AND active = 1', course.code).n > 0;
  return {
    ...course, lessonsTotal, lessonsDone, attempts, hasQuiz,
    bestScore: best ? best.score : null,
    quizPassed: !!(best && best.passed),
    // A course with no quiz yet counts as passed once every lesson is read.
    complete: hasQuiz ? !!(best && best.passed) : lessonsTotal > 0 && lessonsDone >= lessonsTotal,
  };
}

function latestSignoffs(userId, levelCode) {
  return db.all(`SELECT s.*, so.result, so.assessed_at, so.notes AS signoff_notes, u.name AS evaluator_name
    FROM skills s
    LEFT JOIN skill_signoffs so ON so.id = (SELECT id FROM skill_signoffs WHERE user_id = ? AND skill_code = s.code ORDER BY assessed_at DESC, id DESC LIMIT 1)
    LEFT JOIN users u ON u.id = so.evaluator_id
    WHERE s.level_code = ? AND s.active = 1 ORDER BY s.sort`, userId, levelCode).map((s) => ({
    ...s, criteria: JSON.parse(s.criteria_json), equipment: JSON.parse(s.equipment_json), status: s.result || 'pending',
  }));
}

function hoursFor(userId, levelCode) {
  const rows = db.all('SELECT status, SUM(hours) AS h FROM ojt_hours WHERE user_id = ? AND level_code = ? GROUP BY status', userId, levelCode);
  const by = Object.fromEntries(rows.map((r) => [r.status, r.h || 0]));
  return { approved: by.approved || 0, pending: by.pending || 0, rejected: by.rejected || 0 };
}

function levelProgress(user, level) {
  const courses = db.all('SELECT * FROM courses WHERE level_code = ? AND active = 1 ORDER BY sort', level.code).map((c) => courseProgress(user.id, c));
  const coursesPassed = courses.filter((c) => c.complete).length;
  const allCourses = courses.length > 0 && coursesPassed === courses.length;

  const examBest = bestAttempt(user.id, 'level', level.code);
  const lastExam = db.one("SELECT * FROM exam_attempts WHERE user_id = ? AND kind = 'level' AND target_code = ? AND submitted_at IS NOT NULL ORDER BY submitted_at DESC LIMIT 1", user.id, level.code);
  let cooldownUntil = null;
  if (lastExam && !lastExam.passed) {
    const until = new Date(lastExam.submitted_at.replace(' ', 'T') + 'Z').getTime() + EXAM_COOLDOWN_HOURS * 3600e3;
    if (until > Date.now()) cooldownUntil = new Date(until);
  }
  const hasQuestions = db.one('SELECT COUNT(*) AS n FROM questions q JOIN courses c ON c.code = q.course_code WHERE c.level_code = ? AND q.active = 1 AND c.active = 1', level.code).n > 0;
  const exam = {
    passed: !!(examBest && examBest.passed), bestScore: examBest ? examBest.score : null, cooldownUntil, hasQuestions,
    eligible: allCourses && hasQuestions && !cooldownUntil && !(examBest && examBest.passed),
  };

  const hrs = hoursFor(user.id, level.code);
  const hours = { ...hrs, required: level.min_ojt_hours, met: hrs.approved >= level.min_ojt_hours };

  const skills = latestSignoffs(user.id, level.code);
  const skillsPassed = skills.filter((s) => s.status === 'pass').length;

  const checks = [
    { key: 'courses', label: `Pass all ${courses.length} course quizzes`, met: allCourses, ratio: courses.length ? coursesPassed / courses.length : 0 },
    { key: 'exam', label: `Pass the level final exam (${level.exam_pass_score}%+)`, met: exam.passed, ratio: exam.passed ? 1 : 0 },
    { key: 'hours', label: `Log ${level.min_ojt_hours} approved on-the-job hours`, met: hours.met, ratio: level.min_ojt_hours ? Math.min(1, hrs.approved / level.min_ojt_hours) : 1 },
    { key: 'skills', label: `Pass all ${skills.length} hands-on skill assessments`, met: skills.length > 0 && skillsPassed === skills.length, ratio: skills.length ? skillsPassed / skills.length : 0 },
  ];
  const percent = Math.round((checks.reduce((a, c) => a + c.ratio, 0) / checks.length) * 100);
  const promoted = db.one('SELECT * FROM promotions WHERE user_id = ? AND level_code = ? ORDER BY approved_at DESC LIMIT 1', user.id, level.code);

  return {
    level, courses, coursesPassed, exam, hours, skills, skillsPassed, checks, percent,
    readyForPromotion: checks.every((c) => c.met) && !promoted, promoted,
  };
}

function payRateFor(orgId, levelCode) {
  if (!orgId) return null;
  const row = db.one('SELECT hourly_rate FROM org_pay_rates WHERE org_id = ? AND level_code = ?', orgId, levelCode || 'NONE');
  return row ? row.hourly_rate : null;
}

module.exports = { orderedLevels, workingLevel, levelAccess, levelProgress, courseProgress, latestSignoffs, hoursFor, payRateFor, EXAM_COOLDOWN_HOURS };
