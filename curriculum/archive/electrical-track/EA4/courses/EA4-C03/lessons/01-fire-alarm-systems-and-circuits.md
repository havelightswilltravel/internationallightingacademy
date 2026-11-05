---
title: Fire Alarm Systems and Circuits
minutes: 45
video:
video_suggestion: >
  A NICET-certified fire alarm technician opens a conventional and an addressable fire alarm
  control unit on a training board, identifies the initiating device circuits, signaling line
  circuit, and notification appliance circuits, shows end-of-line resistors, and demonstrates
  how removing a device conductor causes a trouble signal. Includes a close-up of FPLR and CI
  cable jackets and the red, locked branch-circuit breaker for the panel.
---

## Who Does What
Fire alarm systems are governed by two documents that work together:
- **NFPA 72, National Fire Alarm and Signaling Code** — what devices are required, where they
  go, how they perform, and how they are tested.
- **NEC Article 760** (2023 NEC; AHJ edition governs) — how the circuits are wired: power
  supply, cable types, separation, and support.

Many states require a separate fire alarm license or NICET certification to design, program,
or certify systems. As an electrician you may install raceway, pull cable, and mount backboxes
under the fire alarm contractor's direction. Know the limits of your license.

## System Components
| Component | Function |
|---|---|
| Fire alarm control unit (FACU) | Receives signals, supervises circuits, operates notification and outputs |
| Initiating devices | Smoke detectors, heat detectors, manual pull stations, waterflow and tamper switches, duct detectors |
| Notification appliances | Horns, strobes, horn/strobes, speakers |
| Initiating device circuit (IDC) | Conventional circuit connecting initiating devices (zone) |
| Signaling line circuit (SLC) | Addressable data loop carrying multiple device addresses and signals |
| Notification appliance circuit (NAC) | Powers notification appliances (typically 24 V DC) |
| Supervising station connection | Communicator sending alarm, supervisory, and trouble signals off-site |

## Supervision and Pathway Classes
A fire alarm system must know when its wiring is damaged. Every circuit is **supervised** — an
open, and on most circuits a ground fault, causes a **trouble** signal.

- **Class B pathway:** a single run out to the devices ending at an **end-of-line (EOL)**
  device (resistor). A break shows trouble, but devices beyond the break lose communication.
- **Class A pathway:** the circuit leaves the panel, passes every device, and **returns** to
  the panel. A single open still shows trouble, but every device keeps working because it can
  be reached from both directions. The outgoing and return conductors must be routed separately
  as required by NFPA 72.
- **Class X** and **Class N** pathways (NFPA 72) cover additional survivability and Ethernet-type
  pathways.

**Correct Class B wiring:** conductors run *into* and *out of* each device (or each device's
separate terminals), so removing a device wire causes a trouble signal. **T-taps** on a
conventional Class B IDC or NAC are prohibited because a device on a branch could be
disconnected without supervision detecting it. (Addressable SLCs may permit T-taps only where
the manufacturer and NFPA 72 class allow.)

## Power-Limited vs. Non-Power-Limited (Article 760)
| Type | Abbreviation | Typical use |
|---|---|---|
| Non-power-limited fire alarm | NPLFA | Older systems, some 120-V circuits; wired like Class 1 |
| Power-limited fire alarm | PLFA | Nearly all modern systems; power source listed and marked power-limited |

### PLFA Cable Types (Hierarchy)
| Cable | Permitted in | Substitutes for |
|---|---|---|
| **FPLP** | Plenums, risers, general | FPLR, FPL |
| **FPLR** | Risers, general | FPL |
| **FPL** | General-purpose | — |
| **CI** suffix (e.g., FPLR-CI) | Circuit integrity cable for survivability requirements | — |

Survivability (for example, for voice evacuation circuits in high-rises) may require 2-hour
rated CI cable, a 2-hour rated enclosure, or other methods per NFPA 72.

## Power Supply Rules
- The FACU must be supplied by a **dedicated branch circuit** (it may not supply other loads).
- The branch circuit disconnecting means must be **identified in red**, marked "FIRE ALARM
  CIRCUIT," accessible only to qualified personnel, and its location noted at the FACU.
- Secondary power is provided by batteries sized to run the system in standby (commonly 24 hours)
  and then in alarm (commonly 5 minutes for horns/strobes; longer for voice systems) per NFPA 72.

## Worked Example: NAC Voltage Drop
A 24-V DC NAC serves 10 horn/strobes drawing 0.12 A each (from the manufacturer's data at the
selected candela). The farthest device is 250 ft from the panel. The cable is 14 AWG solid
copper (Chapter 9, Table 8: about **3.07 Ω per 1,000 ft**). The panel's NAC voltage at the end
of battery life is taken as **20.4 V**; the appliances are listed to operate down to **16 V**.

1. Total current: 10 × 0.12 = **1.2 A**
2. Loop length (out and back): 2 × 250 = **500 ft**
3. Resistance: 500 ÷ 1,000 × 3.07 = **1.535 Ω**
4. Voltage drop (all load lumped at the end — conservative): 1.2 × 1.535 = **1.84 V**
5. Voltage at last device: 20.4 − 1.84 = **18.56 V** → above 16 V, **acceptable**

If the result were below the minimum, use larger cable, split the circuit, or add a NAC
power extender.

## Separation
PLFA conductors must be separated from electric light, power, Class 1, and NPLFA conductors.
They generally may not occupy the same raceway, cable, box, or enclosure unless separated by a
barrier or as specifically permitted in 760.136. Keep at least 2 in from power conductors in
open runs unless one is in raceway or separated by a fixed nonconductor.

> **Safety:** Before working on any part of an occupied building's fire alarm system, notify
> the building owner, the supervising station, and the fire department as required, and place
> the system in test. A system out of service may require a fire watch. Treat the 120-V
> branch circuit to the FACU with the same lockout/tagout and verification of absence of voltage
> as any power circuit, and remember the panel batteries stay energized after the breaker is off.

## Key Takeaways
- NFPA 72 sets system requirements; NEC Article 760 sets wiring rules.
- Circuits are supervised; Class B ends at an EOL device; Class A loops back to the panel.
- No T-taps on conventional Class B IDCs or NACs.
- PLFA cable hierarchy: FPLP > FPLR > FPL; CI cable for survivability.
- The FACU needs a dedicated branch circuit with a red, marked, access-limited disconnect.
- Check NAC voltage drop using end-of-battery voltage and the appliance minimum operating voltage.
