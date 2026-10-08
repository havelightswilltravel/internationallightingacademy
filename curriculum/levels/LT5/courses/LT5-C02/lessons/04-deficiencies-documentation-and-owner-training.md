---
title: Deficiency Tracking, Documentation and Owner Training
minutes: 30
video:
video_suggestion: >
  Show an LT5 technician logging a failed daylight test in an issues log on a tablet, assigning it to
  the controls vendor, and later retesting it. Then film a 5-minute excerpt of an owner
  training session where the tech shows facility staff how to change a schedule, adjust a
  sensor time delay and run an emergency lighting test, handing over the O&M binder at the end.
---

## The Issues Log
Every deficiency found during commissioning goes into a single **issues log** (also called a
deficiency log). It is how problems get fixed instead of forgotten.

| Field | Example |
|---|---|
| Issue # | L-014 |
| Date found / found by | 2026-05-12, J. Ortiz |
| Location / system | Floor 3, Room 312, daylight zone 1 |
| Description | Fixtures do not dim with daylight; remain at 100% |
| Test reference | FPT-DL-03 step 3 |
| Responsible party | Controls vendor |
| Action taken | Photosensor assigned to wrong group; reassigned |
| Retest date / result | 2026-05-14, PASS (witness: CxA) |
| Status | Closed |

### Good deficiency descriptions
- State **what was expected and what happened**, not a guess at the cause: "Lights turned off
  after 4 min; expected 15 min." is better than "Sensor broken."
- Include photos or screenshots when useful.
- One issue per entry. Do not bundle unrelated problems.

### Closing issues
An issue is closed only after a **retest passes**, preferably witnessed. "Vendor says fixed" is
not closure. Track open issues at every coordination meeting, and escalate items that block
occupancy or affect life safety immediately.

## Common Lighting Commissioning Deficiencies
- Sensor time delays left at factory defaults (or in test mode)
- Fixtures assigned to the wrong zone or group
- Daylight sensors not calibrated, or calibrated at night
- Schedules in the wrong time zone, or daylight-saving disabled
- Wall station labels not matching function
- 0-10V polarity reversed or control wiring not landed (fixture stays at full or minimum)
- Emergency fixtures not going to full on loss of power because the transfer device is
  missing or miswired
- Networked devices offline due to addressing or gateway issues
- Exterior lighting not turned off or reduced per required schedule or photocell

> **Safety:** Fixing a deficiency that involves line-voltage wiring (for example, a miswired
> emergency transfer device or a power pack) requires LOTO and verification of absence of
> voltage. Do not make "quick" fixes on energized equipment because the owner is waiting.

## The Closeout Package
At turnover, the owner should receive a complete, organized package. Typical contents:
1. Completed pre-functional checklists and FPT forms (signed and dated)
2. Final issues log showing all items closed (or accepted by the owner with explanation)
3. Final control settings: sensor delays and sensitivity, daylight setpoints, schedules,
   scene levels, override durations
4. As-built drawings showing zones, device locations and circuits
5. Product data sheets, manufacturer installation and O&M manuals
6. Warranty information and contact numbers
7. Emergency lighting test records and recommended test schedule
8. Training records (date, attendees, topics)
9. Software backup files, licenses and login credentials for networked systems (delivered
   securely to the owner)

Energy codes typically require that documentation such as as-builts, O&M information and a
report of the functional testing be provided to the owner. Confirm specifics with the
adopted code and project specifications.

## Owner Training
Even a perfect system fails if no one knows how to operate it. Training should be hands-on,
recorded (if the owner wants), and focused on what operators will actually do.

### Training outline
1. **System overview:** what is installed, how it is zoned, and where controllers and gateways
   are located.
2. **Daily operation:** wall stations, scenes, overrides; what occupants will experience.
3. **Changing settings:** schedules, holidays, time delays, daylight levels (show in the
   software or with the tool).
4. **Emergency lighting:** location of test switches, monthly 30-second and annual 90-minute
   test requirements under NFPA 101, and how to keep records.
5. **Maintenance:** cleaning sensors and lenses, replacing failed drivers with matching
   products, who to call under warranty.
6. **Troubleshooting basics:** what to check before calling (power, schedule, override
   status) and how to describe problems.
7. **Questions and hands-on practice:** have each operator perform at least one task.

### Teaching tips
- Use the owner's actual building and screens, not generic slides.
- Leave a one-page quick reference sheet at the front desk or controller location.
- Record attendees and topics; have attendees sign.
- Offer a follow-up session after occupancy, when real questions come up.

## Post-Occupancy Follow-Up
A short visit four to eight weeks after occupancy catches problems that only appear with real
use: sensors timing out on people, daylight zones too dim on cloudy days, schedules not
matching real hours. Adjust, record new settings, and update the owner's documentation.

## Key Takeaways
- Log every deficiency with expected vs actual result, responsible party and retest result.
- Close issues only after a passing retest.
- Never make energized "quick fixes" on line-voltage wiring; use LOTO.
- Deliver a complete closeout package, including final settings and test records.
- Train owners hands-on on their own system and document the training.
- Plan a post-occupancy tune-up visit.
