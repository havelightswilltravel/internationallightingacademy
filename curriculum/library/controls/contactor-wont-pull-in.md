---
title: Lighting Contactor Won't Pull In (or Pulls In, No Lights)
category: controls
tags: [controls, contactor, coil, mechanically-held, electrically-held, photocell, time-clock]
levels: [LT3, LT4]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- An entire lighting zone (parking lot, building exterior, warehouse) stays off when it
  should be on - or stays on when it should be off
- Contactor chatters or buzzes loudly
- Contactor pulls in (you hear/see it close) but the lights stay off
- Contactor is hot, burned or smells

## Safety first

- Contactors are often in panels with significant available fault current. Opening the
  enclosure exposes energized parts: the arc-flash label and PPE requirements apply.
- **Contactors commonly have more than one source:** the power poles (load circuits) and
  the **coil/control circuit, which may come from a different breaker or panel**. LOTO
  every source and verify absence of voltage on line, load **and** control terminals.
- Energized troubleshooting is **qualified persons only**, with shock and arc-flash risk
  assessment, appropriate PPE, and an energized-work justification per NFPA 70E.
- Never manually force a contactor closed with a tool while energized.

## Tools needed

- CAT III (or CAT IV if near service) multimeter, clamp meter, known source
- Control wiring diagram for the contactor and its controls (photocell, clock, HOA switch, relay panel)
- Replacement coil or contactor of the same type, coil voltage and rating
- Photocell shorting cap / test cap

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| No control signal (photocell, time clock, HOA in Off, BMS) | No voltage at coil when it should be on | Repair the control device; see photocell/time clock guides |
| Control circuit breaker/fuse off | No control voltage at the source | Find why it tripped/blew, then restore |
| Open coil | De-energized coil resistance reads open (OL) | Replace coil or contactor |
| Wrong coil voltage | Coil marking vs control voltage | Replace with correct coil |
| Low control voltage (chattering) | Coil voltage well below rating while closing; loose connection | Correct the supply/connection |
| Mechanically held contactor: latch/unlatch control wiring or module fault | Contactor won't change state; unlatch coil energized constantly | Repair control module/wiring per manufacturer |
| Burned/pitted contacts (pulls in, no lights) | Voltage on line side, none or low on load side with contactor closed | Replace contacts or contactor |
| Load-side open (breaker, wiring, underground fault) | Voltage leaves contactor but not at loads | Trace downstream |

## Step-by-step diagnosis

1. Identify the control scheme: what is supposed to energize the coil (photocell, clock,
   relay panel, BMS, HOA switch) and where the coil gets its power.
2. Check the HOA selector. If switching to **Hand** brings the lights on, the contactor and
   load are probably good - the fault is in the automatic control (photocell/clock/BMS).
3. If Hand does nothing: **(qualified, energized, with PPE)** measure coil voltage at the
   coil terminals with the control calling for on. Expected: the coil's rated voltage
   (e.g. 120 V or 277 V AC; some are 24 V).
   - No voltage: trace back through the control circuit (fuse, breaker, HOA, photocell, clock).
   - Correct voltage but no pull-in: suspect open coil or mechanical binding.
4. **De-energize, LOTO all sources, verify absence of voltage.** Disconnect one coil lead and
   measure coil resistance. Expected: a measurable resistance (typically tens to hundreds of
   ohms - varies by coil); **OL = open coil**.
5. Inspect contacts and the mechanism for binding, debris, heat damage.
6. If the contactor pulls in but no lights: **(qualified, energized, with PPE)** measure each
   pole line side and load side with the contactor closed. Expected: same voltage on both
   sides. A large difference across a closed pole = bad contact.
7. Replace coil or contactor with the same type (electrically or mechanically held), coil
   voltage and contact rating suitable for the lighting load (LED drivers draw high inrush -
   check the contactor's lighting/ballast rating).
8. Restore, test in Hand and Auto, and verify the control turns the zone on and off.

## When to escalate

- Arc-flash label missing or PPE requirements unknown
- Burned bus, wiring or panel damage
- Lighting relay panels or networked controls requiring programming
- Repeated contact welding or failures (possible inrush issue - see breaker/inrush guide)

## Documentation

- Contactor location/ID, type, coil voltage, control source
- Measured coil voltage, coil resistance, line/load voltages
- Cause found (control, coil, contacts, load side) and parts replaced
- Final HOA position (should be Auto unless directed otherwise)
