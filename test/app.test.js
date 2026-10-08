'use strict';
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ila-test-'));
process.env.DATABASE_PATH = path.join(tmp, 'test.db');
process.env.UPLOAD_DIR = path.join(tmp, 'uploads');

const db = require('../src/db');
const auth = require('../src/auth');
const curriculum = require('../src/curriculum');
const { createApp } = require('../src/app');

let server;
let base;
const PW = 'Test-pass-1234';

// Minimal browser: keeps cookies and the latest CSRF token.
function client() {
  let cookie = '';
  let csrf = '';
  async function req(method, url, form) {
    let body;
    if (form) {
      body = new URLSearchParams({ _csrf: csrf });
      for (const [k, v] of Object.entries(form)) for (const x of [].concat(v)) body.append(k, x);
    }
    const res = await fetch(base + url, { method, body, redirect: 'manual', headers: { cookie, ...(body ? { 'content-type': 'application/x-www-form-urlencoded' } : {}) } });
    const set = res.headers.getSetCookie();
    if (set.length) cookie = set.map((c) => c.split(';')[0]).join('; ');
    const text = await res.text();
    const m = /name="_csrf" value="([a-f0-9]+)"/.exec(text);
    if (m) csrf = m[1];
    return { status: res.status, text, location: res.headers.get('location') };
  }
  const c = {
    cookie: () => cookie,
    get: (u) => req('GET', u),
    post: (u, f = {}) => req('POST', u, f),
    async login(email) {
      await c.get('/login');
      return c.post('/login', { email, password: PW });
    },
  };
  return c;
}

const ANSWERS = { Q01: ['A'], Q02: ['B'], Q03: ['A', 'C'] };
// Reads the exam page and builds a form that answers every question correctly (or wrongly).
function answerSheet(html, correct = true) {
  const form = new URLSearchParams();
  const re = /name="(q_[^"]+)" value="(\d+)"> <span>([^<]+)<\/span>/g;
  let m;
  while ((m = re.exec(html))) {
    const want = ANSWERS[m[1].slice(-3)];
    if (want.includes(m[3]) === correct) form.append(m[1], m[2]);
  }
  return form;
}

before(async () => {
  db.open();
  const data = curriculum.load(path.join(__dirname, 'fixtures', 'curriculum'));
  assert.deepEqual(data.errors, []);
  curriculum.importToDb(data);
  db.run("INSERT INTO organizations (name, slug, license_seats) VALUES ('Acme Lighting', 'acme', 2), ('Other Co', 'other', 5)");
  const h = auth.hashPassword(PW);
  const add = (org, email, role) => db.run('INSERT INTO users (org_id, email, name, password_hash, role) VALUES (?, ?, ?, ?, ?)', org, email, email.split('@')[0], h, role);
  add(null, 'owner@x.test', 'owner');
  add(1, 'admin@acme.test', 'admin');
  add(1, 'eval@acme.test', 'evaluator');
  add(1, 'tech@acme.test', 'technician');
  add(2, 'eval@other.test', 'evaluator');
  await new Promise((r) => { server = createApp().listen(0, r); });
  base = `http://127.0.0.1:${server.address().port}`;
});

after(() => {
  server.close();
  db.close();
  fs.rmSync(tmp, { recursive: true, force: true });
});

test('curriculum loader validates and imports', () => {
  assert.equal(db.one('SELECT COUNT(*) AS n FROM levels WHERE active = 1').n, 2);
  assert.equal(db.one('SELECT COUNT(*) AS n FROM questions').n, 6);
  assert.equal(db.one("SELECT COUNT(*) AS n FROM library_docs WHERE source = 'curriculum'").n, 1);
  // Re-import is idempotent.
  curriculum.importToDb(curriculum.load(path.join(__dirname, 'fixtures', 'curriculum')));
  assert.equal(db.one('SELECT COUNT(*) AS n FROM lessons').n, 2);
});

