---
title: LED Flicker and Strobing
category: led
tags: [led, flicker, strobing, driver, dimming, power-quality]
levels: [LT3, LT4]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- Visible flicker, strobing, pulsing or "breathing" light output
- Flicker only at low dim levels, or only when other equipment starts (HVAC, elevators)
- Stroboscopic effect: moving objects or rotating machinery appear to stutter (can be a
  safety hazard around machinery - report it)
- Flicker on camera/phone video that is not visible to the eye (often normal driver ripple)
- Random flashing when the fixture is supposed to be off (see also "ghosting")

## Safety first

- **Default to de-energized work.** LOTO the branch circuit and verify absence of voltage
  before opening fixtures, boxes or control enclosures.
- Flicker diagnosis often requires observing the fixture energized and measuring voltage.
  This is energized work: **qualified persons only**, with risk assessment, appropriate
  PPE and an energized-work justification per NFPA 70E. Measure at accessible terminals
  with shrouded probes; do not work inside an energized fixture.
- Emergency drivers can keep LEDs energized with the breaker off - disconnect the battery.

## Tools needed

- CAT III multimeter (true-RMS) with min/max recording
- Clamp meter
- Phone camera (slow-motion video makes flicker visible) or a flicker meter, if available
- Power quality recorder (for intermittent / building-wide problems - usually LT4 or escalation)
- Dimmer and driver compatibility lists from the manufacturers

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Dimmer/driver incompatibility (phase-cut dimmer on non-compatible driver, or wrong dimmer type) | Flicker only when dimmed; dimmer not on driver's compatibility list | Use a listed-compatible dimmer; set trim/low-end; see dimming guides |
| Low-end dimming below the driver's stable range | Flicker only near bottom of range | Raise low-end trim on the control |
| Loose connection (neutral especially) | Flicker varies when connections are disturbed; voltage fluctuates; heat at splice | Remake connections (de-energized); check the whole circuit if multiple fixtures |
| Failing driver (aging capacitors, thermal stress) | Single fixture; worse when hot; other fixtures on same circuit fine | Replace driver with matching spec |
| Supply voltage fluctuation / sags (large motor loads, overloaded or long circuit) | Min/max recording shows sags that coincide with flicker | Correct the supply problem; see voltage drop and open neutral guides |
| Induced voltage on dim leads or switched leg (long parallel runs) | Faint flicker/glow when "off"; 0-10V reads a few volts with control off | Separate Class 2 control wiring from power; use a relay to break line voltage |
| Leakage through electronic switch/sensor without neutral | Flash or glow when off; fixture fed by 2-wire sensor or smart switch | Use a control with a neutral connection, or a load correction device per manufacturer |
| LED module damage (failed LED in a series string, bad solder joint) | Section of fixture flickers; driver output unstable only with that board | Replace module/fixture per manufacturer |
| Normal driver ripple seen only on camera | No visible flicker to the eye; customer concerned from video | Explain; if a flicker spec applies (e.g. for video areas), escalate for a driver change |

## Step-by-step diagnosis

1. **Define the pattern.** One fixture or many? Constant or intermittent? Only when
   dimmed? Only at certain times (HVAC start)? A pattern across a whole circuit points
   to the supply or control, a single fixture points to the fixture.
2. Set the dimmer/control to full output. If flicker stops at full, the cause is
   almost always dimming related - go to the dimming guides.
3. Check whether other loads starting causes the flicker. Note what equipment shares the
   circuit, panel or transformer.
4. **(Qualified, energized, with PPE)** Measure supply voltage L-N at the fixture or nearest
   accessible point. Use min/max mode for several minutes. Expected: steady near nominal
   (e.g. 118-122 V on a 120 V circuit). Swings of several volts that line up with the
   flicker indicate a supply issue; very high L-N voltage on some circuits and low on
   others suggests an open neutral - stop and see the open neutral guide.
5. **De-energize, LOTO, verify absence of voltage.** Inspect and tighten/remake connections
   at the fixture and the nearest box. Look for discoloration, melted insulation or
   backed-out push-in connectors.
6. Swap test: if allowed, install a known-good matching driver. If the flicker follows
   the driver, replace it. If it stays with the fixture location, look upstream.
7. For "off-state" flicker or glow: check whether the control breaks the hot conductor, whether
   the switch/sensor requires a neutral, and how the dim wiring is routed.
8. Restore and observe over a full cycle (including dimming range and sensor timeouts).

## When to escalate

- Flicker on many circuits or across a panel (possible neutral, transformer or utility issue)
- Burned or heat-damaged connections in building wiring or panels
- Stroboscopic effect around rotating machinery - notify the customer's safety contact immediately
- Problem persists after compatible driver/dimmer are confirmed - involve the manufacturer

## Documentation

- Locations affected and the flicker pattern (when, which dim level, what triggers it)
- Measured voltages, including min/max values and duration of recording
- Dimmer and driver models, and whether they appear on each other's compatibility lists
- Connections repaired, parts replaced, settings changed (low-end trim)
- Video of the symptom before and after, if company policy allows
