---
title: Digital Multimeter Basics & CAT Ratings
minutes: 30
video:
video_suggestion: >
  Close-up of the company-issued DMM: the dial, jacks, display, and CAT rating markings.
  The trainer inspects test leads (insulation, probe guards, tip covers), shows the correct
  lead placement for voltage, and explains why the leads must never be in the amps jack when
  measuring voltage. Finish with a simple graphic of CAT II, III, and IV locations in a
  building.
---

## What a DMM Measures

A **digital multimeter (DMM)** measures several electrical quantities. At LT1 you will mainly
use it to measure **AC voltage** and, on de-energized circuits only, **continuity and resistance**.
LT2-C03 covers measurement in depth.

| Dial symbol | Function | LT1 use |
|---|---|---|
| V~ (or VAC) | AC voltage | Verifying absence of voltage; reading supply voltage under supervision |
| V⎓ (or VDC) | DC voltage | Battery packs, low-voltage controls (later levels) |
| Ω | Resistance | De-energized checks only |
| ))) (speaker) | Continuity (beeps on low resistance) | De-energized checks only |
| A~ / A⎓ | Current through the meter | **Not used at LT1**; clamp meters are safer (LT2) |
| LoZ (on some meters) | Low-impedance voltage | Helps identify "ghost" voltage (see below) |

## The Jacks

Most DMMs have three or four input jacks:

- **COM** (black lead): common, always used.
- **V/Ω** (red lead): voltage, resistance, continuity.
- **A** and/or **mA/µA** (red lead): current measurement.

> **Safety:** If the red lead is in an **A or mA jack** and you touch the probes across a voltage
> source, you create a near short circuit through the meter. Good meters have high-energy fuses
> to limit the damage, but this mistake can still cause an arc flash in your hands. Before every
> voltage test, check: **black in COM, red in V, dial on V.**

## Meter Category (CAT) Ratings

Electrical systems experience **transients**: short, high-voltage spikes from lightning,
switching, and motor loads. Spikes are larger near the service entrance and smaller farther
downstream. Meters and leads are rated by **measurement category** (IEC 61010-1) to show how
large a transient they can survive without failing and exploding in your hand.

| Category | Where it applies | Lighting examples |
|---|---|---|
| **CAT II** | Plug-in (receptacle-connected) loads | Plug-in lamps, appliances |
| **CAT III** | Building distribution wiring | Lighting panels, branch circuits, hardwired fixtures, disconnects |
| **CAT IV** | Origin of the installation / utility connection | Service entrance, utility meter, outdoor service conductors |

Two things matter together: **category** and **voltage**.

- For building lighting circuits (120–480 V), use a meter and leads rated **at least CAT III 600 V**.
  Many companies standardize on **CAT III 1000 V / CAT IV 600 V**.
- A higher category at the same voltage is better: CAT IV 600 V withstands larger transients than
  CAT III 600 V.
- **The system is only as good as the lowest-rated part.** A CAT III 1000 V meter with CAT II leads
  is a CAT II system.
- Look for an independent testing lab mark (such as UL, CSA, or ETL) showing the meter was tested
  to the safety standard. A CAT marking without independent certification is less trustworthy.

## Inspecting Your Meter and Leads

Before every use:

1. **Case:** no cracks, missing screws, or signs of overheating.
2. **Display and battery:** display is clear; low-battery symbol is not showing. A weak
   battery can cause false readings.
3. **Leads:** no cuts, cracks, melted spots, or exposed conductor. Many leads have a colored
   inner insulation layer; if you see it, replace the leads.
4. **Probes:** tips not loose or bent; **finger guards** intact; use the shrouded tip covers
   (often required for CAT III/IV work) that leave only a few millimeters of metal exposed.
5. **Connectors:** shrouded banana plugs, fully seated in the jacks.
6. **Fuses:** follow the manufacturer's method for checking fuses; replace only with the exact
   rated fuse.

## Understanding the Display

- **Range:** most meters autorange. If you see "OL" on voltage, the reading is over the range;
  on resistance, it means open (infinite resistance).
- **Units:** pay attention to mV vs. V and kΩ vs. MΩ.
- **Ghost (phantom) voltage:** high-impedance meters can show voltage on a disconnected wire
  that runs next to energized wires, due to capacitive coupling. Readings may be anywhere
  from a few volts to near line voltage. A meter's **LoZ** mode places a small load on the
  circuit and makes ghost voltage collapse. **Never assume a reading is "just ghost voltage."**
  Stop and get a qualified person to evaluate it.

## Good Measurement Habits

- Connect the **black lead first** and remove it **last** when one point is a known neutral or
  ground.
- Keep your fingers **behind the finger guards.**
- Where practical, use a test-lead holder or clip so you can use one hand and keep the other
  away from grounded metal.
- Stand to the side of panels and disconnects, not directly in front.

## Key Takeaways
- At LT1, use the DMM for AC voltage verification and de-energized continuity/resistance only.
- Black lead in COM, red in V, dial on V before every voltage test; never measure voltage with leads in the amps jack.
- Use meters and leads rated at least CAT III 600 V for building lighting circuits; the lowest-rated part sets the rating.
- Inspect the meter, leads, probes, and battery before every use.
- Treat unexpected readings, including suspected ghost voltage, as real until a qualified person says otherwise.
