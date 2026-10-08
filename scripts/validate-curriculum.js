'use strict';
// Checks every curriculum file for format errors without touching the database.
const curriculum = require('../src/curriculum');

const data = curriculum.load(process.argv[2]);
const n = (k) => data.levels.reduce((a, l) => a + (k === 'skills' ? l.skills.length : l.courses.reduce((b, c) => b + (k === 'courses' ? 1 : c[k].length), 0)), 0);
console.log(`Levels: ${data.levels.length}  Courses: ${n('courses')}  Lessons: ${n('lessons')}  Questions: ${n('questions')}  Skills: ${n('skills')}  Library guides: ${data.library.length}`);
data.warnings.forEach((w) => console.log('WARN  ' + w));
data.errors.forEach((e) => console.log('ERROR ' + e));
process.exit(data.errors.length ? 1 : 0);
