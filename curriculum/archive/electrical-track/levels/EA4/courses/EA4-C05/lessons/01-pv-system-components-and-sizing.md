---
title: PV System Components, Voltage, and Current Calculations
minutes: 45
video:
video_suggestion: >
  On a residential roof (with fall protection shown), an installer points out modules, rails,
  module-level power electronics, the array junction box, and the conduit run to the inverter.
  Back on the ground, the instructor reads a module datasheet on screen, highlighting Voc, Isc,
  and the Voc temperature coefficient, then calculates maximum string voltage and conductor
  ampacity on a whiteboard.
---

## The Grid-Interactive PV System
Most PV systems you will install are **interactive** (grid-tied): they produce power in
parallel with the utility and shut down when the utility fails. NEC Article 690 covers the PV
system itself and Article 705 covers interconnection with other sources (2023 NEC; the AHJ's
adopted edition governs). Utility interconnection agreements and permits add their own rules.

| Component | Function |
|---|---|
| PV modules | Convert sunlight to DC; connected in series strings |
| Module-level power electronics (MLPE) | Microinverters (convert DC to AC at each module) or DC optimizers (condition DC per module); also provide rapid shutdown |
| String inverter | Converts string DC to AC; tracks maximum power point |
| PV system DC circuits | 2023 NEC terms: **PV source circuits** (module to combiner/inverter) and **PV output circuits** |
| DC combiner | Parallels strings, may hold string fuses |
| Disconnecting means | PV system disconnect and equipment disconnects |
| Interconnection | Load-side breaker or supply-side tap to the premises wiring |

## Key Datasheet Values
| Value | Meaning |
|---|---|
| Voc | Open-circuit voltage at standard test conditions (25°C cell temp) |
| Vmp | Voltage at maximum power |
| Isc | Short-circuit current |
| Imp | Current at maximum power |
| Temperature coefficient of Voc | Percentage change in Voc per °C (negative — voltage **rises** as temperature drops) |
| Maximum series fuse rating | Maximum OCPD protecting the module |

## Maximum System Voltage (690.7)
Because Voc increases in cold weather, the maximum voltage is calculated at the **lowest
expected ambient temperature** for the site. Where the manufacturer provides a temperature
coefficient, use it (690.7(A)); for crystalline silicon modules without one, Table 690.7(A)
provides correction factors.

PV system DC circuits on or in **one- and two-family dwellings** are limited to a maximum of
**600 V** (other buildings may go to 1,000 V, and higher in some installations).

### Worked Example 1: String Length
Module: Voc = 49.5 V; Voc temperature coefficient = −0.27%/°C. Lowest expected ambient: −10°C.
House: one-family dwelling (600-V limit).

1. Temperature difference from STC: −10 − 25 = **−35°C**
2. Voltage change: −35 × (−0.27%) = **+9.45%**
3. Maximum module Voc: 49.5 × 1.0945 = **54.18 V**
4. Maximum modules in series: 600 ÷ 54.18 = 11.07 → **11 modules** (596 V)
5. Also check the inverter's maximum input voltage — use the lower of the two limits.

Using Table 690.7(A) instead (−6 to −10°C row, factor 1.14): 49.5 × 1.14 = 56.43 V → 600 ÷
56.43 = 10.6 → 10 modules. The table is more conservative; the manufacturer's coefficient
must be used where provided.

## Circuit Current (690.8)
1. **Maximum circuit current** for PV source circuits = sum of parallel module **Isc × 125%**
   (690.8(A)(1)) — this accounts for irradiance above standard test conditions.
2. **Conductors and OCPDs** must be rated at least **125% of the maximum circuit current**
   (690.8(B)) — the continuous-duty factor.
3. Net effect when both apply: **Isc × 1.56**.
4. Conductors must also have ampacity of at least the maximum circuit current **after**
   correction for ambient temperature and adjustment for more than three current-carrying
   conductors, without the second 125% factor. Use the larger result.

### Worked Example 2: String Conductor and Fuse
Module Isc = 11.2 A, one string per circuit.
- Maximum circuit current: 11.2 × 1.25 = **14.0 A**
- Minimum conductor ampacity/OCPD rating (continuous): 14.0 × 1.25 = **17.5 A**
- Conditions of use: 10 AWG PV wire (90°C, 40 A from Table 310.16) in free air above the roof
  at a design ambient of 45°C. Correction factor (90°C column, 41–45°C) = **0.87**. 40 × 0.87 =
  34.8 A ≥ 14.0 A — **acceptable**.
- If the circuit requires an OCPD (typically when three or more strings are paralleled and fault
  current from the other strings could exceed the module's maximum series fuse rating), the next
  standard fuse at or above 17.5 A is **20 A** — confirm it does not exceed the module's maximum
  series fuse rating.

## Inverter Output Circuit
The AC output current of the inverter (from its datasheet) is a continuous current. Size the
conductors and OCPD at **125%** of the inverter's maximum continuous output current.

Example: a 7.6-kW, 240-V inverter has a maximum continuous output of 32 A. 32 × 1.25 = 40 A →
**40-A breaker**, with conductors of at least 40 A ampacity (8 AWG Cu THWN-2 at the 75°C
termination rating = 50 A).

> **Safety:** A PV module produces voltage whenever light falls on it — you cannot turn the sun
> off. Treat all DC conductors on the array side as energized during daylight, even with every
> disconnect open. Never disconnect a DC connector under load (it can draw a sustained DC arc);
> open the inverter or DC disconnect first and confirm zero current with a DC clamp meter. Use
> fall protection on roofs and follow the NFPA 70E risk assessment for DC systems.

## Key Takeaways
- Voc rises in cold weather: calculate maximum voltage at the lowest expected ambient using the
  manufacturer's coefficient (or Table 690.7(A)).
- One- and two-family dwelling PV DC circuits are limited to 600 V.
- Maximum circuit current = Isc × 1.25; conductors and OCPD at 125% of that (Isc × 1.56).
- Check conductor ampacity after correction and adjustment as well.
- Inverter output conductors and OCPD: 125% of maximum continuous output current.
