---
title: Kirchhoff's Laws & DC Voltage Drop
minutes: 45
video:
video_suggestion: >
  Instructor traces a loop around a series-parallel trainer with a DMM, recording each voltage
  drop with polarity and showing they sum to zero. Then a clamp meter shows currents entering and
  leaving a junction. Finish at a long extension-cord setup, measuring voltage at the source and
  at the load under a heavy load to show real voltage drop.
---

## Gustav Kirchhoff's Two Laws

Ohm's law describes a single component. Kirchhoff's laws describe how components behave
together, and they hold for any circuit, no matter how complicated.

### Kirchhoff's Current Law (KCL)

**The sum of currents entering a junction (node) equals the sum of currents leaving it.**
Charge cannot pile up at a point in a conductor, so whatever flows in must flow out.

Example: at a junction box, 16 A enters on the feed. Three branches leave carrying 5 A, 7 A and
an unknown current I₃.

- 16 = 5 + 7 + I₃ → **I₃ = 4 A**

KCL is the principle behind a GFCI: the device compares current out on the ungrounded conductor
with current back on the neutral. If they differ by more than about 5 mA (UL Class A devices
trip in the 4–6 mA range), some current is returning by another path — possibly through a
person — and the device trips. It is also why a clamp meter around both conductors of a healthy
two-wire circuit reads approximately zero.

### Kirchhoff's Voltage Law (KVL)

**The algebraic sum of all voltages around any closed loop equals zero.** Put another way, the
voltage drops around a loop add up to the source voltage(s).

To apply KVL:
1. Pick a loop and a direction to travel around it.
2. Record a voltage *rise* (− to + through a source) as positive.
3. Record a voltage *drop* across a resistor (in the direction of current) as negative.
4. Set the sum equal to zero and solve.

### Worked Example — Single Loop with Two Sources

A 24 V battery and a 6 V battery are connected **series-opposing** (their positive terminals face
each other around the loop) with a 3 Ω and a 6 Ω resistor.

- Net source voltage = 24 − 6 = 18 V, driven in the direction of the 24 V source.
- R_T = 3 + 6 = 9 Ω, I = 18 ÷ 9 = **2 A**
- Drops: 3 Ω → 6 V; 6 Ω → 12 V
- KVL check: +24 − 6 − 6 − 12 = **0** ✔

If the batteries were **series-aiding**, the net source would be 30 V and I = 30 ÷ 9 = 3.33 A.
Batteries installed backward in an exit sign or emergency pack create exactly this
series-opposing situation.

## The Voltage Divider

Two resistors in series divide the source voltage in proportion to their resistance:

**E_x = E_T × (R_x ÷ R_T)**

Example: 120 V across 1,000 Ω and 3,000 Ω. The 3,000 Ω resistor drops 120 × (3,000 ÷ 4,000) =
**90 V**; the 1,000 Ω resistor drops 30 V. Voltage dividers appear inside 0–10 V dimming
circuits, sensor inputs and meter circuitry.

## Conductor Voltage Drop — KVL in the Real World

Every conductor has resistance, so every circuit conductor is a small resistor **in series** with
the load. By KVL, whatever voltage the conductors drop is not available at the load.

For a two-wire DC or single-phase circuit:

**VD = (2 × K × I × L) ÷ CM**

- K = resistivity constant (≈ 12.9 for copper, ≈ 21.2 for aluminum, at 75 °C)
- I = load current in amperes
- L = **one-way** length in feet (the 2 accounts for the out-and-back path)
- CM = conductor area in circular mils (NEC Chapter 9, Table 8)

### Worked Example — Branch Circuit Voltage Drop

A 120 V circuit of 12 AWG copper (6,530 cmil) supplies a 16 A load 100 ft from the panel.

- VD = (2 × 12.9 × 16 × 100) ÷ 6,530 = 41,280 ÷ 6,530 = **6.32 V**
- Percent drop = 6.32 ÷ 120 = **5.3%**
- Voltage at load ≈ 120 − 6.3 = **113.7 V**

The NEC addresses voltage drop mainly in **informational notes** (for example, those following
210.19 for branch circuits), which suggest about 3% on a branch circuit and 5% combined
feeder-plus-branch for reasonable efficiency. Informational notes are not enforceable
requirements, but engineers, specifications and energy codes often make voltage-drop limits
mandatory on a project.

### Worked Example — Fixing It

Upsize to 10 AWG copper (10,380 cmil):

- VD = 41,280 ÷ 10,380 = **3.98 V** = 3.3%

Upsizing to 10 AWG nearly meets the 3% suggestion. Note that when you upsize ungrounded
conductors for voltage drop, the NEC also requires the equipment grounding conductor to be
increased proportionally — you'll study that rule (250.122(B)) in EA2.

### Solving for Conductor Size

Rearrange the formula to find the minimum area for a target drop:

**CM = (2 × K × I × L) ÷ VD**

For 3% of 120 V (3.6 V) in the example above: CM = 41,280 ÷ 3.6 = 11,467 cmil. 10 AWG (10,380)
is too small; **8 AWG (16,510 cmil)** is the next size that meets it.

> **Safety:** Measuring voltage drop under load requires energized testing. Only qualified
> persons may take energized measurements, using a CAT-rated meter, proper PPE and the
> employer's energized-work procedures. When in doubt, calculate it from de-energized
> resistance measurements instead.

## Troubleshooting with KVL

When a load underperforms, measure voltage at the source and at the load **under load**. If the
source reads 120 V and the load reads 104 V, 16 V is being dropped somewhere in series with the
load — a long run, an undersized conductor, or a bad splice or termination. Measuring across
each splice (with the load running) will show which one is dropping voltage; a good splice
should drop only millivolts.

## Key Takeaways
- KCL: current into a node equals current out — the principle behind GFCI operation.
- KVL: voltage rises and drops around any loop sum to zero.
- Conductors are resistors in series with the load; their drop is lost to the load.
- VD = 2KIL ÷ CM for two-wire circuits; L is one-way length.
- NEC voltage-drop recommendations are informational notes, but specs often make them mandatory.
- Upsizing ungrounded conductors for voltage drop also triggers an EGC upsizing rule.
