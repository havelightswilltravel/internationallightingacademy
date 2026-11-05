---
title: Single-Pole, 3-Way & 4-Way Switching
minutes: 50
video:
video_suggestion: >
  Animated diagram showing current paths through two 3-way switches and a 4-way switch in every
  position, followed by a training-board build: power feeding the first 3-way, 14/3 cable between
  switches, a 4-way in the middle, re-identified white conductors, and a final functional test.
  Finish with a troubleshooting segment where the common and a traveler are swapped.
---

## Switch Types

| Switch | Terminals (plus ground) | Function |
|---|---|---|
| **Single-pole** | 2 | Controls a load from one location; marked ON/OFF |
| **Double-pole** | 4 | Opens both ungrounded conductors of a 240 V load |
| **3-way** | 3: one **common** (usually darker screw) and two **travelers** | Controls a load from two locations (used in pairs) |
| **4-way** | 4: two pairs of **traveler** terminals | Added between two 3-ways to control from three or more locations |

A 3-way or 4-way switch has **no ON/OFF marking** because either position can be "on" depending
on the other switches.

> **Safety:** Switch boxes often contain multiple circuits and may contain conductors that stay
> energized when the switch is off (for example, the line conductor and travelers). Apply LOTO
> to the circuit and verify absence of voltage on every conductor in the box before working.

## Code Rules for Switching

- **404.2(B):** switches must not disconnect the **grounded conductor** of a circuit (with limited
  exceptions, such as where all circuit conductors open simultaneously). Switches go in the
  ungrounded conductor.
- **404.2(C):** a **grounded (neutral) conductor** must be provided at most switch locations that
  control lighting loads, with listed exceptions. This supports occupancy sensors, timers and
  smart switches that need a neutral to operate.
- **200.7(C)(1):** in a **cable assembly**, a white or gray conductor may be used as an ungrounded
  conductor for switching only if it is **permanently re-identified** (tape, paint or other
  effective means) at each location where it is visible and accessible. In a switch loop, the
  re-identified white may be used to **supply** the switch, but **not** as the return (switched)
  conductor to the load.
- **404.9 and 404.12:** metal faceplates and switch yokes must be connected to the equipment
  grounding conductor.

## Single-Pole Switching

**Power at the switch:** the line hot lands on one terminal, the switched leg on the other, and
the neutral passes through the switch box (spliced, with a neutral pigtail available for future
devices) to the luminaire.

**Power at the light (switch loop):** a 2-wire cable plus ground runs from the light to the switch.
The white is re-identified (e.g., black tape) and carries the **line** to the switch; the black
returns as the **switched leg**. With 404.2(C), many installations now use 3-wire cable to the
switch so a neutral is present.

## How 3-Way Switching Works

Each 3-way switch connects its **common** terminal to **one traveler or the other**. The light is on
when both switches connect to the **same** traveler, completing the path. Flip either switch and
the path breaks — flip the other and it's restored.

### Standard Connection (power at first switch)
1. **Line hot** → common of 3-way #1.
2. **Two travelers** (in 3-wire cable: usually red and black, or black and re-identified white)
   connect traveler terminals of switch #1 to traveler terminals of switch #2. It doesn't matter
   which traveler goes to which traveler screw.
3. **Common of 3-way #2** → switched leg to the luminaire.
4. **Neutral** runs to the luminaire (and is available in each switch box per 404.2(C)).
5. **EGC** connects to every switch, box and the luminaire.

## Adding a 4-Way

A 4-way switch is inserted **in the traveler path** between the two 3-ways. In one position it
passes the travelers straight through; in the other it crosses them over.

- Travelers from 3-way #1 land on **one pair** of the 4-way's terminals (on most devices, the
  two terminals of the same color or on the same end — check the device's diagram).
- Travelers to 3-way #2 land on the **other pair**.
- For four control locations, add a second 4-way in series with the first. Any number of 4-ways
  can be added between the two 3-ways.

### Worked Example — Cable Count and Box Fill
A luminaire is controlled from three locations. Power enters at 3-way #1 in 14/2 NM. 14/3 NM runs
from 3-way #1 to the 4-way and from the 4-way to 3-way #2 (two travelers plus the neutral, so a
neutral is available in every switch box), and 14/2 NM runs from 3-way #2 to the luminaire
(switched leg plus neutral).

At the **4-way box** (single 14/3 in, single 14/3 out, one 4-way switch, no internal clamps):

| Item | Count |
|---|---|
| Insulated conductors: 3 in + 3 out | 6 |
| EGCs (up to four count as one) | 1 |
| Switch on a yoke | 2 |
| **Total** | **9 × 2.0 in³ = 18.0 in³** |

An 18 in³ box just works; a 20.3 in³ or larger box gives working room. (Here the neutral is spliced
in the box, so it counts as one conductor in and one out; see 314.16(B)(1) for how unbroken
conductors passing through are counted.)

## Troubleshooting 3-Way and 4-Way Circuits

| Symptom | Likely cause |
|---|---|
| Light works only when one particular switch is in one position | Common and a traveler swapped at a 3-way |
| Light works from the 3-ways but the 4-way does nothing, or only some combinations work | 4-way wired with one traveler pair split across both sides |
| Breaker trips when certain switch positions are reached | Traveler connected to neutral or ground, or line and switched leg on travelers |
| Light never works | Open traveler, line not on common, or open neutral |

**Method:** with the circuit locked out and verified dead, use continuity:
1. Identify each 3-way common with a meter (the common has continuity to one traveler in one
   position and to the other in the other position).
2. Check continuity of each traveler end-to-end (short them together at one end, test at the
   other).
3. Re-verify each switch's internal operation against the manufacturer's diagram.

## Dimmers and Electronic Controls

Dimmers, occupancy sensors and smart switches have specific load ratings and may require a
neutral. Multi-location dimming normally uses a **master dimmer with matching companion/remote
devices** from the same manufacturer — not a standard 3-way switch. Derate dimmers when ganged
(fins removed) per the manufacturer.

## Key Takeaways
- Switches go in the ungrounded conductor; don't switch the neutral (404.2(B)).
- Provide a neutral at switch locations for lighting (404.2(C)).
- Re-identify white conductors used as ungrounded conductors in cable (200.7(C)(1)).
- 3-way: line to one common, switched leg from the other common, travelers between.
- 4-way: inserted in the traveler path; keep each traveler pair on the correct side.
- Troubleshoot de-energized with continuity, starting by identifying commons.
