'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { DatabaseSync } = require('node:sqlite');

const SCHEMA = `
CREATE TABLE IF NOT EXISTS organizations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'active',          -- active | suspended
  plan TEXT NOT NULL DEFAULT 'standard',
  license_seats INTEGER NOT NULL DEFAULT 25,       -- max active technicians
  license_expires_at TEXT,                         -- ISO date; NULL = no expiry
  contact_name TEXT,
  contact_email TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  org_id INTEGER REFERENCES organizations(id),     -- NULL only for platform owners
  email TEXT NOT NULL UNIQUE COLLATE NOCASE,
  name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL,                              -- owner | admin | evaluator | technician
  employee_id TEXT,
  hire_date TEXT,
  current_level_code TEXT,                         -- highest level achieved (NULL = none yet)
  active INTEGER NOT NULL DEFAULT 1,
  must_change_password INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  last_login_at TEXT
);

CREATE TABLE IF NOT EXISTS tracks (
  code TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  sort INTEGER NOT NULL,
  prerequisite_level TEXT
);

CREATE TABLE IF NOT EXISTS levels (
  code TEXT PRIMARY KEY,
  track_code TEXT NOT NULL REFERENCES tracks(code),
  sort INTEGER NOT NULL,
  title TEXT NOT NULL,
  grade TEXT,
  description TEXT,
  duration_months INTEGER,
  outcomes_json TEXT NOT NULL DEFAULT '[]',
  course_pass_score INTEGER NOT NULL DEFAULT 80,
  exam_pass_score INTEGER NOT NULL DEFAULT 80,
  exam_questions INTEGER NOT NULL DEFAULT 50,
  exam_time_limit INTEGER NOT NULL DEFAULT 90,
  min_ojt_hours INTEGER NOT NULL DEFAULT 0,
  active INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS courses (
  code TEXT PRIMARY KEY,
  level_code TEXT NOT NULL REFERENCES levels(code),
  sort INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  objectives_json TEXT NOT NULL DEFAULT '[]',
  estimated_hours REAL,
  pass_score INTEGER NOT NULL DEFAULT 80,
  questions_per_attempt INTEGER NOT NULL DEFAULT 10,
  active INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS lessons (
  id TEXT PRIMARY KEY,                             -- <course>/<file-slug>
  course_code TEXT NOT NULL REFERENCES courses(code),
  sort INTEGER NOT NULL,
  title TEXT NOT NULL,
  minutes INTEGER,
  video_url TEXT,                                  -- from curriculum files
  video_suggestion TEXT,
  body_md TEXT NOT NULL DEFAULT '',
  active INTEGER NOT NULL DEFAULT 1
);

-- Videos set inside the app. org_id NULL = platform-wide; otherwise a licensee's own video.
CREATE TABLE IF NOT EXISTS lesson_videos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  org_id INTEGER REFERENCES organizations(id),
  lesson_id TEXT NOT NULL REFERENCES lessons(id),
  url TEXT NOT NULL,
  updated_by INTEGER REFERENCES users(id),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE UNIQUE INDEX IF NOT EXISTS lesson_videos_scope ON lesson_videos(IFNULL(org_id, 0), lesson_id);

CREATE TABLE IF NOT EXISTS questions (
  id TEXT PRIMARY KEY,
  course_code TEXT NOT NULL REFERENCES courses(code),
  type TEXT NOT NULL,                              -- single | multi
  prompt TEXT NOT NULL,
  choices_json TEXT NOT NULL,
  answer_json TEXT NOT NULL,
  explanation TEXT,
  ref TEXT,
  active INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS skills (
  code TEXT PRIMARY KEY,
  level_code TEXT NOT NULL REFERENCES levels(code),
  sort INTEGER NOT NULL,
  title TEXT NOT NULL,
  category TEXT,
  critical INTEGER NOT NULL DEFAULT 0,
  description TEXT,
  equipment_json TEXT NOT NULL DEFAULT '[]',
  criteria_json TEXT NOT NULL DEFAULT '[]',
  active INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS lesson_progress (
  user_id INTEGER NOT NULL REFERENCES users(id),
  lesson_id TEXT NOT NULL REFERENCES lessons(id),
  completed_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (user_id, lesson_id)
);

CREATE TABLE IF NOT EXISTS exam_attempts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  kind TEXT NOT NULL,                              -- course | level
  target_code TEXT NOT NULL,                       -- course code or level code
  items_json TEXT NOT NULL,                        -- [{id, order:[choice indexes]}]
  answers_json TEXT,
  score INTEGER,
  passed INTEGER,
  pass_score INTEGER NOT NULL,
  started_at TEXT NOT NULL DEFAULT (datetime('now')),
  expires_at TEXT,
  submitted_at TEXT,
  note TEXT
);
CREATE INDEX IF NOT EXISTS exam_attempts_user ON exam_attempts(user_id, kind, target_code);

CREATE TABLE IF NOT EXISTS skill_signoffs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  skill_code TEXT NOT NULL REFERENCES skills(code),
  evaluator_id INTEGER NOT NULL REFERENCES users(id),
  result TEXT NOT NULL,                            -- pass | fail
  criteria_json TEXT NOT NULL DEFAULT '[]',        -- [true,false,...] per criterion
  notes TEXT,
  assessed_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS skill_signoffs_user ON skill_signoffs(user_id, skill_code);

CREATE TABLE IF NOT EXISTS ojt_hours (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  level_code TEXT NOT NULL REFERENCES levels(code),
  work_date TEXT NOT NULL,
  hours REAL NOT NULL,
  description TEXT NOT NULL,
  supervisor_name TEXT,
  status TEXT NOT NULL DEFAULT 'pending',          -- pending | approved | rejected
  reviewed_by INTEGER REFERENCES users(id),
  reviewed_at TEXT,
  review_note TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS ojt_hours_user ON ojt_hours(user_id, level_code, status);

CREATE TABLE IF NOT EXISTS promotions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  level_code TEXT NOT NULL REFERENCES levels(code),
  approved_by INTEGER NOT NULL REFERENCES users(id),
  approved_at TEXT NOT NULL DEFAULT (datetime('now')),
  notes TEXT,
  certificate_no TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS org_pay_rates (
  org_id INTEGER NOT NULL REFERENCES organizations(id),
  level_code TEXT NOT NULL,                        -- level code, or 'NONE' for not-yet-graded
  hourly_rate REAL NOT NULL,
  PRIMARY KEY (org_id, level_code)
);

CREATE TABLE IF NOT EXISTS library_docs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  org_id INTEGER REFERENCES organizations(id),     -- NULL = platform-wide
  source TEXT NOT NULL DEFAULT 'app',              -- curriculum | app
  source_key TEXT,                                 -- curriculum file path for imported docs
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  tags TEXT NOT NULL DEFAULT '',
  levels_json TEXT NOT NULL DEFAULT '[]',
  body_md TEXT NOT NULL DEFAULT '',
  file_path TEXT,                                  -- uploaded attachment (PDF etc.)
  file_name TEXT,
  last_reviewed TEXT,
  review_interval_months INTEGER NOT NULL DEFAULT 12,
  active INTEGER NOT NULL DEFAULT 1,
  created_by INTEGER REFERENCES users(id),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE UNIQUE INDEX IF NOT EXISTS library_docs_source ON library_docs(source_key) WHERE source_key IS NOT NULL;

CREATE TABLE IF NOT EXISTS sessions (
  sid TEXT PRIMARY KEY,
  sess TEXT NOT NULL,
  expires INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS audit_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  org_id INTEGER,
  user_id INTEGER,
  action TEXT NOT NULL,
  detail TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Skills Matrix: field-system competency areas and ratings (1 seen · 2 understand · 3 perform · 4 can teach)
CREATE TABLE IF NOT EXISTS competency_areas (
  code TEXT PRIMARY KEY,
  sort INTEGER NOT NULL,
  title TEXT NOT NULL,
  components TEXT,
  courses_json TEXT NOT NULL DEFAULT '[]',
  guide_key TEXT,                                  -- library source_key of the matching field procedure
  active INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS competency_ratings (
  user_id INTEGER NOT NULL REFERENCES users(id),
  area_code TEXT NOT NULL REFERENCES competency_areas(code),
  self_rating INTEGER,
  steps_text TEXT,
  components_text TEXT,
  self_updated_at TEXT,
  eval_rating INTEGER,
  eval_notes TEXT,
  evaluator_id INTEGER REFERENCES users(id),
  eval_updated_at TEXT,
  PRIMARY KEY (user_id, area_code)
);

-- Hiring: interview kits (from curriculum/hiring) and candidates scored by managers.
CREATE TABLE IF NOT EXISTS interview_kits (
  code TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  position TEXT,
  kit_json TEXT NOT NULL,
  active INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS candidates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  org_id INTEGER NOT NULL REFERENCES organizations(id),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  position TEXT,
  kit_code TEXT NOT NULL REFERENCES interview_kits(code),
  source TEXT,
  status TEXT NOT NULL DEFAULT 'new',              -- new | interviewed | offered | hired | not_selected | withdrew
  interviewer_id INTEGER REFERENCES users(id),
  interview_date TEXT,
  responses_json TEXT NOT NULL DEFAULT '{}',       -- { bg: {i: notes}, comp: {key: {score, answered, notes}}, observe: [..], requirements: [..], closing }
  recommendation TEXT,                             -- strong_yes | yes | no | strong_no
  summary TEXT,
  hired_user_id INTEGER REFERENCES users(id),
  created_by INTEGER REFERENCES users(id),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS candidates_org ON candidates(org_id, status);

CREATE TABLE IF NOT EXISTS meta (
  key TEXT PRIMARY KEY,
  value TEXT
);
`;

