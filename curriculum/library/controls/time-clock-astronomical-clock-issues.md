---
title: Time Clock and Astronomical Clock Issues
category: controls
tags: [controls, time-clock, astronomical-clock, schedule, daylight-saving, contactor]
levels: [LT3, LT4]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- Lights come on or go off at the wrong time (often off by one hour, or by 12 hours)
- Schedule drifts after a power outage
- Lights on all the time or never on
- Lights correct in summer but wrong in winter (or vice versa)

## Safety first

- Time clocks often sit in panels or enclosures with line voltage and switch contactor
  coils that may be fed from a separate circuit. **De-energize, LOTO and verify absence of
  voltage** on every source before rewiring or replacing a clock.
- Programming through the front face of a dead-front clock is normally not exposed
  energized work, but opening covers, testing terminals, or working inside the panel is.
  Energized testing is **qualified persons only**, with risk assessment, appropriate PPE and
  an energized-work justification per NFPA 70E.

## Tools needed

- Clock's programming instructions (manufacturer-specific)
- Site location (latitude/longitude or zip code) and time zone for astronomical clocks
- CAT III multimeter
- Replacement backup battery if user-replaceable

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Wrong time or date (after outage, or never set) | Clock display vs actual | Set time/date; check backup battery/carryover |
| Off by one hour | Daylight saving setting wrong or disabled | Correct DST setting per local rules |
| Off by 12 hours (mechanical or 12-hour digital) | AM/PM wrong | Set dial or AM/PM correctly |
| Astronomical clock: wrong location or time zone | Programmed lat/long or zip vs site | Re-enter location; verify sunrise/sunset times shown |
| Wrong offset (minutes before/after sunset) | Programming review | Set offsets per owner's requirements |
| Manual override / hold left on | Override indicator; switch on HOA set to Hand | Return to Auto |
| Dead backup battery / carryover | Clock loses time after outages | Replace battery or clock |
| Mechanical clock: loose or missing trippers, motor stopped | Dial not turning; trippers moved | Reset trippers; replace motor or clock |
| Output contact or contactor failure | Clock calls for on (indicator) but lights stay off | Check clock output and contactor (see contactor guide) |

## Step-by-step diagnosis

1. Compare clock time, date and day of week with actual. Note how far off the lighting is
   (exactly 1 hour, 12 hours, random).
2. Check DST setting and time zone. For astronomical clocks, check the programmed location
   and the sunrise/sunset times the clock displays against a reliable source.
3. Review each program step: on/off events, days, offsets, holidays. Look for conflicting
   or leftover events.
4. Check for overrides: front-panel override, HOA selector switch, BMS/network override.
5. Note the clock's behavior after power loss. If it loses time, the backup battery or
   carryover has failed.
6. Force the output on (per manufacturer's manual override) and confirm the contactor or
   relay responds. If the clock indicates "on" but the load does not energize:
   **(qualified, energized, with PPE)** check for voltage on the clock's output terminal to
   the contactor coil. Expected: coil voltage (e.g. 120 V or 277 V) when on, zero when off.
7. **De-energize, LOTO, verify absence of voltage** on all sources before replacing a clock
   or correcting wiring.
8. Return to Auto and confirm the next scheduled event, or simulate per manufacturer.

## When to escalate

- Clock is controlled by or reports to a BMS/networked system
- Owner's required schedule conflicts with energy code requirements (e.g. automatic
  shutoff), or with security/safety lighting needs
- Repeated loss of programming (possible power quality issue)

## Documentation

- Clock model, location, final programmed schedule (or photo of program summary)
- Time/date/DST/location settings corrected
- Battery replaced, overrides cleared
- Output and contactor test results
