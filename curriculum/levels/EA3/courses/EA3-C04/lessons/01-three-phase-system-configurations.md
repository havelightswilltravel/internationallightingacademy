---
title: Three-Phase System Configurations
minutes: 45
video:
video_suggestion: >
  Animated phasor diagrams for 208Y/120 V, 480Y/277 V and 240/120 V high-leg delta systems,
  followed by an electrician measuring each system's L-L, L-N and L-G voltages at real panels.
---

## Why Three-Phase?

Three-phase power delivers more power with less conductor material than single-phase,
produces a rotating magnetic field that starts motors without extra components, and gives
smooth, constant power flow. Three sine waves are displaced 120 electrical degrees apart.

For balanced loads, **three-phase power = 1.732 x V(L-L) x I x PF**.

**Example:** A balanced 480 V three-phase load draws 50 A at 0.9 PF.
P = 1.732 x 480 x 50 x 0.9 = **37,412 W** (about 37.4 kW). Apparent power = 1.732 x 480 x 50 =
41.6 kVA.

## Common Systems in North America

| System | L-L voltage | L-N voltage | Typical uses |
|---|---|---|---|
| **208Y/120 V, 3φ 4-wire wye** | 208 V | 120 V | Offices, schools, retail — receptacles, small HVAC, lighting |
| **480Y/277 V, 3φ 4-wire wye** | 480 V | 277 V | Commercial/industrial — 277 V lighting, 480 V motors and HVAC |
| **240/120 V, 3φ 4-wire delta (high-leg)** | 240 V | 120 V on two legs; about 208 V on the high leg | Older shops and small commercial |
| **240 V or 480 V, 3φ 3-wire delta** | 240 or 480 V | No neutral | Motors; may be ungrounded, corner-grounded or impedance-grounded |
| **120/240 V, 1φ 3-wire** | 240 V | 120 V | Dwellings, small commercial |

### Wye systems
The neutral is the center point of the wye. L-L = L-N x 1.732.
- 120 x 1.732 = 208 V
- 277 x 1.732 = 480 V

Single-phase loads connect L-N (120 V or 277 V) or L-L (208 V or 480 V). A "208 V" single-phase
load on a 208Y/120 V system is not the same as a 240 V load — a 240 V water heater on 208 V
produces only (208/240)² ≈ 75% of its rated wattage.

### High-leg (240/120 V) delta
One of the three transformer windings is center-tapped to create the neutral. The two legs
connected to that winding (A and C) measure 120 V to neutral. The third leg (**B**, the
"high leg" or "wild leg") measures about **208 V to neutral**:

high leg to neutral ≈ 120 x 1.732 ≈ **208 V**

Never connect 120 V loads to the high leg. The NEC requires the high leg to be identified by an
**orange** outer finish or other effective means wherever the neutral is present (110.15), and
in panelboards and switchboards it must be the **B phase** (408.3(E)(1)), with an exception
for meter equipment where the utility may require it in the C position.

### Ungrounded and corner-grounded delta
Some older 480 V and 240 V delta systems are **ungrounded**. A first ground fault does not trip
anything, but raises the other two phases to full line voltage to ground. The NEC requires
ground detectors on ungrounded systems (250.21(B)) so the first fault can be found and fixed
before a second fault on another phase causes a phase-to-phase short through the grounding
system. **Corner-grounded delta** grounds one phase; that grounded phase conductor must be
identified (white or gray) and is never switched or fused alone, except as the code permits.

> **Safety:** On an ungrounded system, "phase to ground" voltage readings may be anything from
> 0 to full line voltage depending on faults and capacitive coupling. Never assume a conductor
> is safe because it reads low to ground — verify absence of voltage phase-to-phase and
> phase-to-ground on every conductor.

## Neutral Current in Wye Systems

On a 4-wire wye system with **balanced linear loads**, the neutral currents from the three
phases cancel, and the neutral carries almost nothing. With **unbalanced** loads, the neutral
carries the vector difference.

Neutral current for linear loads:
**IN = √(IA² + IB² + IC² − IA·IB − IB·IC − IA·IC)**

**Example:** IA = 80 A, IB = 60 A, IC = 70 A.
IN = √(6400 + 3600 + 4900 − 4800 − 4200 − 5600) = √300 ≈ **17.3 A**

### Harmonics and the neutral
Electronic loads (LED drivers, computers, VFDs) draw non-sinusoidal current. The **triplen
harmonics** (3rd, 9th, 15th...) from each phase **add** in the neutral instead of cancelling.
On circuits serving mostly electronic loads, neutral current can exceed phase current. That is
why the NEC counts the neutral as a current-carrying conductor in a 4-wire wye circuit where a
major portion of the load is nonlinear (310.15(E)), and why some designs use oversized
neutrals or K-rated transformers.

## Phase Rotation

The order in which the phases reach their peaks — A-B-C or A-C-B — is the **phase rotation**
(or phase sequence). It determines which way three-phase motors turn. Utilities and building
standards normally specify **ABC** (clockwise) rotation; consistent rotation throughout a
building means a motor moved from one panel to another turns the same way. Lesson 4 covers
measuring it.

## Key Takeaways
- Three-phase power = 1.732 x V x I x PF.
- Wye: L-L = L-N x 1.732 (120/208 V and 277/480 V).
- High-leg delta: B phase is about 208 V to neutral — identify it orange and never use it for 120 V loads.
- Ungrounded systems need ground detectors; one fault raises the others to line voltage to ground.
- Triplen harmonics add in the neutral; nonlinear loads can overload the neutral.
- Keep phase rotation consistent (normally ABC) across the building.
