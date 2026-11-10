#!/usr/bin/env node
// Builds the Program Index tool: a single page (index.html) with the whole program and a
// year drop-down per item, plus corpus.json (lesson and library text) used by Get Help.
// Usage: node scripts/program-index/build.js <out-dir>
'use strict';
const fs = require('fs');
const path = require('path');
const C = require('../../src/curriculum');

const outDir = process.argv[2] || path.join(__dirname, '../../program-index-out');
fs.mkdirSync(outDir, { recursive: true });

const root = path.join(__dirname, '../../curriculum');
const prog = C.load(root);
const arch = C.load(path.join(root, 'archive/electrical-track'));

// Two-year program, five levels. Year 1 = LT1-LT2, Year 2 = LT3-LT5.
const LEVEL_YEAR = { LT1: '1', LT2: '1', LT3: '2', LT4: '2', LT5: '2', MGR: 'mgr' };
// Archived electrical courses recommended to return (Discussion 004) and the level each would join.
const RETURNING = {
  'EA1-C05': 'LT3', 'EA2-C01': 'LT4', 'EA2-C02': 'LT4', 'EA3-C04': 'LT4',
  'EA2-C05': 'LT5', 'EA4-C02': 'LT5', 'EA4-C05': 'LT5',
};

const lessonKey = (courseCode, sort) => `l_${courseCode}_${String(sort).padStart(2, '0')}`;

const groups = [];
const corpus = { lessons: [], guides: [] };

function addLevel(level, archived) {
  const g = {
    code: level.code,
    title: level.title,
    archived,
    req: archived ? null : {
      months: level.duration_months,
      coursePass: level.course_pass_score,
      examPass: level.exam_pass_score,
      examQuestions: level.exam_questions,
      examMinutes: level.exam_time_limit,
      ojt: level.min_ojt_hours,
    },
    outcomes: level.outcomes || [],
    courses: [],
    skills: [],
  };
  for (const c of level.courses) {
    const def = archived ? 'none' : (LEVEL_YEAR[level.code] || 'none');
    g.courses.push({
      key: `c_${c.code}`,
      code: c.code,
      order: c.sort,
      title: c.title,
      hours: c.estimated_hours,
      level: archived ? (RETURNING[c.code] || '') : level.code,
      def,
      description: (c.description || '').trim(),
      objectives: c.objectives || [],
      questions: (c.questions || []).length,
      lessons: c.lessons.map((s) => ({
        key: lessonKey(c.code, s.sort),
        id: s.id,
        title: s.title,
        minutes: s.minutes,
        video: s.video_url || '',
      })),
    });
    if (!archived) {
      for (const s of c.lessons) {
        corpus.lessons.push({
          id: s.id,
          course: c.code,
          courseTitle: c.title,
          level: level.code,
          title: s.title,
          minutes: s.minutes,
          video: s.video_url || '',
          videoSuggestion: (s.video_suggestion || '').trim(),
          text: s.body_md.replace(/!\[[^\]]*\]\([^)]*\)/g, ''),
        });
      }
    }
  }
  for (const s of level.skills || []) {
    g.skills.push({
      key: `s_${s.code}`,
      code: s.code,
      title: s.title,
      category: s.category,
      critical: !!s.critical,
      def: archived ? 'none' : LEVEL_YEAR[level.code] || 'none',
      description: (s.description || '').trim(),
      criteria: s.criteria || [],
    });
  }
  groups.push(g);
}

for (const l of prog.levels) addLevel(l, false);
for (const l of arch.levels) addLevel(l, true);

for (const g of prog.library) {
  corpus.guides.push({
    id: g.source_key.replace(/^library\//, '').replace(/\.md$/, ''),
    category: g.category,
    title: g.title,
    text: g.body_md.replace(/!\[[^\]]*\]\([^)]*\)/g, ''),
  });
}

const data = { built: new Date().toISOString().slice(0, 10), groups };
fs.writeFileSync(path.join(outDir, 'index-data.json'), JSON.stringify(data));
const tpl = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
const json = JSON.stringify(data).replace(/</g, '\\u003c');
fs.writeFileSync(path.join(outDir, 'index.html'), tpl.replace('__INDEX_DATA__', json));
fs.writeFileSync(path.join(outDir, 'corpus.json'), JSON.stringify(corpus));

const counts = groups.reduce((a, g) => {
  a.courses += g.courses.length;
  a.lessons += g.courses.reduce((n, c) => n + c.lessons.length, 0);
  a.skills += g.skills.length;
  return a;
}, { courses: 0, lessons: 0, skills: 0 });
console.log('Wrote', outDir, JSON.stringify(counts), 'corpus lessons', corpus.lessons.length, 'guides', corpus.guides.length);
