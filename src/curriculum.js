'use strict';
// Reads the YAML/Markdown curriculum from disk, validates it, and imports it into the database.
const fs = require('node:fs');
const path = require('node:path');
const yaml = require('js-yaml');
const db = require('./db');

const DEFAULT_DIR = path.join(__dirname, '..', 'curriculum');

function readYaml(file) {
  return yaml.load(fs.readFileSync(file, 'utf8')) || {};
}

function parseFrontMatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(text);
  if (!m) return { meta: {}, body: text };
  return { meta: yaml.load(m[1]) || {}, body: m[2] };
}

const listDirs = (dir) => (fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort() : []);

// Returns { program, levels: [...], library: [...], errors: [...], warnings: [...] }
function load(dir = DEFAULT_DIR) {
  const errors = [];
  const warnings = [];
  const program = readYaml(path.join(dir, 'program.yaml'));
  const levels = [];
  const seen = { courses: new Set(), questions: new Set(), skills: new Set() };

  const trackLevels = new Map();
  (program.tracks || []).forEach((t, ti) => (t.levels || []).forEach((code, li) => trackLevels.set(code, { track: t.code, sort: ti * 100 + li + 1 })));

  for (const code of listDirs(path.join(dir, 'levels'))) {
    const ldir = path.join(dir, 'levels', code);
    const where = `levels/${code}`;
    if (!fs.existsSync(path.join(ldir, 'level.yaml'))) { errors.push(`${where}: missing level.yaml`); continue; }
    let lvl;
    try { lvl = readYaml(path.join(ldir, 'level.yaml')); } catch (e) { errors.push(`${where}/level.yaml: ${e.message}`); continue; }
    if (lvl.code !== code) errors.push(`${where}: code "${lvl.code}" does not match folder`);
    if (!trackLevels.has(code)) errors.push(`${where}: level is not listed in program.yaml`);
    if (!lvl.title) errors.push(`${where}: missing title`);
    const req = lvl.requirements || {};
    const exam = req.final_exam || {};

    const skills = (lvl.skills || []).map((s, i) => {
      if (!s.code || !s.title) errors.push(`${where}: skill #${i + 1} missing code/title`);
      if (seen.skills.has(s.code)) errors.push(`${where}: duplicate skill code ${s.code}`);
      seen.skills.add(s.code);
      if (!Array.isArray(s.criteria) || !s.criteria.length) errors.push(`${where}: skill ${s.code} has no criteria`);
      return {
        code: s.code, sort: i + 1, title: s.title, category: s.category || 'General', critical: s.critical ? 1 : 0,
        description: s.description || '', equipment: s.equipment || [], criteria: (s.criteria || []).map(String),
      };
    });

    const courses = [];
    for (const ccode of listDirs(path.join(ldir, 'courses'))) {
      const cdir = path.join(ldir, 'courses', ccode);
      const cwhere = `${where}/courses/${ccode}`;
      let c;
      try { c = readYaml(path.join(cdir, 'course.yaml')); } catch (e) { errors.push(`${cwhere}/course.yaml: ${e.message}`); continue; }
      if (c.code !== ccode) errors.push(`${cwhere}: code "${c.code}" does not match folder`);
      if (seen.courses.has(ccode)) errors.push(`${cwhere}: duplicate course code`);
      seen.courses.add(ccode);

      const lessons = (c.lessons || []).map((file, i) => {
        const lp = path.join(cdir, 'lessons', file);
        if (!fs.existsSync(lp)) { errors.push(`${cwhere}: lesson file not found: ${file}`); return null; }
        let parsed;
        try { parsed = parseFrontMatter(fs.readFileSync(lp, 'utf8')); } catch (e) { errors.push(`${cwhere}/lessons/${file}: ${e.message}`); return null; }
        if (!parsed.meta.title) errors.push(`${cwhere}/lessons/${file}: missing title`);
        return {
          id: `${ccode}/${file.replace(/\.md$/, '')}`, sort: i + 1, title: parsed.meta.title || file,
          minutes: Number(parsed.meta.minutes) || null, video_url: parsed.meta.video || null,
          video_suggestion: parsed.meta.video_suggestion ? String(parsed.meta.video_suggestion).trim() : null,
          body_md: parsed.body.trim(),
        };
      }).filter(Boolean);
      if (!lessons.length) warnings.push(`${cwhere}: no lessons`);

      const quiz = c.quiz || {};
      const questions = (quiz.questions || []).map((q) => {
        const qw = `${cwhere} question ${q.id || '(no id)'}`;
        if (!q.id) errors.push(`${qw}: missing id`);
        else if (seen.questions.has(q.id)) errors.push(`${qw}: duplicate id`);
        seen.questions.add(q.id);
        const choices = (q.choices || []).map(String);
        if (choices.length < 2) errors.push(`${qw}: needs at least 2 choices`);
        if (!q.q) errors.push(`${qw}: missing question text`);
        const type = q.type || 'single';
        let answer = q.answer;
        if (type === 'single') {
          if (!Number.isInteger(answer) || answer < 0 || answer >= choices.length) errors.push(`${qw}: answer must be a valid choice index`);
          answer = [answer];
        } else if (type === 'multi') {
          if (!Array.isArray(answer) || !answer.length || answer.some((a) => !Number.isInteger(a) || a < 0 || a >= choices.length)) errors.push(`${qw}: multi answer must be a list of valid indexes`);
        } else errors.push(`${qw}: type must be single or multi`);
        return { id: q.id, type, prompt: String(q.q || ''), choices, answer: Array.isArray(answer) ? answer : [], explanation: q.explanation || '', ref: q.ref || '' };
      });
      const perAttempt = quiz.questions_per_attempt || 10;
      if (questions.length && questions.length < perAttempt) errors.push(`${cwhere}: question bank (${questions.length}) smaller than questions_per_attempt (${perAttempt})`);
      if (!questions.length) warnings.push(`${cwhere}: no quiz questions`);

      courses.push({
        code: ccode, sort: Number(c.order) || courses.length + 1, title: c.title || ccode, description: c.description || '',
        objectives: c.objectives || [], estimated_hours: c.estimated_hours || null,
        pass_score: quiz.pass_score || req.course_pass_score || 80, questions_per_attempt: Math.min(perAttempt, questions.length || perAttempt),
        lessons, questions,
      });
    }
    courses.sort((a, b) => a.sort - b.sort || a.code.localeCompare(b.code));
    if (!courses.length) warnings.push(`${where}: no courses yet`);

    const tl = trackLevels.get(code) || {};
    levels.push({
      code, track: lvl.track || tl.track, sort: tl.sort || Number(lvl.order) || 99, title: lvl.title || code, grade: lvl.grade || '',
      description: lvl.description || '', duration_months: lvl.typical_duration_months || null, outcomes: lvl.outcomes || [],
      course_pass_score: req.course_pass_score || 80, exam_pass_score: exam.pass_score || 80,
      exam_questions: exam.questions || 50, exam_time_limit: exam.time_limit_minutes || 90, min_ojt_hours: req.min_ojt_hours || 0,
      skills, courses,
    });
  }

  for (const code of trackLevels.keys()) if (!levels.find((l) => l.code === code)) warnings.push(`program.yaml lists ${code} but levels/${code} does not exist yet`);

  const library = [];
  for (const cat of listDirs(path.join(dir, 'library'))) {
    for (const file of fs.readdirSync(path.join(dir, 'library', cat)).filter((f) => f.endsWith('.md')).sort()) {
      const key = `library/${cat}/${file}`;
      try {
        const { meta, body } = parseFrontMatter(fs.readFileSync(path.join(dir, 'library', cat, file), 'utf8'));
        if (!meta.title) errors.push(`${key}: missing title`);
        library.push({
          source_key: key, category: meta.category || cat, title: meta.title || file, tags: (meta.tags || []).join(', '),
          levels: meta.levels || [], body_md: body.trim(),
          last_reviewed: meta.last_reviewed ? String(meta.last_reviewed instanceof Date ? meta.last_reviewed.toISOString().slice(0, 10) : meta.last_reviewed) : null,
          review_interval_months: meta.review_interval_months || 12,
        });
      } catch (e) { errors.push(`${key}: ${e.message}`); }
    }
  }

  // Skills Matrix areas
  let competencies = [];
  const compFile = path.join(dir, 'competencies.yaml');
  if (fs.existsSync(compFile)) {
    try {
      const doc = readYaml(compFile);
      const courseCodes = new Set(levels.flatMap((l) => l.courses.map((c) => c.code)));
      const guideKeys = new Set(library.map((d) => d.source_key));
      competencies = (doc.areas || []).map((a, i) => {
        if (!a.code || !a.title) errors.push(`competencies.yaml: area #${i + 1} needs code and title`);
        (a.courses || []).filter((c) => !courseCodes.has(c)).forEach((c) => warnings.push(`competencies.yaml: ${a.code} links to unknown course ${c}`));
        const guideKey = a.guide ? `library/field-procedures/${a.guide}.md` : null;
        if (guideKey && !guideKeys.has(guideKey)) warnings.push(`competencies.yaml: ${a.code} guide not found: ${guideKey}`);
        return { code: a.code, sort: i + 1, title: a.title, components: a.components || '', courses: a.courses || [], guide_key: guideKey };
      });
    } catch (e) { errors.push(`competencies.yaml: ${e.message}`); }
  }

  // Hiring interview kits
  const kits = [];
  const hdir = path.join(dir, 'hiring');
  if (fs.existsSync(hdir)) {
    try {
      const shared = fs.existsSync(path.join(hdir, '_competencies.yaml')) ? readYaml(path.join(hdir, '_competencies.yaml')) : [];
      for (const file of fs.readdirSync(hdir).filter((f) => f.endsWith('.yaml') && !f.startsWith('_')).sort()) {
        const k = readYaml(path.join(hdir, file));
        if (!k.code || !k.title) { errors.push(`hiring/${file}: needs code and title`); continue; }
        kits.push({ ...k, competencies: k.competencies || shared });
      }
    } catch (e) { errors.push(`hiring: ${e.message}`); }
  }

  return { program, levels, library, competencies, kits, errors, warnings };
}

