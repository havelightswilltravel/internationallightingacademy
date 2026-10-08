---
title: "Field Procedure: LED Signage"
category: field-procedures
tags: [field-procedure, led, signage, power-supply, modules, channel-letters, connections]
levels: [LT2, LT3]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

*Company field procedure — adapted from the company Master Troubleshooting Guide.*

**Competency self-rating:** 1 I have seen it · 2 I understand it · 3 I perform it · 4 I can teach it. Rate yourself on this system in the app's Skills Matrix.

## System components

| Component | What it does | Common failure |
|---|---|---|
| LED modules | Small light engines chained inside letters/cabinets | Individual module dead, water damage, color shift |
| Transformer (LED power supply) | Converts line voltage to low-voltage DC (commonly 12 or 24 V) | No output, overload shutdown, no-load cutout |
| Connectors | Join module chains and power supply leads | Corroded, loose, poor crimp - the most common fault |
| Wire | Low-voltage leads from supply to modules | Pinched, broken at drill holes, undersized for run |
| Straps / sticky tape | Hold modules in place | Adhesive fails; modules fall and short |
| Flex | Protects line-voltage wiring | Loose fittings, water entry |
| Outdoor/indoor enclosures | House power supplies and splices | Water, heat, corrosion |

## Safety first

- **LOTO and verify absence of voltage (live-dead-live)** at the sign disconnect before opening power supply enclosures or touching primary wiring.
- Energized line and secondary voltage tests are **qualified persons only**. Low-voltage DC is usually low shock risk, but the line side is not.
- Use a lift with fall protection; watch for sharp sign edges and wet conditions.

## Company troubleshooting procedure

1. **If the whole sign is out, check line voltage** at the power supply input. Expected: about 120 or 277 V per the label.
2. **If line voltage is good, test the secondary (output) voltage** off the power supply. Expected: the label rating, commonly 12 V DC or 24 V DC, within about 5%.
3. **If secondary voltage is good, test the low-voltage connections** along the module chain.
4. **If outages are sporadic, test connections and swap the dead modules with known-good modules** to identify the bad ones.
5. **Always test and retest connections - they are more often than not the issue.**
6. **If secondary voltage is not good, verify the secondary connections, then replace the power supply.**
7. **Note:** some power supplies have a **cutout** and will not read secondary voltage if they are not connected to any modules. That is why it is very important to **check and recheck the secondary connections** before condemning the supply. Reconnect the load and test again.

## Escalate / write it up when

- No line voltage at the sign, a missing disconnect, or damaged primary wiring.
- Widespread water damage needing a sign rebuild.
- Repeated power supply failures (possible overload or heat issue).

## Parts & information

- Power supply label: input voltage, output voltage, watts, Class 2 rating, indoor/outdoor rating. Do not exceed about 80% of the supply's rated load.
- Module brand, model, color temperature or color, voltage and spacing; photograph a module with a ruler. Bring a sample if unsure - color mismatch is obvious at night.
- Note the connector type used so you bring matching connectors.

## Document on the work order

Sign location, line and secondary readings, modules and supplies replaced (model numbers), connections repaired, and anything written up.
