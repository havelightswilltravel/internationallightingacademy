# Deployment

The app is a single Node.js process with an embedded SQLite database. It runs comfortably on a
small cloud server (1 vCPU / 1–2 GB RAM) for hundreds of technicians.

## Environment variables

| Variable | Default | Notes |
|---|---|---|
| `NODE_ENV` | — | Set to `production`. |
| `PORT` | `3000` | |
| `SESSION_SECRET` | dev value | **Required in production:** a random string of 32+ characters (`openssl rand -hex 32`). |
| `COOKIE_SECURE` | — | Set to `1` when served over HTTPS (required in production). |
| `DATABASE_PATH` | `data/academy.db` | Put this on a persistent, backed-up disk. |
| `UPLOAD_DIR` | `uploads/` | Uploaded videos and documents. Persistent disk. |
| `MAX_VIDEO_MB` | `1024` | Maximum video upload size. |
| `MAX_DOC_MB` | `50` | Maximum library attachment size. |

## First-time setup on a server

```bash
git clone <repo> academy && cd academy
npm ci --omit=dev
npm run import-curriculum
npm run create-owner -- you@company.com "Your Name"
NODE_ENV=production SESSION_SECRET=... COOKIE_SECURE=1 npm start
```

Run it behind a reverse proxy with HTTPS (Caddy, nginx, or a platform load balancer), and use a
process manager (systemd, PM2, or the platform's own) so it restarts automatically.

Example `systemd` unit:

```ini
[Service]
WorkingDirectory=/opt/academy
Environment=NODE_ENV=production PORT=3000 COOKIE_SECURE=1 DATABASE_PATH=/var/lib/academy/academy.db UPLOAD_DIR=/var/lib/academy/uploads
EnvironmentFile=/etc/academy.env   # SESSION_SECRET=...
ExecStart=/usr/bin/npm start
Restart=always
User=academy
```

## Updating

```bash
git pull && npm ci --omit=dev && npm run import-curriculum && systemctl restart academy
```

## Backups

- **Database:** `sqlite3 academy.db ".backup /backups/academy-$(date +%F).db"` nightly (safe while running). Keep 30 days and copy them off the server.
- **Uploads:** sync the `uploads/` folder to object storage (S3, Backblaze B2, etc.).

## Video hosting

For a handful of videos, uploading MP4s is fine. As the library grows, host videos on Vimeo
(private/unlisted, domain-restricted), YouTube (unlisted), or a video CDN, and paste the link
into **Admin → Videos**. That keeps the server small and gives viewers adaptive streaming.

## Scaling later

SQLite handles a single server well. To serve many licensees at scale (multiple app servers),
migrate to PostgreSQL. The SQL is standard and all of it is in `src/`. That migration is on the
roadmap.
