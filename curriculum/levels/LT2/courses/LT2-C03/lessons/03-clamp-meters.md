---
title: Clamp Meters and Load Measurement
minutes: 30
video:
video_suggestion: >
  Filmed with proper PPE at a lighting panel under supervision: a tech clamps a single
  lighting branch-circuit conductor and reads load current, then clamps hot and neutral
  together to show the reading drop to near zero, then measures the panel neutral. Finish at
  a fixture junction box using the inrush function as a bank of LED fixtures is switched on.
---

## How a Clamp Meter Works

A clamp meter measures current by sensing the **magnetic field** around a conductor. You do
not have to open the circuit or put the meter in series — a big safety and time advantage
over a DMM's amps jack.

- **AC clamps** use a current-transformer principle and measure AC only.
- **AC/DC clamps** use a Hall-effect sensor and also measure DC (useful for some LED and
  battery systems).
- Most clamp meters also include voltage, resistance and continuity functions through test
  leads, with the same CAT rating rules as a DMM.

## The Golden Rule: One Conductor

Clamp around **one** conductor at a time.

| What you clamp | What you read | Why |
|---|---|---|
| One hot conductor | Load current on that circuit | Magnetic field of one conductor |
| Hot and its neutral together | Near zero | Equal and opposite currents cancel |
| A whole cable (MC or NM) | Near zero (or only the imbalance) | Same cancellation |
| Neutral alone | Return current — the imbalance on shared neutrals | Useful diagnostic |
| All conductors of a circuit including EGC | Leakage / ground-fault current (requires a leakage-rated clamp) | Any current not returning on circuit conductors |

The cancellation effect is useful: clamping hot and neutral together and getting a
significant reading means some current is returning by another path — a ground fault, a
neutral tied to another circuit, or a neutral-to-ground connection downstream. A dedicated
**leakage clamp** reads milliamps accurately; a standard clamp may not.

## Getting an Accurate Reading

1. **Select the function** (A AC, A DC, or A AC+DC) and range.
2. **Zero the meter** if measuring DC (Hall-effect clamps drift; press the zero button with
   the jaws closed and away from conductors).
3. **Center the conductor** in the jaw. Readings can vary near the jaw opening.
4. **Close the jaws completely** — a gap or debris causes low readings.
5. **Keep away from other current-carrying conductors** where possible; strong nearby fields
   can affect readings.
6. **Read and record** with circuit number and time.

For small currents (one LED fixture may draw 0.1–0.5 A), some techs wrap a short loop of the
conductor through the jaw several times and divide the reading by the number of turns. Do
this only on a short test lead or whip you have installed for that purpose — never by
pulling slack in energized panel conductors.

## True-RMS Matters Here Too

LED drivers and electronic ballasts draw distorted current (LT2-C01). An average-responding
clamp can read significantly low on these loads. Use a **true-RMS** clamp meter for all
lighting load measurements.

## Inrush Measurement

LED drivers draw a very brief, very high **inrush current** when first energized — often
many times their running current for a fraction of a millisecond. Many clamp meters have an
**inrush** function that captures the peak over the first moments after switch-on. Use it
when investigating:
- Breakers tripping when lights are switched on (but not after)
- Relay or contactor contacts welding
- Occupancy sensors or switches failing early on large LED loads

LT4 covers diagnosis of inrush and nuisance tripping in detail. At LT2, recognize the
symptom and capture the data for your lead.

## Using Load Readings

### Checking circuit loading

Compare measured current to the breaker rating:

| Breaker | 80% continuous-load threshold |
|---|---|
| 15 A | 12 A |
| 20 A | 16 A |
| 30 A | 24 A |

A lighting circuit regularly running above the 80% threshold on a standard breaker should be
reported. It may need to be split or re-evaluated.

### Checking balance

Measure each phase of a lighting panel's feeder (or the sum of circuits by phase) and the
neutral. Large differences between phases increase neutral current and voltage drop. A
neutral current **higher than any phase current** on a panel serving many electronic loads
can indicate harmonic loading — report it.

### Confirming a fixture is drawing power

A fixture that is dark but drawing near-normal current points to an internal problem (lamp,
LED board, or driver output). A fixture drawing zero current with correct voltage at its
input points to an open input (driver, connection, or control). This is a fast,
non-invasive troubleshooting step (LT2-C06).

> **Safety:** Clamping a conductor in a panel is still energized work. Wear PPE per the
> equipment label, keep your hands behind the clamp's tactile barrier, and do not force jaws
> between tightly packed conductors. If you cannot reach a single conductor without
> disturbing others, measure elsewhere (for example, at the fixture junction box after
> de-energizing and installing a test loop) or get help from a qualified lead.

## Key Takeaways
- Clamp meters measure current by magnetic field — no need to open the circuit.
- Clamp one conductor; hot and neutral together should read near zero, and a significant reading signals current returning by another path.
- Center the conductor, close the jaws fully, and zero DC clamps before use.
- Use a true-RMS clamp on LED and electronic ballast loads; use the inrush function to capture switch-on spikes.
- Compare load to 80% of the breaker rating and check phase balance and neutral current.
- Clamping in a panel is energized work — PPE and the tactile barrier apply.
