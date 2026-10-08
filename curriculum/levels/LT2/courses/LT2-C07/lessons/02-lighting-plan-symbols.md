---
title: Lighting Plan Symbols and Circuiting
minutes: 35
video:
video_suggestion: >
  Over-the-shoulder footage of a tech with a lighting plan in one hand, walking an office
  floor: matching fixture type tags to actual fixtures, following switch subscripts to the
  switches that control them, finding emergency fixtures from shaded symbols, and reading a
  homerun arrow to find panel LP-2 circuit 7. Finish by locking out that circuit and verifying
  one of the fixtures is dead.
---

## Always Start With the Legend

Symbols are **not fully standardized** — every design firm has its own variations. The
symbol legend (usually on the first electrical sheet) is the dictionary for that set. The
table below shows **common** conventions; your project's legend governs.

## Fixture Symbols

| Symbol (typical) | Meaning |
|---|---|
| Rectangle drawn to scale (e.g., 2x4) | Recessed troffer or surface fixture, drawn at its actual size |
| Small circle | Downlight / can light |
| Circle with a bar or line | Wall-mounted fixture or sconce |
| Long narrow rectangle | Strip, linear or wraparound fixture |
| Rectangle or circle partly or fully shaded | **Emergency** fixture (battery pack or on emergency circuit) |
| Fixture with "NL" | Night light — unswitched, on at all times |
| Circle or box with "X" and arrows or "EXIT" | Exit sign; arrows show directional chevrons; shading shows faces |
| Box with two "eyes" | Emergency battery unit ("bug-eye") |
| Pole symbol with fixture heads | Site/area light (on site plan) |

### Fixture type tags

Each fixture symbol has a **type tag** — a letter, number or code like **A**, **B2**, **F1**, or
**L4** — placed next to it. That tag points to the **fixture schedule** (next lesson), which
describes exactly what the fixture is. If many identical fixtures appear in a room, the
designer may tag one and add "TYP" (typical).

## Control Symbols

| Symbol (typical) | Meaning |
|---|---|
| S | Single-pole switch |
| S3 / S4 | Three-way / four-way switch |
| SD or S with "D" | Dimmer |
| SK | Key-operated switch |
| OS or OC | Occupancy sensor (wall or ceiling; legend shows type) |
| VS | Vacancy sensor |
| PC | Photocell / daylight sensor |
| LV or LVS | Low-voltage switch (control station for a relay or networked system) |
| TC | Time clock |
| RP or LCP | Relay panel / lighting control panel |

### Switch subscripts

Lowercase letters link switches to the fixtures they control. A switch labeled **Sa** controls
every fixture tagged with a lowercase **a** next to it in that room. **Sb** controls the **b**
fixtures. A two-level switching scheme (inboard/outboard lamps or two zones) might show
**Sa** and **Sb** at the door, both controlling the same fixtures' different levels.

Dashed or curved lines between a switch and fixtures may also show control relationships —
check the legend. On modern projects, a keyed note may say something like "all fixtures in
this room controlled by ceiling occupancy sensor and wall dimmer, see control sequence on
E0.02."

## Circuiting Notation

### Homeruns

A **homerun** is the circuit's run back to the panel. It is drawn as a line ending in an
**arrow**, with a label giving the panel and circuit numbers:

`LP-2-7` → Panel LP-2, circuit 7

`LP-2-7,9` → Two circuits (7 and 9) in the same raceway, often sharing a neutral (multiwire)
or with separate neutrals — check the conductor marks and notes.

### Conductor tick marks

Some designers draw tick marks across the homerun line to show the conductors in the raceway.
A **common** convention:
- Short ticks = ungrounded (hot) conductors
- Long ticks = grounded (neutral) conductors
- Tick with a dot or distinct mark = equipment grounding conductor

No ticks often means "two conductors plus ground" per a general note. **Conventions vary — use
the legend.**

### Circuit numbers on fixtures

Instead of (or in addition to) homeruns, many plans write the circuit number next to each
fixture or group: e.g., "7" or "LP2-7". Fixtures connected by curved lines are on the same
circuit run.

## Emergency and Night-Light Circuiting

Emergency fixtures may be fed from:
- The normal lighting circuit **plus** an unswitched circuit for an internal battery pack,
- A dedicated emergency panel (e.g., "ELP-1") fed through a transfer switch from a generator,
- A central inverter.

The plan or notes tell you which. A fixture on an emergency panel may be controlled by a
UL 924 transfer device (LT3-C04).

> **Safety:** Emergency fixtures often have **two sources**. Locking out the normal lighting
> circuit may not de-energize an emergency fixture's battery pack or its emergency-panel feed.
> Use the plan to identify every source, lock out all of them, and verify absence of voltage
> on all conductors — and remember a battery pack can energize the lamp or LED side even
> with all circuits off. Follow the manufacturer's instructions to disconnect the battery.

## Using a Lighting Plan in the Field — Step by Step

1. Confirm the sheet and revision; find the room on the plan by room number or grid lines.
2. Read the general and keyed notes for that area.
3. Identify each fixture's type tag; look up the type in the fixture schedule.
4. Identify the controls (switch subscripts, sensors) for each fixture.
5. Find the circuit number (homerun label or fixture circuit tag) and panel.
6. Look up the circuit on the panel schedule (Lesson 4) to find breaker size and phase.
7. In the field, confirm with a tracer and live-dead-live verification before working.
8. Mark discrepancies on the drawing and report them (redlines — Lesson 4).

## Key Takeaways
- The project's symbol legend governs — conventions vary between firms.
- Fixture type tags link plan symbols to the fixture schedule.
- Switch subscripts (Sa, Sb) link controls to the fixtures they operate.
- Homerun labels like "LP-2-7" give panel and circuit; tick marks show conductors per the legend.
- Shaded symbols usually mean emergency fixtures, which may have more than one source — identify and lock out all sources.
- Always confirm drawing circuit information in the field before working.
