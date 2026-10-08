---
title: Emergency Lighting Fails the Monthly 30-Second Test
category: emergency
tags: [emergency, egress, nfpa-101, battery, emergency-driver, life-safety, testing]
levels: [LT3, LT4]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.** The AHJ and the building's life-safety program govern
> testing and documentation requirements.

## Symptoms

- Emergency lights (battery units, "bug-eyes", or fixtures with emergency drivers) do not
  light, light dimly, or go out before 30 seconds when tested
- Charge indicator LED off, flashing, or showing a fault code
- Self-diagnostic unit reports a battery, lamp or charger fault
- Unit works on test but not during an actual power outage (or vice versa)

## Safety first

- Emergency lighting is **life-safety equipment**. A failed unit is an impairment: tell the
  building owner/manager the same day and follow their impairment procedure.
- **Emergency battery units and emergency drivers keep lamps/LEDs energized when the
  breaker is off.** After LOTO and verifying absence of voltage on the AC supply, disconnect
  the battery per the manufacturer's instructions before working on the output wiring.
- **De-energize, LOTO and verify absence of voltage** before opening units or fixtures. The
  unswitched hot feeding the unit must be identified.
- Energized testing is **qualified persons only**, with risk assessment, appropriate PPE and
  an energized-work justification per NFPA 70E.
- Batteries can be damaged, leaking or hot; wear gloves and eye protection.

## Tools needed

- CAT III multimeter (AC and DC volts)
- Manufacturer's instructions (test switch operation, battery specs, charge time)
- Replacement battery of the exact type/voltage/capacity specified
- Test log for the building

## Testing requirements (reference)

NFPA 101 (Life Safety Code) requires battery-powered emergency lighting to be functionally
tested **at least every 30 days for not less than 30 seconds**, and **annually for not less
than 1½ hours (90 minutes)**, with written records kept for the AHJ. Some jurisdictions
and self-diagnostic/computer-based systems have alternate provisions - check the adopted
edition and the AHJ.

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Battery at end of life | Unit dies quickly on test; battery past typical life; battery voltage low after a full charge | Replace with the specified battery; allow full charge (per manufacturer, often 24 hours) before the annual test |
| Battery disconnected (common after install or service) | Battery connector unplugged; charge LED off | Connect battery per manufacturer |
| No AC charging supply | No voltage on unswitched hot; charge LED off | Restore the supply; locate open breaker/wiring |
| Emergency driver fed from switched leg | Unit discharges whenever lights are switched off | Rewire to an unswitched hot from the same branch circuit as the normal lighting, per manufacturer and code |
| Failed lamp heads or LED module | Battery voltage good on test, lamps don't light | Replace lamps/heads per manufacturer |
| Failed charger/electronics | Correct AC input, battery never charges | Replace unit or emergency driver |
| Recently installed or power was off (not charged) | Install date; outage history | Allow full charge, then retest |

## Step-by-step diagnosis

1. Record the unit location and what happened on test (no light, dim, went out at X seconds).
2. Check the charge indicator. If off: **(qualified, energized, with PPE)** verify AC voltage at
   the unit's input. Expected: nominal line voltage (e.g. 120 V or 277 V), present even when
   the normal lights are switched off.
3. Look for a manufacturer's battery date code; batteries have a limited service life
   (often several years). An old battery that fails a test should be replaced.
4. **De-energize, LOTO, verify absence of voltage,** then disconnect the battery. Measure battery
   voltage. Compare with its rating: a battery reading well below nominal after a full charge
   period is suspect. (Unloaded voltage can look normal on a failing battery - the load test
   is the real check.)
5. Inspect the lamp heads/LED module, connectors, and the battery for swelling or leaks.
6. For emergency drivers in fixtures: confirm the unswitched hot and the switched hot are
   on the same branch circuit, and that the wiring matches the manufacturer's diagram.
7. Replace the failed part, reconnect the battery, restore power, allow charging per the
   manufacturer, and **retest**. A new battery may need a full charge before it will pass
   the 90-minute test.
8. For generator-supplied emergency lighting (no batteries), failures involve the transfer
   switch, emergency panel or UL 924 transfer devices - escalate if beyond your scope.

## When to escalate

- Multiple failures in one building (possible circuit or charging problem)
- Generator, central inverter, or transfer equipment issues
- Units that can't be repaired the same day - owner must manage the impairment
- Any question about whether the installation meets code (NEC Article 700 and NFPA 101)

## Documentation

- Unit location and type, test date, test result (seconds lit), pass/fail
- Cause found, parts replaced (battery model and date code)
- Retest result and when a full-duration retest is due
- Owner/manager notified of impairment, name and time
- Update the building's emergency lighting test log