let db = null;

function open(file) {
  const target = file || process.env.DATABASE_PATH || path.join(__dirname, '..', 'data', 'academy.db');
  if (target !== ':memory:') fs.mkdirSync(path.dirname(target), { recursive: true });
  db = new DatabaseSync(target);
  db.exec('PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = 5000;');
  db.exec(SCHEMA);
  migrate(db);
  return db;
}

// Additive column migrations for databases created by earlier versions.
function migrate(d) {
  const has = (table, col) => d.prepare(`PRAGMA table_info(${table})`).all().some((c) => c.name === col);
  if (!has('tracks', 'kind')) d.exec("ALTER TABLE tracks ADD COLUMN kind TEXT NOT NULL DEFAULT 'progression'");
  if (!has('tracks', 'audience')) d.exec("ALTER TABLE tracks ADD COLUMN audience TEXT NOT NULL DEFAULT 'technician'");
}

function get() {
  if (!db) open();
  return db;
}

function close() {
  if (db) db.close();
  db = null;
}

// Small helpers so route code stays short.
const one = (sql, ...params) => get().prepare(sql).get(...params);
const all = (sql, ...params) => get().prepare(sql).all(...params);
const run = (sql, ...params) => get().prepare(sql).run(...params);

function tx(fn) {
  const d = get();
  d.exec('BEGIN');
  try {
    const result = fn();
    d.exec('COMMIT');
    return result;
  } catch (err) {
    d.exec('ROLLBACK');
    throw err;
  }
}

function audit(user, action, detail) {
  run(
    'INSERT INTO audit_log (org_id, user_id, action, detail) VALUES (?, ?, ?, ?)',
    user ? user.org_id ?? null : null,
    user ? user.id : null,
    action,
    detail == null ? null : typeof detail === 'string' ? detail : JSON.stringify(detail)
  );
}

module.exports = { open, get, close, one, all, run, tx, audit };
