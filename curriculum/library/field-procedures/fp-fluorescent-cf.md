---
title: "Field Procedure: Fluorescent and Compact Fluorescent"
category: field-procedures
tags: [field-procedure, fluorescent, cfl, ballast, sockets, t5, t8]
levels: [LT1, LT2]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

*Company field procedure — adapted from the company Master Troubleshooting Guide.*

**Competency self-rating:** 1 I have seen it · 2 I understand it · 3 I perform it · 4 I can teach it. Rate yourself on this system in the app's Skills Matrix.

## System components

| Component | What it does | Common failure |
|---|---|---|
| Fixture | Houses ballast, sockets, lamps, wiring | Damaged channel cover, loose wiring, missing disconnect |
| Lamp (T12/T8/T5, CFL pin-base) | Gas discharge tube that produces light | Blackened ends, failure to start, flicker |
| Ballast | Starts the lamp and limits current | No output, overheating, hum, end-of-life shutdown |
| Igniter / starter | Helps start preheat and some CFL lamps | Lamp glows at ends only or blinks without starting |
| Sockets (tombstones) | Hold the lamp pins and connect them to the ballast | Cracked, burned, loose; wrong shunted/non-shunted type |
| Wire | Connects ballast to sockets and supply | Pinched, burned, loose push-in connections |
| Switch | Controls the fixture | Worn contacts, loose terminals |

## Safety first

- **LOTO and verify absence of voltage (live-dead-live)** before opening the channel cover or touching sockets. Fluorescent fixtures often run on 277 V. Use the fixture's disconnect where installed, but treat it as a convenience, not a lockout point, unless your company program allows it.
- Ballasts can be hot; older (pre-1979) ballasts may contain PCBs - if leaking or labeled, stop and follow the company hazardous-waste procedure.
- Lamps contain mercury; handle and recycle per company policy. Wear eye protection when handling lamps overhead.
- Energized voltage testing is **for qualified persons only**. Check breakers **only if qualified; otherwise write it up.**

## Company troubleshooting procedure

1. **Look at the lamp ends.** If they are black, replace the lamps with the correct type.
2. **If the ends are not black, check for power with your meter** (qualified persons): measure at the ballast input. Expected: line voltage within about 10% of the ballast label (120 V or 277 V).
3. **If there is power and all lamps are out, replace the ballast** (or the igniter/starter on systems that use one). Lock out before replacing.
4. **If some lamps work and some don't, check the wiring and sockets.** Look for cracked or burned tombstones, loose push-in wires, and lamps not seated. Confirm instant-start ballasts use **shunted** sockets and rapid/programmed-start use **non-shunted**.
5. **If there is no power, check for a switch** (local, wall, or occupancy sensor) and confirm it is on.
6. **Then trace the circuit back to the first junction box** to find where power is lost.
7. **T5 tip:** on many T5 fixtures, if lamps were removed and replaced, the ballast must be **reset by cycling power** (off for several seconds, then on) before it will fire the lamps. Do this before condemning a ballast.

## Escalate / write it up when

- No power at the first junction box, or a tripped breaker that trips again.
- Branch-circuit wiring damage, overheated boxes, or a missing required disconnect.
- Leaking or PCB-labeled ballasts.

## Parts & information

- Record from the ballast label: manufacturer, model, input voltage, lamp type and quantity, start method (instant/rapid/programmed), and wiring diagram. Photograph the label.
- Record lamp code (e.g., F32T8/841), CFL base (e.g., G24q-3, GX24q-3 - 4-pin vs 2-pin matters), and socket type.
- If the label is unreadable, get a sample or the fixture spec sheet before ordering.

## Document on the work order

Fixture location, symptom, readings, parts replaced (ballast model, lamp codes), T5 reset performed, and anything written up for an electrician.
