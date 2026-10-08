---
title: Class 1, Class 2, and Class 3 Power-Limited Circuits
minutes: 40
video:
video_suggestion: >
  An instructor lays out a thermostat transformer, a 24-V LED driver, a 0–10-V dimming control,
  a door access power supply, and a PoE switch on a bench, pointing out the Class 2 marking on
  each power source. Then shows a correctly separated box where a Class 2 control cable and
  120-V conductors enter through a listed barrier, and a wrong example where they share a box
  without separation.
---

## Why Power-Limited Circuits Have Their Own Rules
Many circuits in a building carry so little energy that they present little shock or fire
hazard: thermostat wiring, doorbells, 0–10-V dimming, sensors, access control, nurse call, and
Power over Ethernet. If every one of these had to be wired with Chapter 3 power wiring methods,
installations would be needlessly expensive. The NEC allows reduced wiring methods **as long as
the power source is limited** and the circuits are kept separated from power wiring.

**2023 NEC organization (AHJ edition governs):** the 2023 edition reorganized this material.
Cable requirements common to power-limited, fire alarm, and optical fiber circuits were gathered
into **Article 722**, Class 1 circuits moved to **Article 724**, and **Article 725** now covers
Class 2 and Class 3 circuits. Older code books (2020 and earlier) put all of this in Article
725. When reading older specifications, translate section numbers accordingly.

## The Three Classes
| Class | Typical limits | Hazard addressed | Examples |
|---|---|---|---|
| **Class 1 power-limited** | Not more than 30 V and 1,000 VA | Fire (wired similar to power) | Some industrial control |
| **Class 1 remote-control/signaling** | Up to 600 V (power not limited) | Fire and shock — wired with Chapter 3 methods | Motor control circuits outside the controller |
| **Class 2** | Generally not more than 30 V AC/60 V DC (lower in wet locations) and 100 VA for inherently limited sources | Considered safe from fire and shock | Thermostats, 0–10 V dimming, low-voltage lighting, PoE |
| **Class 3** | Above Class 2 voltage, up to 150 V, limited to 100 VA | Safe from fire; some shock hazard | Some nurse call, older audio and signaling |

The exact limits depend on whether the source is AC or DC, inherently limited, or limited by
overcurrent protection; they appear in the power source tables in Chapter 9. In practice: **the
circuit is Class 2 or Class 3 only if its power source is listed and marked Class 2 or Class 3.**
Adding a power supply that is not Class 2 makes the circuit something else.

## Class 1 Conductor Rules (Brief)
- 18 AWG and 16 AWG conductors are permitted for Class 1 circuits when protected at not more
  than 7 A and 10 A respectively (with specific insulation types).
- Class 1 and power conductors may share a raceway or enclosure only when they are functionally
  associated with the same equipment (for example, a motor starter's control and power).

## Class 2 and Class 3 Cable Types
| Cable | Use | May be replaced by |
|---|---|---|
| CL2P | Plenum | CL3P |
| CL2R | Riser | CL3R, CL2P, CL3P |
| CL2 | General-purpose | CL3, CL2R, CL3R, CL2P, CL3P |
| CL2X | Dwellings and limited raceway applications | Any of the above |

A Class 3 cable can always replace the Class 2 cable of the same or lower fire rating, and a
higher fire rating (plenum, then riser) can always replace a lower one.

Communications cables (CMP, CMR, CM) and fire alarm cables (FPLP, FPLR, FPL) are permitted to
substitute for Class 2/3 cables per the substitution table, because they meet equal or higher
fire ratings. **Plenum-rated cable is required in other spaces used for environmental air
(plenums)** unless installed in a raceway permitted there.

## Separation from Power Conductors
Class 2 and Class 3 conductors **must not** be placed in any cable, raceway, compartment,
enclosure, outlet box, or device box with electric light, power, Class 1, or non-power-limited
fire alarm conductors, except when:
- A **barrier** or listed divider separates them, or
- The power conductors are only there to connect equipment that the Class 2 circuits serve, and
  a minimum separation (commonly 6 mm/0.25 in) is maintained, or
- Other specific exceptions apply (e.g., certain manufactured listed equipment).

Typical field example: a 0–10-V dimming LED fixture. The driver's 120/277-V supply and the
purple/gray 0–10-V leads enter the same fixture wiring compartment. The 0–10-V wiring is often
Class 1 or requires Class 1 wiring methods **if** the driver marking says so — read the driver
label. If the dimming leads are marked Class 2, they must be separated from line-voltage
conductors in the field-installed wiring.

## Support and Installation
- Cables must be supported by the **building structure**, not by ceiling grid wires or the
  ceiling grid itself (unless the support is identified for that use) (300.11).
- Installed so they will not be damaged by normal building use — use bushings and grommets
  through metal studs.
- **Abandoned cable:** the accessible portion of abandoned Class 2, Class 3, and PLTC cable must
  be removed; cable tagged for future use must be identified.

## Power over Ethernet and Bundling
PoE delivers power on data cable. Large bundles heat up, so the 2023 NEC limits current per
conductor based on conductor size, bundle size, and cable temperature rating (Table 725.144).
For example, a bundle of many 23 AWG cables at higher PoE classes may require "-LP" (limited
power) rated cable or smaller bundles. Follow the table and the cable's LP marking.

> **Safety:** "Low voltage" does not mean "no hazard." A Class 2 transformer has a 120-V or
> 277-V primary. Lock out and verify the supply circuit before working inside the transformer
> enclosure or a fixture wiring compartment. Class 3 circuits can deliver a shock up to 150 V.

## Key Takeaways
- 2023 NEC: Article 722 (cables), 724 (Class 1), 725 (Class 2 and 3).
- The power source determines the class; only listed, marked Class 2/3 sources create Class 2/3
  circuits.
- Class 2/3 must be separated from power, Class 1, and NPLFA conductors unless a barrier or
  specific exception applies.
- Use the cable hierarchy: plenum ≥ riser ≥ general-purpose.
- Support cables from the structure; remove accessible abandoned cable; check PoE bundle limits.
