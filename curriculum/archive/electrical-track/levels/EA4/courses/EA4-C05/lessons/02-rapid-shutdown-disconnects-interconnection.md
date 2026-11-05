---
title: Rapid Shutdown, Disconnects, Labeling, and Utility Interconnection
minutes: 40
video:
video_suggestion: >
  A fire department officer and a PV installer stand at a house with a solar array. The
  installer activates the rapid shutdown initiator and the officer explains why firefighters
  need array conductors de-energized. Then inside at the main panel, the instructor shows a
  backfed breaker at the opposite end of the bus from the main, the required labels, and a
  calculation of the 120% busbar rule.
---

## Why Rapid Shutdown Exists
Firefighters ventilate roofs by cutting holes, and they spray water on burning buildings. PV
conductors on a roof stay energized in daylight even after the utility is disconnected. **Rapid
shutdown** (690.12; 2023 NEC; AHJ edition governs) reduces shock hazard to emergency responders
by de-energizing conductors on and near the array.

## Rapid Shutdown Requirements (690.12)
Applies to PV system circuits installed **on or in buildings**.

| Zone | Requirement after initiation |
|---|---|
| **Outside the array boundary** (more than 1 ft from the array in all directions, or entering the building more than 3 ft) | Controlled conductors limited to **not more than 30 V within 30 seconds** |
| **Inside the array boundary** | Limited to **not more than 80 V within 30 seconds** using a listed PV hazard control system, or other compliance options in 690.12(B)(2) (such as no exposed wiring methods or conductive parts) |

The **array boundary** is defined as 1 ft (305 mm) from the array in all directions.

**Initiation device (690.12(C)):** for one- and two-family dwellings, the rapid shutdown
initiator must be at a **readily accessible location outside the building**. The initiator may
be the service disconnect, the PV system disconnect, or a separate switch that plainly indicates
"off" and "on."

Most modern residential systems comply with MLPE (microinverters or optimizers) listed as a PV
hazard control system. String inverter systems without MLPE usually need module-level shutdown
devices added.

## Disconnecting Means
- **PV system disconnect (690.13):** disconnects the PV system from all other wiring systems;
  readily accessible; marked "PV SYSTEM DISCONNECT" or equivalent; indicates open/closed
  position.
- **Equipment disconnects (690.15):** isolate inverters, combiners, batteries, and charge
  controllers for servicing. Must be within sight of or in the equipment, or lockable.
- If the line and load terminals may both be energized when open, a warning label is required
  (the typical wording warns of an electric shock hazard with terminals on both sides energized).

## Labels (Representative)
| Location | Label content (summarized, not verbatim) |
|---|---|
| Service equipment and PV disconnect | Identifies the PV power source and the rapid shutdown switch location |
| Rapid shutdown initiator | Identifies it as the rapid shutdown switch for the solar PV system |
| Load-side backfed breaker | Warning that the power source output connection must not be relocated |
| Panelboards with multiple sources | Identifies all sources of supply |
| DC conductors in raceways | Marked as PV power source at intervals |

Labels must be permanent, suitable for the environment, and are frequently specified in exact
wording and colors (690.56, 705.10, and the referenced ANSI Z535 format). Check the plan set
and the AHJ's checklist.

## Utility Interconnection (Article 705)
### Supply-Side Connection (705.11)
A tap ahead of the service main, between the meter and the service disconnect. Not limited by
the panel busbar rating, but the conductors and their disconnect and OCPD must meet service-type
requirements, and the connection method must be permitted by the equipment listing and utility.

### Load-Side Connection (705.12)
The inverter backfeeds through a breaker in a panelboard. The busbar can be overloaded because
it is fed from two ends, so the NEC limits the combined current.

**The 120% rule (705.12(B)(3)(2)):** when the backfed breaker is at the **opposite end** of the
busbar from the main (primary source) breaker:

> 125% of inverter output current + main OCPD rating ≤ 120% of busbar rating

### Worked Example 1
Panel: 200-A busbar, 200-A main breaker. Inverter: 7.6 kW at 240 V, 32 A continuous output.

- 120% of busbar: 200 × 1.2 = **240 A**
- Available for PV: 240 − 200 = **40 A**
- Required PV breaker: 32 × 1.25 = **40 A** → **compliant** if installed at the opposite end of
  the busbar and labeled.

### Worked Example 2
Same panel, 10-kW inverter, 42 A output. 42 × 1.25 = 52.5 A → 60-A breaker. 200 + 52.5 = 252.5
A > 240 A — **not compliant.** Options:
- **Downsize the main breaker** to 175 A (if the load calculation supports it): 175 + 52.5 =
  227.5 A ≤ 240 A ✓
- Use a **supply-side connection**.
- Use the sum-of-breakers rule or a listed power control system (705.13) that limits current.
- Replace the panel with one that has a larger busbar.

> **Safety:** A PV-interactive service has at least two sources. The inverter shuts down when it
> senses loss of utility voltage (anti-islanding), but never rely on that for your protection.
> Before working in a panel with a backfed breaker, open and lock out both the main and the PV
> breaker (or PV disconnect), and verify absence of voltage on both sides of each. Batteries add a
> third source — see the next lesson.

## Key Takeaways
- Rapid shutdown: ≤ 30 V in 30 s outside the array boundary, ≤ 80 V in 30 s inside (or other
  compliance options); array boundary = 1 ft.
- Dwelling rapid shutdown initiator must be readily accessible outside the building.
- PV system disconnect is readily accessible and marked; equipment disconnects isolate components.
- Load-side 120% rule: 125% of inverter current + main OCPD ≤ 1.2 × busbar, backfeed at the
  opposite end.
- If the busbar rule fails, downsize the main, use a supply-side tap, or use a power control system.
