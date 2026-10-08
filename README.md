# International Lighting Academy

A complete training program and web platform that takes field technicians from **day one as an
entry-level lighting tech to journeyman-electrician exam readiness** — and that you can license
to other companies.

```
LT1 Entry-Level ─► LT2 ─► LT3 ─► LT4 Senior ─► LT5 Certified Advanced Lighting Technician
                       ~24 months of lighting grades
                                                        │
                                                        ▼
           EA1 ─► EA2 ─► EA3 ─► EA4 ─► JW Journeyman Exam Prep   (Electrical Development Track)
```

**Advancement is earned, not given for time on the job.** To pass each grade a technician must:

1. Pass every course quiz (80%+, questions drawn at random from a bank).
2. Pass a timed level final exam (80%+; 24-hour wait between attempts).
3. Log the required on-the-job hours, each entry approved by a supervisor.
4. Demonstrate every hands-on skill to an evaluator, who signs off criterion by criterion.
   Critical safety skills fail automatically if a safety deviation is observed.
5. Get final promotion approval, which records the new grade and issues a certificate
   anyone can check at `/verify/<certificate-number>`.

## Curriculum at a glance

| | Lighting track (LT1–LT5) | Electrical track (EA1–EA4, JW) | Manager Module | Total |
|---|---|---|---|---|
| Courses | 43 | 24 | 6 | **73** |
| Lessons | 185 | 94 | 21 | **300** |
| Quiz/exam questions | 688 | 400 | 90 | **1,178** |
| Hands-on skills | 58 | 36 | 6 | **100** |

Plus 43 library guides (26 troubleshooting guides and 17 company field procedures), a 20-system
Skills Matrix, and two interview kits. Screenshots are in [`docs/screenshots/`](docs/screenshots/).

## What's in this repository

| Path | What it is |
|---|---|
| `curriculum/` | All training content as plain text: levels, courses, lessons, question banks, hands-on skill checklists, and the troubleshooting library. See [`curriculum/README.md`](curriculum/README.md). |
| `docs/SYLLABUS.md` | The master syllabus: every grade, course and skill area. |
| `docs/` | Program governance, evaluator guide, licensing model, deployment and roadmap. |
| `src/`, `views/`, `public/` | The web application (Node.js + SQLite). |
| `test/` | Automated tests. |

## Platform features

- **Sign-in and personal records.** Each technician sees their grade, progress toward the next one, test history, hours and skill sign-offs, and can print a transcript.
- **Video lessons.** Every lesson can show a YouTube or Vimeo video, a video link, or an MP4 you upload. Each lesson includes a *suggested video* describing what to film in-house. Licensed companies can swap in their own videos.
- **Quizzes and exams.** Random question draws, shuffled answers, server-side grading and timers, answer review with explanations for course quizzes. Final-exam answer keys are hidden to protect the question bank.
- **Hands-on skills assessments.** Evaluators observe and sign off each skill, with a full history and coaching notes.
- **On-the-job hours.** Technicians log hours and supervisors approve or reject them.
- **Promotions and certificates**, plus *placement* for experienced hires: an admin can grade them after a documented assessment without making them repeat lower levels.
- **Pay scale by grade.** Optional. Technicians see their current rate and the rate at their next grade.
- **Skills Matrix.** Built from the company Master Troubleshooting Guide. Technicians rate themselves on 20 field systems: 1 = I have seen it, 2 = I understand it, 3 = I perform it, 4 = I can teach it. They also write out the troubleshooting steps and components for each system. Evaluators confirm the ratings, and a team grid shows who can do or teach what.
- **Manager Module and Hiring.** A separate track for managers covering hiring and retention: defining the role, sourcing, behavior-based interviewing, legal and fair hiring, reference checks and offers, and onboarding and retention. Managers complete it before interviewing. Digital interview scorecards built from the company's Technician and Electrician interview kits score answers 1–9 and include observation and requirement checklists. Candidates can be compared, blank kits printed, and a hire turned into a technician account in one click.
- **Troubleshooting library.** Searchable guides with review-due tracking. Companies can add private guides or upload PDF and Word files.
- **Multi-company licensing.** You, the platform owner, create licensee companies with technician seat limits, plans and expiry dates. Each company's data is isolated, and suspending a company or letting its license expire blocks sign-in.
- **Reports**, with a CSV export for payroll and HR.

### Roles

| Role | Can do |
|---|---|
| **Platform Owner** (you) | Everything: licensee companies, licenses, curriculum imports, platform-wide videos and guides. |
| **Company Admin** | Users, pay scale, company videos and guides, reports, placements. Also everything an evaluator can do. |
| **Evaluator / Supervisor** | Team progress, skill sign-offs, Skills Matrix confirmations, hours approvals, promotions, hiring scorecards, Manager Module. |
| **Technician** | Study, take tests, log hours, view their own records. |

## Quick start

Requires **Node.js 22.5 or newer**. There is no separate database server: SQLite is built into Node.

```bash
npm install
npm run import-curriculum        # load curriculum/ into the database
npm run seed-demo                # optional: demo company + users (password Demo-pass-2026)
npm start                        # http://localhost:3000
```

For a real installation, skip `seed-demo` and create your own owner account:

```bash
npm run create-owner -- you@yourcompany.com "Your Name"
```

Other commands:

```bash
npm test                         # automated tests
npm run validate-curriculum      # check content files for errors without importing
```

Configuration is through environment variables; see [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Important

Training content is a **draft until it has been reviewed by a licensed electrician or other
subject-matter expert**; see [`docs/CONTENT_GOVERNANCE.md`](docs/CONTENT_GOVERNANCE.md).
Journeyman licensing is regulated by each state. The electrical track is built to align with
a registered apprenticeship, but your state decides which hours and classroom instruction count.