test('login required, bad password rejected, CSRF enforced', async () => {
  const c = client();
  assert.equal((await c.get('/')).location, '/login?next=%2F');
  await c.get('/login');
  assert.equal((await c.post('/login', { email: 'tech@acme.test', password: 'nope' })).status, 401);
  const raw = await fetch(base + '/login', { method: 'POST', body: new URLSearchParams({ email: 'tech@acme.test', password: PW }), headers: { 'content-type': 'application/x-www-form-urlencoded' } });
  assert.equal(raw.status, 403);
});

test('full technician journey: lessons, quiz, exam, hours, skills, promotion', async () => {
  const tech = client();
  assert.equal((await tech.login('tech@acme.test')).location, '/');
  let page = await tech.get('/');
  assert.match(page.text, /Working on: .*LT1/);

  // Lesson renders with video embed and sanitized HTML.
  page = await tech.get('/lessons/LT1-C01/01-intro');
  assert.match(page.text, /youtube-nocookie\.com\/embed\/dQw4w9WgXcQ/);
  assert.doesNotMatch(page.text, /<script>alert/);
  await tech.post('/lessons/LT1-C01/01-intro/complete');

  // Locked level cannot be tested.
  let r = await tech.post('/exams/start', { kind: 'course', code: 'LT2-C01' });
  assert.equal(r.location, '/courses/LT2-C01');

  // Final exam is locked before the course quiz is passed.
  r = await tech.post('/exams/start', { kind: 'level', code: 'LT1' });
  assert.equal(r.location, '/levels/LT1');

  // Fail the quiz, then pass it.
  r = await tech.post('/exams/start', { kind: 'course', code: 'LT1-C01' });
  let exam = await tech.get(r.location);
  assert.doesNotMatch(exam.text, /explanation|isAnswer/);
  r = await tech.post(r.location + '/submit', Object.fromEntries(answerSheet(exam.text, false)));
  let result = await tech.get(r.location);
  assert.match(result.text, /NOT PASSED/);

  r = await tech.post('/exams/start', { kind: 'course', code: 'LT1-C01' });
  exam = await tech.get(r.location);
  const sheet = answerSheet(exam.text, true);
  const body = new URLSearchParams(sheet);
  const id = r.location.split('/').pop();
  // Use multi-value form (checkboxes) via raw fetch through the client by encoding manually.
  r = await tech.post(`/exams/${id}/submit`, Object.fromEntries([...body.keys()].map((k) => [k, body.getAll(k)])));
  result = await tech.get(`/exams/${id}/result`);
  assert.match(result.text, /100%/);
  assert.match(result.text, /PASSED/);

  // Level final exam is timed and passes.
  r = await tech.post('/exams/start', { kind: 'level', code: 'LT1' });
  exam = await tech.get(r.location);
  assert.match(exam.text, /data-expires="\d+"/);
  const fsheet = answerSheet(exam.text, true);
  const eid = r.location.split('/').pop();
  await tech.post(`/exams/${eid}/submit`, Object.fromEntries([...fsheet.keys()].map((k) => [k, fsheet.getAll(k)])));
  result = await tech.get(`/exams/${eid}/result`);
  assert.match(result.text, /PASSED/);
  assert.match(result.text, /answer keys are not shown/);

  // Log hours.
  r = await tech.post('/hours', { work_date: '2026-01-05', hours: '8', description: 'Relamped warehouse fixtures' });
  page = await tech.get('/hours');
  assert.match(page.text, /pending/);

  // Not ready yet — hours and skills outstanding.
  const ev = client();
  await ev.login('eval@acme.test');
  const techId = db.one("SELECT id FROM users WHERE email = 'tech@acme.test'").id;
  r = await ev.post(`/team/${techId}/promote`, { level: 'LT1' });
  assert.equal(db.one('SELECT current_level_code AS c FROM users WHERE id = ?', techId).c, null);

  // Approve hours.
  const hid = db.one('SELECT id FROM ojt_hours WHERE user_id = ?', techId).id;
  await ev.get('/approvals');
  await ev.post(`/approvals/${hid}`, { decision: 'approve' });

  // Skill: critical skill with a safety deviation fails even if all criteria are checked.
  await ev.get(`/team/${techId}/skills/LT1-S01`);
  await ev.post(`/team/${techId}/skills/LT1-S01`, { met: ['0', '1'], safety_deviation: '1', result: 'pass', notes: 'Skipped LOTO verification' });
  assert.equal(db.one('SELECT result FROM skill_signoffs ORDER BY id DESC LIMIT 1').result, 'fail');
  await ev.post(`/team/${techId}/skills/LT1-S01`, { met: ['0', '1'], result: 'pass' });
  assert.equal(db.one('SELECT result FROM skill_signoffs ORDER BY id DESC LIMIT 1').result, 'pass');

  // Promote.
  await ev.get(`/team/${techId}`);
  r = await ev.post(`/team/${techId}/promote`, { level: 'LT1', notes: 'Great work' });
  assert.equal(db.one('SELECT current_level_code AS c FROM users WHERE id = ?', techId).c, 'LT1');
  const cert = db.one('SELECT certificate_no FROM promotions WHERE user_id = ?', techId).certificate_no;
  const verify = await client().get(`/verify/${cert}`);
  assert.match(verify.text, /Valid certificate/);

  page = await tech.get('/');
  assert.match(page.text, /Working on: .*LT2/);
  page = await tech.get('/transcript');
  assert.match(page.text, /Achieved/);
});

