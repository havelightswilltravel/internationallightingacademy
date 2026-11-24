# Video scripts

One JSON file per training video (276), named by the video ID in the Training Video List workbook
(`docs/Training Video List.xlsx`, Scripts tab). Each file lists the scenes in order: speaker, scene/background,
on-screen text, the exact words the presenter (avatar) says, and seconds.

- `source: "lesson"` (253): written from the lesson text.
- `source: "outline"` (23): written from the course outline before the lesson exists; check it when the lesson is written.
- Task videos open with a Job Mindset prompt for that task.
- Rebuild the workbook after edits: `node scripts/program-index/build.js <dir>`, then
  `python3 scripts/program-index/build_review_xlsx.py <dir> scripts/program-index/placement-current.json --clean`, then
  `python3 scripts/program-index/build_video_list_xlsx.py <dir> scripts/program-index/placement-current.json`.

## Lesson issues found while writing (to resolve before filming)
1. Dead front: the Branch Circuits lesson lets a tech remove it under a qualified lead's supervision; the Breakers lessons say only trained, qualified and authorized people. Needs one company rule (tied to the draft breaker/disconnect list).
2. Failed extension cords: one lesson says cut both ends off, another says cut the plug only if the supervisor directs.
3. Capacitor replacement: one lesson says same µF and equal or higher voltage; two say exact µF and voltage.
4. Voltage checks: one lesson says verify voltage "with your supervisor or the panel schedule", which conflicts with the meter-first rule.
5. Live measurements in the emergency-lighting troubleshooting lesson and the exterior "meter first" rule don't say a qualified person takes them.
6. Lessons that moved levels still say "At LT1..." and cite old course numbers; fixed when the layout is applied to the curriculum.
7. Placeholder people's names in a few lesson examples (kept out of the videos); brand names in the track lighting lesson.
8. Small items: a failure count (7 vs 8) in the retrofit-vs-replace lesson; a clamp-meter "closed panel" reading to confirm; a 300 VA low-voltage demo should use 35 W or LED lamps.
