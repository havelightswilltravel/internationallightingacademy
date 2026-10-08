---
title: "Field Procedure: HID"
category: field-procedures
tags: [field-procedure, hid, metal-halide, hps, ballast-kit, capacitor, igniter, pole-fuses]
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
| Fixture | Holds the ballast kit, socket, lamp, optics | Water entry, broken lens, corroded hardware |
| Lamp (MH, HPS) | Arc tube that produces light | End of life: cycling, color shift, no start |
| Ballast kit - core and coil | Transformer that sets start voltage and limits lamp current | Open or shorted winding, overheating, wrong tap |
| Ballast kit - capacitor | Corrects power factor / sets lamp current | Bulged, leaking, out of tolerance |
| Ballast kit - igniter | Sends high-voltage start pulses (HPS, pulse-start MH) | No pulse; lamp won't strike |
| Socket (mogul) | Connects the lamp; must be pulse-rated | Carbon tracking, burned center contact |
| Wire | Ballast to socket and supply | Heat-brittle insulation, long lead length |
| Fuses | Protect pole feed (often in-line holders in the pole base handhole) | Blown, corroded holder |
| Photocell | Turns the light on at dusk | Stuck off/on, failed receptacle |

## Safety first

- **LOTO and verify absence of voltage (live-dead-live)** before touching the ballast kit, socket or fuse holders. Then **discharge the capacitor** with an insulated discharge tool and verify it reads zero.
- **Igniter pulses reach thousands of volts.** Never touch the socket or lamp while energized. A standard meter can be damaged by the pulse - follow the company socket voltage chart and its instructions for measuring.
- All energized measurements in this procedure are **qualified persons only**, with the PPE your company's NFPA 70E program requires. Pole work: use a lift with fall protection.
- Lamps are hot and under pressure; let them cool, wear eye protection and gloves.

## Company troubleshooting procedure

1. **Test socket voltage with your meter** and compare with the **company socket voltage chart** for that lamp type and wattage.
2. **If socket voltage is correct, change the lamp** (correct type, wattage and ANSI code).
3. **If socket voltage is not correct, test line voltage** at the ballast input. Expected: the supply voltage matching the ballast tap in use (e.g., 120, 208, 240, 277 or 480 V), within about 10%.
4. **If line voltage is not correct, test the fuses and check for fuses at the base of the pole.** De-energize and test fuses with an ohmmeter (near 0 ohms good, OL blown). Find out *why* a fuse blew before replacing it. Opening a panel to check breakers is **only if qualified; otherwise write it up.**
5. **If line voltage is correct, test the voltage from the ballast to the capacitor.** If correct voltage reaches the capacitor but is not leaving it, **change the capacitor** (same µF and voltage rating).
6. **If the ballast is not sending the correct voltage, change the ballast kit.**
7. **If the capacitor and ballast are good, check the socket** for carbon tracking, a flattened center contact, or burns.
8. **If the socket is good, change the igniter.**
9. **Whenever you replace a ballast kit, always put a fresh lamp in.** An old lamp can damage a new kit or cause a callback.

## Escalate / write it up when

- No line voltage and the fault is upstream of the pole fuses (panel, contactor, underground run).
- Repeat fuse blowing (possible underground fault).
- Mercury vapor fixtures needing ballasts - recommend LED conversion.

## Parts & information

- Record the ballast label: lamp type and ANSI code (e.g., M59, S50), wattage, input taps, capacitor µF/voltage, igniter part number. Photograph the label and wiring diagram.
- Record lamp type: probe-start vs pulse-start MH matters - they are not interchangeable.
- Get the fixture spec sheet or a sample if the label is gone.

## Document on the work order

Pole/fixture ID, socket and line readings, capacitor value, parts replaced (kit model, lamp), fuse findings, and anything written up.
