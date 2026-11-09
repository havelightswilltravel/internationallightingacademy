---
title: "Company Field Measurements: Lessons Learned"
minutes: 25
video:
video_suggestion: >
  Three short field segments. (1) At an exterior pole, a qualified tech in the required PPE
  measures the existing supply line-to-neutral, line-to-line and line-to-ground before
  connecting a new LED fixture, compares the readings with the fixture label and writes them on
  the work order. (2) At a dark LED troffer, the tech measures hot to neutral at the driver
  input, then locks out and verifies dead before opening the driver channel. (3) At a lift
  truck whose boom will not raise, the tech checks fuses, then measures the 24 V boom battery
  bank and each battery with the DMM on DC volts.
---

## Why This Lesson Exists

The first four lessons taught how test instruments work. This lesson is about **when our
company expects you to use them** - three measurements that our monthly meetings return to again
and again because skipping them has cost us fixtures, callbacks and breakdowns.

> **Safety:** Every voltage reading on an exposed energized circuit is energized work under
> NFPA 70E. Only qualified persons take these readings, with the PPE your company program
> requires and a CAT-rated meter verified on a known source (Lesson 1). Approach-boundary and
> energized-work requirements are covered in depth in LT4-C07.

> **Scope varies by state and city.** In some areas a lighting technician may take energized voltage
> and current measurements under the company's license; in others it must be done by, or under the
> supervision of, a licensed electrician, and some jobs need a permit and inspection. Before you do
> this on a job, confirm with your supervisor that it is allowed in that location and that you are
> authorized for it. When in doubt, stop and ask.

## Measurement 1: Verify Supply Voltage Before You Install

Our company has **destroyed many brand-new LED fixtures** on power-up because someone assumed
the supply voltage instead of measuring it. The rule is now: **on every exterior project - and
any replacement where you did not install the original - verify the voltage with your meter
before you connect the new fixture.**

What to measure at the existing fixture or junction box:

| Reading | What it tells you |
|---|---|
| Hot to neutral (L-N) | 120 V or 277 V systems (or 347 V in some places) |
| Hot to hot (L-L) | Fixtures fed by two hots: 208 V, 240 V or 480 V |
| Hot to ground (L-G) | Confirms the grounding path; compare with L-N |

Then **compare with the new fixture's label.** A "120-277 V" driver connected to 480 V is
destroyed the instant power comes on. If the fixture is fed L-L at 480 V, you need a 480 V
(or 347-480 V) rated driver or a step-down transformer - stop and call your supervisor.

**Write the readings on the work order** ("measured 277 V L-N at pole 4"), so the next order
is right the first time. This is also how the office learns the **primary voltage** it needs to
quote a replacement fixture.

## Measurement 2: Step 1 on Any Dark LED Fixture

Ask any of our supervisors "What is Step 1 in troubleshooting an LED fixture?" and you will get
the same answer: **put your meter across the hot and the neutral.**

- **A non-contact tester ("sniffer") is not a troubleshooting tool.** It warns; it does not
  measure. It cannot tell 120 V from 277 V and it can be fooled by induced voltage or shielding.
- **No voltage at the fixture?** The fault is upstream - breaker, switch, sensor, photocell,
  contactor, a loose splice or an open neutral. A new driver will not fix it.
- **Correct voltage present?** Now lock out, verify dead live-dead-live, and move on to the
  driver and the LED boards (LT2-C06, LT3-C01).
- **Voltage present hot to ground but not hot to neutral?** Suspect an open neutral (Lesson 2 of
  LT2-C06 covers using readings this way).

## Measurement 3: DC Checks on Equipment Batteries

Meters are not just for lighting circuits. A common breakdown on our lift trucks is a boom that
**will not raise or lower even though every other function works.** On trucks with a **24 V boom
battery bank**, low battery voltage is a likely cause.

1. Call the equipment service line first, and **check fuses and relays.**
2. Set the DMM to **DC volts.** Measure across the whole bank. **24 V is the minimum** for the
   boom to work; below that, the bank needs charging or replacement.
3. Measure **each battery separately.** One weak battery drags the whole bank down.
4. To check the charging system, follow the manufacturer's procedure - typically measuring the
   charger's output with the engine running.
5. If you only need to stow the boom and get home, the manufacturer's emergency lowering
   procedure comes first; replacement batteries must match the type the manufacturer specifies.

> **Safety:** Battery banks can deliver very high current. Remove rings and watches, use
> insulated tools, wear eye protection, and never lay a tool across battery terminals.

Lift battery chargers are fragile too: **unplug them by the plug**, and if the charge light does
not come on, **check and reset the GFCI outlet** you are plugged into before calling it a bad
charger.

## Make the Meter a Habit

- Every tech has a meter on the company tool list. **It only works if it is with you and turned
  on.**
- Check the meter on a known live source before you rely on it.
- Record readings with location and conditions. A reading that is not written down helps no one
  later.

## Key Takeaways

- Measure L-N, L-L and L-G before connecting any new fixture, and compare with the label - especially on exterior jobs.
- Write supply readings on the work order so replacements are ordered at the right voltage.
- Step 1 on a dark LED fixture is your meter across hot and neutral - never a sniffer.
- No voltage at the fixture means an upstream problem; do not replace the driver.
- A boom that will not raise on a 24 V bank: check fuses, then measure the bank (24 V minimum) and each battery on DC volts.
- Unplug chargers by the plug, and check the GFCI if the charge light is off.
