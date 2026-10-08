---
title: PLC Fundamentals and I/O Wiring
minutes: 40
video:
video_suggestion: >
  On a PLC training panel, the instructor identifies the power supply, CPU, input and output
  modules, and terminal blocks, then wires a three-wire PNP proximity sensor to a sinking input
  and an NPN sensor to a sourcing input, showing the status LEDs change. Then wires a 4–20 mA
  pressure transmitter to an analog input and shows the scaled value in the software.
---

## What a PLC Does
A **programmable logic controller (PLC)** is an industrial computer that replaces hard-wired
relay logic. It reads the state of **inputs** (pushbuttons, limit switches, sensors), executes
a **program** written by a technician or engineer, and sets the state of **outputs** (contactor
coils, solenoids, pilot lights, VFD run commands). Electricians wire, troubleshoot, and often
make simple program changes to PLC systems, so you need to understand both the hardware and the
logic.

## The Scan Cycle
A PLC runs continuously in a repeating **scan**:

1. **Read inputs** — copy the state of every input terminal into the input image table.
2. **Execute program** — solve each rung of logic from top to bottom, left to right, using the
   input image.
3. **Update outputs** — write the output image table to the physical output terminals.
4. **Housekeeping** — communications and diagnostics.

A scan typically takes a few milliseconds. An input pulse shorter than one scan can be missed —
that is why high-speed counter modules exist.

## Hardware Components
| Component | Function |
|---|---|
| Power supply | Converts 120 V AC (or 24 V DC) to the backplane voltage |
| CPU | Stores and executes the program, holds data tables |
| Discrete input module | On/off signals (typically 24 V DC or 120 V AC) |
| Discrete output module | Relay, transistor (DC), or triac (AC) outputs |
| Analog input module | Continuous signals: 4–20 mA, 0–10 V, RTD, thermocouple |
| Analog output module | Continuous commands, e.g., speed reference to a VFD |
| Communication module | Ethernet/IP, Modbus TCP, BACnet, etc. |

## Sinking and Sourcing
This is the most common source of wiring confusion. Think in terms of **conventional current
(+ to −)**:

- A **sourcing** device *supplies* current (it connects the load to +24 V).
- A **sinking** device *receives* current (it connects the load to 0 V / common).
- A sourcing device must be paired with a sinking device, and vice versa.

| Field sensor | Output type | Pair with input module |
|---|---|---|
| PNP (sourcing) proximity sensor | Switches +24 V to the input | **Sinking** input (module common to 0 V) |
| NPN (sinking) proximity sensor | Switches the input to 0 V | **Sourcing** input (module common to +24 V) |

Three-wire DC sensors typically use brown (+24 V), blue (0 V), and black (signal) — confirm with
the sensor data sheet.

## Output Types
| Output | Switches | Notes |
|---|---|---|
| Relay | AC or DC | Slower, limited life, but isolated and versatile; check contact rating |
| Transistor | DC only | Fast, long life; sinking (NPN) or sourcing (PNP) |
| Triac | AC only | Has leakage current that may hold in small loads |

Never exceed the output point or common current rating. Use an **interposing relay** when a
load (such as a large contactor coil) exceeds the output rating.

## Analog Signals
- **4–20 mA** is the industry standard because it is immune to voltage drop and noise, and a
  reading of 0 mA reveals a broken wire ("live zero").
- **0–10 V** is common in building automation and lighting control.

### Worked Example: Scaling a 4–20 mA Signal
A pressure transmitter is calibrated 0–150 psi = 4–20 mA. The signal reads 13.6 mA.

Span of signal = 20 − 4 = 16 mA. Signal above zero = 13.6 − 4 = 9.6 mA.

Pressure = (9.6 ÷ 16) × 150 psi = 0.6 × 150 = **90 psi**.

If the reading were 2.0 mA (below 4 mA), suspect an open circuit or failed transmitter rather
than a real low pressure.

## Wiring Practices
- Keep 24-V DC I/O and analog wiring separated from 120/480-V power wiring in panels; use
  separate wireways where possible and cross power wiring at 90°.
- Use shielded twisted pair for analog signals; ground the shield at **one end only** (usually
  the panel end) to avoid ground loops.
- Label both ends of every wire with the I/O address or tag name from the drawings.
- Fuse output commons and DC power distribution as shown on the module wiring diagram.
- Industrial machinery control panels are often built to **NFPA 79** and **UL 508A**; follow the
  wire color conventions in the drawings.

> **Safety:** A PLC output can energize a motor or valve at any time if the program or a
> forced bit commands it. Never rely on a PLC stop or a program change to protect you. Before
> working on driven equipment, apply lockout/tagout at the energy-isolating devices (disconnects,
> valves) — not at the PLC — and verify absence of voltage and zero mechanical energy. Remember
> that PLC panels often contain circuits fed from other sources (interlocks, UPS); look for
> yellow wiring and warning labels.

## Key Takeaways
- PLCs scan: read inputs, execute logic, update outputs, repeat.
- Sourcing supplies current, sinking receives it; PNP sensors pair with sinking inputs, NPN with
  sourcing inputs.
- Choose relay, transistor, or triac outputs for the load; use interposing relays for large loads.
- 4–20 mA signals scale linearly from 4 mA (zero) to 20 mA (full scale); below 4 mA indicates a
  fault.
- Lock out at energy-isolating devices, never just the PLC.
