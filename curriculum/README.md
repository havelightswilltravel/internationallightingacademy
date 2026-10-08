# Curriculum Content Format

All training content lives in this folder as plain text (YAML + Markdown) so it can be
version-controlled, reviewed by subject-matter experts, and updated as lighting technology
changes. The app imports it with `npm run import-curriculum` (idempotent — re-run any time
content changes; learner progress is preserved).

```
curriculum/
  program.yaml                      # tracks and level order
  levels/
    LT1/
      level.yaml                    # level metadata, requirements, hands-on skills
      courses/
        LT1-C01/
          course.yaml               # course metadata, lesson order, question bank
          lessons/
            01-some-topic.md        # lesson text (Markdown + front matter)
  library/
    <category>/<guide>.md           # troubleshooting guides & reference docs
```

## level.yaml

```yaml
code: LT1                     # unique, matches folder name
track: LIGHTING               # LIGHTING | ELECTRICAL
order: 1                      # order within track
title: Lighting Technician I (Entry Level)
grade: Grade 1
typical_duration_months: 3    # guidance only — advancement is by demonstrated competence
description: >
  One paragraph describing the role at this level and what the tech can do once certified.
outcomes:                     # what a tech can do after passing this level
  - ...
requirements:
  course_pass_score: 80       # % required on every course quiz
  final_exam:
    pass_score: 80
    questions: 50             # drawn at random from all course question banks in the level
    time_limit_minutes: 90
  min_ojt_hours: 400          # verified on-the-job hours logged at this level (0 = none)
skills:                       # hands-on skills; every one must be signed off by an evaluator
  - code: LT1-S01             # <LEVEL>-S<NN>
    title: Inspect, select and don PPE for a lighting service call
    category: Safety
    critical: true            # critical skills must be passed with zero safety deviations
    description: One or two sentences on the task.
    equipment: [hard hat, safety glasses, ...]
    criteria:                 # observable, pass/fail performance criteria
      - Inspects each PPE item for damage before use
      - ...
```

## course.yaml

```yaml
code: LT1-C01                 # <LEVEL>-C<NN>, matches folder name
title: Orientation, Safety Culture & PPE
order: 1
estimated_hours: 6
description: One paragraph.
objectives:
  - ...
lessons:                      # in order; files in ./lessons
  - 01-welcome-and-safety-culture.md
quiz:
  pass_score: 80
  questions_per_attempt: 10   # random draw from the bank below
  questions:
    - id: LT1-C01-Q01         # unique, stable — never reuse an id for a different question
      type: single            # single (one correct) | multi (all correct choices required)
      q: Question text?
      choices:
        - choice A
        - choice B
        - choice C
        - choice D
      answer: 1               # 0-based index; for multi, a list e.g. [0, 2]
      explanation: Why the answer is correct (shown after submission).
      ref: OSHA 29 CFR 1910.335   # optional source reference
```

## Lesson Markdown

```markdown
---
title: Welcome & Safety Culture
minutes: 20
video:                        # optional: YouTube/Vimeo URL or /uploads/<file>.mp4
video_suggestion: >           # what an in-house video for this lesson should show
  Supervisor walks through a real job-site safety briefing...
---

## Section heading
Lesson body in Markdown. Use headings, lists, tables, and callouts like:

> **Safety:** Always verify absence of voltage with a tested meter (live-dead-live).

## Key Takeaways
- ...
```

## Library guide Markdown

```markdown
---
title: LED Fixture Will Not Turn On
category: LED                 # folder name is the category
tags: [led, driver, no-light]
levels: [LT2, LT3]            # levels where this guide is most relevant
last_reviewed: 2026-10-08
review_interval_months: 12
---
```

## Content rules

- Safety first: every procedure that involves energized equipment must state LOTO /
  verification-of-absence-of-voltage steps.
- Code references cite the **2023 NEC (NFPA 70)** unless noted; the edition adopted by the
  local Authority Having Jurisdiction (AHJ) always governs. Only cite specific section
  numbers when certain.
- All content is **DRAFT until reviewed by a licensed electrician / SME** — see
  `docs/CONTENT_GOVERNANCE.md`.
