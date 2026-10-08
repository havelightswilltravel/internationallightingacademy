---
title: Digital Dimming — DALI & an Introduction to DMX
minutes: 30
video:
video_suggestion: >
  The trainer shows a small DALI demo board: power supply, bus wiring daisy-chained to four
  DALI drivers, and a controller. The trainer addresses the drivers, puts two in a group, and
  recalls a scene. A second segment shows a DMX controller, a daisy-chained pair of RGB
  fixtures, the DMX address switches on each fixture, and the terminator plug at the end.
---

## Why Digital Dimming?
With 0–10V, every fixture on a pair gets the same signal. Digital protocols give each driver an
**address**, so one pair of control wires can control fixtures individually, in groups, or in
scenes — and drivers can report status (lamp failure, energy use) back to the controller. At
LT3 you need to recognize these systems, avoid damaging them, and handle basic wiring
troubleshooting. Deeper programming and networked controls come in LT4-C01.

## DALI (Digital Addressable Lighting Interface)
DALI is an international standard (IEC 62386). DALI-2 is the current certified generation and
improves interoperability between brands. D4i is an extension for luminaire-level data and
sensors.

| DALI feature | Typical value |
|---|---|
| Bus wires | 2 (often labeled DA+ / DA−, or D1 / D2) |
| Bus voltage | Nominally about 16 VDC (supplied by a DALI bus power supply) |
| Polarity at drivers | Most drivers are polarity-insensitive (check the device) |
| Max devices per bus (control gear) | 64 addresses |
| Groups | 16 |
| Scenes | 16 per device |
| Max bus current | 250 mA |
| Max cable length | About 300 m (1,000 ft), limited by voltage drop |
| Topology | Free (daisy-chain, star or tree; no loops back to start needed) |

**Key field facts:**
- DALI drivers do nothing useful until they are **addressed and programmed** by a controller or
  commissioning tool. A new DALI driver installed as a replacement typically needs to be
  addressed and added to its old groups/scenes — or the controller may support automatic
  replacement. Coordinate with whoever maintains the control system.
- DALI drivers are **powered separately** from the bus (line voltage), and switching is often
  done digitally (the driver turns its output off on command while still powered).
- **DALI bus wiring:** Many installations run the DALI pair in the same cable as line-voltage
  conductors (for example, a five-conductor cable). That is only permitted when the bus is wired
  and rated accordingly — the DALI bus is *not* automatically treated as Class 2. Follow the
  manufacturer's and project's wiring requirements.
- **Bus power supply:** Without the bus power supply, the system is dead even with every driver
  energized. Check it first when an entire bus stops responding.

**Basic DALI troubleshooting:**
1. Measure bus voltage (DC) at the controller and at the problem fixture: roughly 16V is
   normal; near zero means bus power supply failure or a short; low voltage at the far end can
   mean voltage drop or overload (too many devices).
2. Count devices — more than 64 control gear on one bus is a design problem.
3. A single non-responding driver: check bus connections at that driver, then whether it has
   lost its address (replacement or reset).
4. A whole group behaving wrongly: likely a programming/configuration issue, not wiring — call
   in the controls technician.

## DMX512 — An Introduction
DMX512 (ANSI E1.11) comes from theatrical and entertainment lighting. You will meet it in
architectural color-changing (RGB/RGBW) fixtures, façade lighting, auditoriums, houses of
worship and themed retail.

| DMX feature | Typical value |
|---|---|
| Signal | RS-485 differential data, one direction (controller → fixtures) |
| Channels per universe | 512 |
| Topology | **Daisy chain only** (in → out, fixture to fixture) |
| Devices per segment | Up to 32 unit loads without a splitter/booster |
| Termination | 120 Ω terminator at the last fixture |
| Connectors | 5-pin XLR in the standard; 3-pin XLR and RJ45 or terminal blocks are common in practice |
| Cable | Data cable rated for RS-485 (about 120 Ω impedance), **not** microphone cable |

**Addressing:** Each fixture is set to a **start address**. An RGB fixture uses three
consecutive channels (red, green, blue). If fixture A starts at 1 and uses 3 channels, fixture B
should start at 4. Two fixtures at the same address simply do the same thing — sometimes
intended, often a mistake.

**Common DMX problems:**
| Symptom | Likely cause |
|---|---|
| Fixtures flicker or respond randomly | Missing terminator, wrong cable, star wiring instead of daisy chain |
| All fixtures after one point dead | Broken cable or a failed fixture's data pass-through |
| Wrong colors or wrong fixture responds | Address overlap or wrong channel mode |
| Too many fixtures erratic | Over 32 devices without a splitter |

> **Safety:** Digital control wiring is low voltage, but DALI drivers, DMX fixtures and
> controllers are line-voltage equipment. Apply LOTO and verify absence of voltage before
> opening drivers or fixtures, and treat any control cable sharing an enclosure with power
> wiring as potentially energized at line voltage until verified.

## Key Takeaways
- DALI is an addressable two-wire bus: 64 devices, 16 groups, 16 scenes, bus power supply
  required.
- Replacement DALI drivers must be addressed/programmed before they work as part of the system.
- DMX is daisy-chained RS-485 data with 512 channels per universe, a 120 Ω terminator and
  32 devices per segment.
- Most digital-control problems are wiring (bus power, terminations, shorts) or addressing.
- Configuration problems belong to the controls technician; escalate rather than guess.
