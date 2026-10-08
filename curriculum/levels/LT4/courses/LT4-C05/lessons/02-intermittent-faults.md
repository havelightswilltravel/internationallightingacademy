---
title: Finding Intermittent Faults
minutes: 30
video:
video_suggestion: >
  Show three real intermittent-fault tools in use: a recording/data-logging meter installed on a
  circuit (installed de-energized, then powered up), a thermal imager scanning a lighting panel
  through an IR window or by a qualified tech in PPE, and a controls software event log. For each,
  show what a "caught" intermittent event looks like.
---

## Why Intermittents Are Hard

An intermittent fault is one that **comes and goes**. When you arrive, everything works. The
customer is frustrated, previous techs have "found nothing," and the temptation is to replace a
part and hope. Senior techs instead **capture the event** or **provoke it** under controlled
conditions.

## Common Intermittent Causes in Lighting

| Cause | Typical behavior | Clues |
|---|---|---|
| Loose connection (splice, terminal, socket) | Flicker or outage that changes with temperature or vibration | Heat discoloration, melted wire nut, works after tapping fixture |
| Thermal foldback / overheating driver | Lights dim or shut off after running a while, recover after cooling | Happens late in the day or summer; driver hot |
| Failing driver capacitor | Intermittent startup failure, especially when cold | Slow start, flicker at startup |
| Voltage sag or swell | Flicker or dropout when large loads start | Coincides with HVAC, elevators, compressors |
| Controls / software | Lights turn on/off at odd times | Schedules, sensor false triggers, BMS commands, firmware |
| Wireless interference | Delayed or missed commands | Worse at certain times, near certain equipment |
| Water intrusion (exterior) | Outages or GFCI trips after rain | Wet pole bases, corroded connections |
| Ground fault in underground run | Trips after rain or seasonal | Low insulation resistance when wet |
| Vibration | Failures near machinery, on cranes, rooftop units | Broken solder joints, loose fittings |

## Tool 1: Data Logging

A **recording meter** or **power quality analyzer** monitors voltage and current continuously and
records minimums, maximums, sags, swells and events with time stamps.

Procedure:
1. Choose the measurement point – usually the branch circuit at the panel, or the supply at an affected
   luminaire.
2. **Install with the circuit de-energized whenever possible** – apply LOTO, verify absence of voltage,
   connect voltage leads and current clamps, route leads so covers can close, then re-energize. If
   installation must be energized, only a qualified person in appropriate PPE may do it.
3. Set the logging interval and event thresholds (e.g., capture any voltage below 90% of nominal).
4. Ask the customer to **log the time** of every event they see.
5. Leave it long enough to catch several events – often one to two weeks.
6. Match logged events to the customer's times. A voltage sag at every event points upstream; normal
   voltage during events points to the luminaire, driver or controls.

## Tool 2: Thermal Imaging

A **thermal imager** shows heat from high-resistance connections and overloaded components.

- Scan panels and disconnects **under load** – a loose connection carrying little current won't show.
- Compare similar components (three phases of the same breaker, identical fixtures). A connection
  significantly hotter than its neighbors under similar load is suspect.
- Scan luminaires and drivers to identify thermal problems.

> **Safety:** Removing a panel cover to perform thermography exposes energized parts. It must be done
> by a qualified person wearing PPE determined by the arc-flash risk assessment (NFPA 70E), or
> through installed infrared windows. Never reach into or touch anything in an energized panel while
> scanning.

## Tool 3: Controls Event Logs

NLC systems and many sensors keep **event logs**: who or what turned lights on/off, when, and from
which device (wallstation, sensor, schedule, BMS, demand response). Lights "turning on by
themselves" at 2 a.m. often show up as a schedule event or a sensor triggered by HVAC airflow,
security patrols or cleaning crews.

## Tool 4: Controlled Provocation

Sometimes you can make the fault happen:

| Suspected cause | Provocation method |
|---|---|
| Loose connection | With the circuit **de-energized and locked out**, check torque and tug-test splices; inspect for heat damage. Do not "wiggle wires" on energized circuits |
| Heat | Let the fixture run to full temperature and observe; compare to a cooler location |
| Cold start | Observe the first start of the morning (exterior, freezers) |
| Voltage sag | Start the suspected large load while monitoring lighting voltage |
| Moisture | Insulation-resistance test underground runs after rain (drivers disconnected) |

## Documenting Intermittents

Write down everything – times, conditions, readings, what you ruled out. Intermittent problems often
take several visits, sometimes by different techs. A clear record prevents the next tech from
repeating the same tests and helps the RCA.

## Key Takeaways
- Intermittent faults must be captured (logging) or provoked under control – not guessed at.
- Common causes: loose connections, thermal issues, failing capacitors, voltage sags, controls events, water and vibration.
- Install data loggers de-energized under LOTO where possible and have the customer log event times.
- Thermal imaging finds high-resistance connections under load; it requires qualified persons and PPE or IR windows.
- Controls event logs reveal schedule, sensor and BMS causes of unexpected operation.
- Never wiggle wires on energized circuits; check connections under LOTO.
