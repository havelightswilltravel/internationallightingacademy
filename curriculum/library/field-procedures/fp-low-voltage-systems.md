---
title: "Field Procedure: Low-Voltage Lighting Systems"
category: field-procedures
tags: [field-procedure, low-voltage, transformer, mr16, 12v, socket, intermittent]
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
| Lamp (e.g., MR16, bi-pin halogen, LED replacement) | Produces light at 12 or 24 V | Open filament; LED lamp incompatible with transformer |
| Socket | Holds bi-pin or wedge-base lamp | Burned, loose, worn pin contacts, heat-brittle |
| Fixture | Houses socket and often the transformer | Internal loose connections, heat damage |
| Transformer (magnetic or electronic) | Steps line voltage down to 12/24 V | No output, thermal shutdown, minimum-load issue |
| Low-voltage cable / conductors | Carry high current at low voltage | Voltage drop on long runs, loose clamps, burned connectors |
| Wire (line voltage) | Feeds the transformer | Loose splices, no power |

## Safety first

- **LOTO and verify absence of voltage (live-dead-live)** on the line-voltage side before opening the transformer or fixture.
- Low-voltage circuits carry high current: loose connections can get hot enough to burn. Halogen lamps run very hot - let them cool; don't touch the quartz with bare fingers.
- Energized line-voltage tests are **qualified persons only**. Check breakers **only if qualified; otherwise write it up.**

## Company troubleshooting procedure

1. **Check lamp continuity** (de-energized). Expected: very low resistance (a few ohms or less for halogen); OL = open.
2. **Check the socket for burns, breakage, excessive wear and connection issues.**
3. **Test line voltage across the hot and neutral** at the transformer input (qualified). Expected: about 120 V (or the label rating).
4. **Test continuity between the socket and the transformer** (de-energized). Expected: near 0 ohms on each conductor.
5. **If you have a good lamp, good socket, continuity and line voltage, replace the transformer or the fixture.**
6. **If the problem is intermittent, look for connection issues inside the fixture.**
7. **If no connection issues can be found and no parts were replaced to get it working again, replace the fixture.**

**Tips:** electronic transformers output high-frequency voltage - a standard meter may read it incorrectly, so use a true-RMS meter. Electronic transformers also have a **minimum load**; one LED lamp may not keep them on, causing flicker. Typical output: 11.5-12 V AC under load.

## Escalate / write it up when

- No line voltage at the transformer.
- Remote transformers in inaccessible locations or line-voltage wiring damage.
- Repeated transformer failures (overload - total lamp wattage exceeds rating).

## Parts & information

- Transformer label: magnetic or electronic, input/output voltage, VA/watt rating, minimum load, dimmer type. Photograph it.
- Lamp: base (GU5.3, GY6.35, G4), wattage, beam angle, color temperature. For LED retrofits, confirm compatibility with the transformer.
- Get the fixture spec sheet before replacing a fixture with an integral transformer.

## Document on the work order

Fixture location, readings, parts replaced, intermittent findings, and anything written up.
