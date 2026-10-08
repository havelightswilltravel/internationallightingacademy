---
title: "Review: Lighting Controls and Emergency Lighting"
minutes: 40
video:
video_suggestion: >
  A CALT stands in a corridor and classroom showing each control and life-safety device in
  turn: a dual-technology occupancy sensor, a photocell and contactor in an electrical room
  (closed panel), a networked room controller, an exit sign, an emergency battery unit, and a
  UL 924 transfer device. Ends with a 30-second test on an emergency unit and a test log entry.
---

## Standalone Controls (LT3)
### Occupancy and vacancy sensors
| Technology | Detects | Strengths | Weaknesses |
|---|---|---|---|
| PIR (passive infrared) | Heat movement across zones | No false trips from air; good for small, enclosed spaces | Needs line of sight; weak for small motions at distance |
| Ultrasonic | Doppler shift of sound waves | Sees around obstacles; good for small motions | Can false-trigger from airflow or vibration |
| Dual-technology | Both, typically requiring both to turn on and either to hold on | Fewer false-ons and false-offs | Higher cost |
| Microwave | Doppler radar | Very sensitive; often in fixture-integrated sensors | Can detect through walls or glass |

- **Occupancy sensor:** automatic on, automatic off.
- **Vacancy sensor:** manual on, automatic off; often saves more energy and is required for some
  space types by energy codes.

### Other controls
- **Photocells:** turn exterior lights on at dusk and off at dawn. Aim north where possible
  (in the Northern Hemisphere) and away from the lights they control.
- **Time clocks:** mechanical, digital and astronomical (calculate sunrise/sunset by location).
- **Lighting contactors:** use a low-power control circuit to switch large lighting loads.
  Mechanically held contactors stay in position without continuous coil power; electrically
  held contactors drop out when coil power is lost.
- **Relays and power packs:** switch line voltage from a low-voltage sensor signal.

## Networked Lighting Controls (LT4)
- **Architectures:** wired (dedicated bus or Ethernet), wireless mesh, or hybrid, with gateways
  connecting to software and building systems.
- **Luminaire-level lighting control (LLLC):** each fixture has its own sensor and control,
  allowing individual high-end trim, occupancy and daylight response. DLC defines NLC and LLLC
  requirements for qualified systems.
- **High-end trim (task tuning):** reducing maximum output to the level actually needed; saves
  energy and is often a commissioning step.
- **BMS integration:** commonly through BACnet; shares schedules, occupancy and energy data.
- **Commissioning:** addressing, grouping, zoning, sequences, and documentation (LT5-C02).

## Energy Code Control Requirements (LT4)
ASHRAE 90.1, the IECC and state codes (such as California Title 24) include **mandatory
lighting control requirements** that typically include some combination of: local manual
control, automatic shutoff (occupancy sensing or scheduled shutoff), multi-level (light
reduction) control, daylight responsive controls in daylight zones, exterior lighting controls,
and functional testing. They also limit **lighting power density (LPD)**. Requirements vary by
edition and jurisdiction, so always check the adopted code and project specifications.

## Emergency and Egress Lighting (LT3)
### Purpose and code basis
Emergency lighting provides illumination for safe exit when normal power fails. **NFPA 101
(Life Safety Code)** sets when and where it is required and its performance; **NEC Article 700**
covers emergency system wiring and equipment; **UL 924** covers emergency lighting and power
equipment, including exit signs, battery units and emergency lighting control devices.

### NFPA 101 performance basics
- **Duration:** at least **1.5 hours** after loss of normal power.
- **Illumination:** initially an average of at least **1 fc** and a minimum of **0.1 fc** at any
  point along the egress path (measured at the floor), with a maximum-to-minimum ratio not
  exceeding **40:1**. At the end of 1.5 hours, levels may decline to an average of 0.6 fc and a
  minimum of 0.06 fc.

### NFPA 101 testing (battery-operated equipment)
| Test | Frequency | Duration |
|---|---|---|
| Functional test | Monthly (at intervals not exceeding 30 days) | At least 30 seconds |
| Functional test | Annually | Full 1.5 hours (90 minutes) |

Written records of testing must be kept for AHJ inspection. Self-testing/self-diagnostic units
and computer-based systems that meet NFPA 101 criteria can automate testing, but records and
follow-up on failures are still required.

### Equipment
- **Battery units ("bug-eyes")** and **emergency LED drivers** inside fixtures.
- **Inverters** (central or mini) supply AC to selected normal fixtures during an outage.
- **Generators** with transfer switches for larger systems.
- **UL 924 emergency lighting control devices** make controlled (switched/dimmed) fixtures go to
  emergency output on loss of normal power.
- **Exit signs:** internally illuminated (LED), photoluminescent (needs adequate charging light),
  or self-luminous (tritium; requires special disposal).

> **Safety:** Emergency system circuits and equipment are life-safety systems. Coordinate any
> testing that interrupts power, never leave occupied egress paths dark, and do not modify
> emergency circuits or transfer equipment without authorization and LOTO. An emergency unit
> may be connected to an unswitched circuit and contain a battery; disconnect the battery
> per the manufacturer's instructions before working on its wiring.

## Common Controls and Emergency Problems
| Problem | Likely cause |
|---|---|
| Exterior lights on during day | Photocell failed "on," photocell shaded or facing a light source, contactor welded, time clock override |
| Exterior lights never turn on | Failed photocell, contactor coil open, clock wrong, tripped breaker |
| Emergency unit fails 30-second test | Dead battery, failed charger, lamp or LED failure, unit not on unswitched circuit |
| Controlled emergency fixtures stay off in outage | UL 924 control device missing, miswired or monitoring the wrong circuit |
| Lights shut off on occupants | Sensor placement, sensitivity or time delay |

## Key Takeaways
- Know PIR, ultrasonic, dual-tech and microwave strengths; occupancy = auto-on, vacancy = manual-on.
- Photocells, astronomical clocks and contactors control exterior and large loads.
- NLC and LLLC enable high-end trim, individual control and BMS integration (often BACnet).
- Energy codes require specific controls and LPD limits; check the adopted edition.
- NFPA 101: 1.5 h duration; 1 fc average, 0.1 fc minimum, 40:1 max-to-min; monthly 30 s and annual 90 min tests with records.
- Controlled emergency fixtures need UL 924 control devices.
