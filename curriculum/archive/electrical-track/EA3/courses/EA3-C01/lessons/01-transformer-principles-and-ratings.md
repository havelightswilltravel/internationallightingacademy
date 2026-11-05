---
title: Transformer Principles, Nameplates & Full-Load Current
minutes: 45
video:
video_suggestion: >
  Instructor stands beside a de-energized 75 kVA dry-type transformer with the covers off,
  points out the core, windings, H and X terminals, tap board and nameplate, then works the
  primary and secondary full-load current calculations on a whiteboard next to it.
---

## How a Transformer Works

A transformer transfers energy from one AC circuit to another through a shared magnetic
field. Alternating current in the **primary** winding creates a changing magnetic flux in a
laminated steel core. That changing flux passes through the **secondary** winding and induces
a voltage in it. No electrical connection exists between the two windings in an ordinary
(isolating) transformer — the only link is magnetic. That is why a transformer will not work
on DC: steady current makes steady flux, and steady flux induces nothing.

In an ideal transformer, the voltage ratio equals the **turns ratio**:

| Relationship | Formula |
|---|---|
| Turns ratio | a = Np / Ns = Vp / Vs |
| Current (inverse) | Ip / Is = Ns / Np |
| Power (ideal) | Vp x Ip = Vs x Is |

A step-down transformer has more primary turns than secondary turns. Voltage goes down and
current goes up by the same ratio, so power in roughly equals power out (real transformers
are typically 97–99% efficient at load).

**Example:** A single-phase transformer has a 480 V primary and a 120 V secondary.
a = 480 / 120 = 4. If the secondary delivers 40 A, the primary draws about 40 / 4 = 10 A.

## Reading the Nameplate

Every transformer you connect has a nameplate. Read it before you land a single conductor.

| Nameplate item | What it tells you |
|---|---|
| kVA | Apparent power the transformer can deliver continuously without overheating |
| Primary / secondary voltage | e.g., 480 V delta primary; 208Y/120 V secondary |
| Phase and frequency | 1-phase or 3-phase, 60 Hz |
| %Z (impedance) | Percent of rated primary voltage that drives full-load current through a shorted secondary; used to estimate fault current |
| Taps | Usually +/-2.5% steps (e.g., two above and four below nominal) to correct for high or low supply voltage |
| Temperature rise / insulation class | e.g., 150 °C rise with 220 °C insulation system |
| Connection diagram | Which terminals (H1, H2, H3, X0, X1, X2, X3) go where, and how to set taps |
| K-factor (if marked) | Rated to carry harmonic-rich (nonlinear) loads without overheating |

Terminal marking convention: **H** terminals are the high-voltage winding, **X** terminals are
the low-voltage winding, and **X0** is the secondary neutral on a wye or center-tapped
secondary.

## Calculating Full-Load Current

Transformers are rated in kVA, not amps, because the heating of the windings depends on
current and voltage together regardless of power factor. You will calculate full-load amps
(FLA) on every transformer job: to check conductor size, OCPD size and loading.

**Single-phase:** FLA = kVA x 1000 / V

**Three-phase:** FLA = kVA x 1000 / (V x 1.732), where V is the line-to-line voltage.

### Worked example — 75 kVA, 480 V delta to 208Y/120 V

- Primary: 75 x 1000 / (480 x 1.732) = 75,000 / 831.4 = **90.2 A**
- Secondary: 75 x 1000 / (208 x 1.732) = 75,000 / 360.3 = **208.2 A**

Notice the ratio: 208.2 / 90.2 is about 2.31, the same as 480 / 208.

### Worked example — 25 kVA single-phase, 480 V to 120/240 V

- Primary: 25,000 / 480 = **52.1 A**
- Secondary: 25,000 / 240 = **104.2 A** (each line conductor at full balanced load)

### Common three-phase FLA values (rounded)

| kVA | 480 V | 208 V |
|---|---|---|
| 30 | 36.1 A | 83.3 A |
| 45 | 54.1 A | 124.9 A |
| 75 | 90.2 A | 208.2 A |
| 112.5 | 135.3 A | 312.3 A |
| 150 | 180.4 A | 416.4 A |

Do the math yourself each time; a table like this is a cross-check, not a substitute.

## Impedance and Available Fault Current

The %Z on the nameplate limits how much current flows into a fault on the secondary. A
conservative estimate assumes the utility (primary) source is infinite:

**Maximum secondary fault current ≈ secondary FLA / (%Z / 100)**

For the 75 kVA transformer above with %Z = 4.5%: 208.2 / 0.045 ≈ **4,630 A**. The real value
will be lower because the primary source and conductors also have impedance, but this quick
number tells you whether equipment with a 10,000 A interrupting rating is in the right
neighborhood. Lower impedance means higher fault current — swapping a transformer for one with
lower %Z can push downstream equipment past its interrupting rating, and the available fault
current label (110.24 for service equipment) and arc-flash labels may need updating. The
engineer of record or an approved study, not the field crew, makes that determination.

## Losses, Heat and Taps

Transformers lose energy as **core loss** (present any time the unit is energized, even with
no load) and **copper (winding) loss** (proportional to the square of load current). Both
show up as heat, so ventilation openings must stay clear and the manufacturer's clearances
must be kept.

**Taps** change the effective turns ratio. If the primary supply measures 504 V on a 480 V
nominal transformer (5% high), the secondary will also run about 5% high. Moving to a tap
that adds primary turns (for example the +5% tap) lowers the secondary back toward nominal.
Always follow the nameplate diagram and change taps only with the transformer de-energized,
locked out and verified.

> **Safety:** Transformer terminals can be energized from either side. A transformer that is
> disconnected on the primary can be back-fed through the secondary from a generator,
> another transformer, or a tie. Lock out every source and test for absence of voltage on
> both the H and X terminals before touching anything.

> **Safety:** Energizing a transformer causes **inrush current** that can reach many times
> FLA for a few cycles. That is normal — but it is why primary OCPD selection matters, and
> why you never stand in front of an open enclosure when the unit is first energized.

## Key Takeaways
- Voltage ratio equals turns ratio; current changes in the inverse ratio.
- Three-phase FLA = kVA x 1000 / (V x 1.732); single-phase FLA = kVA x 1000 / V.
- H terminals are the high-voltage side, X terminals the low-voltage side, X0 the neutral.
- %Z sets the maximum fault current: roughly FLA / (%Z/100) with an infinite source.
- Taps correct for supply voltage; change them only de-energized and verified.
- Treat both windings as possible sources until absence of voltage is proven.
