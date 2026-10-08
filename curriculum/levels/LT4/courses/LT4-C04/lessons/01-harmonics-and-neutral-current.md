---
title: Harmonics & Neutral Current
minutes: 30
video:
video_suggestion: >
  Using a power quality analyzer (or a true-RMS clamp meter with harmonic display) on a 277/480V
  lighting panel feeder, a qualified tech in proper PPE shows the distorted current waveform of an
  LED lighting load, the harmonic spectrum with a large 3rd harmonic, and the neutral current
  compared to phase currents. Then the same reading with an average-responding meter to show the
  error.
---

## Linear vs. Nonlinear Loads

In LT2 you learned that AC voltage is a smooth sine wave. A **linear load** – a heater or an
incandescent lamp – draws current that is also a smooth sine wave. A **nonlinear load** draws current
in pulses. Electronic LED drivers, electronic ballasts, computers and VFDs are nonlinear: their input
stage rectifies AC to DC and charges a capacitor, drawing current only near the peaks of the voltage
wave unless the driver has good **power factor correction (PFC)** circuitry.

A pulsed current wave can be described as the 60 Hz **fundamental** plus **harmonics** – currents at
whole-number multiples of 60 Hz:

| Harmonic | Frequency (60 Hz system) | Notes |
|---|---|---|
| 1st (fundamental) | 60 Hz | Does the useful work |
| 3rd | 180 Hz | **Triplen** – adds in the neutral |
| 5th | 300 Hz | Common from drives and rectifiers |
| 7th | 420 Hz | |
| 9th | 540 Hz | Triplen |

**Total harmonic distortion (THD)** expresses the harmonic content as a percentage of the
fundamental. Lower is better. DLC technical requirements, for example, set minimum power factor and
maximum current THD for qualified LED products (commonly PF ≥ 0.9 and THD ≤ 20% for many
categories – check the current DLC requirements). Drivers usually meet their THD rating only near full
load; at deep dimming, THD and PF typically get worse.

## Why Triplen Harmonics Matter for Lighting

On a **three-phase, four-wire wye** system (120/208 V or 277/480 V), the three phase currents of
balanced linear loads are 120° apart and **cancel** in the shared neutral – a perfectly balanced
linear load puts nearly zero current on the neutral.

Triplen harmonics (3rd, 9th, 15th…) from each phase are **in phase with each other**, so in the
neutral they **add** instead of cancel. On circuits feeding many electronic drivers, the neutral can
carry substantial current even when the phases are balanced – in extreme cases more than the phase
current (theoretically up to about 1.73 times).

Consequences:
- **Overheated shared neutrals** on multiwire branch circuits and feeders (lesson 4).
- Overheated neutral terminals and lugs, discoloration, and failures.
- Transformer heating – harmonic loads heat transformers more than the kVA reading suggests (K-rated
  transformers are designed for this).
- Neutral-to-ground voltage at loads.

The NEC recognizes this: in a 3-phase, 4-wire wye circuit where the major portion of the load is
nonlinear, the neutral must be counted as a **current-carrying conductor** for ampacity adjustment
(NEC 310.15(E)). Designers may specify oversized or dedicated neutrals for this reason.

## Measuring Harmonics in the Field

**You must use a true-RMS meter.** An average-responding meter is calibrated assuming a perfect sine
wave. On distorted current it can read **low by 30–50%**, hiding an overloaded conductor.

| Meter type | On distorted current |
|---|---|
| Average-responding ("RMS-calibrated") | Reads incorrectly – often low |
| True-RMS | Reads actual heating value correctly |
| True-RMS with harmonics display / power quality analyzer | Shows THD and individual harmonics |

Field procedure for checking a lighting feeder or MWBC:

1. Complete a risk assessment, confirm you are qualified for the task and wear PPE per the arc-flash
   label or the NFPA 70E table method.
2. Use a CAT III or CAT IV rated true-RMS clamp meter appropriate for the location.
3. Measure current on each phase conductor and on the neutral, one at a time.
4. Compare: with balanced phases, a neutral current that is a large fraction of the phase current
   indicates harmonics (or unbalance – check both).
5. If available, read THD and the 3rd harmonic.
6. Check neutral terminations with a thermal imager (from outside the arc-flash boundary or with
   proper PPE) and look for discoloration when de-energized.

> **Safety:** Clamp measurements in a panel are energized work. Only qualified persons with the
> correct PPE may open energized panelboards. Never open a neutral to "check it" – a neutral can be
> carrying current, and opening it can expose you to full voltage and damage connected equipment.
> If a neutral termination must be serviced, de-energize every circuit that shares it, apply LOTO and
> verify absence of voltage on all conductors, including the neutral.

## Reducing Harmonic Problems

- Specify drivers with high PF and low THD (check spec sheets and DLC listings).
- Avoid running deeply dimmed loads as a large share of a feeder when possible.
- Balance loads across phases.
- Use dedicated neutrals for circuits with heavy electronic loads where the design calls for it, and
  never undersize shared neutrals.
- Report persistent neutral overheating to the engineer – solutions may include oversized neutrals,
  K-rated transformers or harmonic filters.

## Key Takeaways
- LED drivers and electronic ballasts are nonlinear loads that create harmonic currents.
- THD expresses harmonic distortion; good drivers have high PF and low THD, but performance worsens when dimmed.
- Triplen harmonics (3rd, 9th…) add in the shared neutral of a 3-phase 4-wire system and can overload it.
- The NEC requires the neutral to be counted as current-carrying when the major portion of a 4-wire wye load is nonlinear (310.15(E)).
- Always use a true-RMS meter; average-responding meters can read distorted current dangerously low.
- Never open a neutral under load; LOTO all circuits that share it.
