# Roadmap — target: program developed by December 31, 2026 (medium priority)

Status as of **October 8, 2026**: platform v0.1 is built and the full draft curriculum is written.
That leaves about 12 weeks to get from draft to production-ready.

## Phase 1 — Foundation ✅ (October 2026)
- [x] Grade structure: LT1–LT5 lighting track (~24 months) → LT5 → EA1–EA4 + JW electrical track
- [x] Master syllabus and content format
- [x] Draft curriculum for every level: lessons, question banks, hands-on skill checklists
- [x] Troubleshooting library (26 starter guides)
- [x] Draft content totals: 55 courses, 223 lessons, 875 questions, 77 hands-on skills
- [x] Web platform: sign-in, roles, video lessons, quizzes and timed exams, hands-on sign-offs, OJT hours, promotions and certificates, placement, pay scale, library, reports, multi-company licensing
- [x] Automated tests

## Phase 2 — Review & your content (October 15 – November 15)
- [ ] Gather your existing **troubleshooting guides** and add them (Admin → Library, or `curriculum/library/`)
- [ ] **SME review** of LT1–LT2 first (the content new hires see first), then LT3–LT5, then EA/JW. Use `docs/SME_REVIEW_NOTES.md` as the checklist.
- [ ] Safety manager review of all safety content against your written safety program
- [ ] Set the **pay scale** per grade (optional) and decide the policy for tying pay to grade
- [ ] Decide **placement** rules for current technicians (who is placed at which grade, and how they are assessed)
- [ ] Name the designated **evaluators** and give them `docs/EVALUATOR_GUIDE.md`

## Phase 3 — Videos & pilot (November 15 – December 15)
- [ ] Film priority videos for LT1–LT2 using each lesson's *suggested video* (Admin → Videos lists them)
- [ ] Deploy to a hosted server with HTTPS and backups (`docs/DEPLOYMENT.md`)
- [ ] **Pilot** with 5–10 technicians and 2–3 evaluators; collect feedback; fix confusing questions
- [ ] Placement assessments for existing technicians

## Phase 4 — Launch readiness (December 15 – 31)
- [ ] Company-wide rollout plan and kickoff
- [ ] License agreement / terms of service and privacy policy, drafted by an attorney (`docs/LICENSING.md`)
- [ ] Decide on registered apprenticeship for the electrical track (DOL / state agency)
- [ ] **Program declared developed — December 31, 2026**

## 2027 and beyond — commercialization & enhancements
- [ ] First external licensee (pilot customer)
- [ ] Online billing (Stripe) and self-service trials
- [ ] Company branding per licensee (logo and colors)
- [ ] Single sign-on (Microsoft 365 / Google) for larger licensees
- [ ] Email notifications (hours approved, promotion, exam retake available, review due)
- [ ] Question-bank item analysis (which questions most people miss)
- [ ] Mobile-friendly offline lesson access for field technicians
- [ ] Photo and video evidence upload on skill sign-offs
- [ ] PostgreSQL option for large multi-tenant hosting
- [ ] 2026 NEC update of the electrical track as states adopt it
- [ ] Annual technology refresh (see `CONTENT_GOVERNANCE.md`, technology watch list)
