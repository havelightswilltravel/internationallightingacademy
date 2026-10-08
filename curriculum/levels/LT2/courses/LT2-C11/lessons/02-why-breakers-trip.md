---
title: Why Breakers Trip — Overload, Short, Ground Fault, Nuisance and Weak Breakers
minutes: 30
video:
video_suggestion: >
  Instructor shows a simplified trip-curve chart on a whiteboard and walks through four field
  stories: an overloaded track circuit that trips after an hour, a pinched fixture whip that
  trips instantly, a wet landscape fixture tripping a GFCI, and an old breaker used as a
  switch that trips well below its rating. Each story ends with how the tech recognized it.
---

## Trip Curves in Plain Language

Every breaker has a **time-current curve** published by its maker. You do not need to read the
exact numbers to use the idea:

```
 Time to trip
  hours  |\
         | \      THERMAL region
 minutes |  \     (overloads: more overload = faster trip)
         |   \
 seconds |    \___
         |        |
  cycles |        |_________  MAGNETIC region
         |                    (short circuits & ground faults: near-instant)
         +-------------------------------------------
           1x     2x    5x    10x   20x      Current (multiples of rating)
```

| Current vs rating | Typical behavior (general idea only) |
|---|---|
| At or below 100% | Should not trip |
| Slightly over (e.g., 110–135%) | May take a long time — many minutes to hours — or may not trip at all within the tolerance band |
| Moderately over (2–3×) | Trips in seconds to a minute or two |
| Far over (about 5–10× and up) | Magnetic trip, essentially instant |

The curve is really a **band**, not a line — breakers have a manufacturing **tolerance**. Two
identical 20 A breakers may trip at slightly different times for the same overload. Ambient heat
also matters: a breaker in a hot panel or next to heavily loaded neighbors trips sooner.

## The Five Causes You Must Tell Apart

| Cause | What happens | Typical clues |
|---|---|---|
| **Overload** | Too much connected load for the circuit | Trips after running a while (minutes to hours); trips more on hot days or when all lights are on; resets and holds for a while |
| **Short circuit** | Hot touches neutral or another hot | Trips **instantly** on reset or when a switch is turned on; possible flash, pop, burn marks |
| **Ground fault** | Hot touches ground, metal box, fixture housing, conduit — or leaks to earth through water | Instant trip of a standard breaker on a solid fault; a GFCI trips on small leakage — wet fixtures, damaged cable, water in pole bases |
| **Nuisance trip** | The breaker trips with no real hazard present | AFCI/GFCI tripping with certain drivers, dimmers, long cable runs or high inrush; repeated trips at startup of many LED drivers or HID ballasts at once |
| **Weak breaker** | The breaker itself trips **below** its rating | Measured load is well within rating but it still trips; breaker is old, has been used as a switch, has been tripped many times, runs hot, or the handle feels loose/mushy |

### Inrush current — a special nuisance case

Large groups of LED drivers draw a very high, very short **inrush** current when switched on.
On big lighting circuits this can trip breakers that hold fine once lights are running. Clues:
trips only at switch-on, never during operation. Fixes are design decisions (fewer drivers per
circuit, inrush limiters, different breaker curve) — write it up with your observations.

## Reading the Clues on a Service Call

Ask and record:

1. **When does it trip?** Immediately on reset, at switch-on, after running a while, or at random?
2. **What changed?** New fixtures, more track heads, heaters plugged in, recent rain, recent
   construction, lamps changed to a different type?
3. **What is on the circuit?** Use the panel directory and walk the circuit (Lesson 3).
4. **What type of breaker?** Standard, GFCI, AFCI, dual-function — the indicator or test button
   tells you.
5. **How does the breaker look and feel from outside the dead front?** Warm, discolored, smell,
   handle loose? (Lesson 4.)

| When it trips | Points toward |
|---|---|
| Instantly on reset, every time | Short circuit or solid ground fault — **do not keep resetting** |
| Only when a particular switch is turned on | Fault or inrush on that switched load |
| After 20 minutes to several hours | Overload — or weak breaker if the load checks out |
| Randomly, often in wet weather | Ground fault/leakage (GFCI), water intrusion |
| AFCI trips with a specific dimmer or driver | Possible nuisance trip — but rule out real arcing first |

> **Safety:** Never reset a breaker more than once without finding the cause. Repeatedly closing a
> breaker onto a short circuit can damage equipment and create an arc flash hazard at the panel.
> If it trips instantly on reset, leave it off, tag it, and investigate the load side de-energized
> — or write it up.

## "Check the Tolerance"

The company procedure says to **check for breaker amperage tolerance levels**. In practice that
means comparing the **actual load** on the circuit with the breaker's rating:

- If the load is **over** the rating (or over 80% for continuous lighting loads), the breaker is
  doing its job — the problem is overload, and the fix is reducing or splitting the load.
- If the load is **well within** the rating and the breaker still trips intermittently, suspect a
  **weak breaker** (or a loose connection heating the breaker). The company procedure: **write it
  up for an electrician to replace the breaker.**

How to determine the load **without opening the dead front** is covered in Lesson 4.

## Key Takeaways
- Thermal trips are slow and proportional to overload; magnetic trips are instant on shorts and ground faults.
- Breakers have a tolerance band and run hotter in crowded or hot panels.
- Separate the causes by timing: instant = short/ground fault; delayed = overload or weak breaker; switch-on only = fault or inrush on that load.
- A breaker that trips intermittently with load well within its rating is likely weak — write it up for an electrician to replace.
- Never reset repeatedly onto a fault.
