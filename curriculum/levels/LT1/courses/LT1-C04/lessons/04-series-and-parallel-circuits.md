---
title: Series & Parallel Circuits
minutes: 25
video:
video_suggestion: >
  On a training board, wire three lamps in series and three in parallel. Remove one lamp from
  each and show the difference (all go out vs. the others stay lit). Then show a real ceiling
  with several troffers on one circuit and explain that they are in parallel, while lamps in
  some old series-wired ballasts all go out together.
---

## Two Basic Ways to Connect Loads

Every circuit you work on is built from two basic connection patterns: **series** and
**parallel**. Understanding them helps explain why fixtures behave the way they do, and it is
the starting point for troubleshooting in LT2-C06.

## Series Circuits

In a **series circuit**, components are connected end to end, forming **one path** for current.

**Rules for series circuits:**

| Quantity | Rule |
|---|---|
| Current | The **same** through every component |
| Resistance | Total = R1 + R2 + R3 ... |
| Voltage | Divides among the components; the drops add up to the source voltage |
| If one part opens | **Everything stops** (the only path is broken) |

### Example
Three 40 Ω resistors in series on 120 V:
- Total R = 40 + 40 + 40 = 120 Ω
- Current I = 120 V ÷ 120 Ω = 1 A (same through all three)
- Voltage across each = 1 A × 40 Ω = 40 V (40 + 40 + 40 = 120 V)

### Where You See Series Connections in Lighting
- **Switches, fuses, and breakers** are in series with the loads they control. That is why
  opening a switch turns off the light.
- **Old holiday-light strings** and some older fluorescent ballasts wire lamps in series:
  when one lamp fails, the others in that series go out or dim.
- **LEDs inside a fixture** are often arranged in series strings on a board.
- **Safety devices** like thermal protectors inside ballasts are in series with the ballast
  winding.

## Parallel Circuits

In a **parallel circuit**, each component is connected directly across the source, forming
**multiple paths** (branches).

**Rules for parallel circuits:**

| Quantity | Rule |
|---|---|
| Voltage | The **same** across every branch (equal to the source) |
| Current | Total = I1 + I2 + I3 ... (branch currents add) |
| Resistance | Total is **less than** the smallest branch resistance |
| If one branch opens | The **other branches keep working** |

### Example
Three fixtures each drawing 0.5 A are connected in parallel on a 120 V circuit:
- Voltage across each fixture = 120 V
- Total current = 0.5 + 0.5 + 0.5 = **1.5 A**
- If one fixture fails, the other two still have 120 V and still draw 0.5 A each; total becomes 1.0 A.

For two equal resistances in parallel, total resistance is half of one; for different values,
use 1/RT = 1/R1 + 1/R2 + 1/R3.

### Where You See Parallel Connections in Lighting
- **Fixtures on a branch circuit** are connected in parallel. Each gets full circuit voltage,
  and one burned-out fixture does not turn off the others.
- **Lamps on most modern parallel (instant-start) fluorescent ballasts** are wired so one lamp
  failing does not turn off the others.
- **Receptacles** on a circuit are in parallel.

> **Safety:** Because fixtures are in parallel, each one you add **increases the total current**
> on the circuit. Adding fixtures without approval can overload the circuit, cause nuisance
> tripping, and overheat wiring.

## Series-Parallel Combinations

Real systems combine both. A typical lighting branch circuit has a breaker and a switch **in
series**, feeding several fixtures **in parallel**, and inside each LED fixture the driver feeds
LED chips that may be **series strings connected in parallel**.

## Using This in the Field

| Symptom | Likely connection clue |
|---|---|
| One lamp out, others in the fixture working | Parallel lamp wiring; check that lamp and socket first |
| Two lamps out together in one fixture | Series-wired lamp pair or a ballast failure |
| A whole row of fixtures out | Problem is upstream in series with all of them (breaker, switch, sensor, or wiring) |
| One fixture out, rest of the row working | Problem is in that fixture's branch (lamp, ballast, driver, or its connection) |

This "where is the problem in the circuit?" thinking is the foundation of troubleshooting.

## Key Takeaways
- Series: one path, same current, voltages add up; one open stops everything.
- Parallel: multiple paths, same voltage, currents add up; one open leaves the others working.
- Switches and breakers are in series with loads; fixtures on a branch circuit are in parallel.
- Each added parallel fixture increases total circuit current. Never add loads without approval.
- Use the pattern of what is out (one lamp, one fixture, a whole row) to locate the problem.
