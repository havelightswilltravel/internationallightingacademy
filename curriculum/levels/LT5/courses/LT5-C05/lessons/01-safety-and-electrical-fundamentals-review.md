---
title: "Review: Safety and Electrical Fundamentals"
minutes: 40
video:
video_suggestion: >
  A rapid-fire review video: a CALT demonstrates live-dead-live with a proving unit and DMM,
  applies a personal lock in a group lockout, sets up a ladder at 4:1 extending 3 ft above the
  landing, and then works three quick calculations on a whiteboard (Ohm's law, 208 V from
  120 V line-to-neutral, and a voltage drop estimate).
---

This review covers the most important LT1-LT4 safety and electrical fundamentals. The CALT
certification exam draws heavily on these topics. If anything here feels unfamiliar, go back
to the original course.

## Safety Foundations (LT1, LT3)
### Electrical hazards
- **Shock:** current through the body. As little as a few milliamps is felt; tens of milliamps
  across the chest can cause loss of muscle control and ventricular fibrillation.
- **Arc flash:** an electrical explosion releasing intense heat and light. Can cause severe
  burns at a distance.
- **Arc blast:** pressure wave, molten metal and shrapnel.

### The electrically safe work condition
OSHA (29 CFR 1910.147 and 1910.333) and NFPA 70E require de-energizing before work unless
energized work is justified. The core steps:
1. Identify all sources of supply (drawings, panel schedules, labels; watch for multiwire
   branch circuits, emergency circuits and back-feeds).
2. Notify affected people.
3. Open the disconnecting means (breaker or switch), not a wall switch or occupancy sensor.
4. Verify visually where possible that contacts are open or breakers are off.
5. Release stored energy if present.
6. Apply **your own** lock and tag. In group lockout, each worker applies a personal lock.
7. **Verify absence of voltage** with an adequately rated tester: test the tester on a known
   live source, test all conductors (phase-to-phase, phase-to-neutral, phase-to-ground,
   neutral-to-ground), then re-test the tester (**live-dead-live**).
8. Ground if induced or stored voltage could be present (rare in lighting work).

> **Safety:** A non-contact voltage tester is a screening tool only. It can miss voltage
> (shielded cable, low battery, poor coupling) and can false-alarm. Verification of absence of
> voltage requires a contact tester or meter with the live-dead-live check.

### Arc-flash and shock protection basics (NFPA 70E)
- **Approach boundaries:** limited and restricted approach boundaries protect against shock;
  the arc-flash boundary is where incident energy could reach 1.2 cal/cm2 (the onset of a
  second-degree burn).
- **PPE categories:** CAT 1 (minimum 4 cal/cm2), CAT 2 (8), CAT 3 (25), CAT 4 (40).
- **Meter CAT ratings:** use CAT III for building distribution and lighting circuits and CAT IV
  at the service origin; voltage rating must equal or exceed the system.

### Falls and access
- **Ladders:** inspect before use; 4:1 setup (1 ft out for every 4 ft of height to the support
  point); extend at least 3 ft above the landing for access (OSHA 29 CFR 1926.1053); three
  points of contact; never stand on the top cap or top step of a stepladder; nonconductive
  (fiberglass) side rails near electrical work.
- **MEWPs:** only trained and authorized operators (ANSI A92.22/A92.24); pre-use inspection and
  workplace inspection (slopes, holes, overhead obstructions, power lines); use the required
  fall protection (restraint/arrest in boom lifts); stay within the platform capacity.

### Hazardous materials
- Fluorescent and HID lamps contain **mercury**: manage as universal waste; follow breakage
  procedures.
- Pre-1979 ballasts not marked "No PCBs" are treated as potentially PCB-containing.

## Electrical Fundamentals (LT1, LT2, LT4)
### Core formulas
| Formula | Use |
|---|---|
| E = I x R (Ohm's law) | Voltage, current, resistance |
| P = E x I (Watt's law) | Power from voltage and current (resistive loads) |
| P = E x I x PF | Real power with power factor (single-phase) |
| P = E x I x 1.732 x PF | Three-phase real power (E = line-to-line voltage) |
| I = P / E | Current from power |

Example: a 277 V lighting circuit carries 12 LED fixtures at 50 W each, PF near 1.0. Load =
600 W; current = 600 / 277 = about 2.2 A.

### Common building systems
| System | Line-to-neutral | Line-to-line | Notes |
|---|---|---|---|
| 120/240 V single-phase, 3-wire | 120 V | 240 V | Residential, small commercial |
| 120/208 V three-phase wye | 120 V | 208 V | 120 x 1.732 = 208 |
| 277/480 V three-phase wye | 277 V | 480 V | Commercial lighting at 277 V |

### Series and parallel
- **Series:** same current through all; voltages add; one open stops everything.
- **Parallel:** same voltage across all; currents add. Building lighting circuits are parallel.

### Neutral and grounding
- The **neutral (grounded conductor)** carries normal return current.
- The **equipment grounding conductor (EGC)** carries fault current only, providing a path to
  trip the breaker. Never use it as a neutral.

### Multiwire branch circuits (LT4)
Two or three ungrounded conductors from different phases share one neutral. All ungrounded
conductors must be disconnected simultaneously at the panel (handle ties or common-trip
breaker; NEC 210.4(B)). An open shared neutral can put unbalanced voltage on loads and expose
workers to shock. With nonlinear loads, triplen harmonic currents add in the shared neutral.

### Voltage drop (LT4)
Single-phase estimate: **VD = (2 x K x I x L) / CM** where K is about 12.9 for copper, L is
one-way length in feet, and CM is circular mils (for example, 12 AWG = 6,530 CM).

Example: 16 A at 150 ft on 12 AWG copper: 2 x 12.9 x 16 x 150 / 6,530 = about 9.5 V, or
7.9% on 120 V. That is too high; NEC informational notes suggest about 3% for branch circuits
and 5% total. Upsize the conductor or move the load to a higher voltage circuit.

## Key Takeaways
- Establish an electrically safe work condition: identify sources, open the disconnect, lock, tag, and verify live-dead-live.
- Non-contact testers screen; contact testers verify.
- Know approach boundaries, PPE categories and meter CAT ratings.
- Ladders: inspect, 4:1, 3 ft above the landing, three points of contact. MEWPs: trained operators only.
- Use Ohm's and Watt's laws, know 120/208 and 277/480 relationships, and calculate voltage drop.
- Lock out all ungrounded conductors of a multiwire branch circuit.
