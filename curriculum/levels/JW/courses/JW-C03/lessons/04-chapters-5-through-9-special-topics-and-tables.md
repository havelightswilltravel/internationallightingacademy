---
title: Chapters 5 Through 9 — Special Occupancies, Equipment, Conditions, Communications, and Tables
minutes: 50
video:
video_suggestion: >
  A montage of real special-occupancy installations — a gas station dispenser island, a
  hospital headwall, a marina pedestal, an illuminated sign with its disconnect, a fire pump
  controller, an emergency generator transfer switch room, and a PV array — each with an
  on-screen caption showing the NEC article and the one or two rules most often tested.
---

## Why These Chapters Matter on the Exam
Chapters 5, 6, and 7 **supplement or modify** the general rules of Chapters 1–4 (90.3). Exam
questions in these chapters often hinge on recognizing that a special rule overrides a general
one. Section numbers below follow the **2023 NEC**; confirm your state's tested edition.

## Chapter 5 — Special Occupancies
| Article | Topic | High-yield points |
|---|---|---|
| 500–506 | Hazardous (classified) locations | Class I gases/vapors, II dust, III fibers; Division 1 normal / Division 2 abnormal; Groups A–D (gas) and E–G (dust); T-codes below autoignition temperature; seals within 18 in of arcing enclosures; at least five full threads engaged; Zones 0/1/2 and 20/21/22 |
| 511 | Commercial garages, repair and storage | Classified areas near the floor and in pits where flammable fuels are transferred, reduced by ventilation; GFCI for certain receptacles |
| 514 | Motor fuel dispensing facilities | Table 514.3(B)(1) classifies areas around dispensers and tanks; emergency shutoff for dispensers; seals at dispensers and where conduit leaves classified areas |
| 517 | Health care facilities | Patient care space Categories 1–4; redundant grounding (517.13); 8 hospital-grade receptacles at Category 2 beds, 14 at Category 1 beds; EES branches — life safety, critical, equipment; 10-second restoration for life safety and critical branches |
| 518 | Assembly occupancies | Buildings or portions designed for **100 or more persons**; wiring methods limited to metal raceways, MC, AC with insulated EGC, and others as permitted |
| 525 | Carnivals, circuses, fairs | GFCI for many receptacles; overhead clearances from rides |
| 547 | Agricultural buildings | Equipotential planes in livestock confinement areas; wiring methods resistant to corrosion and dust |
| 550 / 551 | Mobile/manufactured homes and RV parks | Service equipment location; RV site supply equipment ratings (e.g., 20-, 30-, and 50-A receptacles) |
| 555 | Marinas, boatyards, docking facilities | Ground-fault protection for shore power receptacles and feeders (555.35); electrical datum plane |

## Chapter 6 — Special Equipment
| Article | Topic | High-yield points |
|---|---|---|
| 600 | Electric signs | Commercial building with ground-floor pedestrian entrance: at least one outlet on a **20-A** branch circuit for a sign (600.5(A)); disconnect within sight of the sign or lockable (600.6); sign circuits supplying incandescent/fluorescent/HID limited to 20 A; LED and neon rules |
| 620 | Elevators | Disconnect for each elevator in the machine room; lighting and receptacles for machine rooms and pits; GFCI in pits |
| 625 | EVSE | 125% continuous load; individual branch circuit; GFCI on receptacles for EV charging; disconnect for > 60 A or > 150 V to ground |
| 680 | Pools, spas, hot tubs | Equipotential bonding with 8 AWG solid copper; perimeter 3 ft; water bond 9 in²; GFCI for pump motors and receptacles within 20 ft; receptacles not within 6 ft; spa emergency shutoff 5 ft away (non-dwelling) |
| 690 | Solar PV | 600-V maximum for one- and two-family dwellings; Isc × 1.25 × 1.25; rapid shutdown ≤ 30 V outside/≤ 80 V inside array boundary within 30 s |
| 695 | Fire pumps | Reliable source; supply conductors protected to carry the motor's locked-rotor current indefinitely (overcurrent protection must not open on locked-rotor current); voltage at the controller not to drop more than 15% during motor starting |

## Chapter 7 — Special Conditions
### Emergency vs. Standby Systems
| Article | System | Required by | Power restoration |
|---|---|---|---|
| **700** | Emergency | Law/codes — life safety (egress lighting, fire alarm, fire pumps in some cases) | Within **10 seconds** |
| **701** | Legally required standby | Law/codes — not directly life safety (smoke control, sewage, communications) | Within **60 seconds** |
| **702** | Optional standby | Owner's choice (homes, data centers, farms) | No time requirement |

Other Chapter 7 rules:
- 700.10: emergency wiring kept **entirely independent** of all other wiring (separate raceways,
  boxes, and enclosures), with limited exceptions.
- 700.32 / 701.32: selective coordination of OCPDs.
- 702: transfer equipment must prevent inadvertent interconnection of the normal and standby
  sources; portable generator connections at dwellings require a transfer switch or listed
  interlock.
- **705** interconnected power sources: 120% busbar rule; supply-side connections.
- **706** energy storage systems; **710** stand-alone systems; **750** energy management systems.
- **722/724/725** power-limited circuits (2023 reorganization); **760** fire alarm; **770** optical
  fiber.

## Chapter 8 — Communications
- Not subject to Chapters 1–7 unless referenced (90.3).
- 2023 structure: 800 (general), 805 (communications circuits), 810 (radio/TV antennas), 820
  (CATV), 830 (network-powered broadband), 840 (premises-powered broadband).
- Primary protectors at entrance; bonding to the intersystem bonding termination; cable ratings
  CMP > CMR > CM > CMX; remove accessible abandoned cable.

## Chapter 9 Tables and Annexes
| Table | Use |
|---|---|
| Table 1 | Percent fill: 53% one conductor, 31% two, 40% over two |
| Notes to Tables | Note 4 nipples 60%; Note 7 rounding up at 0.8; EGCs count in fill |
| Table 4 | Raceway dimensions and areas by type and trade size |
| Table 5 / 5A | Insulated conductor dimensions (5A for compact aluminum) |
| Table 8 | Conductor properties: circular mils, DC resistance, stranding |
| Table 9 | AC resistance and reactance (for precise voltage drop) |
| Tables 11(A)/(B), 12(A)/(B) | Class 2 and 3 and PLFA power source limitations |
| Annex C | Maximum number of same-size conductors in each raceway type |
| Annex D | Worked calculation examples (useful study source) |

> **Safety:** Special occupancies are special because the consequences of failure are greater —
> explosions, patients who cannot self-rescue, swimmers in conductive water, and life-safety
> systems that must work during a fire. Treat every rule in these chapters as written in
> response to real injuries, and follow facility permit, LOTO, and verification procedures
> without shortcuts.

## Key Takeaways
- Chapters 5–7 modify Chapters 1–4; Chapter 8 stands alone unless referenced.
- Emergency (700) = 10 s; legally required standby (701) = 60 s; optional standby (702) = no
  time limit.
- Assembly occupancies (518) start at 100 persons; commercial buildings with pedestrian
  entrances need a 20-A sign circuit (600.5).
- Fire pump protection must carry locked-rotor current indefinitely.
- Know the Chapter 9 tables and Annex C — they supply the data for most fill and voltage drop
  questions.
