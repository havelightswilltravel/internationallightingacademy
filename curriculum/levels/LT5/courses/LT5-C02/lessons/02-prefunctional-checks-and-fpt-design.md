---
title: Pre-Functional Checks and Writing Functional Tests
minutes: 30
video:
video_suggestion: >
  an LT5 technician walks a newly installed floor with a tablet checklist, verifying sensor locations,
  wall station labels, low-voltage wiring terminations (de-energized, with LOTO shown on the
  power pack circuit) and network device status. Then show the tech converting one line of a
  sequence of operations into numbered test steps with expected results.
---

## Pre-Functional Verification
Functional testing wastes everyone's time if devices are missing, miswired or offline.
**Pre-functional checklists** confirm the installation is complete before testing starts.
Complete them space by space.

### Typical lighting pre-functional checklist
- [ ] Fixtures installed per drawings and fixture schedule (type, quantity, location)
- [ ] Fixture CCT, lumen package and driver type match approved submittals
- [ ] Occupancy/vacancy sensors installed at the locations shown, not blocked by
  partitions, shelving or HVAC diffusers (ultrasonic sensors can false-trigger from airflow)
- [ ] Photosensors installed and aimed per manufacturer instructions
- [ ] Wall stations installed, labeled and at the correct heights
- [ ] Low-voltage control wiring (0-10V, Class 2 communications) separated from power
  conductors as required, and terminated correctly
- [ ] Power packs, relays and room controllers installed and accessible
- [ ] Emergency fixtures, emergency drivers and UL 924 devices installed per drawings
- [ ] Networked devices powered, addressed and showing online in the software
- [ ] Panel schedules and circuit labels updated
- [ ] Manufacturer startup completed (for networked systems) and startup report received

> **Safety:** Pre-functional checks often find wiring errors. Correct them only after
> applying LOTO to the power circuit and verifying absence of voltage (live-dead-live).
> Remember that 0-10V wiring is Class 2 but it often terminates in a device that also contains
> line-voltage connections; treat the enclosure as energized until verified.

## Reading the Sequence of Operations
The **sequence of operations (SOO)** is the controls "script." Good sequences specify, for
each space type:
- How lights turn on (manual-on, or automatic partial-on/full-on)
- Occupancy time delay and what happens at time-out (off, or dim to a level)
- Daylight zone behavior (target level, dimming range, off when daylight is sufficient or not)
- Scheduled operation (on/off times, sweeps, after-hours override duration)
- Manual control options (raise/lower, scenes)
- Emergency operation (what happens on loss of normal power)
- Integration points (BMS, demand response)

If the sequence is vague ("lights shall be controlled by sensors"), raise a question through
your supervisor before testing. You cannot test against an undefined expected result.

## Writing a Functional Performance Test
An FPT turns each requirement into numbered steps with an **action**, an **expected result**,
and a place to record the **actual result** and **pass/fail**.

**Sequence excerpt:** "Private offices: vacancy sensor, manual-on. Lights turn off 15 minutes
after the space is vacated. Lights remain off when the occupant leaves and sensor times out."

| Step | Action | Expected result | Actual | P/F |
|---|---|---|---|---|
| 1 | Enter unoccupied office with lights off; wait 30 s | Lights remain off (no auto-on) | | |
| 2 | Press wall station ON | Lights turn on to full | | |
| 3 | Work normally at desk for 5 min | Lights stay on | | |
| 4 | Exit, close door, start timer | Lights off at 15 min (+/- tolerance in Cx plan) | | |
| 5 | Re-enter within grace period (if specified) | Per sequence | | |
| 6 | Press OFF while occupied | Lights off and stay off while occupied | | |

### Tips for good tests
- **One expected result per step.** It makes failures obvious.
- **State tolerances** in advance (for example, time-out within +/- 1 minute; light level
  within +/- 10% of target).
- **Shorten long delays only if allowed.** Many systems have a test mode that shortens
  time-outs; record if you used it, and verify the final delay setting afterward.
- **Test a sample or 100%?** The Cx plan decides. Energy codes and specifications may require
  testing all devices or a defined sample with expansion if failures are found. Follow the
  plan.
- **Include the reset.** Every test should end with the system back in normal mode with
  correct final settings.

## Organizing the Test Effort
- Group tests by floor and space type to minimize lift moves.
- Schedule daylight tests on days and times when daylight is available, and repeat at night
  for the electric-only condition if required.
- Schedule emergency tests with the owner, and have extra temporary lighting available if a
  failure would leave an egress path dark.
- Bring the programming tool and access credentials; many fixes are setting changes.
- Have the electrician of record available for wiring corrections.

## Key Takeaways
- Complete pre-functional checklists before functional testing; it saves time.
- Look for sensors blocked or placed near HVAC diffusers, mislabeled stations and offline devices.
- Correct wiring errors only under LOTO with live-dead-live verification.
- A clear sequence of operations is required to define expected results.
- FPT steps need an action, one expected result, an actual result and pass/fail, with tolerances defined.
- Always return the system to normal mode with verified final settings.
