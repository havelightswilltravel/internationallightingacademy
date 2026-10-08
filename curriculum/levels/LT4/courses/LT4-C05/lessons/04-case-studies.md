---
title: Troubleshooting Case Studies
minutes: 35
video:
video_suggestion: >
  Short dramatized reconstructions of two of the case studies below, filmed on actual company job
  sites: the senior tech narrates the initial call, shows the key measurement or log entry that
  cracked the case, and explains the corrective and preventive action. End each with "what the
  first tech missed."
---

These case studies are composites of common field problems. For each one, read the situation, decide
what you would check, then read the investigation.

## Case 1: The Flickering Office Floor

**Situation:** After an LED troffer retrofit on one floor of an office building, occupants on the east
side complain of flicker. West side is fine. The installer replaced three drivers; flicker continued.

**Investigation:**
1. Event log showed no control commands during flicker.
2. A recording meter on the east-side circuits showed voltage swinging between 105 V and 135 V on
   different circuits, changing whenever loads switched.
3. East-side circuits were a 120/208 V **three-circuit MWBC** with a shared neutral. With all three
   circuits locked out and verified dead, the tech found a **loose neutral splice** in a junction box
   above the ceiling – heat-discolored.

**Root cause:** Open/high-resistance shared neutral, made during the retrofit when the neutral was not
pigtailed properly.

**Actions:** Remade and pigtailed neutral splices; checked all MWBCs on the floor; added a neutral-splice
check to the retrofit QC checklist. Several drivers had been damaged by overvoltage and were replaced.

**Lesson:** Different behavior on different circuits of an MWBC points to the neutral.

## Case 2: Parking Lot Lights Out After Rain

**Situation:** A parking-lot circuit trips its breaker every time it rains heavily. It resets fine on
dry days. Previous techs replaced the breaker and two luminaires.

**Investigation:**
1. With the circuit locked out and verified dead, the tech disconnected the luminaires and performed an
   insulation-resistance test on each underground segment. On a dry day all segments read high. After
   rain, one segment between poles 4 and 5 read very low.
2. Excavation found the conductors had been nicked during installation and the conduit joint had
   separated, letting water reach the damaged insulation.

**Root cause:** Installation damage plus water intrusion causing a ground fault when wet.

**Actions:** Replaced conductors in the segment, repaired the raceway, re-tested. Recommended
insulation-resistance testing as part of acceptance on new underground lighting circuits.

**Lesson:** "Only when it rains" is a strong clue – test insulation when the condition is present.

## Case 3: The Lights That Turn On at Night

**Situation:** A school's classroom lights turn on around 2 a.m. several nights a week. The night
custodian swears nobody is there.

**Investigation:**
1. The NLC event log showed the 2 a.m. ON events came from the classroom **occupancy sensors**, not
   schedules.
2. The events matched the HVAC night setback cycle: when the air handlers ran, airflow from the supply
   diffuser next to each sensor triggered the **ultrasonic** element of dual-technology sensors, which
   were configured to turn lights ON if *either* technology detected motion.

**Root cause:** Sensor configuration (either-technology ON) plus sensor placement next to diffusers.

**Actions:** Reconfigured sensors to require both technologies for ON, reduced ultrasonic sensitivity,
relocated two sensors. Verified with a week of event logs.

**Lesson:** The event log tells you *which input* acted. Match timing to other building systems.

## Case 4: High-Bay Drivers Keep Failing

**Situation:** In a manufacturing plant, LED high-bay drivers fail at a rate far above normal in one bay
near the heat-treat furnaces. Warranty claims are mounting.

**Investigation:**
1. Failure records showed failures concentrated in that bay and in summer.
2. A temperature logger at fixture height recorded ambient above 55 °C during furnace operation.
3. Fixture spec sheets listed maximum ambient of 40 °C.

**Root cause:** Product not rated for the installed environment; audit did not record ambient
conditions.

**Actions:** Replaced with high-ambient-rated fixtures; added ambient temperature and environmental
conditions to the audit form (LT4-S06).

## Case 5: Nuisance Tripping After a Retrofit

**Situation:** A warehouse retrofit replaced 400 W metal halide high bays with 150 W LED high bays.
Several 20 A, 277 V circuits now trip every morning when the lights are switched on at the panel.
Running current is low.

**Investigation:**
1. Steady-state current: 8–9 A per circuit – well within the 16 A continuous limit.
2. The clamp meter's inrush function captured very high peaks at switch-on.
3. The contractor had consolidated circuits because of the lower wattage – each now had 18 fixtures,
   all switched at once with breakers used as switches.

**Root cause:** Combined driver inrush exceeding breaker instantaneous trip, caused by circuit
consolidation based only on running watts.

**Actions:** Installed a lighting control panel with staggered relay groups rated for LED loads; confirmed
breaker switching-duty markings on remaining breakers. Added inrush data review to circuit design checks.

## Discussion Questions

1. In which cases did previous technicians replace parts without finding the cause? What did it cost?
2. Which cases required a **preventive** action in a process (audit, QC, design) as well as a repair?
3. In each case, where was LOTO required, and where was energized measurement justified?

> **Safety:** In every case above, physical inspection and repair of conductors, splices and
> terminations was performed only after LOTO and verification of absence of voltage on all
> conductors – including shared neutrals. Energized work was limited to measurements by qualified
> persons in PPE selected from the arc-flash risk assessment.

## Key Takeaways
- Different behavior on circuits of one MWBC points to the shared neutral.
- Weather-related failures call for testing when the condition is present (insulation resistance after rain).
- Controls event logs identify which input acted; match timing to other building systems.
- Environmental conditions (ambient heat) must be captured in audits and matched to product ratings.
- Circuit consolidation after retrofits must consider inrush, not just running watts.
- Effective fixes include a preventive process change, not just a part replacement.
