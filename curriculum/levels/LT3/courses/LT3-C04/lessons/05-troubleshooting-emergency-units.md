---
title: Troubleshooting Battery-Backup Ballasts, Bug Eyes & Exit Signs
minutes: 35
video:
video_suggestion: >
  In a training corridor, a technician diagnoses three emergency faults: a troffer with a
  battery-backup ballast that lights on the test button but not on the wall switch (failed
  normal ballast), a troffer that won't light on test (battery disconnected, then a failed
  battery pack), and a bug-eye unit with no charge light (dead unswitched feed). Show the
  test-button logic on a flowchart overlay, LOTO before each repair, and the log entry.
---

## Components of the Emergency Lighting System

| Component | What it does | Typical failures |
|---|---|---|
| Battery-backup ballast / emergency LED driver | Charges a battery and runs the fixture's lamps or LEDs during an outage | Battery worn out, charger failed, disconnected battery plug, wiring errors |
| Standard (normal) ballast or driver | Runs the fixture on normal power | Fails like any ballast/driver — fixture dark on the switch |
| Test switch and charge indicator | Simulates an outage; shows charging status | Broken switch, indicator off |
| Bug-eye (unit equipment) | Wall box with battery, charger and two heads | Battery, lamp heads, charger, transfer circuit |
| Exit sign | Illuminated EXIT legend; many contain a battery | LEDs out, battery, charger, damage |
| Emergency lighting circuit | Unswitched branch circuit feeding the units (or an inverter/generator-fed emergency circuit) | Breaker off, circuit wired through a switch, open splice |

## The Company Procedure: Battery-Backup Ballast or Driver

The company procedure uses the **test button** to split the fixture in two: the emergency
side (battery, emergency ballast, lamps/LEDs, sockets) and the normal side (supply, switch,
standard ballast/driver).

1. **Confirm the lamp is good** (known-good lamp, or LED module visibly undamaged) and **test the
   line voltage** — both the unswitched hot and, on two-feed units, the switched hot.
2. **Press and hold the test button.**
3. **Lamp comes on with the button pressed:** the battery backup, its battery, the sockets and the
   lamp are working. The fault is on the normal side. If the switched supply is present and the
   fixture still won't light normally, **replace the standard ballast or driver**.
4. **Lamp does not come on with the button pressed:** check the wiring and sockets between the
   emergency unit and the lamps, the battery connector and the charge indicator. **If the wiring
   is good, replace the battery backup** (or, if allowed by the manufacturer and the listing, the
   battery pack alone — see below).
5. Restore power, confirm the charge indicator, perform a test-button check, and record it.

### Refinements that save callbacks

| Situation | What to check before replacing parts |
|---|---|
| Lamp lights on test, dark on the switch | Switched hot actually present? Wall switch, sensor or relay may be the real fault |
| No light on test and charge indicator off | No unswitched power, breaker off, or battery plug never connected after installation |
| Unit newly installed or battery just replaced | Battery needs its initial charge period (often 24 hours) — a short test may fail |
| Lights on test, but only briefly | Battery at end of life — replace battery, recharge, retest |
| Unit goes to battery whenever lights are switched off | Unswitched hot wired to the switched leg — correct the wiring |

## The Company Procedure: Bug Eyes and Exit Signs

1. **Press the test button.** The heads or EXIT legend should switch to battery operation.
2. **If it does not come on,** test the **line voltage** at the unit.
3. **Line voltage good → replace the unit** (or its battery or lamp heads, where the
   manufacturer sells listed replacement parts and it is cost-effective — follow company
   policy).
4. **Line voltage missing →** the problem is the emergency lighting circuit: check the breaker
   (from the outside of the panel — do not open the dead front unless qualified), look for a
   switched feed or an open splice, and write it up for an electrician if the circuit must be
   traced in the panel or walls.

Before replacing a whole unit, check the simple things: battery connector plugged in, lamp heads
tight and good, charge indicator status, and visible damage.

> **Safety:** A battery-backup ballast or unit can energize the lamp leads and sockets even when
> the branch circuit is locked off. Lock out the normal circuit, verify absence of voltage
> (live-dead-live), **and unplug the battery connector** before working on sockets, lamp wiring
> or the unit. Tag the fixture so the next person knows it has a battery. Swollen or leaking
> batteries are handled and recycled per company battery procedure.

## Battery or Whole Unit?

| Factor | Replace the battery | Replace the unit |
|---|---|---|
| Unit age | Within the manufacturer's expected life | Old, discontinued, yellowed or brittle |
| Charger and indicator | Indicator shows charging normally | Indicator off with good supply |
| Parts availability | Listed replacement battery available | No listed battery available |
| Cost | Battery much cheaper than unit | Battery cost close to unit cost |

Use only the battery type, voltage and capacity listed by the manufacturer; a different
battery can void the UL 924 listing or overheat.

## Parts and Ordering Details

Record for each failed unit: manufacturer and model (on the label inside the housing or
on the battery), battery voltage, chemistry and mAh/Ah rating, lamp head type and wattage (or LED
head type), input voltage (120/277 V), whether the exit is single- or double-faced and its
chevron/arrow configuration, mounting (wall, ceiling, end), and for battery-backup ballasts the
lamp type/quantity or LED emergency output power and voltage range.

## When to Escalate

- No line voltage at the unit and the circuit must be traced inside the panel or walls
- Units fed from a central inverter or generator emergency circuit (Article 700 circuits)
- Several units failing at once in one area (possible circuit or wiring problem)
- Any change to the emergency circuit wiring or adding units to a circuit

## Key Takeaways
- Use the test button to split the fixture: lights on test → normal side (standard ballast/driver or switched feed); no light on test → emergency side.
- Confirm the lamp and line voltage first; check the battery plug and charge indicator before replacing parts.
- Bug eyes and exits: test button → line voltage → replace the unit (or listed battery) if voltage is good.
- Unplug the battery connector and verify absence of voltage before servicing — the battery can energize the lamps.
- Record test results and repairs in the emergency lighting log.
