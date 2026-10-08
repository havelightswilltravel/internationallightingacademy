---
title: Root-Cause Analysis for Lighting Systems
minutes: 30
video:
video_suggestion: >
  A senior tech leads two junior techs through a whiteboard fishbone diagram for a real repeat
  callback (e.g., drivers failing every few months in one area), then runs a "5 Whys" exercise
  to reach the root cause. Show the before/after service history once the corrective action was
  made.
---

## Beyond "Fix the Fixture"

In LT2-C06 you learned a systematic troubleshooting method: gather information, define the symptom,
half-split, test, repair, verify and document. That method finds **the failed part**. Senior
technicians must also answer **why it failed** – because replacing the third driver in the same
fixture this year is not a fix; it is a subscription.

**Root-cause analysis (RCA)** is a structured way to find the underlying cause of a problem so that
correcting it prevents recurrence.

| Level | Example answer to "Why are the lights out?" |
|---|---|
| Symptom | Fixture 12 is dark |
| Direct cause | The driver failed |
| Contributing cause | The driver ran hot |
| Root cause | The fixture is not rated for the 55 °C ambient above the oven hood; wrong product was specified |

## When to Do a Formal RCA

- Repeat failures of the same component or location
- Failures affecting many devices at once (storms, after a utility event, after a software update)
- Any safety-related event (shock, arc, burn, fire, falling fixture)
- Customer escalations or warranty claims
- Intermittent problems that previous visits did not resolve

## Step 1: Define the Problem Precisely

Write a problem statement with **what, where, when, how many and how often**:

> Poor: "Lights keep failing in the warehouse."
>
> Good: "Since the March retrofit, 14 of 120 high-bay LED drivers in Aisles 20–28 have failed
> (dark, no output). Failures cluster in June–August. Other aisles: 1 failure."

Collect evidence before forming opinions: service history, dates, photos, failed parts (keep them
tagged), control logs, weather, utility events, recent changes by other trades.

## Step 2: Brainstorm Causes with a Fishbone

A **fishbone (Ishikawa) diagram** organizes possible causes into categories so you don't fixate on
the first idea. Lighting-adapted categories:

| Category | Questions to ask |
|---|---|
| **Power** | Voltage level, voltage drop, surges, harmonics, neutral issues, inrush |
| **Equipment** | Wrong product? Defective batch? Compatible driver/controller/dimmer? |
| **Environment** | Heat, moisture, vibration, dust, corrosive atmosphere, washdown |
| **Installation** | Loose connections, wrong wiring, damaged conductors, poor grounding |
| **Controls** | Programming, firmware, schedules, sensor placement, BMS commands |
| **People / Process** | Maintenance practices, operation, other trades, documentation |

In the warehouse example, heat (summer clustering, aisles under roof near HVAC exhaust) becomes a
leading candidate – but so does a single feeder with surge exposure. Keep both until evidence decides.

## Step 3: Test Hypotheses with Evidence

For each candidate cause, decide what evidence would **confirm or eliminate** it:

| Hypothesis | Test |
|---|---|
| Overheating | Measure ambient at fixture height in summer; check driver case temperature (tc point) against rating |
| Surge damage | Compare failure dates to storm/utility events; inspect SPDs; check whether failures follow one feeder |
| Overvoltage | Log voltage for one to two weeks with a recording meter |
| Defective batch | Compare date codes of failed vs. surviving drivers; contact manufacturer |

Avoid **parts-swapping** as a test method. Replacing parts until the problem goes away costs money,
hides evidence and rarely identifies the root cause.

## Step 4: Ask "5 Whys"

Once the evidence points to a cause, ask "why" repeatedly until you reach something that, if
corrected, prevents recurrence – often a process or specification issue:

1. Why did the drivers fail? – Electrolytic capacitors dried out.
2. Why? – Driver case temperature exceeded its rated tc.
3. Why? – Ambient at the roof deck in Aisles 20–28 reaches 50 °C in summer.
4. Why? – Those aisles are under the HVAC exhaust and the roof is uninsulated there.
5. Why wasn't that considered? – The retrofit audit didn't record high-ambient areas, and standard
   (not high-ambient-rated) fixtures were ordered.

Root cause: **audit process didn't capture ambient conditions → wrong product.** Corrective actions:
high-ambient-rated fixtures in those aisles (immediate), and adding ambient temperature to the audit
checklist (preventive).

## Step 5: Correct, Verify, Document

- **Corrective action** fixes this instance. **Preventive action** stops it happening elsewhere.
- Define how you will **verify** – e.g., zero failures in Aisles 20–28 over the next summer.
- Write a short RCA report: problem statement, evidence, causes considered, root cause, actions,
  verification plan. Another tech should be able to follow your reasoning.

> **Safety:** RCA often involves installing data loggers in panels and opening luminaires. Installing
> clamp-on loggers in an energized panel is energized work requiring qualification and PPE per the
> arc-flash label. Where possible, install loggers with the circuit de-energized under LOTO, close
> covers, then re-energize. Keep failed parts – but discharge and handle them safely.

## Key Takeaways
- Troubleshooting finds the failed part; root-cause analysis finds why it failed so it doesn't recur.
- Write a specific problem statement and gather evidence before forming conclusions.
- Use a fishbone with lighting categories (power, equipment, environment, installation, controls, people/process).
- Test each hypothesis with evidence; avoid parts-swapping.
- Use 5 Whys to reach a correctable root cause – often a process or specification gap.
- Document corrective and preventive actions and how you'll verify them.
