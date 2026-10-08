'use strict';
const path = require('node:path');
const crypto = require('node:crypto');
const { marked } = require('marked');
const sanitizeHtml = require('sanitize-html');
const multer = require('multer');

const ALLOWED = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2', 'del', 'input']),
  allowedAttributes: { a: ['href', 'title', 'target', 'rel'], img: ['src', 'alt', 'title'], th: ['align'], td: ['align'], input: ['type', 'checked', 'disabled'], '*': ['id'] },
  allowedSchemes: ['http', 'https', 'mailto'],
};

function renderMarkdown(md) {
  return sanitizeHtml(marked.parse(md || '', { gfm: true }), ALLOWED);
}

// Turns a YouTube / Vimeo / direct-file URL into something the lesson page can embed.
function videoEmbed(url) {
  if (!url) return null;
  let m = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(url);
  if (m) return { type: 'iframe', src: `https://www.youtube-nocookie.com/embed/${m[1]}?rel=0` };
  m = /vimeo\.com\/(?:video\/)?(\d+)/.exec(url);
  if (m) return { type: 'iframe', src: `https://player.vimeo.com/video/${m[1]}` };
  if (/^\/uploads\//.test(url) || /^https:\/\/.+\.(mp4|webm|m4v|mov)(\?.*)?$/i.test(url)) return { type: 'file', src: url };
  return { type: 'link', src: url };
}

function fmtDate(v) {
  if (!v) return '';
  const d = v instanceof Date ? v : new Date(String(v).length <= 10 ? v + 'T00:00:00' : String(v).replace(' ', 'T') + 'Z');
  return isNaN(d) ? String(v) : d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function money(v) {
  return v == null ? '' : '$' + Number(v).toFixed(2);
}

function addMonths(dateStr, months) {
  if (!dateStr) return null;
  const d = new Date(dateStr + 'T00:00:00Z');
  d.setUTCMonth(d.getUTCMonth() + Number(months || 12));
  return d.toISOString().slice(0, 10);
}

function uploader(dir, { maxMb, accept }) {
  return multer({
    storage: multer.diskStorage({
      destination: dir,
      filename: (req, file, cb) => cb(null, `${Date.now()}-${crypto.randomBytes(4).toString('hex')}${path.extname(file.originalname).toLowerCase().replace(/[^.a-z0-9]/g, '')}`),
    }),
    limits: { fileSize: maxMb * 1024 * 1024 },
    fileFilter: (req, file, cb) => cb(null, accept.test(path.extname(file.originalname).toLowerCase())),
  });
}

const toArray = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);

const viewHelpers = { renderMarkdown, videoEmbed, fmtDate, money, addMonths, today: () => new Date().toISOString().slice(0, 10) };

module.exports = { renderMarkdown, videoEmbed, fmtDate, money, addMonths, uploader, toArray, viewHelpers };
