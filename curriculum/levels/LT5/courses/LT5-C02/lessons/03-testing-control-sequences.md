---
title: Testing Occupancy, Daylight, Schedule and Emergency Sequences
minutes: 35
video:
video_suggestion: >
  Film four short segments in a training lab or finished building: (1) timing an occupancy
  sensor time-out and checking coverage by walking the room; (2) measuring a daylight zone with
  an illuminance meter while covering and uncovering the photosensor; (3) checking a schedule
  sweep and after-hours override; (4) testing a UL 924 emergency transfer device by
  interrupting normal power to the branch circuit with the owner's coordination.
---

## Occupancy and Vacancy Sensors
**What to verify:** coverage, turn-on behavior, time delay, time-out behavior and false
triggering.

1. **Coverage walk:** Move slowly through the space, including corners and behind partitions.
   With PIR sensors, small motions at a desk are the hardest to detect. Use the sensor's test
   mode or LED indicator to confirm detection.
2. **Turn-on:** Confirm manual-on or auto-on (and partial-on level, if specified).
3. **Time delay:** Leave the space and time how long until lights turn off or dim. Recent
   editions of the energy codes generally cap occupancy time-outs (commonly at 20 minutes);
   the sequence may specify less.
4. **False-on / false-off:** Check that lights do not turn on from hallway traffic through an
   open door or from HVAC airflow (common with ultrasonic sensors), and do not turn off on a
   seated occupant.
5. **Adjust and retest:** Sensitivity, time delay and masking adjustments are part of
   commissioning. Record final settings.

| Symptom | Likely cause | Fix |
|---|---|---|
| Lights off while seated | PIR cannot see small motion; desk out of range | Relocate or switch to dual-technology; adjust sensitivity |
| Lights on from hallway traffic | Sensor sees through door | Mask lens; reduce sensitivity; relocate |
| Lights cycle randomly | Ultrasonic picking up airflow | Move away from diffuser; reduce sensitivity |
| Lights never turn off | Time delay set to maximum or test mode stuck; wiring bypass | Check settings; verify wiring under LOTO |

## Daylight Responsive Controls
**What to verify:** zones match drawings, response direction is correct, target levels are
maintained, and the system does not cycle.

1. **Confirm zone assignment:** Fixtures in the primary sidelit (and secondary, if required)
   zone dim; interior fixtures do not.
2. **Measure:** Place the illuminance meter at the task surface in the daylight zone.
   Record electric light only (night or blinds closed) and with daylight.
3. **Response test:** With daylight present, verify fixtures dim and total illuminance stays
   near the target. Cover the photosensor (or use the vendor's simulation tool) and verify the
   fixtures ramp up. Uncover it and verify they ramp back down.
4. **Check stability:** Watch for hunting (repeated up/down cycling). Adjust deadband or
   fade rate if needed.
5. **Check the low end:** If the sequence calls for off at high daylight, confirm the
   off-and-back-on behavior; if it calls for dim-to-minimum, confirm the minimum level.
6. **Record setpoints and calibration values.**

Daylight calibration is best done with typical daylight, not on an overcast evening. Plan a
return visit if needed.

## Scheduling and Overrides
1. Confirm controller time, date, time zone and daylight-saving setting.
2. Review schedules for each zone against the sequence (including holidays).
3. Force a scheduled "off" or sweep (or temporarily change the schedule) and verify the
   affected zones respond. Verify warning flicker or override grace period if specified.
4. Activate an after-hours override and confirm duration (energy codes commonly limit manual
   override periods; confirm the adopted code and the sequence).
5. Restore schedules to final settings and record them.

## Manual Controls and Scenes
- Each wall station controls the correct zone.
- Raise/lower operates across the full dimming range without flicker or drop-out.
- Scenes recall the documented levels.
- Labels match what the buttons do.

## Emergency Lighting Controls
Controlled emergency fixtures (those that are normally switched or dimmed) must go to their
required emergency output when normal power to the area is lost, regardless of the control
state. This is typically done with a **UL 924 listed emergency lighting control device** (for
example, a branch circuit emergency lighting transfer switch or a shunt relay that bypasses
the dimming/switching control).

**Test approach (coordinate with the owner first):**
1. Set controlled emergency fixtures to OFF or dimmed through normal controls.
2. Simulate loss of normal power the way the device manufacturer specifies, usually by
   opening the **normal power branch circuit breaker** that the device monitors.
3. Verify emergency fixtures go to full (or the specified emergency level) promptly.
4. Restore normal power and verify fixtures return to normal control.
5. For battery units, perform the 30-second functional test and record results.

> **Safety:** Interrupting normal power can leave occupied areas or egress paths dark if
> something fails. Coordinate with the owner, test during low occupancy, post a person in
> the area, and keep portable lighting on hand. Do not open emergency system (Article 700)
> circuits or transfer switches unless that work is specifically planned and authorized. Use
> the breaker as a planned test operation only; any wiring repair requires full LOTO and
> live-dead-live verification.

## Recording Results
For each test, record: date, time, tester, witness, space ID, step results, final settings,
and any deficiencies with a reference number in the issues log.

## Key Takeaways
- Verify occupancy coverage, turn-on mode, time delay, and false triggering; record final settings.
- Verify daylight zones by measurement, cover/uncover response, and stability; calibrate with real daylight.
- Check controller time, schedules, sweeps and override durations against the sequence.
- Controlled emergency fixtures must go to emergency output on loss of normal power, regardless of control state.
- Coordinate every power-interruption test with the owner and protect egress paths.
- Record every result and final setting.
