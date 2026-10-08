---
title: Systems Troubleshooting Quick Reference
minutes: 40
video:
video_suggestion: >
  A lead technician flips through a laminated quick-reference card in a service van, then the
  video cuts to short clips of the "first check" for each system: swapping a known-good lamp,
  looking at blackened fluorescent ends, reading HID socket voltage (qualified, PPE), pressing
  an emergency test button, covering a photocell, plugging in a known-good patch cable, and
  checking a track fixture's adapter. End with the tech writing an electrician referral.
---

## How to Use This Reference

This lesson condenses the company's Master Troubleshooting Guide into one card per system. Each
card follows the seven-step method from Lesson 1 in compressed form:

- **First checks** — the cheapest, most likely causes and the readings that tell you where to go.
- **Isolate** — the measurement or swap that splits the system in half (Lesson 3).
- **Common fix** — what usually solves it.
- **Escalate when** — stop and write it up for an electrician, specialist or lead.
- **In depth** — the course that teaches the full procedure, components, parts and safety.

> **Safety:** Every "check power," "line voltage," "switch leg" or "socket voltage" step is
> energized diagnostic work for persons qualified under the employer's NFPA 70E program, with
> the required PPE and a CAT-rated meter verified on a known source. Before touching conductors,
> sockets or components: lock out, tag out, and verify absence of voltage live-dead-live. Panel
> interiors, breaker and contactor replacement and branch-circuit changes are electrician work
> unless the company has qualified you.

### Incandescent
| | |
|---|---|
| First checks | Known-good lamp or lamp continuity; switch on; power at fixture |
| Isolate | Switch leg voltage; socket eye (center contact) springs up and isn't burnt; thermal protector continuity (cool, de-energized) |
| Common fix | Relamp with correct wattage; bend up or replace socket; correct overheating cause if protector opened |
| Escalate when | No power at the switch; scorched box wiring; repeated thermal trips from insulation or wrong fixture |
| In depth | LT1-C08 Incandescent & Halogen; LT1-C04 Lesson 5 |

### Fluorescent / CF
| | |
|---|---|
| First checks | Blackened lamp ends → change lamps; what else is out |
| Isolate | Power at ballast input; all lamps out vs some; switch, then first junction box |
| Common fix | Lamps; ballast (or CFL starter/igniter) if all out with power; sockets/wiring if some out; T5 ballast power reset after relamp |
| Escalate when | No power traced back past the first junction box; PCB-era ballast leaking; repeated failures (heat, voltage) |
| In depth | LT2-C04 Lesson 2; LT1-C05 Lesson 5 |

### HID
| | |
|---|---|
| First checks | Wait out restrike; photocell or controls; neighbors on the circuit |
| Isolate | Socket (open-circuit) voltage vs chart and ballast label, ignitor disconnected on pulse-start/HPS; then line voltage; then pole-base fuses |
| Common fix | Lamp (good OCV); capacitor (out of tolerance); ballast kit plus fresh lamp; socket; ignitor |
| Escalate when | Fuse blows again; no line voltage at hand hole; underground or pole wiring damage |
| In depth | LT2-C04 Lessons 3–5; LT3-C05 Exterior, Site & Pole Lighting |

### Neon
| | |
|---|---|
| First checks | Look and listen for operation of each unit (never touch energized glass, electrodes or GTO); switches and incoming power at the transformer |
| Isolate | First piece of glass off the transformer; transformer secondary/bypass test; split-half bypassing of units — all per specialist procedure with the transformer locked out between steps |
| Common fix | Replace broken unit, burnt GTO or booties, or failed transformer |
| Escalate when | Any glass bending, secondary work you aren't trained for, or a damaged enclosure — sign specialist |
| In depth | LT3-C09 Neon & Cold-Cathode Signage |

### Emergency
| | |
|---|---|
| First checks | Lamp good; line voltage (unswitched and switched); charge indicator; battery plug |
| Isolate | Press test button: lights on test → normal side; no light → emergency-side wiring/sockets/battery unit |
| Common fix | Standard ballast/driver (lights on test); battery backup or listed battery (no light, wiring good); bug eye/exit unit if line voltage good |
| Escalate when | No voltage on the emergency circuit; inverter or generator-fed circuits; several units out at once |
| In depth | LT3-C04 Lesson 5 |

### LED / signage
| | |
|---|---|
| First checks | Whole sign out → line voltage; sporadic → connections |
| Isolate | Secondary voltage at power supply (under load); low-voltage connections; swap suspect modules with known-good |
| Common fix | Remake connections (most common); replace modules; replace supply after re-checking secondary connections |
| Escalate when | No line voltage at the sign; damaged enclosures or wet-location wiring faults |
| In depth | LT3-C10 LED Signage & Specialty LED; LT3-C01 for LED drivers |

### Case lighting
| | |
|---|---|
| First checks | Switches; defrost cycle (mark it and return in about 30 minutes); lamps |
| Isolate | Sockets for breaks/burns; line voltage at the (often remote) ballast; harness continuity |
| Common fix | Lamps, sockets, correct remote ballast for the lamp application |
| Escalate when | Harness repair requires breaking case seals (case/refrigeration specialist); no line voltage and not in defrost (electrician) |
| In depth | LT3-C08 Refrigerated Case Lighting |

