---
title: Underground Lighting Circuit Ground Fault
category: exterior
tags: [exterior, underground, ground-fault, insulation-resistance, megohmmeter, fault-locating, 811]
levels: [LT3, LT4, EA2]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- Site lighting breaker trips immediately or soon after reset, especially after rain
- GFCI or ground-fault protection on the circuit trips
- Some poles dark, others dim or flickering; tingling or voltage felt on a pole or handhole cover
- Burned splice or melted insulation found in a handhole

## Safety first

- **A pole, fixture or handhole cover that is energized is an immediate public hazard.**
  Keep people away, de-energize the circuit, and notify your supervisor and the owner.
- **Do not repeatedly reset a breaker on a suspected fault.** Each reset sends fault current
  through damaged insulation and can cause arcing at the fault location.
- **De-energize, LOTO and verify absence of voltage** before opening handholes, disconnecting
  conductors or performing insulation resistance tests.
- **Insulation resistance testers (megohmmeters) apply high DC test voltage.** Only trained
  persons use them; disconnect drivers, ballasts, photocells, surge protectors and other
  electronics first (the test can damage them and they distort readings), and keep people
  clear of the conductor ends under test. Discharge conductors after each test.
- **Call 811 (or your local one-call service) before any digging.** It is required by law.
- Energized testing is **qualified persons only**, with risk assessment, appropriate PPE and
  an energized-work justification per NFPA 70E.

## Tools needed

- Megohmmeter (insulation resistance tester) with appropriate test voltages
- CAT III multimeter, clamp meter (leakage clamp optional)
- Site drawings showing circuit routing, handholes and pole feed order
- Fault locating equipment (time-domain reflectometer, earth-gradient/"A-frame" locator) - often a specialist service
- Direct-burial/wet-location rated splice kits

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Water in a handhole splice | Corroded/wet splice; low insulation resistance on that segment | Replace with direct-burial/wet-location rated splice kit |
| Damaged cable (dig-in, rodent, pinched in conduit, aging insulation) | Low IR isolated to a segment between handholes | Repair/replace the segment |
| Fault in the pole (wiring pinched in arm, chafed at entry) | Low IR on pole wiring with underground disconnected | Replace pole wiring, add bushings/grommets |
| Fixture/driver internal fault to ground | Fault clears when fixture is disconnected | Repair/replace fixture |
| Water-filled conduit with non-wet-rated conductors | Conductor type not rated for wet locations | Replace with wet-rated conductors |

## Step-by-step diagnosis

1. Gather history: when did it start (after rain, after construction/landscaping)? Which poles?
2. **De-energize, LOTO, verify absence of voltage** at the panel and at the first handhole.
3. At the panel, disconnect the circuit conductors (or at the first handhole) and isolate
   the loads: disconnect fixtures/drivers, photocells and surge protectors at each pole, or
   disconnect at the pole handholes.
4. **Insulation resistance test** each conductor to ground (EGC) and between conductors.
   Use a test voltage appropriate for the cable rating (for 600 V cable, 500 V or 1000 V DC
   is common - follow company procedure and the tester instructions). Typical interpretation:
   - **High (hundreds of megohms or more):** insulation good.
   - **Low megohms or below:** suspect. Compare conductors and segments; a reading far lower than
     the others identifies the faulted conductor. Many acceptance references use around
     **100 MΩ** as a minimum for new 600 V cable - check your company standard.
   - **Near 0 Ω on a multimeter:** a bolted fault to ground.
5. **Half-split:** disconnect the run at a handhole near the middle and test each half. Keep
   halving until the fault is narrowed to one segment or one pole.
6. Inspect splices in handholes on the faulted segment first - they are the most common failure point.
7. If the fault is in the buried cable, plan repair: 811 locate, then fault locating to pinpoint, or
   pull new conductors if the cable is in conduit.
8. After repair, retest insulation resistance, reconnect loads, restore power, and verify all
   poles. Confirm the equipment grounding conductor is continuous to every pole.

> **Note:** Ground rods at poles do not replace the equipment grounding conductor. The earth
> is not an effective ground-fault current path (2023 NEC 250.4(A)(5)); a ground fault
> without an EGC may not trip the breaker and can leave the pole energized.

## When to escalate

- Any energized pole, handhole cover or fixture housing found
- Fault located in buried cable needing excavation or specialist fault locating
- Missing equipment grounding conductor or improper wiring methods (code violation)
- Repeated faults after repair (systemic water or cable problem)

## Documentation

- Circuit, poles and segments tested; insulation resistance readings (test voltage, conductor, value)
- Fault location found and repair made (splice kit type, cable replaced)
- Loads disconnected/reconnected; final test results
- 811 ticket number if excavation is planned; public-hazard notifications made