test('company isolation: staff cannot see other companies', async () => {
  const other = client();
  await other.login('eval@other.test');
  const techId = db.one("SELECT id FROM users WHERE email = 'tech@acme.test'").id;
  assert.equal((await other.get(`/team/${techId}`)).status, 404);
  assert.equal((await other.get(`/transcript/${techId}`)).status, 404);
  const team = await other.get('/team');
  assert.doesNotMatch(team.text, /tech@acme|>tech</);
  // Technicians cannot reach staff pages.
  const tech = client();
  await tech.login('tech@acme.test');
  assert.equal((await tech.get('/team')).status, 403);
  assert.equal((await tech.get('/admin/users')).status, 403);
});

test('admin: seat limits, temp passwords, pay scale, CSV report', async () => {
  const admin = client();
  await admin.login('admin@acme.test');
  await admin.get('/admin/users');
  await admin.post('/admin/users', { name: 'New Tech', email: 'new@acme.test', role: 'technician' });
  let page = await admin.get('/admin/users');
  assert.match(page.text, /Temporary passwords/);
  // Seats = 2 and two techs now exist, so a third is refused.
  await admin.post('/admin/users', { name: 'Third', email: 'third@acme.test', role: 'technician' });
  assert.equal(db.one("SELECT COUNT(*) AS n FROM users WHERE email = 'third@acme.test'").n, 0);
  const nu = db.one("SELECT * FROM users WHERE email = 'new@acme.test'");
  assert.equal(nu.must_change_password, 1);

  await admin.get('/admin/pay');
  await admin.post('/admin/pay', { rate_LT1: '21.50', rate_LT2: '24' });
  assert.equal(db.one("SELECT hourly_rate AS r FROM org_pay_rates WHERE org_id = 1 AND level_code = 'LT1'").r, 21.5);

  const csv = await admin.get('/admin/reports.csv');
  assert.match(csv.text, /^name,email/);
  assert.match(csv.text, /tech@acme.test/);
  assert.doesNotMatch(csv.text, /other\.test/);
});

test('owner: license a company; expired license blocks sign-in', async () => {
  const owner = client();
  await owner.login('owner@x.test');
  await owner.get('/platform/orgs');
  await owner.post('/platform/orgs', { name: 'Bright Co', admin_name: 'Bri', admin_email: 'bri@bright.test', license_seats: '10' });
  const org = db.one("SELECT * FROM organizations WHERE name = 'Bright Co'");
  assert.equal(org.license_seats, 10);
  assert.ok(db.one("SELECT 1 AS x FROM users WHERE email = 'bri@bright.test' AND role = 'admin'"));

  db.run("UPDATE organizations SET license_expires_at = '2000-01-01' WHERE id = 2");
  const c = client();
  const r = await c.login('eval@other.test');
  assert.equal(r.status, 401);
  assert.match(r.text, /license has expired/);
  db.run('UPDATE organizations SET license_expires_at = NULL WHERE id = 2');
});