### Motion sensors
| | |
|---|---|
| First checks | Settings (sensitivity, time, mode); ground and neutral present |
| Isolate | Line voltage hot-to-neutral; switch-leg output; ceiling: line in and low voltage out at power pack, low voltage at sensor |
| Common fix | Adjust settings; replace wall sensor; replace power pack or sensor as isolated |
| Escalate when | No neutral in the box; no line voltage; sensors tied to relay panels or networked controls |
| In depth | LT3-C03 Lesson 5 |

### Timeclock / photocell
| | |
|---|---|
| First checks | Clock keeping correct time (don't trust motor sound); trippers; program/DST; nearby light sources |
| Isolate | Line on line terminal; line voltage hot-to-neutral; bypass clock or cover photocell → load voltage |
| Common fix | Replace trippers; reset program; replace clock or photocell (no load voltage when forced on); adjust sleeve and orientation |
| Escalate when | Contactor or panel faults downstream; no line voltage in the enclosure |
| In depth | LT3-C03 Lesson 2; LT3-C05 |

### Data cable
| | |
|---|---|
| First checks | Pin configuration on both ends against the T568A/B chart; crimp quality |
| Isolate | Temporary known-good patch cable; jack accepts and latches the plug |
| Common fix | Re-terminate (crimp/pinout is the usual cause) or replace the cable |
| Escalate when | Network equipment, PoE or structured-cabling certification issues — IT or cabling contractor |
| In depth | LT3-C11 Data & Low-Voltage Communications Cabling |

### Contactors
| | |
|---|---|
| First checks | Line voltage; coil voltage with controls calling (some coils energize on loss of signal); HOA position |
| Isolate | Line and coil good but no load voltage on every pole → contactor contacts/mechanism |
| Common fix | Note burned or overheated wiring; correct the control input |
| Escalate when | Contactor, coil or rebuild needed — electrician (check before writing up a rebuild) |
| In depth | LT3-C07 Contactors, Relays & Control Panels; LT3-C03 Lesson 3 |

### Breakers
| | |
|---|---|
| First checks | Trip pattern; load compared with breaker rating; signs of heat at the panel exterior |
| Isolate | Measure load current (qualified); half-split the circuit to find a fault (Lesson 3) |
| Common fix | Remove the overload or fault cause |
| Escalate when | Breaker trips within its tolerance, feels loose or hot, or panel shows overheating — never open the dead front unless trained |
| In depth | LT2-C11 Breakers & Overcurrent Protection |

### 3-way switching
| | |
|---|---|
| First checks | Wiggle the switch handle (looseness suggests a bad switch); intermittent → loose connections |
| Isolate | Trace the common and travelers with a 3-way diagram (de-energized continuity) |
| Common fix | Replace the failed switch; remake loose terminations |
| Escalate when | Miswired travelers or added 4-ways need rewiring — electrician |
| In depth | LT2-C08 3-Way & 4-Way Switching |

### Low voltage
| | |
|---|---|
| First checks | Lamp continuity; socket burns, breakage, wear |
| Isolate | Line voltage hot-to-neutral at the transformer; continuity socket-to-transformer |
| Common fix | Lamp, socket, transformer; replace fixture if intermittent with no fault found |
| Escalate when | Transformer feed problems or overloaded remote transformer circuits |
| In depth | LT2-C10 Low-Voltage Lighting Systems |

### Track lighting
| | |
|---|---|
| First checks | At least one good lamp in the track; whole track out → power at entrance fitting |
| Isolate | Power at sockets; fixture switch; reseat or move the adapter; continuity track contacts to socket (incandescent/halogen) |
| Common fix | Relamp; reposition fixture; replace ballast/driver in the fixture head if other heads work |
| Escalate when | No power at the feed/entrance fitting from the circuit |
| In depth | LT2-C09 Track Lighting |

### Relays
| | |
|---|---|
| First checks | Call the facility's controls monitoring service and troubleshoot with them |
| Isolate | Panel diagnostics, relay status LEDs, override/bypass per the monitoring service |
| Common fix | Schedule or override correction by the controls provider |
| Escalate when | Relay replacement or panel work — usually an electrician or controls contractor |
| In depth | LT3-C07 Contactors, Relays & Control Panels; LT4-C01 |

### Outlets & switches
| | |
|---|---|
| First checks | Damaged, burned or loose parts; line voltage at the device |
| Isolate | Connections at the device and back-stab vs screw terminals (de-energized) |
| Common fix | Remake connections; replace the device if line voltage is good and it doesn't work |
| Escalate when | Aluminum wiring, scorched boxes, missing grounds or GFCI/AFCI questions beyond your training |
| In depth | LT1-C09 Outlets & Switches |

**Parts:** every card ends with getting the right replacement — see LT1-C10 Parts Knowledge
& Sourcing for reading labels, cross-referencing and ordering.

## Key Takeaways
- Each system has one decisive split: lamp ends, socket voltage, test button, pack output, bypass/cover, known-good cable or module.
- Prove power before replacing parts, and prove the part before ordering it.
- Escalate panel, breaker, contactor, relay, branch-circuit and specialist (neon, sealed case, network) work.
- Use the "In depth" course for full procedures, components, parts and safety.
