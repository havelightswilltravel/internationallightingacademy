---
title: Fluorescent Lamps Flicker or Won't Start
category: fluorescent
tags: [fluorescent, ballast, flicker, no-start, instant-start, rapid-start, programmed-start]
levels: [LT1, LT2]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- Lamp(s) dark, glowing only at the ends, or slow to start
- Flicker, blinking, or a lamp that starts then goes out
- One lamp of a pair out (with series ballasts, one failed lamp can take out both)
- Problems worse in cold areas (warehouses, exterior canopies, coolers)

## Safety first

- **De-energize before relamping or opening the ballast channel.** LOTO the branch circuit
  and verify absence of voltage. Ballasts produce high starting voltages (instant-start
  open-circuit voltage can be several hundred volts) - never touch lamp pins or sockets
  while energized.
- Energized testing is **qualified persons only**, with risk assessment, appropriate PPE
  and an energized-work justification per NFPA 70E.
- Fluorescent lamps contain mercury. Handle carefully; manage spent lamps as universal
  waste. Follow your company's broken-lamp cleanup procedure.
- Older magnetic ballasts made before 1979 may contain PCBs. If the ballast is not
  labeled "No PCBs", treat it as PCB-containing and follow your disposal procedure.
- If the fixture has an emergency ballast, it can light a lamp with the breaker off -
  disconnect its battery first.

## Tools needed

- Known-good lamps of the correct type (T8/T5/T12, length, wattage, base)
- CAT III multimeter (ohms/continuity) and known source
- Replacement ballast and sockets (matching type and lamp count)
- Lamp carrier/universal waste container, gloves, eye protection

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Lamp at end of life | Blackened ends, flicker; known-good lamp works | Replace lamp (consider group relamp) |
| Lamp not seated / rotated in socket | Lamp starts when moved; pins not engaged | Reseat; replace loose sockets |
| Wrong lamp for ballast (T12 on T8 ballast, wrong wattage, energy-saver lamp on incompatible ballast) | Lamp marking vs ballast label | Install correct lamp |
| Failed ballast | Known-good lamps won't start; ballast hot, swollen, leaking or burnt smell | Replace ballast with matching type |
| Cracked or wrong-type socket (shunted vs non-shunted) | Visual; ohmmeter on socket | Replace with correct socket type for the ballast |
| Cold temperature | Problem only in cold; ballast minimum starting temp on label | Use cold-rated ballast/lamps or LED solution |
| Low supply voltage | Measured voltage well below nominal | See voltage drop guide |
| Poor fixture grounding (rapid-start) | Fixture not bonded to EGC | Correct grounding; rapid-start needs grounded metal near the lamp |

## Step-by-step diagnosis

1. Observe: which lamps, which fixtures, ends glowing, blackened ends, temperature.
2. **De-energize, LOTO, verify absence of voltage.**
3. Read the ballast label: starting method (instant, rapid, programmed), lamp type and
   count, input voltage, minimum starting temperature, and wiring diagram.
4. Replace the suspect lamps with **known-good lamps of the correct type**. Restore power
   and test. Most fluorescent problems end here.
5. If still not working, de-energize and check lamp cathodes on the removed lamp: pin-to-pin
   on the same end should show **continuity (typically a few ohms)**. Open = broken cathode.
6. Inspect sockets. Instant-start ballasts use **shunted** sockets; rapid- and
   programmed-start use **non-shunted**. With wiring disconnected, an ohmmeter across a
   shunted socket's two contacts reads near 0 Ω; non-shunted reads open.
7. Check wiring against the ballast diagram: correct colors to correct sockets, no loose
   push-in connections.
8. **(Qualified, energized, with PPE)** Verify input voltage at the ballast leads matches
   the label (e.g. 120 V or 277 V). Good input + known-good lamps + good sockets and wiring
   = failed ballast.
9. Replace the ballast with a matching unit (same lamp type/count, voltage, starting method,
   or as the manufacturer cross-references). Many techs choose a universal-voltage ballast.
10. Restore and verify all lamps start and stay lit.

## When to escalate

- PCB ballast or leaking ballast (hazardous material handling)
- Several fixtures failing at once, or ballast failures repeating on one circuit
- Customer asks about converting to LED - refer for retrofit scope (TLED or kit)

## Documentation

- Fixture location, lamp type, ballast model and starting method
- Lamps and/or ballast replaced; old ballast "No PCBs" label status
- Waste handling (lamps to universal waste container)
- Measured input voltage (if taken)
