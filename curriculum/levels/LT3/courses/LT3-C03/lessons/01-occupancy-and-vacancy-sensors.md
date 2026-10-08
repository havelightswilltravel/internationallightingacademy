---
title: Occupancy & Vacancy Sensors — PIR, Ultrasonic & Dual-Technology
minutes: 35
video:
video_suggestion: >
  In a private office and an open restroom, a technician compares a wall-box PIR sensor and a
  ceiling dual-tech sensor. The video shows mounting location choices relative to the door and
  HVAC diffuser, walk-testing in test mode with the LED indicator, adjusting time delay and
  sensitivity, and explaining occupancy vs vacancy mode to the customer.
---

## Occupancy vs Vacancy
Both types turn lights **off** automatically after a space is empty for the time-delay period.
The difference is how the lights come **on**:

| Mode | Lights ON | Lights OFF | Common uses |
|---|---|---|---|
| Occupancy (auto-on) | Automatically when motion detected | Automatically after time delay | Restrooms, corridors, storage, break rooms |
| Vacancy (manual-on) | Occupant presses the switch | Automatically after time delay | Private offices, classrooms, conference rooms — saves more energy |
| Partial-on | Auto-on to a reduced level; occupant raises to full | Automatically | Spaces where codes require reduced auto-on |

Energy codes often specify which mode, maximum time delay, and where sensors are required
(covered in LT4-C02). Always follow the project specification or the customer's direction —
don't change the mode without approval.

## Sensing Technologies
| Technology | How it detects | Strengths | Weaknesses |
|---|---|---|---|
| **PIR** (passive infrared) | Changes in infrared (heat) as a warm body crosses zones of a segmented lens | Inexpensive, few false-ons, well-defined coverage | Needs line of sight; poor at very small motions (typing); blocked by partitions, shelving, glass |
| **Ultrasonic** | Emits high-frequency sound and detects Doppler shift from motion | Covers around obstacles, detects small motion, good in restrooms with stalls | False triggers from air currents (HVAC), vibrations; can "see" through open doors into hallways |
| **Dual-technology** | Combines PIR and ultrasonic (or PIR and microphonic) | Fewer false-ons and false-offs; typically requires both to turn on and either to stay on | Higher cost, more settings |
| **Microphonic** (passive acoustic) | Listens for sounds of occupancy, usually paired with PIR | Keeps lights on for quiet occupants behind obstructions | Can be held on by noise |

**Coverage patterns.** Every sensor has a published coverage diagram for **major motion**
(walking) and **minor motion** (hand movements at a desk). Minor-motion coverage is much smaller.
Mount so that the places people sit still fall inside the minor-motion pattern.

## Types of Sensor Hardware
- **Wall-box (switch) sensors** replace a standard switch. Best in small rooms with a clear
  view of the whole space from the door. Line voltage, usually 120–277V.
- **Ceiling or wall-mount sensors with power packs.** The sensor is low voltage (often Class 2,
  24 VDC); a separate **power pack** contains a transformer/power supply and a line-voltage
  relay that switches the lighting load. Power packs often mount through a knockout on a
  junction box.
- **Line-voltage ceiling sensors** with built-in relays.
- **Fixture-integrated sensors**, common on high-bays and in networked systems.

## Wiring Notes
- **Neutral:** Many sensors require a neutral to power their electronics. The NEC generally
  requires the grounded conductor at switch locations serving habitable rooms and many other
  locations (Article 404). Verify it's actually present in the box.
- **Electronic switches and the ground wire.** Older sensors sometimes used the equipment
  grounding conductor as a return path for their small operating current. The NEC now requires
  listed electronic lighting control switches not to introduce current on the equipment
  grounding conductor in normal operation (with limited exceptions). Use current listed devices
  and never use the ground as a neutral.
- **Power pack load ratings.** Check the relay's rating for **LED driver/electronic ballast**
  loads — inrush current from many LED drivers can weld relay contacts.
- **Class 2 separation.** Keep the low-voltage sensor cable out of line-voltage raceways and
  compartments; power packs provide a barrier between their Class 2 and line-voltage leads.
- **Multiple sensors on one load** (large rooms): connect sensor outputs in parallel per the
  manufacturer's diagram so any sensor keeps the lights on.
- **Multiple circuits or 277V and 120V in one box:** use separate devices or packs rated for
  each; never mix voltages on one relay unless it is rated and listed for it.

> **Safety:** Apply LOTO to every circuit in the box or enclosure and verify absence of voltage
> (live-dead-live) before removing a switch or installing a sensor or power pack. Wall boxes
> and junction boxes frequently contain more than one circuit — test every conductor, not just
> the one you think you are working on.

## Placement — Where Most Problems Start
1. Mount where the sensor can see the occupants where they actually sit or move.
2. **Keep ultrasonic and dual-tech sensors at least the manufacturer's recommended distance from
   HVAC supply diffusers** — moving air causes false-ons.
3. Avoid views out of the room through doorways into busy corridors (false-ons) — use masking
   tabs on PIR lenses if needed.
4. Avoid mounting PIR sensors facing heat sources that cycle (heaters, sunny windows).
5. In restrooms with stalls, use ultrasonic or dual-tech so occupants in stalls are detected.
6. In warehouses, use high-bay lens options designed for aisles.

## Adjustment and Testing
1. Put the sensor in **test mode** (short time delay, often a few seconds) per the instructions.
2. Walk the room; watch the indicator LED. Check the far corners, desks and the doorway.
3. Sit at each workstation and make small hand motions — the lights must stay on.
4. Adjust **sensitivity** down if there are false-ons from the hallway or HVAC; up if there are
   false-offs.
5. Set the final **time delay** per specification (commonly 10–30 minutes in offices; energy
   codes limit the maximum).
6. Set mode (occupancy/vacancy), and any light-level (daylight) hold-off feature if provided.
7. Exit test mode — many sensors exit automatically after a set time.
8. Record settings on the work order and leave the customer with a brief explanation.

## Troubleshooting Quick Table
| Complaint | Likely cause |
|---|---|
| Lights go off on people sitting still | PIR can't see minor motion, time delay too short, sensitivity too low, wrong location |
| Lights turn on with no one there | HVAC air (ultrasonic), hallway view, heat sources, sensitivity too high |
| Lights never turn off | Sensor stuck on by false triggers, relay contacts welded, wired around (bypassed) |
| Lights never come on | No power to pack, failed relay, vacancy mode (needs button press), wiring error |

## Key Takeaways
- Occupancy = auto-on/auto-off; vacancy = manual-on/auto-off.
- PIR needs line of sight; ultrasonic sees around obstacles but reacts to air movement;
  dual-tech reduces errors.
- Mount for minor-motion coverage where people sit, away from diffusers and hallway views.
- Confirm neutral availability, relay LED ratings and Class 2 separation.
- Walk-test, set time delay and sensitivity, and document.
