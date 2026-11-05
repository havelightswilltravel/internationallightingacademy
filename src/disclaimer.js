'use strict';
// The program-wide disclaimer (docs/DISCLAIMER.md). Every user must acknowledge the current
// version before using the program; editing the file changes the version and asks everyone again.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const FILE = path.join(__dirname, '..', 'docs', 'DISCLAIMER.md');
let cache = null;

function current() {
  const stat = fs.statSync(FILE);
  if (!cache || cache.mtime !== stat.mtimeMs) {
    const text = fs.readFileSync(FILE, 'utf8');
    cache = { mtime: stat.mtimeMs, text, version: crypto.createHash('sha256').update(text).digest('hex').slice(0, 12) };
  }
  return cache;
}

module.exports = { current };
