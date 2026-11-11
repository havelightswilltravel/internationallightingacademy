---
title: "Program layout team review (internal notes)"
status: Out for team review
raised: 2026-11-11
---

# Discussion 009: Program layout team review (internal notes)

The team-review workbook (`docs/Lighting Program Layout - Team Review.xlsx`) shows only the new layout, with no
change history. This page keeps the history and the follow-up work internally.

## Reviewers
Kyle, Les, Chris Munford, Chris Tanko, Danny Smith and Zac Young each have their own tab. The All Suggestions tab
gathers their input in one place for the program lead.

## Layout decisions made November 11, 2026 (owner plus recommendations)
- Sequence follows the owner's view of how a technician develops:
  - safety, equipment (ladders and aerial lifts), tools, customer service and project/retrofit work come first (LT1)
  - lighting builds from incandescent and fluorescent (LT1) to HID, LED, track and low-voltage (LT2)
  - exterior work follows lifts (LT3)
- Moved to LT1: Aerial Work Platforms (was LT3-C06), Project Readiness (was LT2-C12), LED Retrofit Fundamentals (was LT2-C05), and the fluorescent half of Fluorescent & HID.
- Fluorescent & HID (was LT2-C04) is split: fluorescent (lessons 1-2, about 3 h) in LT1; HID (lessons 3-5, about 5 h) in LT2.
- Moved to LT2: LED Technology & Drivers (was LT3-C01), Outlets & Switches (was LT1-C09), Parts Knowledge (was LT1-C10), Emergency & Egress (was LT3-C04, now LT2 #7).
- Print Reading moved to LT2 #6.
- Skills moved with their courses.
- Courses renumbered by level and position. The old-to-new map is in `scripts/program-index/code-map-2026-11-11.json`.
- Result: LT1 83 h, LT2 81 h, LT3 54 h, LT4 62 h, LT5 51 h; Year 1 164 h, Year 2 167 h; 331 h total against a 400 h target.

## Content work to do when the layout is applied to the curriculum
1. Rename course folders, codes, quiz ids and skill codes using the code map (keep quiz history).
2. Split the Fluorescent & HID course into two courses with their own quiz banks.
3. Reframe Project Readiness: new technicians start on project work in LT1 and learn to shift to service calls later (owner's note).
4. Move skills and rebalance the LT1 and LT2 exams.
5. Consider lengthening LT1 (now 83 h and 26 skills in a 3-month level) and adjusting months and field hours.
6. Rebuild the app, review site and Program Index tool, which still use the old codes until then.

## How to regenerate the workbook
`node scripts/program-index/build.js <dir>` then
`python3 scripts/program-index/build_review_xlsx.py <dir> scripts/program-index/placement-2026-11-11.json`.
