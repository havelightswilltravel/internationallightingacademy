---
title: Lockout/Tagout Quick Card for Lighting Work
category: safety
tags: [loto, lockout, tagout, electrically-safe-work-condition, safety]
levels: [LT1, LT2, LT3, LT4, LT5, EA1, EA2, EA3, EA4]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.** This card summarizes your company's LOTO program; it does
> not replace it. Where they differ, your written program governs.

## Symptoms

Use this card **before** any of the following, every time:

- Replacing a ballast, driver, socket, sensor, photocell receptacle, or fixture
- Opening a fixture wiring compartment, junction box, contactor or panel interior
- Any troubleshooting that does not strictly require the circuit to be energized

"I'm just swapping a lamp" and "it's only 120 volts" are not exceptions. Lighting circuits
at 277 V are a leading cause of shock injuries among maintenance workers.

## Safety first

- Work is governed by OSHA 29 CFR 1910.147 (control of hazardous energy), 29 CFR 1910.333
  (electrical safe work practices) and NFPA 70E's requirements for establishing an
  **electrically safe work condition**.
- **Default to de-energized work.** Energized troubleshooting may only be done by a
  **qualified person**, after a shock and arc-flash risk assessment, wearing appropriate
  PPE, under an energized-work justification per NFPA 70E and your company's program.
- A **wall switch, occupancy sensor, relay, contactor or photocell is not an
  energy-isolating device.** Lock the branch-circuit breaker or disconnect.
- PPE until absence of voltage is verified: safety glasses, voltage-rated gloves with
  leather protectors, and arc-rated clothing/face protection as required by the
  arc-flash label or PPE category for the equipment.

## Tools needed

- Personal lock (one per worker, one key, kept by that worker) and danger tag
- Breaker lockout devices sized for the panel (single-pole, multi-pole, bolt-on/clamp-on)
- Group lockout hasp or lock box when more than one worker is involved
- CAT III (minimum) rated multimeter or two-pole voltage tester with intact leads
- Known voltage source / proving unit
- Panel schedule, lighting plan or circuit tracer

## Likely causes

Common ways lighting LOTO goes wrong, and how to prevent them:

| Cause (hazard) | How to confirm | Fix |
|---|---|---|
| Wrong breaker locked (panel schedule outdated) | Fixture still tests live after lockout | Trace the circuit; correct the schedule; never rely on labels alone |
| More than one source in the box (two circuits, switch legs, emergency feed) | Voltage present on other conductors in the box | Identify and lock out every source feeding the enclosure |
| Multiwire branch circuit - neutral carries current from another phase | Shared neutral; handle tie missing | Lock out **all** breakers of the MWBC; treat the neutral as live |
| Emergency battery pack or inverter re-energizes lamps | Battery/emergency driver in fixture; unswitched hot | Disconnect the battery connector per manufacturer; lock out the inverter output |
| Control voltage from another panel (contactor coil, relay panel) | Coil or control terminals live with load breaker off | Lock out the control source too |
| Capacitors (HID, power-factor) holding charge | HID ballast with external capacitor | Discharge with an insulated, resistor-type tool per manufacturer and verify |

## Step-by-step diagnosis

Follow these steps in order. Do not skip or reorder them.

1. **Prepare.** Identify every energy source for the equipment: branch circuit(s), switch
   legs, emergency/battery sources, control circuits, generators and stored energy
   (capacitors). Check the panel schedule *and* trace if there is any doubt.
2. **Notify** the customer and any affected people that the circuit will be shut off
   and locked out. Think about what else is on the circuit (egress lighting, life-safety
   areas, refrigeration, IT).
3. **Shut down** the equipment using its normal controls (switch off).
4. **Isolate** by opening the breaker(s) or disconnect(s). Stand to the side of the panel
   and avoid facing the breaker directly when operating it.
5. **Apply your lock and tag** to each isolating device. Each worker applies their own
   lock (or locks onto the group hasp/lock box).
6. **Release or block stored energy.** Disconnect emergency battery packs; discharge
   capacitors per manufacturer instructions.
7. **Verify absence of voltage** at the point of work using the live-dead-live method
   (see *Verifying Absence of Voltage*). Test every conductor: line-to-line,
   line-to-neutral and line-to-ground. Expected reading: **0 V** (a few volts of induced
   or "ghost" voltage on a high-impedance meter should be checked again in low-impedance
   mode).
8. Only now is the equipment in an electrically safe work condition. Remove arc-flash PPE
   only after absence of voltage is verified and if no other hazard remains.
9. **Restore**: tools and materials removed, covers on, workers clear, then each worker
   removes only their own lock. Notify affected people before re-energizing.

## When to escalate

Stop work and contact your supervisor when:

- You cannot identify or lock every source (missing schedule, unlabeled panel, no lockable breaker device)
- Voltage is still present after lockout and you cannot find the source
- The customer refuses to allow the circuit to be shut off - energized work must then be
  justified and approved under NFPA 70E; it is not a tech's on-the-spot decision
- A lock must be removed and its owner is not available (follow the written lock-removal
  procedure; never cut someone else's lock on your own)

## Documentation

Record on the work order:

- Panel and circuit numbers locked out, and the location of each isolation point
- Other sources isolated (emergency battery, control circuit, capacitors discharged)
- Meter used and the live-dead-live result
- Names of all workers under the lockout (group lockout)
- Any panel schedule errors found, and that the customer was told
- Time of lockout and time of restoration
