---
title: Wiring Configurations and Diagrams
minutes: 35
video:
video_suggestion: >
  Instructor draws each 3-way configuration on a whiteboard — power to first switch, power
  to fixture, and a 4-way between two 3-ways — then opens matching mock-up boxes on a training
  wall to show the actual cables, re-identified whites and splices, comparing each box to its
  drawing.
---

## Why Diagrams Matter

The company procedure for a 3-way problem ends with: **use the 3-way switching diagram to trace
power flow from the switches to the fixtures, or write it up for an electrician.** You cannot
trace what you cannot picture. Before you open any box, sketch the likely layout. This lesson
gives you the three layouts you will meet most often.

Legend used below:

| Symbol | Meaning |
|---|---|
| `H` | Line hot from the panel |
| `N` | Neutral |
| `COM` | Common terminal |
| `T1`, `T2` | Traveler terminals |
| `═══` | Traveler conductors |
| `---` | Other conductors |
| `(L)` | Light fixture |

Grounds go to every device and metal box; they are left off the drawings to keep them readable.

## Configuration 1: Power to the First Switch (Power-to-Switch)

The feed from the panel lands in the first switch box. A 3-conductor cable (or three wires in
conduit) runs to the second switch. A 2-conductor cable runs from the second switch to the light.

```
 PANEL
 H ──────────► [COM  SW1]                 [SW2  COM] ───── switch leg ─────► (L)
 N ─────────────── T1 ═══ traveler A ═══ T1 ───────────────────────────────► (L) N
     neutral       T2 ═══ traveler B ═══ T2
     spliced
     through
```

Key points:
- Hot lands on **SW1 common**.
- The neutral is spliced through both switch boxes and continues to the light.
- **SW2 common** feeds the switch leg to the light.
- Neutral is available in both switch boxes — good news for smart switches (Lesson 4).

## Configuration 2: Power to the Fixture (Power-to-Light)

The feed lands at the light box first. Switch loops run from the light to the switches. This is
common in older residential work and in some ceiling-fed layouts.

```
                         (L) box
 PANEL H ──────────────► splice ──── to SW1 COM (white re-identified as hot)
 PANEL N ──────────────► (L) neutral terminal
                         (L) hot terminal ◄──── from SW2 COM (switch leg)

     [SW1 COM]                         [SW2 COM]
        T1 ═════ traveler A ══════════ T1
        T2 ═════ traveler B ══════════ T2
```

One common cable arrangement: a 3-wire cable from the light to SW1, and a 3-wire cable from SW1 to
SW2. In the light-to-SW1 cable the white is the **hot to SW1 common** (it should be re-marked
black or red), black and red are used for the switch leg and a traveler, and so on. There are
several valid ways to assign the colors, which is exactly why you must trace instead of assume.

Key points:
- The **light box has the line hot and neutral**; the switch boxes may have **no neutral**.
- Expect white conductors used as hots or travelers. In older work they are often **not**
  re-identified.
- Many "it never worked right since the last guy changed the switch" calls come from this layout.

## Configuration 3: Four-Way in the Middle (Three Locations)

```
 H ──► [COM SW1]           [4-WAY]               [SW3 COM] ──► switch leg ──► (L) ──► N
          T1 ═══ A ═══ IN-A        OUT-A ═══ A' ═══ T1
          T2 ═══ B ═══ IN-B        OUT-B ═══ B' ═══ T2
```

- The 4-way sits only in the **traveler** path; it never touches the line hot, the switch leg or
  the neutral.
- Both conductors from SW1 must land on the 4-way's **input pair**; both conductors to SW3 land on
  the **output pair**.
- With two 4-ways (four locations), chain them: SW1 → 4-way → 4-way → SW3.

## Turning the Diagram into a Trace Plan

1. **Identify the configuration.** Count cables entering each box (do this de-energized with
   covers off). A box with one cable from the panel direction and one 3-conductor cable leaving is
   probably the first switch in a power-to-switch layout.
2. **Label every conductor** on your sketch with its color and which cable it is in.
3. **Mark the expected function** of each conductor: line hot, traveler, switch leg, neutral.
4. **Predict the readings.** For each switch position combination, write which conductors should
   show continuity end-to-end (de-energized) or voltage (energized testing by a qualified person).
5. **Compare actual vs predicted** in Lesson 3.

## A Sample Truth Table for Your Sketch

For Configuration 1, with the circuit locked out and verified dead, the line hot lifted off SW1's
common and capped, and the switch leg disconnected from the fixture, the path from **SW1's common
terminal** to the **switch-leg conductor at the light** should show:

| SW1 | SW2 | Continuity SW1 common → switch leg? |
|---|---|---|
| Up | Up | Yes or No (depends on traveler match) |
| Up | Down | Opposite of above |
| Down | Up | Opposite of row 1 |
| Down | Down | Same as row 1 |

The pattern must alternate: **every single flip changes the result.** If two neighboring rows
give the same answer, a traveler, a common or a 4-way pair is wrong or open.

> **Safety:** Diagram work and covers-off inspection are done with the circuit **locked and
> tagged out** and verified dead with a tested meter (live-dead-live) at each box you open. A
> 3-way box can contain conductors from **more than one circuit** — verify every conductor, not
> just the one you expect.

## Field Notes

- **Multiple circuits in one box:** gang boxes in stairwells often hold switches for different
  circuits. Shutting off "the lighting breaker" may not kill everything in the box.
- **Multiwire branch circuits:** a shared neutral may pass through the switch box. Never open a
  neutral splice with the circuit live; the neutral can carry current from another phase's load.
- **Mixed switch types:** if a previous worker replaced a 3-way with a single-pole, one location
  will never work properly. Check device markings first.
- **Document what you find:** add your sketch to the work order. It saves the next tech — or the
  electrician you write it up for — real time.

## Key Takeaways
- Know the three common layouts: power-to-switch, power-to-fixture, and a 4-way between two 3-ways.
- In power-to-switch, line hot lands on the first switch's common; in power-to-fixture, the light box holds line hot and neutral and switch boxes may have no neutral.
- A 4-way only ever sits in the traveler path; inputs from one switch, outputs to the other.
- Sketch, label and predict before testing; every single switch flip must change the result.
- Lock out, tag out and verify every conductor in every box — switch boxes often hold more than one circuit.
