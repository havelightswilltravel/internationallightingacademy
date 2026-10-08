---
title: Low-Voltage Control Wiring Practices
minutes: 30
video:
video_suggestion: >
  A walk-through of a finished office ceiling showing proper low-voltage control cable routing:
  support from the structure (not the ceiling grid wires or ducts), separation from line
  voltage, labeled cables, power pack mounting with the Class 2 side outside the box, and
  correct terminations at a sensor and wall station. Then a "spot the mistakes" segment on a
  mock-up with errors.
---

## Where You'll See Low-Voltage Control Wiring
- Occupancy sensor cables to power packs (often 3-conductor, 22 AWG or similar).
- 0–10V dimming pairs.
- Low-voltage wall stations to relay panels.
- DALI buses, DMX data, and networked control cables (LT4).
- Photocell and sensor inputs to lighting control panels.

Most of these are **Class 2** circuits: the power source (power pack, controller, driver) is
listed and limits voltage and power so that the circuit presents reduced fire and shock risk.
The NEC covers Class 2 and Class 3 circuits in Article 725 (the 2023 edition reorganized the
power-limited circuit material across Articles 722, 724 and 725). The AHJ's adopted edition
governs.

## Class 1 vs Class 2 — Practical Differences
| | Class 2 | Class 1 |
|---|---|---|
| Source | Listed Class 2 power source (labeled) | Not limited (or Class 1 power-limited source) |
| Typical voltage | 30V or less (common: 24 VDC, 0–10V, 16V DALI bus) | Up to 600V |
| Wiring method | Class 2 cable types (e.g., CL2, CL2P for plenums) or other permitted cable | Line-voltage wiring methods (raceway, MC, etc.) |
| Same raceway as power? | **No**, unless reclassified/permitted with barrier or listed method | Allowed with power conductors under conditions in the NEC |

**Reclassifying:** If you must run Class 2 conductors with power conductors, the circuit
generally must be reclassified and wired as Class 1 (and the Class 2 marking removed from the
equipment), where the equipment permits it. Follow manufacturer instructions and project
specifications; check with your supervisor.

## Separation Rules in the Field
1. **Raceways:** Do not pull Class 2 control cable into a conduit carrying line-voltage
   conductors.
2. **Boxes and enclosures:** Keep Class 2 conductors out of boxes containing power conductors
   unless a barrier separates them or the NEC permits the arrangement (for example, devices such
   as power packs designed with a barrier and separated leads).
3. **Power packs:** Mount through a knockout so the line-voltage leads are inside the junction
   box and the Class 2 leads are outside, as the manufacturer designed.
4. **Luminaires:** Route 0–10V and sensor leads through the fixture's separate wireway or as
   the instructions show — keep them away from line-voltage leads.
5. **Open cable runs:** Keep Class 2 cable separated from open line-voltage conductors and
   lighting fixtures' hot surfaces.

## Support and Routing
- Support cables from the building structure using listed supports (bridle rings, J-hooks,
  cable ties rated for the space) — **do not lay cable on the ceiling tiles** or tie it to
  ceiling grid wires, sprinkler pipes, ductwork or other systems' supports. The NEC requires
  cables to be supported by the building structure in a manner that won't be damaged by normal
  building use, and it generally prohibits using the ceiling grid or its support wires as
  support (independent, identified support wires are permitted under conditions in the code).
- In **plenums** (air-handling spaces above ceilings used for return air), use plenum-rated cable
  (e.g., CL2P) or a permitted wiring method.
- Leave accessible slack at devices, but don't leave large abandoned coils. The NEC requires
  abandoned cable that is not tagged for future use to be removed in many cases.
- **Firestopping:** Restore fire-rated walls and floors where you penetrate them using a listed
  firestop system.
- Avoid running control cable parallel to long runs of line-voltage cable, motors or VFD wiring
  where noise can cause erratic dimming or false triggers.

## Terminations
- Use the connectors the manufacturer specifies — many low-voltage leads are small (18–22 AWG)
  stranded wire; make sure your connector is rated for that size and combination.
- Strip to the correct length; no stray strands.
- Match colors and polarity (sensor: power, common, signal; 0–10V: + violet, − gray).
- Label cables at both ends (zone, device, panel input).

## Documentation
Good documentation is what makes the next service call fast:

| Record | Contents |
|---|---|
| As-built sketch | Sensor and power pack locations, zone boundaries, cable routes |
| Panel directory | Which relay/contactor controls which circuit and zone |
| Device settings | Sensor time delay, sensitivity, mode; dimmer trim |
| Schedules | Time clock/panel events, holidays, overrides |

> **Safety:** Low-voltage control work is almost always next to line-voltage circuits in the same
> ceiling, fixture or panel. Apply LOTO to the line-voltage circuits in the work area and verify
> absence of voltage before opening junction boxes, power packs, luminaires or panels. Use ladder
> safety from LT1-C02 — most control wiring is done overhead.

## Spot-the-Mistake Checklist (common field errors)
- Sensor cable pulled into the same conduit as a 277V branch circuit.
- Power pack mounted with both its Class 2 and line-voltage leads inside the same box with no
  barrier.
- Control cable lying across ceiling tiles or tied to a sprinkler pipe.
- Non-plenum cable in a return-air plenum.
- 0–10V polarity reversed at one fixture.
- Unlabeled cables at the relay panel.
- Fire-rated wall penetrated and left open.

## Key Takeaways
- Most lighting control wiring is Class 2; the power source's listing makes it Class 2.
- Keep Class 2 out of power raceways and boxes unless properly separated or reclassified as
  Class 1.
- Support cable from the structure, use plenum-rated cable where required, and firestop
  penetrations.
- Use correct small-gauge connectors, observe polarity, and label both ends.
- Document zones, settings and schedules for the next technician.
