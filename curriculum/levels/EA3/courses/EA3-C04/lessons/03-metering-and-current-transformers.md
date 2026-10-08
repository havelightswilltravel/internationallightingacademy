---
title: Metering & Current Transformers
minutes: 40
video:
video_suggestion: >
  Instructor opens a CT cabinet and a CT-rated meter socket on a training mock-up, shows the
  CTs, test switch and shorting block, explains CT ratio and multiplier, and reads demand and
  power-factor values from a digital meter.
---

## Self-Contained vs. Instrument-Rated Metering

| Type | How it works | Typical size |
|---|---|---|
| **Self-contained** | Full load current flows through the meter | Up to about 200–320 A (utility-dependent) |
| **Instrument-rated (CT-rated)** | Current transformers reduce the current to a small secondary value (typically 5 A at full rating); voltage taps (and potential transformers on higher voltages) feed the meter | Larger services |

The utility owns or specifies revenue metering. **Always follow the utility's service manual** for
CT cabinet size, test switch, wiring and seals. Building **submeters** and power monitors owned
by the customer follow the same principles.

## Current Transformers

A CT is a transformer whose primary is the conductor passing through its window. The secondary
delivers a current proportional to the primary current.

**CT ratio:** e.g., 400:5 means 400 A primary produces 5 A secondary. The meter multiplier is
400 / 5 = **80**.

**Example:** A meter connected to 400:5 CTs reads 3.2 A secondary current.
Primary current = 3.2 x 80 = **256 A**.

### Polarity
CTs have polarity marks (H1 on the primary side, X1 on the secondary). Install them with H1
facing the source and wire X1 as shown on the meter diagram. A reversed CT makes a power meter
read negative or wrong power on that phase — a common commissioning error.

### Never open an energized CT secondary
With primary current flowing, a CT secondary is a current source. If the secondary circuit is
opened, the CT tries to push its current through an open circuit, and the secondary voltage
can rise to **thousands of volts** — a shock hazard and a fire/insulation failure risk.

- CT circuits use a **shorting block** or **test switch** that shorts the secondary before the
  meter can be removed.
- Short the secondary before disconnecting any meter or wire in a CT circuit.
- Unused CTs that are installed on energized conductors must be shorted.

> **Safety:** Never open the secondary of a CT while primary current flows. Short it first at
> the shorting block or test switch. Treat CT cabinets as energized equipment with the
> available fault current of the service; the voltage taps are often unfused on the line side
> of the service main.

## Potential (Voltage) Transformers

On systems above 480 V or where the meter is rated for lower voltage, **potential transformers
(PTs or VTs)** step voltage down — commonly to 120 V. The PT ratio adds another multiplier:
a 4200:120 PT ratio = 35. The total meter multiplier = CT ratio x PT ratio.

## What Meters Measure

| Quantity | Meaning |
|---|---|
| kWh | Energy consumed — the main billing quantity |
| kW demand | Highest average power over a demand interval (often 15 minutes) during the billing period |
| kVA / kVAR | Apparent and reactive power |
| Power factor | kW / kVA; utilities may penalize low PF |
| Voltage, current per phase | Useful for balancing and troubleshooting |
| THD | Total harmonic distortion of voltage or current |

**Demand example:** A building uses 72,000 kWh in a 30-day month with a peak 15-minute demand
of 240 kW. Load factor = average kW / peak kW. Average kW = 72,000 / (30 x 24) = 100 kW.
Load factor = 100 / 240 ≈ **42%**. Demand charges reward flattening the peak, which is why
lighting controls and staggered HVAC start-up matter.

**Power factor example:** Meter shows 180 kW and 225 kVA. PF = 180 / 225 = **0.80**.

## Power Quality Meters and Recorders

When troubleshooting or performing a load study (EA3-C03 Lesson 4), technicians install
portable power quality recorders with flexible current probes and voltage leads. They record
voltage sags and swells, current, demand, harmonics, and unbalance over days or weeks.

Installation tips:
- Install with the correct phase relationship (voltage A with current A) and arrow direction
  toward the load.
- Use fused voltage leads rated for the measurement category (CAT III or CAT IV at the service).
- Route leads so the dead front or door can close if the recorder stays connected, or use an
  approved access method; never leave covers off unattended.

## Utility and Code Points

- Meter sockets and CT cabinets must be installed per the utility's requirements; seals are
  placed by the utility.
- In the NEC, meter socket enclosures are subject to the arc-flash labeling requirement of
  110.16 in other than dwelling units.
- Meters are usually on the line side of the service disconnect; the line side of the meter is
  energized whenever the utility is connected. Pulling a meter is permitted only when the utility
  and your employer's procedure allow it, with appropriate PPE — it can create an arc flash under
  load.

## Key Takeaways
- Self-contained meters carry full current; CT-rated meters use CTs (and PTs at higher voltage).
- Meter multiplier = CT ratio x PT ratio; primary amps = secondary amps x CT ratio.
- Observe CT polarity (H1 toward source); reversed CTs give wrong power readings.
- Never open an energized CT secondary — short it first.
- Know kWh, kW demand, PF and load factor, and how to calculate them.
