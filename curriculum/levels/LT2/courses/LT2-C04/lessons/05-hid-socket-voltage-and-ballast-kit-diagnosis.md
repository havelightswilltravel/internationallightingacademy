---
title: HID Socket Voltage, Ballast Kit Diagnosis and Pole Fuses
minutes: 40
video:
video_suggestion: >
  At a training pole and a bench HID fixture, a qualified tech in arc-rated PPE measures
  open-circuit voltage at a probe-start metal halide socket with the lamp removed and compares
  it to the ballast label and the company chart. The video then shows a pulse-start fixture
  being locked out, the ignitor disconnected before the OCV check, a capacitor discharged and
  tested on the capacitance range, a blown in-line fuse found in a pole hand hole, and a fresh
  lamp installed after the ballast kit is replaced.
---

## The Company HID Procedure in Plain Step Order

Lesson 4 covered HID end-of-life and the ballast kit replacement. This lesson follows the
company's own HID troubleshooting sequence, which is built around one fast measurement: the
**socket voltage**, also called the **open-circuit voltage (OCV)**. OCV is the voltage the
ballast puts across the socket when no lamp is drawing current. If the ballast is producing
correct OCV, the ballast circuit is very likely working and the lamp is the suspect.

| Step | Company step | How we do it safely |
|---|---|---|
| 1 | Test socket voltage with a meter and compare to the socket voltage chart | Lamp removed; qualified person only, PPE per the employer's NFPA 70E program; ignitor disconnected first on pulse-start MH and HPS (see below) |
| 2 | Proper socket voltage → change the lamp | Install a known-good lamp of the correct ANSI code; allow warm-up time |
| 3 | No proper socket voltage → test line voltage at the fixture | Measure at ballast input leads: hot-to-neutral (or line-to-line on 208/240/480 V) |
| 4 | No proper line voltage → test fuses, including fuses in the pole base | Lock out the circuit, then check in-line fuses out of their holders (continuity) |
| 5 | Line voltage correct → check the capacitor | De-energized capacitance test is the standard method (see below) |
| 6 | Capacitor bad → replace the capacitor | Exact µF and voltage rating |
| 7 | Ballast not producing output → replace the ballast kit | Kit = core and coil, capacitor, ignitor matched to the lamp ANSI code |
| 8 | Capacitor and ballast good → check the socket | Burnt, pitted, loose center contact, cracked porcelain, heat-damaged leads |
| 9 | Socket good → replace the ignitor | Ignitor failure is common on HPS and pulse-start MH |
| 10 | After any ballast kit replacement → install a fresh lamp | An old lamp may have caused or been damaged by the failure; a new kit deserves a new lamp |

Steps 1 to 4 also depend on whether anything upstream controls the fixture. A fixture with a
**button or twist-lock photocell** gets no line voltage in daylight. Cover the photocell (or
install a shorting cap or known-good photocell) before deciding there is "no power."

## Socket Voltage (OCV) Reference Chart

The values below are **typical, approximate figures** for common magnetic ballasts, shown so
you know the general size of the reading to expect. **The ballast label and the ballast
manufacturer's data govern** — always compare your reading to the value printed on the ballast
or in the manufacturer's catalog. Electronic HID ballasts often do not produce a steady
measurable OCV; follow their manufacturer's test instructions.

| Lamp type | Example wattages (ANSI code) | Typical OCV at socket (approx.) | Notes |
|---|---|---|---|
| Mercury vapor | 175 W (H39), 250 W (H37), 400 W (H33) | about 225–260 V | Legacy; replace with MH or LED where possible |
| Probe-start metal halide | 175 W (M57) | about 285–340 V | No ignitor; steady reading |
| Probe-start metal halide | 250 W (M58) | about 230–290 V | No ignitor; steady reading |
| Probe-start metal halide | 400 W (M59) | about 285–340 V | No ignitor; steady reading |
| Probe-start metal halide | 1000 W (M47) | about 400–480 V | Usually 480 V or 277 V supply with high OCV — extra care |
| Pulse-start metal halide | 150–400 W (e.g., M102, M132, M135) | about 200–330 V between pulses | Ignitor produces kV pulses — disconnect ignitor before measuring |
| High-pressure sodium, 55 V lamps | 70–150 W (e.g., S62, S54, S55) | about 110–130 V between pulses | Ignitor present — disconnect before measuring |
| High-pressure sodium | 250 W (S50), 400 W (S51) | about 175–250 V between pulses | Ignitor present — disconnect before measuring |
| High-pressure sodium | 1000 W (S52) | about 420–480 V between pulses | Ignitor present — disconnect before measuring |

