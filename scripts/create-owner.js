'use strict';
// Creates (or resets) a platform-owner account: npm run create-owner -- you@example.com "Your Name"
const db = require('../src/db');
const auth = require('../src/auth');

const [email, name] = process.argv.slice(2);
if (!email) {
  console.error('Usage: npm run create-owner -- <email> "<name>"');
  process.exit(1);
}
db.open();
const password = auth.randomPassword();
const existing = db.one('SELECT * FROM users WHERE email = ?', email.toLowerCase());
if (existing) {
  db.run("UPDATE users SET role = 'owner', org_id = NULL, password_hash = ?, must_change_password = 1, active = 1 WHERE id = ?", auth.hashPassword(password), existing.id);
} else {
  db.run("INSERT INTO users (org_id, email, name, password_hash, role, must_change_password) VALUES (NULL, ?, ?, ?, 'owner', 1)",
    email.toLowerCase(), name || 'Platform Owner', auth.hashPassword(password));
}
console.log(`Owner account ready: ${email}\nTemporary password: ${password}\n(You will be asked to change it at first sign-in.)`);
db.close();
