---
title: Transients & Surge Protection
minutes: 30
video:
video_suggestion: >
  At a parking-lot pole with the circuit locked out, a tech opens the handhole and shows an
  in-line surge protective device, its status indicator, and its connection to the equipment
  grounding conductor. Then at the panel, show a Type 2 SPD with short, straight leads versus a
  poor installation with long looped leads, explaining why lead length matters.
---

## What Transients Are

A **transient** (surge) is a very short burst of overvoltage – typically lasting microseconds – that
can reach thousands of volts. Sources:

| Source | Typical location |
|---|---|
| Lightning (direct or nearby strikes inducing voltage in conductors) | Exterior lighting, poles, rooftop equipment, long underground runs |
| Utility switching (capacitor banks, faults, reclosers) | Arrives through the service |
| Internal switching of inductive loads (motors, transformers, contactors) | Inside the building – the most frequent source |
| Static and ground potential rise | Poles and remote structures during lightning |

Most surges are small and frequent; a few are large. Electronics are vulnerable to both: big
surges cause immediate failure, while repeated small surges degrade components over time.

## Why LED Systems Are Sensitive

LED drivers and NLC controllers contain semiconductors and capacitors that can be damaged by
overvoltage. Many LED drivers include internal surge protection rated in kilovolts; outdoor
luminaires frequently include an additional surge module. Typical patterns of surge damage:

- Several pole lights fail after a thunderstorm, often those at the end of long runs.
- Drivers fail but LED boards are fine (or vice versa).
- NLC radios or sensors stop responding after storms.
- Failure rates higher on one feeder or one side of the site.

Roadway and area lighting surge levels are commonly specified using **ANSI C136.2** test levels
(for example, "basic" 6 kV / 3 kA and "enhanced" 10 kV / 5 kA). Specifications for exposed sites
often call for higher protection or a separate SPD.

## Surge Protective Devices (SPDs)

**SPDs** limit transient voltage by diverting surge current to ground. They are listed to **UL 1449**,
and NEC requirements for SPDs rated 1000 V or less are in **Article 242** (in editions before 2020
they were in Article 285).

| UL 1449 Type | Installation location |
|---|---|
| **Type 1** | Permanently connected; may be installed on the line side or load side of the service disconnect |
| **Type 2** | Permanently connected; load side of the service disconnect – distribution panels, lighting panels |
| **Type 3** | Point of utilization, at least 10 m (30 ft) of conductor from the service panel – plug-in or equipment-integral |
| **Type 4** | Component SPDs, including modules used inside equipment such as luminaires |

A **layered** (cascaded) approach works best: Type 1 or 2 at the service, Type 2 at lighting
panels serving exterior circuits, and Type 4 modules at luminaires.

## Installation Matters as Much as the Device

1. **Short, straight leads.** Every inch of lead adds inductance and lets voltage through. Mount the
   SPD close to the panel and use the shortest practical leads with no unnecessary bends or loops.
2. **Good equipment grounding and bonding.** The SPD can only divert surge current through an effective
   grounding path. Loose EGC connections in pole bases defeat surge protection.
3. **Correct voltage rating** for the system (e.g., 277/480 V wye vs 120/208 V wye). An SPD rated too
   low will fail; too high gives poor protection.
4. **Follow the listing and instructions** for the overcurrent protection and conductor size required.
5. **Check status indicators.** Many SPDs are sacrificial – they wear out. Status lights or flags show
   when protection is lost. Include SPD checks in maintenance.

## Field Troubleshooting After a Storm

1. Map which fixtures failed and their location on each circuit.
2. Check for tripped breakers, failed SPD indicators and burned components.
3. With the circuit **de-energized, locked out and verified dead**, inspect pole bases: EGC connected and
   tight to pole ground lug, SPD module condition, signs of arcing or water.
4. Test insulation resistance of underground runs (with drivers disconnected) – lightning can puncture
   insulation, causing later ground faults.
5. Recommend improvements: SPDs at panel and poles, improved bonding, higher surge-rated drivers.

> **Safety:** Do not work on exterior lighting circuits, poles or rooftop equipment during
> thunderstorms. Lightning can induce dangerous voltages in de-energized and locked-out conductors.
> Follow the company's lightning policy (commonly: stop outdoor work when thunder is heard and wait
> 30 minutes after the last thunder). Before working on any circuit after a storm, apply LOTO and
> verify absence of voltage – storm damage can create unexpected backfeeds.

## Key Takeaways
- Transients are microsecond overvoltages from lightning, utility switching and internal load switching.
- LED drivers and controls are vulnerable; storm-related clusters of failures point to surge damage.
- SPDs are listed to UL 1449 (Types 1–4) and covered by NEC Article 242; layer protection from service to luminaire.
- Short leads, good grounding and the correct voltage rating determine SPD effectiveness.
- SPDs wear out – check status indicators during maintenance.
- Never work on exterior circuits during lightning; LOTO and verify after storms.
