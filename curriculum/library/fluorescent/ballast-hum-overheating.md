---
title: Ballast Hum, Overheating or Burning Smell
category: fluorescent
tags: [fluorescent, ballast, hum, noise, overheating, thermal-protector, pcb]
levels: [LT1, LT2]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- Loud buzzing or humming from a fixture (noise usually louder from magnetic ballasts)
- Lamps go out, then come back on after cooling (thermal protector cycling)
- Fixture lens or housing hot; discolored ballast case; burning or "hot tar" smell
- Black tar or oily residue leaking from a ballast

## Safety first

- **A burning smell or smoke from a fixture is a fire hazard.** De-energize the circuit
  immediately (if it can be done safely), tell the customer, and do not leave the
  fixture energized and unattended.
- **De-energize, LOTO and verify absence of voltage** before opening the ballast channel.
  Ballasts can be hot enough to burn - let them cool or wear gloves.
- **Leaking ballast:** do not touch the residue with bare skin. Ballasts made before 1979
  and not labeled "No PCBs" may contain PCBs; leaking PCB ballasts require special
  handling and cleanup. Stop and follow your hazardous material procedure.
- Energized testing is **qualified persons only**, with risk assessment, appropriate PPE and
  an energized-work justification per NFPA 70E.

## Tools needed

- CAT III multimeter and known source
- Non-contact infrared thermometer or thermal camera
- Replacement ballast (matching), approved connectors
- Nitrile gloves, eye protection, bags/containers for hazardous or universal waste

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Magnetic ballast with poor sound rating / normal aging | Older magnetic ballast; sound rating (A is quietest) | Replace with electronic ballast or convert to LED |
| Loose ballast mounting or fixture parts vibrating | Noise changes when you press on the channel cover (de-energized retest) | Tighten mounting screws; secure covers |
| Ballast failing (internal breakdown) | Overheating, smell, discoloration; lamps cycle | Replace ballast |
| Wrong lamps (higher wattage than rated) | Lamp vs ballast label | Install correct lamps |
| Over-voltage (e.g. 120 V ballast on 277 V) | Label vs measured voltage | Replace with correctly rated ballast; investigate wiring |
| Poor heat dissipation (fixture in insulation, high ambient, ballast not tight to housing) | Thermal reading high; ballast mounted loosely | Mount ballast tight to metal; correct the environment |
| Lamps at end of life stressing the ballast | Blackened lamp ends; one lamp out on a series ballast | Replace lamps; replace ballast if damaged |

## Step-by-step diagnosis

1. If there is smoke, a strong burning smell or visible damage, **de-energize immediately**
   and treat as a fire/hazard condition before any diagnosis.
2. Identify noise vs heat. Listen at the fixture, check other fixtures on the circuit.
3. **(Qualified)** With an IR thermometer, compare the fixture's housing temperature with
   similar fixtures. A ballast is designed to run warm; much hotter than its neighbors points
   to a problem. Compare with the ballast's case temperature (Tc) rating on the label.
4. **De-energize, LOTO, verify absence of voltage.** Open the channel and inspect: case
   discoloration, swelling, leaking compound, brittle or charred lead insulation, loose
   mounting screws.
5. Read the label: input voltage, lamp type/wattage, PCB status, sound rating, Tc.
6. Check that the lamps match the label and are not at end of life.
7. **(Qualified, energized, with PPE)** If the ballast looks normal, measure input voltage.
   Expected: within the label's range. Over-voltage overheats ballasts quickly.
8. Replace the ballast (and lamps if needed). Ensure it is screwed tightly to the housing
   for heat transfer. Remake all connections with approved connectors.
9. Restore, confirm quiet operation, and re-check temperature after 15-30 minutes.

## When to escalate

- Any leaking ballast with unknown or PCB status
- Evidence of fire damage beyond the fixture (scorched ceiling, wiring)
- Repeated ballast failures on one circuit (voltage, neutral or surge problem)

## Documentation

- Fixture location, ballast model and PCB label status
- Temperatures measured, input voltage measured
- Cause found and parts replaced
- Waste handling (PCB/hazardous or non-PCB ballast, lamps as universal waste)
- Fire/hazard notifications made to the customer
