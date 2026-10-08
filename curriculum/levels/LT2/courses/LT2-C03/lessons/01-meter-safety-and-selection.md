---
title: Meter Safety, CAT Ratings and Selection
minutes: 30
video:
video_suggestion: >
  A trainer lays out three meters and their leads and explains the CAT and voltage markings,
  shows how to check meter fuses with the meter's own resistance function, inspects leads for
  damage, and demonstrates a full pre-use check including verifying on a known source. End
  with a short "what's wrong with this meter" segment showing cracked leads, missing probe
  guards and a CAT II meter in front of a 480 V panel.
---

## Why Meter Ratings Matter

In LT1 you learned basic DMM use and live-dead-live verification. At LT2 you start measuring
on panelboards and 480 V systems, where the energy available during a fault is much
greater. A meter is not just a measuring tool — **it is the device you are trusting with your
life** every time you verify absence of voltage. A meter that fails during a transient (a
brief high-voltage spike from switching or lightning) can explode in your hand and start an
arc flash.

## Measurement Categories (CAT Ratings)

Meters and accessories are rated under IEC 61010 (UL 61010 in North America) by
**measurement category** and **voltage**. The category describes how much transient energy
the location can deliver — the closer to the utility service, the higher the energy.

| Category | Location examples | Lighting-work examples |
|---|---|---|
| CAT II | Receptacle-connected loads, appliances | Testing a plug-in lamp or cord-connected fixture at the plug |
| CAT III | Building distribution: panelboards, feeders, branch circuits, permanently installed lighting | Lighting panels, junction boxes, hardwired fixtures, 277 V and 480 V circuits |
| CAT IV | Origin of installation: service entrance, utility meter, outdoor overhead lines | Service equipment, utility-side connections, overhead feeders to pole lights |

**Rule:** The meter **and** leads must be rated for the highest category and voltage you will
measure. A meter is only as good as its lowest-rated accessory. For general lighting
service, company standard is **CAT III 1000 V / CAT IV 600 V**, and never less than
CAT III 600 V for panel work.

A higher voltage number in a lower category is not a substitute: CAT II 1000 V is **not**
safer than CAT III 600 V in a panelboard.

## Other Features to Look For

| Feature | Why it matters |
|---|---|
| Third-party certification mark (UL, CSA, ETL, etc.) | Confirms the meter was independently tested to the standard — not just "designed to" it |
| True-RMS | Accurate readings on electronic ballasts and LED drivers (LT2-C01) |
| High-energy (HRC) fuses on current inputs | Contain the energy if the meter is accidentally connected across voltage in amps mode |
| Recessed input jacks and shrouded leads | Reduce chance of accidental contact |
| Low-impedance (LoZ) mode | Eliminates "ghost" voltage readings (Lesson 2) |
| Input alert / lead alert | Warns if leads are in the amps jack when you select voltage |
| Probe guards / short-tip probes | Many electrical safety programs require probe tips with minimal exposed metal (about 4 mm or less) for CAT III/IV work |

## Pre-Use Inspection

Before each use:
1. **Case:** no cracks, missing screws, or signs of overheating.
2. **Leads:** no cuts, exposed conductor, melted spots, or loose tips. Look for the wear
   indicator layer on double-insulated leads. Replace — don't tape — damaged leads.
3. **Ratings:** meter and leads rated for the job.
4. **Fuses:** check periodically per the manufacturer (many meters let you read the fuse
   resistance by putting a lead in the amps jack and the meter in ohms).
5. **Battery:** a low battery can cause false readings. Replace when the indicator shows.
6. **Function test:** verify the meter on a **known source** (a proving unit or a known live
   circuit) before and after testing for absence of voltage. This is the "live-dead-live"
   method from LT1.

## Using Meters Safely on Energized Equipment

Measuring voltage on an energized panel is energized work under NFPA 70E. Your company's
electrical safety program defines who may do it and how. At LT2:

- Work under a **qualified person's** direction for any panelboard measurement.
- Wear **PPE per the equipment's arc-flash label** or the company PPE table (arc-rated
  clothing, face shield or hood, voltage-rated gloves with leather protectors, safety
  glasses, hearing protection).
- **Voltage-rated rubber gloves:** Class 00 is rated for a maximum use voltage of 500 V AC;
  Class 0 for 1,000 V AC. Air-test gloves before each use and wear leather protectors over
  them. Gloves must be periodically retested per OSHA 29 CFR 1910.137.
- Respect **approach boundaries** — the distances inside which shock protection and
  qualification are required. Keep everything but the probe tips outside the restricted
  approach boundary. EA3 covers boundaries in depth.
- **Connect the reference lead first**, then the hot lead; remove the hot lead first.
- Hold probes like pencils behind the finger guards. Stand to the side of the panel, not
  directly in front of it, where practical.
- Never change meter function or move leads between jacks while connected to a circuit.

> **Safety:** Never use a meter in current (amps) mode across a voltage source. In amps mode
> the meter is a near short circuit. On a lighting panel this can blow the meter's fuse — or,
> with an unfused or under-rated meter, cause an arc flash.

## Choosing the Right Tool for the Test

| Task | Best tool | Notes |
|---|---|---|
| Quick check for presence of voltage | Non-contact voltage tester (NCVT) | Indication only — **never** proof of absence of voltage (LT1) |
| Verifying absence of voltage | CAT-rated DMM or two-pole voltage tester | Live-dead-live |
| Load current | Clamp meter | No need to break the circuit (Lesson 3) |
| Continuity / resistance | DMM ohms/continuity | De-energized circuits only |
| Finding a breaker or tracing a circuit | Circuit tracer / breaker finder | Lesson 4 |

## Key Takeaways
- CAT III covers panelboards, branch circuits and hardwired lighting; CAT IV covers the service and utility side.
- Meter and leads must both be rated for the category and voltage; company minimum for panel work is CAT III 600 V.
- Look for third-party certification, true-RMS, HRC fuses and LoZ mode.
- Inspect the meter and leads every time and verify on a known source before and after (live-dead-live).
- Panel measurements are energized work: qualified supervision, PPE per the label, rated gloves.
- Never connect a meter in amps mode across voltage.
