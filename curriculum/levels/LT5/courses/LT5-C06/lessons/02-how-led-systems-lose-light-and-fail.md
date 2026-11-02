---
title: How LED Systems Lose Light and Fail
minutes: 40
video:
video_suggestion: >
  The trainer lays out failed parts collected from service calls: a driver with a bulged
  capacitor, a surge-damaged outdoor driver, a yellowed polycarbonate lens next to a new one, a
  dirty high-bay optic and an occupancy sensor with a cracked lens. For each, the trainer explains
  whether cleaning, a component swap or a new luminaire is the fix, then shows illuminance readings
  before and after cleaning one fixture.
---

## Two Kinds of Loss
An LED system can **lose light** while still working, or it can **fail** outright. A service
program has to manage both. Start by sorting every loss into one of two groups:

- **Recoverable:** you can get the light back by cleaning, re-aiming, re-setting a control or
  replacing a component.
- **Non-recoverable:** the loss is built into the product or its environment (aging of the LED
  sources, yellowed optics, the luminaire design) and only a component or luminaire replacement
  brings it back.

LT4-C03/01 introduced light loss factors for design. This lesson looks at the same losses from the
service side: what you will see in the field and what fixes it.

## Lumen Maintenance: What the Ratings Promise
LT3-C01/04 explained L70, LM-80 and TM-21. For planning, remember what the published numbers do
and do **not** tell you:

| The rating says | What it does not say |
|---|---|
| "L70 at 60,000 h" means the LED sources are projected to keep 70% of initial output at 60,000 h | It does not include driver, control or optic failures |
| L90 or L80 at a stated life is a stricter promise than L70 | It assumes the operating temperature in the test report, not a hot plenum |
| A ">" sign (for example "L70 > 60,000 h") means the projection hit the limit of what the test data can support | It is not a guarantee of actual life on your site |
| Some sheets add a B value (such as B50) for the share of the population expected to fall below the L value | Many sheets leave it out |

**Practical rule:** a luminaire running about 12 hours a day accumulates roughly 4,400 hours per
year. At that rate a 50,000-hour rating is reached in about 11 years; a 24-hour site reaches it
in under 6. Put the operating hours from the audit (LT5-C01/01) next to the rating before you
promise anything.

## How LED Systems Fail in the Field

| Cause | What you see | Typical fix |
|---|---|---|
| **Driver failure** (electrolytic capacitors drying out, worse when hot) | Dark, flicker, cycling, low output | Replace driver (match per LT3-C01/03) |
| **Thermal stress** (fixture in insulation, hot ceiling, blocked heat sink, high ambient) | Early driver failure, thermal foldback (dims when hot), discolored boards | Correct the installation or choose a product rated for the ambient |
| **Surge** (lightning, utility switching, large motor loads) | Outdoor and parking fixtures failing in clusters after storms | Replace driver; recommend surge protection; check grounding with an electrician |
| **LED board failure** (open string, solder cracks from thermal cycling) | Section of the fixture dark, or whole fixture dark with good driver output | Replace board/module or luminaire |
| **Connector and wiring faults** | Intermittent flashing, dark after vibration | Re-terminate under LOTO |
| **Moisture intrusion** (failed gaskets, wrong wet rating) | Condensation inside lens, corrosion, tripping | Replace gaskets or luminaire; correct the location rating |
| **Controls failures** (sensor dead or mis-set, 0-10V wiring open or shorted, network node offline, photocell failed) | Lights stuck on, stuck off, stuck dim, day-burning | Diagnose controls first (LT3-C02, LT3-C03) |
| **Optical degradation** (yellowed or crazed lens, UV exposure, chemical attack) | Lower output, color shift, visible yellowing | Replace lens or luminaire |
| **Dirt** on lenses, reflectors and room surfaces | Gradual loss across an area | Clean (Lesson 05) |

> **Safety:** Diagnosing any of these means opening a luminaire or a control device. De-energize,
> apply LOTO at the circuit's isolating device and verify absence of voltage live-dead-live
> before you touch conductors. Energized diagnostic testing is done only by qualified persons under
> the employer's NFPA 70E program.

## Dirt Is Still the Fastest Thief
Dirt does not care what the light source is. A sealed LED high-bay over a dusty warehouse floor
still collects a film on its lens, and the walls and ceiling around it get darker over time.
Reflectance of the room surfaces matters too: a ceiling that has gone from bright white to gray
returns much less light to the workplane, especially with indirect fixtures.

Some LED systems hide this loss. Fixtures with **constant lumen output** or daylight controls
raise drive current as output falls. The space looks fine, but the fixtures draw more power and run
hotter, which shortens their life. When you see a controlled system running near full output in an
area that should be dimmed, check for dirt before blaming the controls.

## Color Shift and Batch Mismatch
Over thousands of hours, some LED products shift color slightly, and different production batches
of the "same" catalog number can look different side by side. That is why a replacement can look
whiter, bluer or brighter than its neighbors. Keep matched attic stock from the original order when
possible, and record the date code of every replacement (Lesson 03).

## What Cleaning Can and Cannot Fix
Use this sorting before you recommend a fix:

1. **Measure** the light in the area (see LT4-C03/02 for the survey method).
2. **Inspect** a sample of fixtures: lens clarity, yellowing, cracks, dirt film, condensation.
3. **Clean one test fixture** (or a small group) and re-measure under it.
4. **Compare:**
   - Big gain after cleaning → the loss is mostly dirt; cleaning the area is the fix.
   - Small gain and lens yellowed or crazed → optics have degraded; lens or luminaire
     replacement is needed.
   - Small gain, optics clear, fixtures old → lumen depreciation; plan a retrofit or replacement.
   - Some fixtures dark or flickering → component failures; repair and log them.
5. **Record** results in the inventory and failure log.

## Key Takeaways
- Sort every loss into recoverable (cleaning, re-setting, component swap) and non-recoverable
  (source aging, degraded optics).
- L70 projects LED source aging only; drivers, controls, optics and heat often end a fixture's
  life first.
- Heat, surge, moisture and controls faults cause most field failures; fix the cause, not just the
  part.
- Dirt on fixtures and room surfaces still costs light, and controls can hide it while raising
  energy use.
- Clean a test fixture and re-measure before recommending cleaning, component work or replacement.
