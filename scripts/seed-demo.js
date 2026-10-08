'use strict';
// Creates a demo company with sample users so you can click through the app.
// NOT for production: every demo account uses the same known password.
const db = require('../src/db');
const auth = require('../src/auth');

const PASSWORD = process.env.DEMO_PASSWORD || 'Demo-pass-2026';
db.open();
if (!db.one('SELECT 1 AS x FROM levels LIMIT 1')) {
  console.error('Import the curriculum first: npm run import-curriculum');
  process.exit(1);
}
let org = db.one("SELECT * FROM organizations WHERE slug = 'demo-lighting'");
if (!org) {
  db.run("INSERT INTO organizations (name, slug, license_seats, contact_name) VALUES ('Demo Lighting Services', 'demo-lighting', 25, 'Demo Admin')");
  org = db.one("SELECT * FROM organizations WHERE slug = 'demo-lighting'");
}
const hash = auth.hashPassword(PASSWORD);
const users = [
  [null, 'owner@demo.academy', 'Platform Owner', 'owner', null],
  [org.id, 'admin@demo.academy', 'Dana Admin', 'admin', null],
  [org.id, 'evaluator@demo.academy', 'Evan Evaluator', 'evaluator', null],
  [org.id, 'tech1@demo.academy', 'Taylor Tech', 'technician', null],
  [org.id, 'tech2@demo.academy', 'Jordan Rivera', 'technician', 'LT1'],
  [org.id, 'tech3@demo.academy', 'Sam Okafor', 'technician', 'LT4'],
];
for (const [orgId, email, name, role, level] of users) {
  if (db.one('SELECT 1 AS x FROM users WHERE email = ?', email)) continue;
  db.run('INSERT INTO users (org_id, email, name, password_hash, role, current_level_code) VALUES (?, ?, ?, ?, ?, ?)', orgId, email, name, hash, role, level);
}
const rates = { NONE: 18, LT1: 20, LT2: 22.5, LT3: 25, LT4: 28, LT5: 31, EA1: 32, EA2: 34, EA3: 36, EA4: 38, JW: 42 };
for (const [code, rate] of Object.entries(rates)) {
  db.run('INSERT OR IGNORE INTO org_pay_rates (org_id, level_code, hourly_rate) VALUES (?, ?, ?)', org.id, code, rate);
}
console.log(`Demo ready. Sign in with any of these (password: ${PASSWORD}):`);
users.forEach((u) => console.log(`  ${u[3].padEnd(11)} ${u[1]}`));
db.close();
