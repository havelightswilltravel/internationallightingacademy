'use strict';
const db = require('./db');
const { createApp } = require('./app');

if (process.env.NODE_ENV === 'production' && (!process.env.SESSION_SECRET || process.env.SESSION_SECRET.length < 32)) {
  console.error('SESSION_SECRET must be set to a random string of at least 32 characters in production.');
  process.exit(1);
}

db.open();
const port = Number(process.env.PORT || 3000);
createApp().listen(port, () => console.log(`International Lighting Academy running on http://localhost:${port}`));
