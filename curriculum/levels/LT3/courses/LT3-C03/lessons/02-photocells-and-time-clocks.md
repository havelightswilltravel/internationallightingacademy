---
title: Photocells & Time Clocks
minutes: 30
video:
video_suggestion: >
  On a training board, the trainer wires a stem-mount photocell to a contactor coil and a
  digital astronomical time clock in the same control circuit. The trainer demonstrates
  covering the photocell (and waiting through its delay), programming the clock's location and
  on/off events, and the "dusk-to-midnight" combination of photocell plus clock.
---

## Why Combine Light and Time?
Most building and site lighting is switched automatically by **light level** (photocell),
**time** (time clock), or both. You will see these controls driving lights directly or, more
often, switching a relay or contactor coil (Lesson 3).

## Photocells (Photocontrols)
A photocell senses ambient daylight and closes its contact at dusk (lights on) and opens at dawn
(lights off). At LT3, focus on the building-mounted and in-line types used to switch circuits;
twist-lock fixture photocontrols on area lights are covered in LT3-C05.

**Types you will meet:**
| Type | Where | Notes |
|---|---|---|
| Stem/swivel mount | Screws into a 1/2-inch knockout on a box | Common for building/wall-pack circuits and contactor control |
| Button | Built into a wall pack or fixture | Controls that fixture only |
| Twist-lock (locking-type) | Receptacle on top of an area light or on a box | ANSI C136.10 receptacles; LT3-C05 |
| Remote low-voltage sensor | Feeds a lighting control panel input | Used with relay panels and time clocks |

**Typical three-wire photocell leads:** black = line (hot) in, red = load (switched out),
white = neutral (powers the sensor). Confirm on the device label.

**Ratings to check:**
- Voltage (120V only, 120–277V multi-volt, 347V, 480V).
- Load rating — often given separately for tungsten, ballast and **LED** loads in watts or VA.
  When the load is large, the photocell should switch a **contactor coil**, not the lights
  directly.
- Turn-on level (often about 1–3 footcandles, sometimes adjustable) and turn-off ratio.
- **Fail-on vs fail-off:** Many photocontrols are designed so that if the sensor fails, the
  lights stay on (fail-on — safer for security, wastes energy). Others fail off. Know which is
  installed when troubleshooting "lights on during the day."

**Mounting:**
1. Point the photocell's window **north** (in the northern hemisphere) so direct sun doesn't
   strike it.
2. Keep it away from the light it controls and from other artificial light (signs, wall packs,
   headlights) — or the lights will cycle on and off at dusk ("self-cycling").
3. Mount where it won't be shaded by building overhangs or trees, which would turn lights on
   early.

**Testing:** Photocells have a built-in **time delay** (often several seconds to a couple of
minutes) to prevent switching from lightning or passing headlights. To test:
1. Cover the window completely with opaque tape or a photocell test cap.
2. Wait for the delay. The lights should come on.
3. Uncover; after the delay, lights should go off.
4. If nothing happens, measure (energized, authorized, proper PPE) line voltage at the black and
   white leads, then voltage at the red lead when covered. Line present but no output when
   covered = failed photocell.

## Time Clocks
Time clocks switch loads on a schedule. Types:

| Type | Description |
|---|---|
| Mechanical (dial) | Motor-driven dial with on/off trippers; needs resetting after outages unless it has a carry-over spring; drifts with seasons |
| Digital (7-day/365-day) | Programmed events by day; battery or supercapacitor backup holds the program |
| Astronomical digital | Calculates sunrise/sunset from location (latitude/longitude or ZIP) and date; adjusts automatically through the year; offsets available |
| Lighting control panel scheduling | Software schedules in relay panels or networked systems (LT4) |

**Programming checklist for a digital/astronomical clock:**
1. Set the current date and time, and **time zone and daylight-saving rules**.
2. For astronomical mode, enter location (latitude/longitude or ZIP code as the clock requires).
3. Program events: e.g., ON at sunset +10 min, OFF at 11:00 p.m., ON at 5:30 a.m., OFF at
   sunrise −10 min.
4. Program holidays or exceptions if the customer needs them.
5. Check the **override** function (temporary on/off) and confirm it times out back to automatic.
6. Verify the battery/backup.
7. Write the schedule on the door label or in the panel and on the work order.

**Common pitfalls:** clock never adjusted for daylight saving, backup battery dead (program lost
after an outage), a mechanical clock's trippers loose, override left on "ON" permanently, or a
clock contact switching a load bigger than its rating.

## Combining Photocell and Time Clock
A very common site-lighting scheme is **dusk to a set time** (or dusk to dawn with a
mid-night "off" period). The photocell contact and the time clock contact are wired **in
series** in the contactor coil circuit:

- Photocell closed (dark) **AND** clock "on" → coil energized → lights on.
- Either contact open → lights off.

An astronomical clock alone can often replace the photocell. Many specs still use both, with
the photocell catching unusually dark days.

> **Safety:** Photocells and time clocks are usually wired at line voltage (120–277V) and are
> often in panels next to contactors and breakers. Diagnostic testing in these enclosures must
> follow your employer's NFPA 70E program, including PPE for the incident-energy or category
> required. Apply LOTO and verify absence of voltage before replacing or re-wiring any device.

## Key Takeaways
- Photocells switch on at dusk and off at dawn; they have built-in delays — wait when testing.
- Point photocells north, away from the lights they control and other artificial light.
- Check voltage and LED load ratings; use a contactor for large loads.
- Astronomical time clocks track sunrise/sunset automatically — set location, time zone and DST.
- Photocell and time clock contacts in series give "dusk-to-time-of-night" control.
