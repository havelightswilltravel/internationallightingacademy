---
title: Tunable White and Circadian-Oriented Lighting
minutes: 30
video:
video_suggestion: >
  In a demo room, an LT5 technician shows a tunable-white system shifting from 2700 K to 6500 K while
  holding the same light level, then dims while warming (dim-to-warm). Show measuring CCT and
  illuminance with a spectrometer-type meter, a schedule screen for a daily color curve, and a
  quick check for color mismatch between fixtures from different batches.
---

> **Note:** Research on light and health is active and product capabilities change quickly.
> This lesson sticks to established concepts and should be reviewed at least annually by an SME.

## What Tunable White Is
**Tunable white** luminaires contain LEDs of two (or more) different color temperatures, for
example 2700 K and 6500 K, driven by separately controlled channels. Mixing the channels
produces any CCT between the endpoints, and total intensity can be dimmed independently.

Related products:
- **Dim-to-warm:** CCT automatically warms as the fixture dims (imitating incandescent). One
  control input; CCT and level are linked.
- **Full-color (RGB, RGBW, RGBA):** can produce colors and whites; used in architectural and
  entertainment lighting.

## Controlling Tunable White
Tunable fixtures need a way to set both level and CCT.

| Control method | How CCT is set | Notes |
|---|---|---|
| Two 0-10V channels | One channel for intensity, one for CCT (or one per LED string) | Common; wiring and labeling must be clear |
| DALI DT8 | Digital color control on one DALI bus | Standardized color control commands |
| DMX/RDM | Separate channels per color | Architectural/theatrical |
| Wireless/networked | App or controller sets CCT | Vendor-specific; check interoperability |
| PoE | Network commands | See PoE lesson |

When troubleshooting tunable fixtures, first identify the control method from the submittal or
driver label. A fixture "stuck" at one CCT often has a missing or reversed control channel or
an incorrect address or group.

> **Safety:** Control wiring for tunable fixtures is usually Class 2, but it terminates in
> drivers and fixtures that also have line-voltage connections. De-energize with LOTO and
> verify absence of voltage before opening fixtures or driver compartments.

## Circadian Lighting Concepts
Light affects more than vision. Specialized cells in the eye (intrinsically photosensitive
retinal ganglion cells, containing **melanopsin**) are most sensitive to short-wavelength
(blue) light and help regulate the body's circadian rhythm. Bright, bluer light during the day
and dimmer, warmer light in the evening is broadly associated with supporting healthy
sleep-wake cycles.

Important terms you will see:
- **Melanopic EDI (equivalent daylight illuminance)** and **melanopic lux:** metrics for how
  strongly light stimulates the melanopsin response. CIE S 026 defines the internationally
  recognized metrics.
- **Equivalent melanopic lux (EML)** and **circadian stimulus (CS):** other metrics used by
  some standards and programs (for example, the WELL Building Standard has used EML).
- **Vertical illuminance at the eye:** circadian effects depend on light reaching the eye, so
  designers measure vertical illuminance at seated eye height, not just horizontal illuminance
  on the desk.

### What to tell customers
- Circadian-oriented lighting is a legitimate design consideration, but **benefits depend on
  the full design** (light level at the eye, spectrum, timing, duration and daylight), not just
  the ability to change CCT.
- CCT alone is an imperfect proxy for melanopic content; two sources with the same CCT can
  differ.
- Avoid health claims. Refer design questions to a lighting designer and cite recognized
  standards and guidelines rather than marketing language.

## Field Practices for Tunable Systems
1. **Verify color consistency.** Mixed batches or different product lines can look different at
   the same CCT setting. Check fixtures side by side at several CCT points.
2. **Check the CCT range.** Measure at both ends of the range and at the middle with a meter
   capable of CCT measurement.
3. **Check light level across the range.** Some products lose output at the ends of the range
   or mid-range. Specifications should state whether lumen output is constant.
4. **Program schedules carefully.** Daily curves should transition gradually; abrupt changes are
   noticeable and distracting.
5. **Document settings:** CCT and level per time of day and per scene in the closeout package.
6. **Spare parts:** stock matching drivers and fixtures; a replacement from a different series
   may not match color.

## Where Tunable White Is Used
- Healthcare (patient rooms, staff stations with night shifts)
- Education (classroom scenes for tests, active learning, calming)
- Senior living
- Offices pursuing wellness certifications
- Retail and hospitality (changing ambience through the day)

## Energy and Code Considerations
Tunable white fixtures still count toward lighting power density and must meet the same
control requirements as other fixtures under the adopted energy code. The DLC maintains
qualification criteria for some color-tunable products; check current DLC requirements if the
customer is pursuing rebates.

## Key Takeaways
- Tunable white mixes LED channels of different CCT; level and CCT can be controlled separately.
- Identify the control method (dual 0-10V, DALI DT8, DMX, wireless, PoE) before troubleshooting.
- Circadian effects relate to melanopsin, light at the eye, spectrum, timing and duration, not CCT alone.
- Avoid health claims; refer to recognized metrics (CIE S 026, melanopic EDI) and lighting designers.
- Verify color consistency, output across the range and document schedules.
- This topic should be reviewed regularly as research and standards evolve.
