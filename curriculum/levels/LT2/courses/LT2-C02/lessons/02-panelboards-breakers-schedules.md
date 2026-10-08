---
title: Panelboards, Breakers and Panel Schedules
minutes: 35
video:
video_suggestion: >
  With a panel de-energized and locked out, a lead tech removes the dead front and identifies
  the main lugs or main breaker, bus bars, neutral bar, ground bar, single/two/three-pole
  breakers, handle ties and the circuit directory. Then shows a typed panel schedule and
  compares it with what is actually installed, marking corrections.
---

## Anatomy of a Lighting Panelboard

A panelboard distributes a feeder into branch circuits. Lighting panels in commercial
buildings are usually 480Y/277 V (often labeled "LP" or "HL") or 208Y/120 V (often "RP" for
receptacle panel, although names vary by designer).

| Part | What it does |
|---|---|
| Main lugs or main breaker | Where the feeder lands. "Main lug only" (MLO) panels are protected by a breaker upstream |
| Bus bars | Copper or aluminum bars carrying phases A, B, C; breakers clip or bolt onto them |
| Neutral bar | Terminates grounded conductors. Isolated from the enclosure in subpanels |
| Ground bar | Terminates EGCs; bonded to the enclosure |
| Dead front (trim) | The inner cover that shields live parts; breakers handles stick through it |
| Door | Outer cover; circuit directory is usually mounted inside it |
| Nameplate/label | Voltage, phase, wires, bus rating, short-circuit rating, manufacturer |

> **Safety:** Opening the door to operate a breaker is normal work. **Removing the dead front
> exposes energized parts.** That is energized work requiring an arc-flash/shock risk
> assessment, PPE per the equipment label or company PPE table, and a qualified person.
> At LT2 you remove dead fronts only under direct supervision of a qualified lead, or after
> the panel is de-energized, locked out and verified.

## Breakers

| Type | Use in lighting |
|---|---|
| Single-pole | One ungrounded conductor: 120 V or 277 V circuits |
| Two-pole | 208 V, 240 V or 480 V loads; or two circuits of a multiwire branch circuit |
| Three-pole | Three-phase loads or three-circuit multiwire branch circuits |
| Handle ties | Join single-pole breakers so multiwire branch circuit hots are disconnected together |
| SWD-marked | Required when a breaker is used as the regular on/off switch for 120 V and 277 V fluorescent lighting |
| HID-marked | Required when a breaker is used as the switch for HID lighting; HID breakers are also acceptable for fluorescent switching |
| GFCI / AFCI | Personnel ground-fault or arc-fault protection where required (mostly dwellings and specific locations) |

Using breakers as switches is common in warehouses and big-box stores. A standard breaker
not marked SWD or HID can wear out and fail when switched daily (NEC 240.83 covers the
marking requirement).

**Only install breakers listed (or classified) for that panelboard.** A breaker that
"fits" from another manufacturer may not make proper contact with the bus and can overheat.
Check the panel label for acceptable breaker types.

### Multiwire branch circuits (MWBC) — awareness

An MWBC uses two or three hots that share one neutral (for example, circuits 1, 3 and 5
sharing a neutral). The NEC requires a means to simultaneously disconnect all ungrounded
conductors of an MWBC at the panel — a multi-pole breaker or listed handle ties. If you see
single-pole breakers feeding circuits that share a neutral **without** handle ties, report
it. Opening that shared neutral with any of the circuits on is a serious shock hazard. LT4
covers MWBC troubleshooting.

## Panel Schedules and Circuit Directories

The NEC requires every circuit and circuit modification to be legibly identified as to its
**specific purpose** in a directory at the panel (408.4). "Lights" is not specific enough;
"Lighting — Warehouse Aisles 1–4" is. Spares must be identified too.

### Reading a typical panel schedule

| Ckt | Description | Load (VA) | Brkr | Ph | Brkr | Load (VA) | Description | Ckt |
|---|---|---|---|---|---|---|---|---|
| 1 | Ltg – Office 101–104 | 1,450 | 20/1 | A | 20/1 | 1,880 | Ltg – Corridor East | 2 |
| 3 | Ltg – Open Office N | 2,600 | 20/1 | B | 20/1 | 900 | Ltg – Exit/EM Unswitched | 4 |
| 5 | Ltg – Open Office S | 2,400 | 20/1 | C | 20/1 | — | Spare | 6 |

- Odd circuits on the left, even on the right.
- "20/1" means 20 A, 1 pole. "30/2" means 30 A, 2 pole (it occupies two positions, e.g., 7
  and 9).
- The phase column shows which bus phase each row is on: rows rotate A, B, C.
- Load totals by phase show balance. A badly unbalanced lighting panel increases neutral
  current and voltage drop.

### Field use

- **Before** shutting off a breaker, confirm what else is on it. Turning off "Corridor East"
  may also kill emergency fixtures or a server room's lights.
- **Never trust the directory alone.** Directories are wrong often. Confirm with a circuit
  tracer and live-dead-live verification (LT2-C03).
- **When you find an error, fix it or report it.** Update the directory neatly in ink or with
  a label maker and note the change on the work order. The next tech's safety depends on it.

## Basic Inspection Checklist (Door Open, Dead Front On)

1. Label legible and system voltage identified.
2. Directory present and plausible.
3. No missing knockouts or open breaker positions without filler plates.
4. No signs of heat: discoloration, melted handles, burnt smell, buzzing.
5. Working space clear.
6. Any breaker warm to the touch through its handle, or tripping repeatedly — report it.

## Key Takeaways
- Know panel parts: main lugs/main, bus, neutral bar, ground bar, dead front, directory, label.
- Removing the dead front is energized work — supervised, with PPE, by qualified persons only.
- Breakers used as regular switches must be SWD (fluorescent) or HID (HID) marked.
- Install only breakers listed or classified for that panel.
- Multiwire branch circuits need simultaneous disconnect — handle ties or a multi-pole breaker.
- Directories must identify each circuit's specific purpose; verify them in the field and correct errors.
