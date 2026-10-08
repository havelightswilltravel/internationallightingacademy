'use strict';
// Course quizzes and level final exams: random question draw, shuffled choices, server-side
// timing and grading. Correct answers never leave the server until an attempt is submitted.
const crypto = require('node:crypto');
const db = require('../db');
const progress = require('./progress');

const GRACE_SECONDS = 60;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = crypto.randomInt(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Draw `n` questions spread evenly across courses (round-robin over shuffled banks).
function drawSpread(banks, n) {
  const pools = shuffle(banks.map((b) => shuffle(b)).filter((b) => b.length));
  const out = [];
  while (out.length < n && pools.some((p) => p.length)) {
    for (const p of pools) if (p.length && out.length < n) out.push(p.pop());
  }
  return shuffle(out);
}

function openAttempt(userId, kind, code) {
  return db.one(`SELECT * FROM exam_attempts WHERE user_id = ? AND kind = ? AND target_code = ? AND submitted_at IS NULL
    AND (expires_at IS NULL OR expires_at > datetime('now')) ORDER BY id DESC LIMIT 1`, userId, kind, code);
}

// Returns { attemptId } or { error }.
function start(user, kind, code) {
  let questions; let passScore; let minutes = null;
  if (kind === 'course') {
    const course = db.one('SELECT * FROM courses WHERE code = ? AND active = 1', code);
    if (!course) return { error: 'Course not found.' };
    if (progress.levelAccess(user, course.level_code) === 'locked') return { error: 'This course belongs to a level you have not unlocked yet.' };
    const bank = db.all('SELECT * FROM questions WHERE course_code = ? AND active = 1', code);
    if (!bank.length) return { error: 'This course does not have a quiz yet.' };
    questions = shuffle(bank).slice(0, course.questions_per_attempt);
    passScore = course.pass_score;
  } else if (kind === 'level') {
    const level = db.one('SELECT * FROM levels WHERE code = ? AND active = 1', code);
    if (!level) return { error: 'Level not found.' };
    if (!['current', 'open'].includes(progress.levelAccess(user, code))) return { error: 'You can only take the final exam for the level you are currently working on.' };
    const lp = progress.levelProgress(user, level);
    if (lp.exam.passed) return { error: 'You have already passed this exam.' };
    if (!lp.exam.eligible && !openAttempt(user.id, kind, code)) {
      if (lp.exam.cooldownUntil) return { error: `You can retake the final exam after ${lp.exam.cooldownUntil.toLocaleString()}. Use the time to review the courses you missed.` };
      return { error: 'Pass every course quiz in this level before taking the final exam.' };
    }
    const courses = db.all('SELECT code FROM courses WHERE level_code = ? AND active = 1', code);
    const banks = courses.map((c) => db.all('SELECT * FROM questions WHERE course_code = ? AND active = 1', c.code));
    questions = drawSpread(banks, level.exam_questions);
    passScore = level.exam_pass_score;
    minutes = level.exam_time_limit;
  } else return { error: 'Unknown exam type.' };

  const existing = openAttempt(user.id, kind, code);
  if (existing) return { attemptId: existing.id };

  const items = questions.map((q) => ({ id: q.id, order: shuffle(JSON.parse(q.choices_json).map((_, i) => i)) }));
  const expires = minutes ? `datetime('now', '+${Number(minutes)} minutes')` : 'NULL';
  const r = db.run(`INSERT INTO exam_attempts (user_id, kind, target_code, items_json, pass_score, expires_at) VALUES (?, ?, ?, ?, ?, ${expires})`,
    user.id, kind, code, JSON.stringify(items), passScore);
  return { attemptId: Number(r.lastInsertRowid) };
}

// Question data for rendering an attempt (choices in the attempt's shuffled order, no answers).
function paperFor(attempt) {
  return JSON.parse(attempt.items_json).map((it, n) => {
    const q = db.one('SELECT * FROM questions WHERE id = ?', it.id);
    const choices = JSON.parse(q.choices_json);
    return { n: n + 1, id: q.id, type: q.type, prompt: q.prompt, choices: it.order.map((orig, shown) => ({ shown, text: choices[orig] })) };
  });
}

// answers: { [questionId]: [shownIndex, ...] }
function submit(attempt, answers) {
  if (attempt.submitted_at) return attempt;
  const items = JSON.parse(attempt.items_json);
  let correct = 0;
  const stored = {};
  for (const it of items) {
    const q = db.one('SELECT answer_json FROM questions WHERE id = ?', it.id);
    const want = new Set(JSON.parse(q.answer_json));
    const picked = [...new Set((answers[it.id] || []).map(Number).filter((s) => Number.isInteger(s) && s >= 0 && s < it.order.length))];
    const pickedOrig = picked.map((s) => it.order[s]);
    stored[it.id] = pickedOrig;
    if (pickedOrig.length === want.size && pickedOrig.every((o) => want.has(o))) correct++;
  }
  const score = items.length ? Math.round((correct / items.length) * 100) : 0;
  let late = false;
  if (attempt.expires_at) {
    const exp = new Date(attempt.expires_at.replace(' ', 'T') + 'Z').getTime();
    late = Date.now() > exp + GRACE_SECONDS * 1000;
  }
  const passed = !late && score >= attempt.pass_score ? 1 : 0;
  db.run(`UPDATE exam_attempts SET answers_json = ?, score = ?, passed = ?, submitted_at = datetime('now'), note = ? WHERE id = ? AND submitted_at IS NULL`,
    JSON.stringify(stored), score, passed, late ? 'Submitted after the time limit' : null, attempt.id);
  return db.one('SELECT * FROM exam_attempts WHERE id = ?', attempt.id);
}

// Review data after submission: what was picked vs correct, with explanations.
function review(attempt) {
  const answers = JSON.parse(attempt.answers_json || '{}');
  return JSON.parse(attempt.items_json).map((it, n) => {
    const q = db.one('SELECT * FROM questions WHERE id = ?', it.id);
    const choices = JSON.parse(q.choices_json);
    const want = new Set(JSON.parse(q.answer_json));
    const picked = new Set(answers[it.id] || []);
    const isCorrect = picked.size === want.size && [...picked].every((p) => want.has(p));
    return {
      n: n + 1, prompt: q.prompt, type: q.type, explanation: q.explanation, ref: q.ref, correct: isCorrect,
      choices: it.order.map((orig) => ({ text: choices[orig], isAnswer: want.has(orig), picked: picked.has(orig) })),
    };
  });
}

module.exports = { start, submit, paperFor, review, openAttempt, shuffle, drawSpread };
