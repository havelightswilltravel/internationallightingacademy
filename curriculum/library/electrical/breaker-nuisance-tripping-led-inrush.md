---
title: Breaker Nuisance Tripping with LED Loads (Inrush Current)
category: electrical
tags: [electrical, breaker, nuisance-tripping, inrush, led, driver, relay, contactor]
levels: [LT4, LT5, EA2]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- Breaker trips at the moment lights are switched on, but holds once the lights are running
- Trips after an LED retrofit that added fixtures to circuits, or when a whole zone switches
  at once (relay panel, contactor, sweep schedule)
- Relay or contactor contacts weld closed or wear out quickly after an LED upgrade
- Trips are intermittent - some switch-ons trip, others don't

## Safety first

- **Never assume a trip is a "nuisance" trip.** Rule out overloads, short circuits and ground
  faults first. Repeatedly resetting onto a real fault is dangerous.
- **Never install a larger breaker** than the conductors and equipment allow to stop
  tripping.
- Panel work: arc-flash label and PPE requirements apply. **De-energize, LOTO and verify
  absence of voltage** before working on panel or circuit wiring.
- Current and voltage measurements in an energized panel are **qualified persons only**, with
  shock and arc-flash risk assessment, appropriate PPE and an energized-work justification per
  NFPA 70E.

## Tools needed

- Clamp meter with inrush/peak-hold capability (true-RMS)
- CAT III multimeter, megohmmeter (for ruling out faults)
- Panel schedule, lighting plan, driver data sheets (inrush peak and duration, recommended
  maximum drivers per breaker)
- Breaker manufacturer's trip-curve information

## Background

LED drivers draw a very large, very short current spike when power is applied (charging
input capacitors) - often tens of amps or more per driver for a fraction of a millisecond.
When many drivers switch on together, the combined peak can reach the breaker's
**instantaneous (magnetic) trip** level even though the running current is low. Inrush
also stresses relay and contactor contacts.

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Real fault (short or ground fault) | Trips immediately even with loads disconnected; low insulation resistance | Find and repair fault before anything else |
| Overload (running current too high) | Running current near or above breaker rating; lighting is a continuous load | Rebalance or add circuits; continuous loads must not exceed 80% of a standard breaker's rating (NEC 210.20(A) 125% rule) |
| Too many drivers on one circuit switched at once (inrush) | Trips only at switch-on; total drivers exceed manufacturer's recommended count per breaker | Reduce drivers per circuit; stagger switching; add inrush limiters per manufacturer |
| Relay/contactor not rated for LED/electronic ballast inrush | Welded or pitted contacts; relay rating | Replace with a device rated for the LED load |
| AFCI/GFCI sensitivity to driver electronics | Trips on AFCI/GFCI devices only | Verify fault-free; consult device and driver manufacturers; split circuits |
| Weak or worn breaker | Trips below rating; heat at breaker | Replace breaker with same type and rating (qualified) |

## Step-by-step diagnosis

1. Record exactly when it trips: at switch-on, after running a while, randomly, in wet weather.
   "After running a while" suggests overload or a heat-related problem, not inrush.
2. **De-energize, LOTO, verify absence of voltage.** Disconnect the load at the panel and test
   the circuit's insulation resistance (with drivers/electronics disconnected or per your
   procedure) to rule out a fault. Expected: high readings (megohms or higher), no short.
3. **(Qualified, energized, with PPE)** Measure running current with a clamp meter.
   Expected: no more than **80%** of the breaker rating for continuous lighting loads
   (e.g. 16 A or less on a 20 A breaker).
4. **(Qualified, energized, with PPE)** If the meter has inrush/peak mode, capture the
   switch-on current. Compare with the breaker's instantaneous trip range from the
   manufacturer's curve.
5. Count drivers on the circuit and compare with the driver data sheet's recommendation for
   the breaker type and rating.
6. Check how the zone is switched (single relay for many circuits, contactors, sweep times).
   Staggering circuit switch-on by even a fraction of a second spreads the inrush.
7. Apply the fix: split circuits, reduce driver count, stagger switching, use relays/contactors
   rated for LED inrush, or add inrush current limiters recommended by the manufacturer.
8. Verify by switching the zone on and off several times, and monitor over normal operation.

## When to escalate

- Circuits must be added or redesigned (requires engineering/design review)
- Panel or breaker damage, or breakers needing replacement in equipment with high fault current
- AFCI/GFCI compatibility questions requiring manufacturer input
- Real faults that can't be located

## Documentation

- Panel/circuit, breaker type and rating, number and model of drivers on the circuit
- Running current and inrush/peak readings (with meter and mode used)
- Insulation resistance results
- Fix applied (circuits split, switching staggered, devices replaced) and verification results
