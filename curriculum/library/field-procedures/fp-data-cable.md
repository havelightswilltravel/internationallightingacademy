---
title: "Field Procedure: Data Cable"
category: field-procedures
tags: [field-procedure, data-cable, cat5, cat6, rj45, t568b, crimp, networked-controls]
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
| Data cable (Cat5e/Cat6) | Four twisted pairs carrying network data (and sometimes PoE power) | Kinked, crushed, cut, run too close to line voltage |
| Male terminals (RJ45 plugs) | Crimped onto cable ends | Wrong pin order, poor crimp, untwisted too far, jacket not held |
| Female terminals (jacks/keystones) | Receive the plug in walls, patch panels, devices | Worn or bent contacts, loose latch, poor punch-down |
| Computers / connected Cat5 devices | Lighting controllers, gateways, sensors, PCs | Device fault mistaken for cable fault; port off |

## Safety first

- Data cable is low voltage, but it is often routed near line-voltage lighting and in panels or enclosures. **Do not open line-voltage enclosures or panels unless qualified; otherwise write it up.** Where you must work near line-voltage parts, **LOTO and verify absence of voltage (live-dead-live).**
- PoE carries up to roughly 50-57 V DC - not usually a shock hazard, but unplug before re-terminating.
- Ceiling and ladder work: stable ladder, watch for grid wires and sharp edges. Wear eye protection when trimming wire.
- Use plenum-rated (CMP) cable in air-handling spaces where required.

## Company troubleshooting procedure

1. **Verify the pin configuration on both ends of the cable** using the company Cat5 pin chart. For a standard straight-through cable both ends use the same standard - most commonly **T568B**: pin 1 white/orange, 2 orange, 3 white/green, 4 blue, 5 white/blue, 6 green, 7 white/brown, 8 brown. (T568A swaps the orange and green pairs.)
2. **Verify the pins have been crimped properly:** all eight conductors reach the end of the plug, the contacts are fully pressed down, and the jacket is held under the strain-relief tab. Untwist no more than about ½ in.
3. **Use a temporary known-good patch cable** to see whether the computer or connected device works with it.
4. **Verify the Cat5 female receptacle accepts the male end and makes a good connection** - the plug should click and hold; look for bent jack contacts.
5. **If the devices work with the temporary cable, replace it with a new permanent cable.**
6. **Remember: 90% of the time the problem is with the crimp or pin configuration.** Re-terminate before replacing devices.

**Tip:** a simple cable tester (wiremap) shows opens, shorts, reversed and split pairs in seconds - use it on every new termination.

## Escalate / write it up when

- The cable runs through walls or ceilings you cannot access, or replacement requires new pathways.
- The device still fails with a known-good cable (device or network problem - contact the controls vendor or customer IT).
- Cable is run in the same raceway as line-voltage conductors.

## Parts & information

- Record cable category (printed on jacket), plenum/riser rating, and approximate length.
- Use plugs and jacks that match the cable category and conductor type (solid vs stranded).
- Note the device's model and port, and which standard (568A/B) the site uses.

## Document on the work order

Device and location, test results (wiremap or temp-cable test), what was re-terminated or replaced, and any referrals.
