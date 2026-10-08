---
title: "Field Procedure: 3-Way Switching"
category: field-procedures
tags: [field-procedure, 3-way, switch, travelers, intermittent, wiring-diagram]
levels: [LT2]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

*Company field procedure — adapted from the company Master Troubleshooting Guide.*

**Competency self-rating:** 1 I have seen it · 2 I understand it · 3 I perform it · 4 I can teach it. Rate yourself on this system in the app's Skills Matrix.

## System components

| Component | What it does | Common failure |
|---|---|---|
| Switches (two 3-ways, plus 4-ways for three or more locations) | Route power over two traveler wires so lights can be controlled from more than one place | Worn mechanism, loose terminal, common and traveler swapped |
| Wire (line, travelers, switch leg) | Carry power from the source through both switches to the fixtures | Loose backstab or splice, broken conductor, wrong traveler connection |
| Fixtures | The load | Fixture fault mistaken for a switching fault |

## Safety first

- **LOTO and verify absence of voltage (live-dead-live)** before removing cover plates or pulling switches out of the box. A 3-way box can contain conductors from more than one circuit - test every conductor.
- Energized voltage checks are **qualified persons only**. Check breakers **only if qualified; otherwise write it up.**

## Company troubleshooting procedure

1. **Wiggle the switch handle** (with the cover plate on). A loose or inconsistent handle can indicate a bad switch.
2. **If the fixtures get power intermittently, check the connection points on the switches for loose connections** (locked out). Look for backstabbed wires, loose screws and burned insulation; move wires to the screw terminals.
3. **Use the 3-way switching diagram to trace power flow from the switches to the fixtures**, or **write it up for an electrician.**
   - Identify the **common** terminal on each switch (usually the dark screw). At one switch, the common should be the line (hot) from the source; at the other, the common feeds the switch leg to the fixtures.
   - The two **travelers** connect the brass terminals between the switches.
   - De-energized, use continuity to confirm each traveler runs from switch to switch and that the switch toggles the common between the two travelers. Expected: near 0 ohms common-to-one traveler, OL to the other; reverses when toggled.
4. Replace a switch that fails the continuity check with the correct type (3-way, not single-pole).

**Typical symptoms:** lights only work with one switch in a certain position, or both switches must be "up" - often a common wired to a traveler terminal after a previous replacement.

## Escalate / write it up when

- You cannot identify line, travelers and switch leg using the diagram.
- Multiple circuits or shared neutrals in the box.
- Broken conductors inside walls or overheated boxes.

## Parts & information

- Record switch type (3-way, 4-way, dimmer-rated 3-way, smart switch), amp and voltage rating, color and style. Photograph the wiring **before** disconnecting and label the common wire.
- Smart or dimming 3-ways may need a neutral and a matching companion switch - check the spec sheet.

## Document on the work order

Locations of both switches, what you found (loose, miswired, failed), parts replaced, and anything written up.