**Reading the result:**
- **OCV at or near the label value:** the ballast, capacitor and wiring to the socket are
  delivering. Replace the lamp.
- **OCV much lower than expected:** suspect the capacitor (open or out of tolerance), a wrong
  voltage tap, low line voltage, or a failing ballast.
- **Zero OCV with good line voltage:** open ballast winding, open capacitor circuit, broken lead,
  or a failed socket connection.

> **Safety:** OCV is often 200–480 V and is present the moment the circuit is energized with
> no lamp in the socket. Only a person qualified under the employer's NFPA 70E program takes
> this reading, using a CAT III or CAT IV meter rated above the expected voltage, insulated
> probes, and the required PPE. On **pulse-start metal halide and HPS**, the ignitor fires
> kilovolt pulses into an empty socket: lock out, verify absence of voltage (live-dead-live),
> disconnect the ignitor's pulse lead per the manufacturer, then restore power to read OCV.
> Reconnect the ignitor afterward with the circuit locked out again.

## Testing the Capacitor

The company procedure compares the voltage arriving at the capacitor from the ballast with
the voltage leaving it. That intent — find out whether the capacitor is passing what the ballast
delivers — is correct, but energized readings at capacitor terminals expose you to high voltage
inside a cramped ballast housing. The standard method at this level is a **de-energized
capacitance test**:

1. Lock out the circuit and verify absence of voltage at the ballast input (live-dead-live).
2. Discharge the capacitor through a discharge resistor tool or an insulated tool, then verify
   0 V across its terminals.
3. Look for a bulged, split or leaking case and burnt terminals — any of these means replace.
4. Remove at least one lead so other parts of the circuit don't affect the reading.
5. Set the meter to capacitance (µF) and read across the terminals.
6. Compare to the label. Within the marked tolerance (commonly ±6%) is good; outside it, or a
   reading of zero/open/short, means replace with the **exact** µF and voltage rating.

Energized voltage comparisons across the capacitor may be done by qualified persons when the
manufacturer's procedure calls for it.

## Checking the Ballast (Core and Coil) and Socket

- With power locked out and the capacitor discharged, check each ballast winding for
  continuity using the ballast diagram. An open winding, a scorched or swollen coil, or a strong
  burnt-varnish smell means replace the **ballast kit**.
- Confirm the supply is connected to the tap that matches measured line voltage. A 277 V supply on
  the 480 V tap gives low OCV and no start; a 277 V supply on the 120 V tap destroys the kit.
- Inspect the mogul socket: the center contact must spring back and be clean. Heat-darkened
  porcelain, burnt leads and a loose lamp are common on high-bays and pole heads. Replace the
  socket with a pulse-rated socket where an ignitor is used.

## Fuses at the Pole Base

Parking lot and site poles often have **in-line fuse holders** in the hand hole at the base of
the pole, one per ungrounded conductor (both lines on a 208, 240 or 480 V circuit). Some are
breakaway types that separate if a vehicle strikes the pole.

1. Lock out the lighting circuit at the panel or contactor and verify absence of voltage at the
   hand hole conductors before opening the fuse holders.
2. Open each holder and test the fuse **out of the holder** for continuity.
3. Replace a blown fuse only with the same type, voltage rating and ampere rating.
4. Inspect the holder and splices for corrosion, water and burn marks.
5. Restore power and confirm the fixture lights. **A fuse that blows again** indicates a fault —
   a shorted ballast, damaged pole wiring or an underground ground fault. Do not upsize the fuse;
   write it up (LT3-C05 covers pole circuits and ground-fault location).

## Parts and Ordering

When ordering, record: lamp ANSI code and wattage, ballast circuit type (CWA, reactor, etc.),
supply voltage and tap, capacitor µF/voltage, ignitor model, socket type (mogul, pulse-rated),
fuse type/amperage, and photocell voltage. A photograph of the ballast label and the fixture
nameplate saves a return trip.

## Key Takeaways
- The company HID sequence starts with socket voltage (OCV): good OCV means change the lamp.
- Chart values are typical; the ballast label and manufacturer data govern.
- Disconnect the ignitor (with power locked out) before reading OCV on pulse-start MH and HPS.
- Test capacitors de-energized on the capacitance range after discharging them.
- No line voltage at a pole fixture → lock out and check the pole-base fuses; a repeat blow is a fault to write up.
- Replace the whole ballast kit when the core and coil fails, and always install a fresh lamp with a new kit.
