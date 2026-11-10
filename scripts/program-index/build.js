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

// Proposed twelve-grade map (docs/discussions/006-twelve-grade-ladder.md).
const GRADES = {
  1: ['LT1-C01', 'LT1-C02', 'LT1-C03', 'LT1-C06', 'LT1-C11'],
  2: ['LT1-C04', 'LT1-C05', 'LT1-C07', 'LT1-C08', 'LT1-C09', 'LT1-C10'],
  3: ['LT2-C01', 'LT2-C03', 'LT2-C04', 'LT2-C06'],
  4: ['LT2-C02', 'LT2-C05', 'LT2-C07', 'LT2-C11'],
  5: ['LT2-C08', 'LT2-C09', 'LT2-C10', 'LT2-C12'],
  6: ['LT3-C01', 'LT3-C02', 'LT3-C03', 'LT3-C07'],
  7: ['LT3-C04', 'LT3-C05', 'LT3-C06', 'LT3-C12', 'EA1-C05'],
  8: ['LT3-C08', 'LT3-C09', 'LT3-C10', 'LT3-C11'],
  9: ['LT4-C07', 'LT4-C04', 'LT4-C06', 'EA2-C01', 'EA2-C02'],
  10: ['LT4-C01', 'LT4-C02', 'LT4-C03', 'LT4-C05', 'EA3-C04'],
  11: ['LT5-C01', 'LT5-C02', 'LT5-C06', 'EA2-C05', 'EA4-C02'],
  12: ['LT5-C03', 'LT5-C04', 'LT5-C05', 'EA4-C05'],
};
const gradeOf = {};
for (const [g, list] of Object.entries(GRADES)) for (const c of list) gradeOf[c] = Number(g);
const yearOfGrade = (g) => (g <= 5 ? 1 : g <= 8 ? 2 : g <= 10 ? 3 : 4);
const SKILL_YEAR = { LT1: '1', LT2: '1', LT3: '2', LT4: '3', LT5: '4', MGR: 'mgr' };

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
    const grade = gradeOf[c.code] || null;
    let def;
    if (level.code === 'MGR') def = 'mgr';
    else if (grade) def = String(yearOfGrade(grade));
    else def = 'none';
    g.courses.push({
      key: `c_${c.code}`,
      code: c.code,
      order: c.sort,
      title: c.title,
      hours: c.estimated_hours,
      grade,
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
      def: archived ? 'none' : SKILL_YEAR[level.code] || 'none',
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

// Level a returning archived course would join, from its default year (Year 1-4 -> LT2/LT3/LT4/LT5).
const LEVEL_OF_YEAR = { 1: 'LT2', 2: 'LT3', 3: 'LT4', 4: 'LT5' };
for (const g of groups) for (const c of g.courses) {
  c.level = g.archived ? (c.grade ? LEVEL_OF_YEAR[yearOfGrade(c.grade)] : '') : g.code;
  delete c.grade;
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
