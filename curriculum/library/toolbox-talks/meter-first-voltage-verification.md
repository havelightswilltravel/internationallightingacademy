---
title: "Toolbox Talk: Meter First - Every Time"
category: toolbox-talks
tags: [toolbox-talk, task-training, multimeter, voltage, troubleshooting, ncvt, new-fixture, 277v, 480v]
levels: [LT1, LT2, LT3]
last_reviewed: 2026-11-05
review_interval_months: 12
---

> **DRAFT - pending SME review.** Taking voltage readings on energized circuits is energized
> work: qualified persons only, with the PPE your company's NFPA 70E program requires.

*Toolbox talk (about 10 minutes) - adapted from our company's monthly safety meetings.*

## Why it matters

Our company has **blown up many brand-new fixtures** because someone assumed the supply
voltage instead of measuring it. And we have watched techs swap drivers and boards on a dead
fixture without ever putting a meter on it. Our safety meetings keep asking the same
question: **What is Step 1 in troubleshooting an LED fixture?** Answer: put your meter across
the hot and the neutral.

## Key points

- **You cannot troubleshoot with a "sniffer."** A non-contact voltage tester (NCVT) only hints
  that voltage may be present. It cannot tell you how much, it can beep on induced voltage, and
  it can stay silent on a live wire. Use it as a quick warning, never as a measurement.
- **Step 1 on any dark fixture: measure supply voltage at the fixture** - hot to neutral (and
  hot to ground). No voltage? The problem is upstream (breaker, switch, control, wiring), and a
  new driver will not help. Correct voltage? Now you can move to the driver and the LEDs.
- **Before installing a new fixture - especially exterior and replacement jobs - measure the
  existing supply** and compare it to the new fixture's label. A 120-277 V fixture on a 480 V
  circuit, or on 347 V, is destroyed the moment it is energized. Check line-to-line too where
  two hots feed the fixture (208, 240 or 480 V).
- **Write the reading on the work order** (for example, "measured 277 V L-N at pole 4") so the
  office orders the right voltage next time.
- **The meter only works if it is with you and turned on.** Every tech has a meter on the
  company tool list. Test it on a known live source before and after (live-dead-live) when you
  are verifying a circuit is dead.
- **Then lock out** before touching conductors, and verify absence of voltage.

## What happened

Our company has destroyed many new LED fixtures on power-up because the installer assumed the
supply was compatible instead of measuring it. That is why the company now teaches: **on every
exterior project, verify the voltage with your meter before you install.** Each of those
fixtures - and the second trip to replace it - could have been saved by a 30-second reading.

## Discussion questions

1. Why can an NCVT light up on a circuit that is actually off?
2. You read 0 V hot to neutral but 277 V hot to ground. What does that tell you?
3. How do you find the supply voltage of an old HID pole fixture before ordering a new one?

## References

- NFPA 70E (2024) Article 110 (test instruments and equipment) and Article 120 (verifying absence of voltage)
- OSHA 29 CFR 1910.333(b)(2)(iv)(B) (verifying de-energized parts with a test instrument)
- Program courses: LT1-C03 Tools & Basic Meter Use; LT2-C03 Test Instruments; LT2-C06 Troubleshooting