test('library search and company-private guides', async () => {
  db.run("INSERT INTO library_docs (org_id, category, title, body_md) VALUES (2, 'sop', 'Other Co Secret SOP', 'x')");
  const tech = client();
  await tech.login('tech@acme.test');
  const page = await tech.get('/library?q=LED');
  assert.match(page.text, /LED out/);
  const all = await tech.get('/library');
  assert.doesNotMatch(all.text, /Secret SOP/);
});

test('every page renders for each role', async () => {
  const techId = db.one("SELECT id FROM users WHERE email = 'tech@acme.test'").id;
  const pages = {
    'tech@acme.test': ['/', '/levels', '/levels/LT1', '/levels/LT2', '/courses/LT1-C01', '/hours', '/library', '/library/1', '/transcript', '/account'],
    'eval@acme.test': ['/', '/team', `/team/${techId}`, `/team/${techId}?level=LT2`, `/team/${techId}/skills/LT2-S01`, '/approvals', `/transcript/${techId}`, '/lessons/LT1-C01/01-intro'],
    'admin@acme.test': ['/admin/users', '/admin/pay', '/admin/videos', '/admin/videos?level=LT2', '/admin/library', '/admin/library/new', '/admin/reports'],
    'owner@x.test': ['/', '/team', '/platform/orgs', '/platform/orgs/1', '/platform/curriculum', '/admin/users', '/admin/users?org=1', '/admin/videos?org=0', '/admin/library'],
  };
  for (const [email, urls] of Object.entries(pages)) {
    const c = client();
    await c.login(email);
    for (const u of urls) {
      const r = await c.get(u);
      assert.equal(r.status, 200, `${email} ${u} → ${r.status}`);
    }
  }
});

test('multipart uploads: lesson video link and library guide with attachment', async () => {
  const admin = client();
  await admin.login('admin@acme.test');
  const page = await admin.get('/admin/videos');
  const csrf = /name="_csrf" value="([a-f0-9]+)"/.exec(page.text)[1];
  const cookieJar = admin; // reuse session via helper below
  async function multipart(url, fields, file) {
    const fd = new FormData();
    fd.append('_csrf', csrf);
    for (const [k, v] of Object.entries(fields)) fd.append(k, v);
    if (file) fd.append('file', new Blob([file.data]), file.name);
    return cookieJar.raw(url, fd);
  }
  // Expose raw fetch with session cookie.
  admin.raw = async (url, fd) => {
    const res = await fetch(base + url, { method: 'POST', body: fd, redirect: 'manual', headers: { cookie: admin.cookie() } });
    return { status: res.status, location: res.headers.get('location') };
  };
  let r = await multipart('/admin/videos', { lesson_id: 'LT1-C01/01-intro', level: 'LT1', url: 'https://vimeo.com/123456' });
  assert.equal(r.status, 302);
  assert.equal(db.one('SELECT url FROM lesson_videos WHERE org_id = 1').url, 'https://vimeo.com/123456');
  const tech = client();
  await tech.login('tech@acme.test');
  assert.match((await tech.get('/lessons/LT1-C01/01-intro')).text, /player\.vimeo\.com\/video\/123456/);

  r = await multipart('/admin/library', { title: 'Acme Ballast SOP', category: 'SOP', body_md: '## Steps\n1. LOTO' }, { name: 'sop.pdf', data: '%PDF-1.4 test' });
  assert.equal(r.status, 302);
  const doc = db.one("SELECT * FROM library_docs WHERE title = 'Acme Ballast SOP'");
  assert.equal(doc.org_id, 1);
  assert.match(doc.file_path, /^\/uploads\/.+\.pdf$/);
  assert.equal((await tech.get(doc.file_path)).status, 200);
  assert.equal((await client().get(doc.file_path)).status, 302); // not signed in

  // Missing CSRF on multipart is rejected.
  const fd = new FormData();
  fd.append('lesson_id', 'LT1-C01/01-intro');
  const bad = await fetch(base + '/admin/videos', { method: 'POST', body: fd, redirect: 'manual', headers: { cookie: admin.cookie() } });
  assert.equal(bad.status, 403);
});
