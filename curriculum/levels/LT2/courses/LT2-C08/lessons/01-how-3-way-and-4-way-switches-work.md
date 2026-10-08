---
title: How 3-Way and 4-Way Switches Work
minutes: 30
video:
video_suggestion: >
  On a bench board, an instructor holds a 3-way and a 4-way switch next to the camera, points
  out the darker common screw, the two lighter traveler screws and the ground screw, then
  flips each switch while a continuity meter beeps to show which terminals connect in each
  position. Ends with a working two-location board lighting a lamp from either switch.
---

## Why Multi-Location Switching Exists

A single-pole switch controls a light from one place. Hallways, stairways, large rooms with two
doors and warehouse aisles need control from two or more places. That is what **3-way** and
**4-way** switches do:

| Locations controlling the light | Switches needed |
|---|---|
| 1 | One single-pole switch |
| 2 | Two 3-way switches |
| 3 | Two 3-way switches + one 4-way |
| 4 | Two 3-way switches + two 4-ways |
| N (more than 2) | Two 3-ways + (N − 2) 4-ways |

You will find these circuits in stairwells, corridors, lobbies, gymnasiums, parking structures
and almost every home hallway. Because the wiring is less obvious than a single-pole circuit,
3-way problems are a common service call — and a common place for previous workers to have made
mistakes.

## The 3-Way Switch

A 3-way switch is not an on/off switch. It is a **single-pole, double-throw** switch: it connects
one terminal (the **common**) to either of two other terminals (the **travelers**). It has no
"ON" or "OFF" printed on the toggle because either position can be on or off depending on the
other switch.

| Terminal | How to identify it | Job |
|---|---|---|
| Common | Usually a **dark (black or bronze) screw**, often alone on one end; sometimes labeled "COM" | Connects to the incoming hot (at the first switch) or to the switch leg going to the light (at the second switch) |
| Traveler 1 | Lighter **brass** screw | One of two paths between the switches |
| Traveler 2 | Lighter **brass** screw | The other path |
| Ground | **Green** screw | Equipment grounding conductor |

Inside the switch, the common is always connected to one traveler or the other:

```
  Toggle position A          Toggle position B

  COM ----\                  COM -------\
           \---- T1                      \
               T2                  T1     \---- T2
```

> **Safety:** Never assume a terminal by its position on the switch body. Manufacturers place the
> common in different spots. Read the screw color or the marking, and confirm with a continuity
> test on a de-energized switch.

## How Two 3-Ways Make a Circuit

Two 3-way switches are joined by **two travelers**. The light is on when both switches "point" to
the same traveler, and off when they point to different travelers.

```
 HOT ──► [COM  3-WAY #1]          [3-WAY #2  COM] ──► switch leg ──► LIGHT ──► NEUTRAL
            T1 ════════ traveler A ════════ T1
            T2 ════════ traveler B ════════ T2
```

| Switch #1 points to | Switch #2 points to | Light |
|---|---|---|
| Traveler A | Traveler A | ON |
| Traveler A | Traveler B | OFF |
| Traveler B | Traveler A | OFF |
| Traveler B | Traveler B | ON |

This is why flipping either switch always changes the state of the light — and why a fault in
just one traveler produces the odd "only works in certain positions" symptom you will study in
Lesson 3.

## The 4-Way Switch

A 4-way switch goes **between** the two 3-ways and sits in the traveler path. It has four
terminals: two for the travelers coming in and two for the travelers going out. Its only job is
to either pass the travelers **straight through** or **cross them over**.

```
  Position 1 (straight)          Position 2 (crossed)

  IN-A  ────────  OUT-A          IN-A  ──╲  ╱── OUT-A
                                          ╳
  IN-B  ────────  OUT-B          IN-B  ──╱  ╲── OUT-B
```

| Terminal pair | Typical identification |
|---|---|
| Input pair | Two screws of one color (often brass) on one side or one end |
| Output pair | Two screws of another color (often dark/black) on the other side or end |
| Ground | Green screw |

Terminal arrangement varies by manufacturer — some pair the inputs top-and-bottom, others
side-by-side. A very common mistake is landing one incoming and one outgoing traveler on the same
"pair." The result is a circuit that works in some switch combinations and not others. Always
follow the markings on the device or the instruction sheet, and verify pairs with continuity.

## Conductors You Will See

| Conductor | Common color (not guaranteed) | Notes |
|---|---|---|
| Line hot | Black | Unswitched; carries power to the first switch |
| Travelers | Red and black, or red and white re-identified | Run between 3-ways (and through 4-ways) |
| Switch leg | Black, red or blue | From the last switch's common to the light |
| Neutral | White or gray | Should go to the light; may or may not be present in the switch box |
| Equipment ground | Green or bare | To every device and metal box |

A white conductor used as a traveler or as a hot in a switch loop is required to be
re-identified (tape or marking) as an ungrounded conductor. In older work you will often find it
unmarked. **Never trust color alone** — confirm by tracing and by testing.

## Single-Pole Look-Alikes

Techs sometimes grab a single-pole switch from the truck when replacing a 3-way. A single-pole
has two brass terminals and an ON/OFF toggle; it cannot do the job. When ordering or pulling
stock, confirm:

- Function: 3-way or 4-way (marked on the strap or packaging)
- Rating: 15 A or 20 A, 120/277 V AC (match or exceed the circuit and load)
- Style: toggle, decorator/rocker, color
- Grade: residential, commercial or specification/industrial
- Back-wire or side-wire; whether the device is listed for the conductor type in the box

## Key Takeaways
- A 3-way switch connects one **common** terminal to one of two **travelers**; it has no true on/off position.
- Two 3-ways control a light from two places; add one 4-way for each additional location.
- A 4-way passes the travelers straight through or crosses them; landing its terminal pairs wrong causes position-dependent failures.
- Identify terminals by screw color and markings, then verify with continuity on a de-energized device — never by location on the body or wire color alone.
- Re-identified white conductors are common in switch loops; old work may not be marked.
