---
title: Asset Inventory, Failure Tracking & Warranty Management
minutes: 40
video:
video_suggestion: >
  A lead tech builds an inventory for one floor of a customer building on a tablet: photographing
  labels, recording driver data and date codes, and tagging fixture IDs on a floor plan. The video
  then shows a six-month failure log sorted by driver model, revealing a cluster of failures from
  one date code, and walks through filing the warranty claim and logging the RMA.
---

## Why Records Are the Product
In a planned service program, the records are part of what the customer pays for. An accurate
inventory and failure log let you batch repairs, order the right parts the first time, prove
warranty claims, spot bad batches and defend retrofit or replacement recommendations. Without
them, a service program is just reactive work on a schedule.

LT1-C10 covered reading labels and filing a single warranty return. This lesson scales that up to a
whole site.

## Building the Asset Inventory
Start from the audit data if one exists (LT5-C01/01), then add the service fields. Give every
luminaire, or every identical group in a room, an **asset ID** that is marked on a floor plan.

| Field | Example | Why it matters |
|---|---|---|
| Asset ID and location | 2F-OPEN-014; floor plan grid C4 | Finds the fixture and links its history |
| Luminaire make and catalog number | From the label | Parts, photometry, warranty |
| Date code / install date | From label or project records | Warranty window, batch tracking |
| Driver make, model, output current, dimming type | From driver label | Correct replacement (LT3-C01/03) |
| Source data | Wattage, lumens, CCT, CRI | Matching replacements |
| Retrofit status | Original LED, retrofit kit, TLED type, legacy fluorescent/HID | Listing and planning |
| Controls | Sensor, zone, network address, daylight zone | Controls checks and troubleshooting |
| Emergency function | Battery pack, transfer device, generator circuit | Testing schedule |
| Access | Ladder height, lift type, ceiling type, after-hours only | Labor and scheduling |
| Circuit | Panel and circuit number if known | LOTO planning |
| Condition | Good / dirty / yellowed / damaged | Cleaning and replacement planning |
| Warranty terms | Years, covered parts, labor included or not | Claims |

> **Safety:** Reading driver labels usually means opening the luminaire. Do not open a fixture
> to read labels unless the circuit is locked out and absence of voltage is verified live-dead-
> live. If LOTO is not practical during the survey, record what is visible and plan to capture
> driver data on the first service visit under LOTO.

## Inventory Procedure
1. Get the floor plans, any as-builts, the original submittals and the customer's previous
   service tickets.
2. Walk each area in a fixed order and assign asset IDs on the plan.
3. Photograph each **type** of luminaire and its labels once; photograph labels on every
   unit only where date codes vary.
4. Record access requirements and any hazards (asbestos-flagged ceilings, energized equipment
   nearby, food areas).
5. Count the attic stock on site and record its catalog numbers and date codes.
6. Enter everything into the company's inventory template before leaving the site, and note
   items still to be verified.

## The Failure Log
Every service event gets one line in the log, linked to the asset ID.

| Date | Asset ID | Symptom | Cause found | Part replaced (make/model/date code) | Warranty? | Labor h | Access |
|---|---|---|---|---|---|---|---|
| 3/14 | WH-A-022 | Dark | Driver no output | DRV-150 / 2219 | Yes – claim 4471 | 1.0 | 25 ft lift |
| 3/14 | WH-A-023 | Cycling | Driver thermal shutdown | DRV-150 / 2219 | Yes – claim 4471 | 0.75 | 25 ft lift |

Write the **cause found**, not just the symptom, and the part's date code. "Fixed light" is not a
record.

## Spotting Trends
Review the log at least every quarter, and before every customer report. Sort and count by:

- **Component model and date code:** several failures from one driver batch point to a defect
  and support a warranty claim for the whole batch.
- **Location:** failures clustered near roof drains, ovens, skylights or dock doors suggest heat,
  moisture or vibration.
- **Circuit or time:** failures on one circuit or right after storms suggest surge or a supply
  problem; write it up for an electrician.
- **Age:** a rising failure rate in an older area is the evidence for a retrofit or replacement
  recommendation (Lesson 04).
- **Controls:** repeated "stuck on" or "won't dim" events point to programming, wiring or a
  failing control device rather than the luminaires.

A simple rule: when the same part fails three or more times in one area within a year, stop
replacing parts one at a time and find out why.

## Warranty Claims and RMAs
Warranties are only worth something if the claim is complete. A good claim includes:

1. The luminaire and component catalog numbers, serial or date codes and install date.
2. Proof of purchase or the project/submittal reference.
3. The symptom, the test that confirmed the failed part and photos of labels and damage.
4. The installed conditions (ambient, mounting, voltage) if the manufacturer asks.
5. The quantity and asset IDs, especially for a batch claim.

Then:

- Get the **RMA number** before shipping anything back, and tag each part with it.
- Log the RMA, ship date, credit or replacement received and any labor reimbursement in the
  failure log.
- Follow up on open claims at each monthly review; unclaimed credits are lost money for the
  customer and for us.

Know what the warranty covers. Many cover the part but not the labor, lift or trip, which is a
key point when you discuss replacement plans with the customer.

## Attic Stock and Color Matching
Keep a small stock of matched spares on site: drivers and complete luminaires (or modules) from the
**same catalog number and, where possible, the same production batch** as the installed units.
Label them, store them in a dry, secure place and record them in the inventory. When stock is used,
reorder it and note the date code of the new units.

## What Customers Value in the Documentation
- A one-page summary: counts by type, condition, warranty status and open issues.
- The failure log with causes, not just dates.
- Warranty credits recovered, in dollars.
- Floor plans with asset IDs they can use for their own work orders.
- Trends with a clear recommendation.

## Key Takeaways
- Give every luminaire an asset ID on a floor plan and record make, catalog number, date code,
  driver data, controls, emergency function, access and warranty terms.
- Only read driver labels inside a fixture under LOTO with live-dead-live verification.
- Log every service event with the cause found and the part's date code.
- Review the log for trends by component batch, location, circuit, age and controls.
- Complete, documented warranty claims with RMA tracking recover real money; keep matched attic
  stock to keep color consistent.
