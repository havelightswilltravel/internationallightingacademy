---
title: Leading the Company Troubleshooting Procedures
minutes: 35
video:
video_suggestion: >
  A lead technician ride-along: the lead watches a newer tech work an HID pole call and an
  emergency fixture call, stops them at the right moments to ask "what does that reading tell
  you?", corrects an unsafe shortcut (metering an energized pulse-start socket with the ignitor
  connected), and afterward rates the tech on the 1–4 scale and writes up the electrician
  referral together.
---

## From Doing to Teaching

The company's Master Troubleshooting Guide asks every technician to rate themselves on each
system: **1 — I have seen it, 2 — I understand it, 3 — I perform it, 4 — I can teach it.** At LT4
you are expected to reach level 4 on most systems and to bring other technicians up the scale.
That means knowing not just the steps but **why** each step comes where it does, which shortcuts
cause callbacks, and where the written procedure needs a safety correction.

## Using the 1–4 Scale with Your Crew

| Rating | What you should see before signing it | How to move the tech up |
|---|---|---|
| 1 — Seen it | Can name the system and its components on site | Show the parts on a live job; have them identify each from the component list |
| 2 — Understands it | Can explain the procedure in order and what each reading means | Ask "what would you check next if…?" questions; whiteboard the logic |
| 3 — Performs it | Completes the procedure safely and correctly with you observing | Supervised calls; hands-on skill sign-offs (LT2-S20, LT3-S20 to S22 and others) |
| 4 — Can teach it | Explains it to a newer tech, catches their errors, knows the escalation points | Have them lead a ride-along while you observe |

Rate on evidence, not years on the job. Record ratings in the tech's training file so gaps
drive the next assignments.

## The Logic Behind Each Company Sequence

Every company procedure follows the same skeleton: **cheapest, most likely check first → prove
power → split the system in half → replace the part the readings point to → verify.**

| System | The "split" the procedure makes | Typical shortcut error you must catch |
|---|---|---|
| Fluorescent / CF | Blackened ends? Then power vs no power; then all lamps out vs some | Replacing ballasts without checking for a T5 power-reset or a cracked socket |
| HID | Socket (open-circuit) voltage good vs bad | Metering a pulse-start socket with the ignitor connected; reusing the old lamp with a new kit |
| Emergency | Test button: lights on test vs not | Replacing the battery unit when the standard ballast failed; forgetting the battery plug |
| Motion sensors | Line in vs switch leg out; pack output vs sensor input | Swapping sensors when the pack failed; using ground as a neutral |
| Time clock / photocell | Line vs load; forced on (bypass/cover) vs automatic | Leaving a clock in bypass; condemning a photocell blinded by a new sign |
| LED signage | Primary vs secondary; connections vs modules | Condemning a supply that cuts out with no load connected |
| Contactors / breakers / relays | Coil vs contacts; within tolerance vs not | Opening dead fronts or replacing breakers without qualification |

When a tech skips a step, ask what the skipped step would have proven. That question teaches
the logic far better than repeating the rule.

## Where the Written Procedure Needs Safety Context

Lead techs make sure the procedure is followed **as corrected** in the training program:

1. **Energized readings** ("check power," "test line voltage," "test the switch leg," socket
   voltage) are taken only by persons qualified under the employer's NFPA 70E program, in the
   required PPE. Everyone else works de-energized: lockout, then verify absence of voltage
   live-dead-live.
2. **HID socket voltage** on pulse-start metal halide and HPS: the ignitor is disconnected (with
   the circuit locked out) before the open-circuit reading. Chart values are typical; the
   ballast label governs.
3. **HID capacitor "voltage in vs voltage out"** is replaced in routine practice by a de-energized
   capacitance test after discharging the capacitor.
4. **Motion sensors "check for good ground":** verify ground *and* neutral; current devices must
   not use the ground as a current return.
5. **Breakers, contactors, panels and relays** stay "write it up for an electrician" unless the
   company has qualified the tech.
6. **Battery-equipped fixtures** (emergency ballasts, bug eyes, exits) are treated as energized
   until the battery connector is unplugged.

## Writing the Electrician Referral

A good referral lets the electrician bring the right parts and skip your troubleshooting. Coach
techs to include:

| Item | Example |
|---|---|
| Location and circuit | "Pole P-14, north lot, circuit LP-2-17/19 (277/480 V)" |
| Symptom and pattern | "Pole-base fuse blew again within 10 minutes of replacement; other poles OK" |
| Readings | "Line 482 V at hand hole before fuses; ballast windings continuous; capacitor 24.1 µF (OK)" |
| What was ruled out | "New lamp, new fuse, photocell bypassed with shorting cap" |
| Suspected cause | "Possible fault in pole wiring or underground conductor" |
| Safety status | "Circuit left locked out at contactor and tagged; customer informed" |

## Mini-Cases for Coaching

**Case A — "New battery pack, still dark."** A tech replaced an emergency LED driver because a
troffer stayed dark. It still doesn't work on the wall switch, but lights on the test button.
*Coaching point:* the test button already proved the emergency side was good; the normal LED
driver (or the switched feed) was the fault. Ask the tech what the first test result meant.

**Case B — "Photocell keeps failing."** Three photocells replaced in a month on a building with a
new illuminated sign. Each tests good on the bench. *Coaching point:* the company procedure ends
with checking for nearby light sources and adjusting the sleeve and orientation; the tech stopped
at "replace the photocell."

**Case C — "Sensor replaced twice."** Ceiling sensors in a classroom were replaced twice; lights
still don't come on. *Coaching point:* the power pack had line voltage in but no 24 VDC out — the
procedure's first isolation step was skipped.

## Key Takeaways
- Use the 1–4 scale on evidence and aim for every lead to reach "can teach it."
- Every company sequence splits the system with one decisive check; teach what each check proves.
- Catch the common shortcut errors: no T5 reset, ignitor left connected, wrong side of the emergency split, pack not isolated, nearby light sources ignored.
- Apply the safety corrections: qualified energized testing, ignitor disconnected for OCV, de-energized capacitor tests, neutral not ground, panel work escalated, batteries unplugged.
- Write electrician referrals with location, readings, what was ruled out and safety status.
