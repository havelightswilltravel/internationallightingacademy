---
title: "Field Procedure: Neon"
category: field-procedures
tags: [field-procedure, neon, signage, gto, transformer, sgfp, channel-letters]
levels: [LT2, LT3]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

*Company field procedure — adapted from the company Master Troubleshooting Guide.*

**Competency self-rating:** 1 I have seen it · 2 I understand it · 3 I perform it · 4 I can teach it. Rate yourself on this system in the app's Skills Matrix.

## System components

| Component | What it does | Common failure |
|---|---|---|
| Glass units | Gas-filled tubes that glow when high voltage is applied | Cracked/broken tube, lost gas (dim, flickering, wrong color) |
| Booties | Silicone boots insulating electrode connections | Cracked, missing, tracking burns |
| GTO cable | High-voltage cable from transformer to tubes and between units | Insulation burns/tracking, chafing, pinholes to ground |
| Transformer | Steps line voltage up to several thousand volts | Failed; trips on secondary ground-fault protection |
| PK housings | Insulating sleeves where electrodes pass through the sign face | Cracked, wet, burn tracking |
| Glass standoffs / tie wire | Support tubes off the sign face | Broken supports letting glass flex and crack |
| Channels | Letter housings that hold channel neon | Water entry, blocked drain holes |
| Indoor/outdoor enclosures | House transformers and connections | Water, corrosion, missing covers |
| Flex / flex connectors | Protect primary wiring | Loose, corroded, pulled out |

## Safety first - corrected from the original procedure

- **Neon secondaries operate at thousands of volts (up to about 15 kV).** **Never touch energized neon glass, electrodes, booties, GTO or transformer outputs**, and never "feel" for voltage. Diagnose an energized sign by **observing (glow, flicker) and listening (buzz) only**, from a safe distance.
- Before handling any glass, GTO, jumper or transformer: open the sign disconnect, **LOTO, and verify absence of voltage on the primary (live-dead-live)**. Allow a moment for any stored charge to dissipate.
- Measuring secondary voltage requires high-voltage-rated test equipment and **qualified persons only**. Do not use a standard multimeter on a neon secondary.
- Broken glass cuts: wear cut-resistant gloves and eye protection. Work at height with proper lift and fall protection.

## Company troubleshooting procedure

**Exposed neon**

1. With the sign on, **look and listen** to each unit (glow, buzz). Do not touch.
2. If no units are lit, **go back to the transformer and check switches and incoming power** (qualified persons for energized primary testing).
3. If power is good, **check for broken neon - start with the first piece off the transformer** (de-energized and locked out).
4. **Change the transformer if it will not reset/send power with the secondary leads disconnected** (de-energize to disconnect leads; observe the transformer's status indicator or use an approved tester). Many modern transformers have secondary ground-fault protection that shuts them down on a fault - a trip may point to a GTO or glass problem, not a bad transformer.
5. If one or more units are dimmer or buzz less than the others, **bypass those units** (de-energize, install a jumper, re-energize, observe) and verify the rest work.
6. **If bypassing does not work, inspect for GTO burns** (de-energized) and replace GTO as needed.

**Channel neon**

1. Look and listen through the drain holes. Do not insert tools or fingers.
2. Same as exposed neon steps 2-4: check transformer power, first piece of glass, and transformer.
3. **Split-half the sign:** at the center unit, with the sign locked out, ground/jumper the GTO lead per company method, then re-energize and observe. Half the sign should light; split the dark half again and repeat until the bad unit is found. Lock out before every change. Note: a transformer with secondary ground-fault protection may shut down when a lead is grounded - on those, use the transformer manufacturer's approved test method or a jumper instead.
4. If bypassing does not find it, inspect for GTO burns and replace GTO.

## Escalate / write it up when

- Primary wiring, missing disconnect, or water-damaged enclosures.
- Glass replacement (send to a neon shop with a pattern/photo).
- Repeat ground-fault trips you cannot locate.

## Parts & information

- Transformer label: input voltage, output kV and mA, ground-fault protection type. Match or exceed output for the tube footage.
- Photograph and measure broken units (color, diameter, length, pattern) for the glass shop.
- Record GTO rating (e.g., 15 kV) and length.

## Document on the work order

Sign location, which units were dark, split-half results, parts replaced, glass ordered, and anything written up.
