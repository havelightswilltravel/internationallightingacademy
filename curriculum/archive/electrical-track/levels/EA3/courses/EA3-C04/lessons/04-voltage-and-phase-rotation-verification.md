---
title: Voltage, High-Leg & Phase Rotation Verification
minutes: 45
video:
video_suggestion: >
  Electrician in arc-rated PPE performs a full verification at a 208Y/120 V and a 240/120 V
  high-leg panel: meter check on a proving unit, L-L, L-N, L-G readings recorded on a form,
  phase rotation meter connection, and a voltage unbalance calculation.
---

## Why Verify?

New services, transformer installations, generator connections and utility work can all
change voltage and phase rotation. Before motors are started or sensitive equipment is
connected, a qualified worker verifies:

- Correct nominal voltages L-L, L-N and L-G
- Location and identification of any high leg
- Phase rotation (sequence)
- Voltage balance between phases

## Preparing to Measure

Taking voltage measurements in a live panel is energized work, although NFPA 70E permits it
without an energized electrical work permit when done by qualified persons using appropriate
safe work practices and PPE (EA3-C05).

1. Review the arc-flash label and the shock/arc-flash risk assessment.
2. Don the required PPE: arc-rated clothing and face/head protection per the label, voltage-
   rated gloves with leather protectors, safety glasses and hearing protection.
3. Use a meter and leads rated for the measurement category and voltage (CAT III 600 V minimum
   for panelboards; CAT IV at the service entrance), with probe tip covers where required.
4. **Verify the meter on a known source** (or proving unit) before and after measuring.
5. Stand to the side of the enclosure; open the cover with the latch side away from you when
   possible.

## Expected Readings

| System | L-L | L-N | Notes |
|---|---|---|---|
| 208Y/120 V | about 208 V (A-B, B-C, C-A) | about 120 V each | L-G ≈ L-N; N-G ≈ 0 V at service, small V downstream under load |
| 480Y/277 V | about 480 V | about 277 V each | L-G ≈ L-N |
| 240/120 V high-leg delta | about 240 V | A-N ≈ 120 V, **B-N ≈ 208 V**, C-N ≈ 120 V | High leg must be B and identified orange |
| 120/240 V single-phase | 240 V | 120 V each | — |

Utility service voltage typically has an allowable range around nominal (often about ±5% under
ANSI C84.1 Range A). Use the specification or supervisor's acceptance criteria.

### Neutral-to-ground voltage
A few volts N-G at a downstream panel under load is normal (voltage drop on the neutral). **0 V
with load** downstream might indicate an illegal neutral-to-ground bond. **High N-G voltage**
can mean an open or undersized neutral, overloaded neutral (harmonics), or a loose connection.

## Identifying the High Leg

On a 240/120 V delta system, measure each phase to neutral:

- A-N: 120 V
- B-N: 208 V ← high leg
- C-N: 120 V

Confirm the high leg is landed in the **B position** of the panelboard (408.3(E)(1)) and
marked orange or by other effective means (110.15). If you find it elsewhere, stop and report
it. No single-pole 120 V circuit may be connected to the B phase — check that none are, because
those loads would receive about 208 V. B-phase positions are used only by 2- and 3-pole loads.

## Phase Rotation

A **phase rotation meter** has three color-coded leads (L1, L2, L3) and indicates ABC
(clockwise/"right") or CBA (counterclockwise/"left") rotation. Some multimeters and power
quality meters also show rotation.

Procedure:
1. Verify the instrument on a known three-phase source (or per manufacturer test).
2. Connect L1 to A, L2 to B, L3 to C — in that order.
3. Read and record the rotation.
4. If the result is the opposite of what the project requires, report it. Correcting rotation
   is done de-energized and locked out, usually by swapping two phases at the source end of a
   feeder — and only with the supervisor's direction, because it will reverse every motor
   downstream.

**Non-contact rotation testers** clamp or sit on insulated conductors and reduce exposure, but
they still require appropriate PPE when the enclosure is open.

## Voltage Unbalance

NEMA's definition: **% unbalance = (maximum deviation from average / average) x 100**.

**Example:** L-L readings are 480 V, 470 V and 490 V.
- Average = (480 + 470 + 490) / 3 = 480 V
- Maximum deviation = |470 − 480| = 10 V (or |490 − 480| = 10 V)
- % unbalance = 10 / 480 x 100 = **2.08%**

Why it matters: a small voltage unbalance produces a much larger current unbalance in motors
and extra heating. NEMA MG 1 guidance calls for derating motors when voltage unbalance exceeds
about **1%**, and operating motors above **5%** unbalance is not recommended. Common causes:
unbalanced single-phase loads, a failing transformer winding or connection, a blown capacitor
fuse in a PF correction bank, or utility problems.

**Example 2:** 208, 204, 212 V. Average = 208 V. Max deviation 4 V. Unbalance = 4 / 208 x 100 =
**1.9%**.

## Recording Results

Record on the employer's form or commissioning sheet: date, equipment ID, all L-L, L-N, L-G and
N-G readings, rotation, unbalance, instrument model and calibration date, and your name. These
records are the baseline for later troubleshooting.

> **Safety:** If any reading is unexpected — voltage where there should be none, a high leg in the
> wrong position, wildly unbalanced voltage — **stop**, close the enclosure, and report. Do not
> try to "fix" it energized. Corrective work is performed with the equipment in an electrically
> safe work condition.

## Key Takeaways
- Voltage measurement in an open panel is energized work: label, PPE, rated meter, verified meter.
- Know the expected L-L, L-N and L-G values for each system.
- On high-leg delta, the B phase reads about 208 V to neutral; never use it for 120 V loads.
- Connect rotation meters L1-L2-L3 to A-B-C; correct rotation only de-energized and directed.
- % unbalance = max deviation from average / average x 100; above about 1% motors need derating.
- Record every reading as a baseline.
