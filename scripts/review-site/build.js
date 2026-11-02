'use strict';
// Builds a single-file, read-only review site of the whole curriculum for subject-matter
// experts and managers: node scripts/review-site/build.js <output.html>
const fs = require('node:fs');
const path = require('node:path');
const curriculum = require('../../src/curriculum');
const { renderMarkdown } = require('../../src/helpers');

const ROOT = path.join(__dirname, '..', '..');
const out = process.argv[2] || path.join(ROOT, 'review-site.html');
const data = curriculum.load();
if (data.errors.length) {
  console.error('Curriculum has errors; run npm run validate-curriculum first.');
  process.exit(1);
}

const slug = (s) => s.replace(/\.md$/, '').replace(/[^A-Za-z0-9-]+/g, '-');
const guideKey = (sourceKey) => slug(sourceKey.replace(/^library\//, '').replace('/', '-'));

const levels = {};
const courses = {};
const lessons = {};
for (const l of data.levels) {
  levels[l.code] = {
    code: l.code, title: l.title, grade: l.grade, track: l.track, description: l.description, duration: l.duration_months,
    outcomes: l.outcomes,
    reqs: { coursePass: l.course_pass_score, examPass: l.exam_pass_score, examQ: l.exam_questions, examMin: l.exam_time_limit, hours: l.min_ojt_hours },
    skills: l.skills.map((s) => ({ code: s.code, title: s.title, category: s.category, critical: !!s.critical, description: s.description, equipment: s.equipment, criteria: s.criteria })),
    courses: l.courses.map((c) => c.code),
  };
  for (const c of l.courses) {
    courses[c.code] = {
      code: c.code, level: l.code, title: c.title, description: c.description, objectives: c.objectives, hours: c.estimated_hours,
      pass: c.pass_score, perAttempt: c.questions_per_attempt,
      lessons: c.lessons.map((ls) => slug(ls.id.replace('/', '-'))),
      questions: c.questions.map((q) => ({ id: q.id, type: q.type, q: q.prompt, choices: q.choices, answer: q.answer, explanation: q.explanation, ref: q.ref })),
    };
    for (const ls of c.lessons) {
      const key = slug(ls.id.replace('/', '-'));
      lessons[key] = { key, course: c.code, title: ls.title, minutes: ls.minutes, video: ls.video_suggestion, html: renderMarkdown(ls.body_md) };
    }
  }
}

const tracks = (data.program.tracks || []).map((t) => ({ code: t.code, title: t.title, description: (t.description || '').trim(), levels: (t.levels || []).filter((c) => levels[c]) }));
const library = data.library.map((g) => ({
  key: guideKey(g.source_key), title: g.title, category: g.category, tags: g.tags, levels: g.levels, reviewed: g.last_reviewed, html: renderMarkdown(g.body_md),
}));
const scale = { 1: 'I have seen it', 2: 'I understand it', 3: 'I perform it', 4: 'I can teach it' };
const matrix = {
  scale,
  areas: data.competencies.map((a) => ({ title: a.title, components: a.components, courses: a.courses, guide: a.guide_key ? guideKey(a.guide_key) : null })),
};
const kits = data.kits.map((k) => ({
  code: k.code, title: k.title, position: k.position, instructions: k.instructions || '', background: k.background || [],
  competencies: k.competencies || [], closing: k.closing || '', watch_for: k.watch_for || [], observe: k.observe || [], requirements: k.requirements || [],
}));
const docs = [
  ['sme', 'SME review checklist', 'docs/SME_REVIEW_NOTES.md'],
  ['syllabus', 'Master syllabus', 'docs/SYLLABUS.md'],
  ['evaluator', 'Evaluator guide', 'docs/EVALUATOR_GUIDE.md'],
  ['governance', 'Content governance', 'docs/CONTENT_GOVERNANCE.md'],
  ['sources', 'Reference coverage', 'docs/REFERENCE_COVERAGE.md'],
].map(([key, title, file]) => ({ key, title, html: renderMarkdown(fs.readFileSync(path.join(ROOT, file), 'utf8')) }));

const totals = {
  levels: Object.keys(levels).length,
  courses: Object.keys(courses).length,
  lessons: Object.keys(lessons).length,
  questions: Object.values(courses).reduce((a, c) => a + c.questions.length, 0),
  skills: Object.values(levels).reduce((a, l) => a + l.skills.length, 0),
  guides: library.length,
};
const payload = {
  meta: { generated: new Date().toISOString().slice(0, 10), version: String(data.program.version || ''), totals },
  tracks, trackTitle: Object.fromEntries(tracks.map((t) => [t.code, t.title])), levels, courses, lessons, library, matrix, kits, docs,
};

// Keep the JSON safe inside a <script> element.
const json = JSON.stringify(payload).replace(/<\//g, '<\\/').replace(/<!--/g, '<\\u0021--').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
const html = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8').replace('/*__DATA__*/', () => json);
fs.writeFileSync(out, html);
console.log(`Wrote ${out} (${(html.length / 1048576).toFixed(1)} MB): ${JSON.stringify(totals)}`);
