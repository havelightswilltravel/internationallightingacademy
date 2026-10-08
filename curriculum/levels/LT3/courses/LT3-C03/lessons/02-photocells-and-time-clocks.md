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

## Troubleshooting a Time Clock or Photocell (Company Procedure)

**Components:** trippers, clock (motor or electronic module), photocell, photocell sleeve
(shield), photocell receptacle (twist-lock base or knockout mount), plus the wiring and any
contactor the device controls.

### Mechanical (tripper) time clocks
1. **Verify the clock is keeping time.** Compare the dial to the actual time of day. A clock
   that is behind may have lost power or has a failing motor. Remember daylight saving changes.
2. **Listen for the motor, but don't rely on sound alone.** A motor can hum and still not turn
   the dial. Mark the dial and check that it has moved after a few minutes.
3. **Spin the dial** (in the direction marked) through the ON and OFF trippers **without using the
   bypass/manual lever.** The switch mechanism should click on at the ON tripper and off at the
   OFF tripper. A tripper that is loose, bent, missing or set in the wrong slot gives the wrong
   schedule — **replace trippers as needed** with the clock's matching style.
4. Reset the dial to the correct time before leaving.

### Digital and astronomical clocks
Check the display for the correct date, time, time zone, DST setting and (for astronomical clocks)
location. Check the program events, any holiday or exception days, and whether a manual override
was left on. A blank display or a program lost after every outage points to a dead backup battery
or a failed clock.

### Line, load and voltage checks (both clocks and photocells)
5. **Isolate line and load.** Identify which conductor brings power in and which goes out to the
   lights or contactor coil, and verify the **line is landed on the line terminal** (on a
   photocell, usually black = line, red = load, white = neutral). Swapped line and load is a common
   cause of a device that "never works" after someone else replaced it.
6. **Verify good line voltage across the hot and neutral** at the device (qualified person, PPE).
   No line voltage → the problem is upstream.
7. **Force the device on and check the load side.** Turn the time clock to **bypass/manual ON**,
   or **cover the photocell** completely (and wait out its delay). Then verify voltage on the
   load terminal.
8. **Line voltage present but no load voltage with the device forced on → replace the time
   clock or photocell.** Load voltage present but lights still off → the problem is downstream
   (contactor coil, wiring, fixtures — Lesson 3).
9. Return the clock from bypass to automatic when finished.

### Photocell environment
10. **Check for light sources near the photocell** — new wall packs, signs, the controlled
    fixtures themselves, reflective surfaces, or security lights. These cause lights to cycle
    at dusk or stay off at night.
11. **Adjust the photocell sleeve (shield)** to block the offending light, depending on how close
    the light source is, and correct the **photocell orientation** (window facing north, away from
    the lights it controls). Relocate the photocell if a sleeve can't solve it.
12. Check the receptacle and gasket on twist-lock photocells for corrosion or loose contacts.

> **Safety:** Steps 6–8 are energized diagnostic tests in enclosures that often contain
> contactors and breakers — qualified persons only, with PPE per the employer's NFPA 70E
> program. Lock out and verify absence of voltage (live-dead-live) before replacing trippers
> that require reaching into the clock mechanism near live terminals, re-landing wires, or
> replacing any device.

**Ordering details:** clock make/model, voltage, number of channels/poles and contact rating;
tripper style; photocell type (stem, button, twist-lock), voltage and LED load rating, and
whether a sleeve/shield is available for that model.

## Key Takeaways
- Tripper clocks: verify time, don't trust the motor sound, spin the dial without bypass and replace bad trippers.
- Confirm line and load are on the correct terminals and line voltage is good; force the device on (bypass or cover) and check load voltage — no load voltage means replace it.
- Use the photocell sleeve and correct orientation to defeat nearby light sources.
- Photocells switch on at dusk and off at dawn; they have built-in delays — wait when testing.
- Point photocells north, away from the lights they control and other artificial light.
- Check voltage and LED load ratings; use a contactor for large loads.
- Astronomical time clocks track sunrise/sunset automatically — set location, time zone and DST.
- Photocell and time clock contacts in series give "dusk-to-time-of-night" control.
