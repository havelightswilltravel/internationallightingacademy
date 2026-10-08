'use strict';
// Loads curriculum/ into the database. Safe to re-run; learner progress is preserved.
const db = require('../src/db');
const curriculum = require('../src/curriculum');

const data = curriculum.load(process.argv[2]);
data.warnings.forEach((w) => console.log('WARN  ' + w));
if (data.errors.length) {
  data.errors.forEach((e) => console.log('ERROR ' + e));
  console.error(`\nImport aborted: ${data.errors.length} error(s). Run "npm run validate-curriculum" after fixing.`);
  process.exit(1);
}
db.open();
const counts = curriculum.importToDb(data);
console.log('Imported:', counts);
db.close();
