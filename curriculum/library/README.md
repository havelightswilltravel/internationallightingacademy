# Field Troubleshooting Library

This folder holds the troubleshooting guides and quick-reference cards techs use in the
field. The app imports these with `npm run import-curriculum` and shows them on the
Library page, searchable by category, tag and level.

> **All content in this library is DRAFT until it has been reviewed by a licensed
> electrician / subject-matter expert.** See `docs/CONTENT_GOVERNANCE.md`. Nothing here
> replaces your company's electrical safety program, the manufacturer's instructions, or
> the code edition adopted by the local Authority Having Jurisdiction (AHJ).

## Layout

```
library/
  safety/        LOTO, verifying absence of voltage, general safe work
  led/           LED fixtures, drivers, TLEDs
  dimming/       0-10V, phase-cut and other dimming problems
  fluorescent/   lamps, ballasts, end-of-life
  hid/           metal halide, high-pressure sodium, ignitors, capacitors
  controls/      sensors, time clocks, contactors, networked controls
  emergency/     emergency fixtures, exit signs, testing
  exterior/      poles, photocells, underground circuits, GFCI
  electrical/    branch-circuit problems: inrush, voltage drop, open neutrals
```

The folder name **is** the category. Use lowercase, hyphenated folder and file names
(e.g. `led/led-flicker-strobing.md`).

## Adding your company's own guides

Companies are encouraged to add their own troubleshooting guides for the equipment,
customers and sites they work on. There are two ways:

1. **Add a Markdown file here** (for companies that maintain their own copy of the
   curriculum repository) and re-run `npm run import-curriculum`.
2. **Upload through the app's admin Library page.** Company admins can upload a guide in
   the same Markdown format; it is visible to that company's techs.

Either way, use the same front matter and section structure so every guide reads the same:

```markdown
---
title: LED Fixture Will Not Turn On
category: led                 # must match the folder / category
tags: [led, driver, no-light]
levels: [LT2, LT3]            # levels where this guide is most relevant
last_reviewed: 2026-10-08     # date of the last SME review
review_interval_months: 12
---
```

Required sections, in this order:

- **Symptoms** - what the tech sees on site
- **Safety first** - PPE, LOTO and verify-absence-of-voltage steps
- **Tools needed**
- **Likely causes** - table: cause | how to confirm | fix, most likely first
- **Step-by-step diagnosis** - numbered, with expected readings where appropriate
- **When to escalate**
- **Documentation** - what to record on the work order

Content rules for every guide:

- Default to **de-energized** work. Any procedure touching energized equipment must state
  the LOTO and verification-of-absence-of-voltage steps, and must say that energized
  troubleshooting is only done by qualified persons, with appropriate PPE, under an
  energized-work justification per NFPA 70E.
- Cite the **2023 NEC (NFPA 70)** unless noted, and only cite section numbers you are
  certain of. The AHJ's adopted edition governs.
- Stay manufacturer-agnostic. Where a step is model-specific, tell the tech to follow the
  manufacturer's instructions rather than writing a brand-specific procedure.
- Do not include customer names, addresses or other confidential site details in a
  shared guide.

## Review cycle

Every guide carries `last_reviewed` and `review_interval_months` (default 12).

1. **Draft** - written by a senior tech, trainer or content author.
2. **SME review** - a licensed electrician / SME checks technical accuracy, safety steps
   and code references, then sets `last_reviewed` to the review date.
3. **Publish** - merged (or uploaded) and imported.
4. **Periodic review** - a guide is due when `last_reviewed + review_interval_months` has
   passed. Overdue guides should be re-reviewed or withdrawn. Review sooner when:
   - a new NEC or NFPA 70E edition is adopted locally,
   - an incident, near miss or field report shows the guide is wrong or unclear,
   - the equipment or technology covered changes significantly.

Field techs who find an error should report it to their supervisor or trainer right away;
safety-related corrections are made immediately, not held for the next scheduled review.
