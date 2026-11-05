---
title: Feeders, Feeder Taps & Voltage Drop
minutes: 45
video:
video_suggestion: >
  Instructor follows a feeder on a one-line diagram from the switchboard to a panelboard,
  then in the field shows the feeder breaker, the conductors in the raceway, and a 10-foot tap
  to a disconnect, while a voltage-drop calculation runs on screen.
---

## What a Feeder Is

A **feeder** is all circuit conductors between the service equipment (or the source of a
separately derived system, or other power supply source) and the **final branch-circuit
overcurrent device**. A conductor from the switchboard to a panelboard is a feeder; the
conductors from a panelboard breaker to the receptacles are a branch circuit.

Article 215 (2023 NEC) covers feeder sizing and protection, and Article 240 covers feeder tap
rules.

## Sizing Feeder Conductors

**Minimum ampacity (215.2(A)(1)):** not less than 125% of the continuous load plus 100% of
the noncontinuous load (before any adjustment or correction factors), and not less than the
noncontinuous load plus the continuous load after adjustment and correction factors are
applied.

A **continuous load** runs at maximum current for 3 hours or more — typical for lighting in
commercial buildings, many HVAC loads, and EV charging.

**Feeder OCPD (215.3):** sized the same way — at least 125% of continuous plus 100% of
noncontinuous, unless the device and its assembly are listed for 100% continuous operation.

### Worked example
A panelboard feeder serves 100 A of continuous load and 40 A of noncontinuous load
(208Y/120 V, 75 °C terminations, three current-carrying conductors, 30 °C ambient).

- Required: (100 x 1.25) + 40 = 125 + 40 = **165 A**
- OCPD: next standard size at or above 165 A → **175 A**
- Conductors: Table 310.16, 75 °C copper — 2/0 AWG is 175 A. **2/0 Cu** works and is protected
  by a 175 A breaker.
- Neutral: sized for the calculated neutral load (220.61) but not smaller than required for the
  fault path.
- Equipment grounding conductor: sized from Table 250.122 based on the 175 A OCPD → **6 AWG
  Cu** (the 200 A row). If the ungrounded conductors are increased in size for voltage drop, the
  EGC must be increased proportionally (250.122(B)).

## Feeder Tap Rules (240.21(B))

A **tap** is a conductor connected to a feeder without overcurrent protection at the point of
connection, terminating in an OCPD. The two most common rules:

| Rule | Maximum length | Key conditions (summary — read the code) |
|---|---|---|
| **10 ft tap** (240.21(B)(1)) | 10 ft | Ampacity ≥ the calculated load and ≥ the rating of the device or OCPD the tap supplies; for field installations leaving the enclosure, ampacity ≥ 1/10 of the feeder OCPD rating; enclosed in raceway (if outside the enclosure) |
| **25 ft tap** (240.21(B)(2)) | 25 ft | Ampacity ≥ 1/3 of the feeder OCPD rating; terminates in a single OCPD that limits the load to the tap ampacity; protected from physical damage |

### Tap example (25 ft rule)
Feeder protected at 400 A. A 25 ft tap feeds a 150 A disconnect with fuses.
- Minimum tap ampacity: 400 / 3 = 133.3 A, **and** the tap must be protected at its ampacity by
  the single OCPD it terminates in.
- 1/0 AWG Cu (150 A at 75 °C) terminating in 150 A fuses meets both conditions.

Other tap rules exist (outside taps of unlimited length, taps over 25 ft in high-bay
manufacturing, transformer feeder taps). They have strict conditions — never assume a tap is
legal because it is "short."

## Voltage Drop

The NEC does not generally make voltage drop mandatory for feeders and branch circuits, but
informational notes in Articles 210 and 215 suggest about **3%** maximum on a feeder and **5%**
total for feeder plus branch circuit for reasonable efficiency. Engineers, energy codes and
specifications often make it mandatory, and some equipment (fire pumps, sensitive electronics)
has its own requirements.

**Approximate formulas (K = 12.9 for copper, about 21.2 for aluminum, ohm-cmil/ft at 75 °C):**

- Single-phase: VD = 2 x K x I x L / CM
- Three-phase: VD = 1.732 x K x I x L / CM

L = one-way length in feet; CM = conductor area in circular mils (Chapter 9, Table 8).

### Worked example
480 V three-phase feeder, 100 A, 200 ft one-way, 1 AWG copper (83,690 cmil).
VD = 1.732 x 12.9 x 100 x 200 / 83,690 = 446,860 / 83,690 ≈ **5.3 V**
Percent = 5.3 / 480 ≈ **1.1%** — well within a 3% target.

Same load on a 208 V system: 5.3 / 208 ≈ 2.6% — close to the limit. Lower voltage systems are
far more sensitive to voltage drop.

## Feeder Identification and Installation Notes

- Where more than one nominal voltage system exists in a building, ungrounded feeder conductors
  must be identified by phase and system at terminations and splices, using the method posted
  at each panel (215.12(C)) — e.g., black/red/blue for 208Y/120 V and brown/orange/yellow for
  480Y/277 V by common industry practice.
- Feeders with a common neutral, and feeders supplying 15/20 A receptacle branch circuits in
  certain locations, have additional rules — check Article 215.
- Ground-fault protection of equipment may be required on feeder disconnects of 1000 A or more
  on 480Y/277 V systems if not provided upstream (215.10).

> **Safety:** Before pulling or terminating feeder conductors in existing gear, establish an
> electrically safe work condition on the feeder breaker **and** check for back-feed sources
> such as generators, PV systems, or tie breakers. Test for absence of voltage on every phase
> and the neutral before touching conductors.

## Key Takeaways
- Feeders run from the service (or SDS source) to the final branch-circuit OCPD.
- Size feeder conductors and OCPD at 125% of continuous + 100% of noncontinuous load.
- EGC size comes from Table 250.122 and the feeder OCPD rating.
- 10 ft and 25 ft tap rules have specific ampacity and termination conditions.
- Use VD = 1.732KIL/CM (3φ) or 2KIL/CM (1φ); aim for about 3% feeder and 5% total.