// Upserts everything. Items removed from the files are deactivated (never deleted) so that
// learner history stays intact.
function importToDb(data) {
  const { program, levels, library, competencies = [], kits = [] } = data;
  const counts = { tracks: 0, levels: 0, courses: 0, lessons: 0, questions: 0, skills: 0, library: 0, competencies: 0, interview_kits: 0 };
  db.tx(() => {
    (program.tracks || []).forEach((t, i) => {
      db.run(`INSERT INTO tracks (code, title, description, sort, prerequisite_level, kind, audience) VALUES (?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(code) DO UPDATE SET title=excluded.title, description=excluded.description, sort=excluded.sort,
          prerequisite_level=excluded.prerequisite_level, kind=excluded.kind, audience=excluded.audience`,
      t.code, t.title, t.description || '', i + 1, t.prerequisite_level || null, t.kind === 'standalone' ? 'standalone' : 'progression', t.audience || 'technician');
      counts.tracks++;
    });
    for (const table of ['levels', 'courses', 'lessons', 'questions', 'skills']) db.run(`UPDATE ${table} SET active = 0`);

    for (const l of levels) {
      db.run(`INSERT INTO levels (code, track_code, sort, title, grade, description, duration_months, outcomes_json, course_pass_score, exam_pass_score, exam_questions, exam_time_limit, min_ojt_hours, active)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
        ON CONFLICT(code) DO UPDATE SET track_code=excluded.track_code, sort=excluded.sort, title=excluded.title, grade=excluded.grade, description=excluded.description,
          duration_months=excluded.duration_months, outcomes_json=excluded.outcomes_json, course_pass_score=excluded.course_pass_score, exam_pass_score=excluded.exam_pass_score,
          exam_questions=excluded.exam_questions, exam_time_limit=excluded.exam_time_limit, min_ojt_hours=excluded.min_ojt_hours, active=1`,
      l.code, l.track, l.sort, l.title, l.grade, l.description, l.duration_months, JSON.stringify(l.outcomes), l.course_pass_score, l.exam_pass_score,
      l.exam_questions, l.exam_time_limit, l.min_ojt_hours);
      counts.levels++;

      for (const s of l.skills) {
        db.run(`INSERT INTO skills (code, level_code, sort, title, category, critical, description, equipment_json, criteria_json, active)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
          ON CONFLICT(code) DO UPDATE SET level_code=excluded.level_code, sort=excluded.sort, title=excluded.title, category=excluded.category, critical=excluded.critical,
            description=excluded.description, equipment_json=excluded.equipment_json, criteria_json=excluded.criteria_json, active=1`,
        s.code, l.code, s.sort, s.title, s.category, s.critical, s.description, JSON.stringify(s.equipment), JSON.stringify(s.criteria));
        counts.skills++;
      }

      for (const c of l.courses) {
        db.run(`INSERT INTO courses (code, level_code, sort, title, description, objectives_json, estimated_hours, pass_score, questions_per_attempt, active)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
          ON CONFLICT(code) DO UPDATE SET level_code=excluded.level_code, sort=excluded.sort, title=excluded.title, description=excluded.description,
            objectives_json=excluded.objectives_json, estimated_hours=excluded.estimated_hours, pass_score=excluded.pass_score, questions_per_attempt=excluded.questions_per_attempt, active=1`,
        c.code, l.code, c.sort, c.title, c.description, JSON.stringify(c.objectives), c.estimated_hours, c.pass_score, c.questions_per_attempt);
        counts.courses++;
        for (const ls of c.lessons) {
          db.run(`INSERT INTO lessons (id, course_code, sort, title, minutes, video_url, video_suggestion, body_md, active)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
            ON CONFLICT(id) DO UPDATE SET course_code=excluded.course_code, sort=excluded.sort, title=excluded.title, minutes=excluded.minutes,
              video_url=excluded.video_url, video_suggestion=excluded.video_suggestion, body_md=excluded.body_md, active=1`,
          ls.id, c.code, ls.sort, ls.title, ls.minutes, ls.video_url, ls.video_suggestion, ls.body_md);
          counts.lessons++;
        }
        for (const q of c.questions) {
          db.run(`INSERT INTO questions (id, course_code, type, prompt, choices_json, answer_json, explanation, ref, active)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
            ON CONFLICT(id) DO UPDATE SET course_code=excluded.course_code, type=excluded.type, prompt=excluded.prompt, choices_json=excluded.choices_json,
              answer_json=excluded.answer_json, explanation=excluded.explanation, ref=excluded.ref, active=1`,
          q.id, c.code, q.type, q.prompt, JSON.stringify(q.choices), JSON.stringify(q.answer), q.explanation, q.ref);
          counts.questions++;
        }
      }
    }

    db.run("UPDATE library_docs SET active = 0 WHERE source = 'curriculum'");
    for (const d of library) {
      db.run(`INSERT INTO library_docs (org_id, source, source_key, category, title, tags, levels_json, body_md, last_reviewed, review_interval_months, active, updated_at)
        VALUES (NULL, 'curriculum', ?, ?, ?, ?, ?, ?, ?, ?, 1, datetime('now'))
        ON CONFLICT(source_key) WHERE source_key IS NOT NULL DO UPDATE SET category=excluded.category, title=excluded.title, tags=excluded.tags, levels_json=excluded.levels_json,
          body_md=excluded.body_md, last_reviewed=excluded.last_reviewed, review_interval_months=excluded.review_interval_months, active=1, updated_at=datetime('now')`,
      d.source_key, d.category, d.title, d.tags, JSON.stringify(d.levels), d.body_md, d.last_reviewed, d.review_interval_months);
      counts.library++;
    }
    db.run('UPDATE competency_areas SET active = 0');
    for (const a of competencies) {
      db.run(`INSERT INTO competency_areas (code, sort, title, components, courses_json, guide_key, active) VALUES (?, ?, ?, ?, ?, ?, 1)
        ON CONFLICT(code) DO UPDATE SET sort=excluded.sort, title=excluded.title, components=excluded.components, courses_json=excluded.courses_json,
          guide_key=excluded.guide_key, active=1`, a.code, a.sort, a.title, a.components, JSON.stringify(a.courses), a.guide_key);
      counts.competencies++;
    }
    db.run('UPDATE interview_kits SET active = 0');
    for (const k of kits) {
      db.run(`INSERT INTO interview_kits (code, title, position, kit_json, active) VALUES (?, ?, ?, ?, 1)
        ON CONFLICT(code) DO UPDATE SET title=excluded.title, position=excluded.position, kit_json=excluded.kit_json, active=1`,
      k.code, k.title, k.position || '', JSON.stringify(k));
      counts.interview_kits++;
    }
    db.run("INSERT INTO meta (key, value) VALUES ('curriculum_version', ?), ('curriculum_imported_at', datetime('now')) ON CONFLICT(key) DO UPDATE SET value = excluded.value",
      String(program.version || ''));
  });
  return counts;
}

module.exports = { load, importToDb, parseFrontMatter, DEFAULT_DIR };
