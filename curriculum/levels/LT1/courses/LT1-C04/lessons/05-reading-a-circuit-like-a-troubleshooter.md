---
title: Reading a Circuit Like a Troubleshooter
minutes: 30
video:
video_suggestion: >
  On a de-energized training board with a breaker, switch, junction box, thermal protector and
  two fixtures, a trainer traces the hot, switch leg, neutral and ground with colored tape.
  Then, energized behind a guard and in proper PPE, the trainer shows the readings across an
  open switch, a closed switch, a good lamp socket and an opened thermal protector, explaining
  what each number means.
---

## Every Procedure Is a Walk Along the Circuit

The company's Master Troubleshooting Guide uses the same phrases over and over: "check power,"
"test line voltage across the hot and neutral," "test the switch leg," "check continuity,"
"verify line and load." Each one is a question about **where along the circuit path** current
stops flowing. This lesson connects the fundamentals from Lessons 1–4 to those field phrases.

## The Path in a Typical Lighting Circuit

Follow current from the source and back:

1. **Panel and breaker** — the source and the protection.
2. **Hot (ungrounded) conductor** — usually black, red or another color, never white, gray or
   green — carries current to the control.
3. **Switch or control** — in series with the load. The wire leaving the switch toward the
   fixture is the **switch leg** (switched hot).
4. **Junction boxes** — splices where the circuit branches to more fixtures.
5. **Fixture** — whip, ballast or driver, sockets, lamp. Some fixtures include a **thermal
   protector**, a heat-sensing switch in series that opens if the fixture overheats.
6. **Neutral (grounded conductor)** — usually white or gray — returns current to the panel.
7. **Equipment ground** — green, green-yellow or bare — carries current only during a fault.

## Line and Load

Every control device has two sides:

| Term | Meaning | Example |
|---|---|---|
| **Line** side | Where power comes **in** from the source | Hot from the breaker at a switch, time clock or photocell |
| **Load** side | Where power goes **out** to the equipment it controls | Switch leg to the fixtures |

A device wired backward (line and load swapped) may not work, may stay energized when "off," or
may be damaged. Several company procedures (time clocks, photocells, contactors) start by
confirming line and load are on the correct terminals.

## What a Voltage Reading Tells You

A voltmeter shows the **difference** in voltage between its two probes. That leads to rules
that sound backward at first but solve many calls:

| Where you measure | Reading | What it means |
|---|---|---|
| Hot to neutral at the fixture | Full circuit voltage (e.g., 120 or 277 V) | Power is reaching the fixture |
| Hot to neutral at the fixture | 0 V | An open somewhere upstream: breaker, switch, splice, or the neutral |
| Hot to ground present, hot to neutral 0 V | — | The **neutral** is open (dangerous — report it) |
| Across a **closed** switch or good fuse | about 0 V | Same voltage on both sides — no break |
| Across an **open** switch, blown fuse or opened thermal protector | Full circuit voltage | The break is right there |
| Switch leg to neutral with switch on | Full voltage | The switch is passing power |
| Switch leg to neutral with switch on | 0 V | Switch failed, or no power reaching it |

The key idea: **voltage appears across an open.** Current stops, so the whole source voltage
shows up across the break.

> **Safety:** Energized voltage measurements are taken only by persons trained and authorized
> under the employer's NFPA 70E program, with the right PPE and a CAT-rated meter checked on a
> known source first. At LT1, you assist and record. Before touching any conductor, lock out
> and verify absence of voltage live-dead-live (LT1-C03).

## What a Continuity Reading Tells You

Continuity (or resistance) testing sends a small current from the meter's own battery through a
part. It is done **only with power off and verified dead**.

| Part tested | Good result | Bad result |
|---|---|---|
| Incandescent or halogen lamp | Low resistance (a few ohms cold) | OL / open — filament broken |
| Fuse | Near 0 Ω | OL — blown |
| Switch, on position | Near 0 Ω | OL — failed open |
| Switch, off position | OL | Near 0 Ω — failed closed (welded) |
| Thermal protector (cool) | Near 0 Ω | OL — opened, or failed |
| Length of wire | Near 0 Ω end to end | OL — broken wire or loose splice |

Remove the part from the circuit, or disconnect one end, so other paths don't fool the meter.

## Open, Short and Ground Fault — Field Symptoms

| Fault | What happens | What you see |
|---|---|---|
| **Open** | Path broken; no current | Fixture or group dark; breaker stays on |
| **Short circuit** | Hot touches neutral; very high current | Breaker trips immediately when switched on; scorch marks |
| **Ground fault** | Hot touches ground or metal; high current | Breaker or GFCI trips; possible shock hazard on metal parts |
| **High-resistance connection** | Loose or corroded splice adds resistance | Heat, discoloration, flicker, dim lamps, intermittent operation |

A breaker that trips again after reset means a short, ground fault or overload is still
there. Never reset a breaker repeatedly — report it.

## Putting It Together: An Incandescent Example

The company's incandescent sequence — check the lamp, check power, check the switch, check
the socket, check the thermal protector — is a walk along the path:

1. **Lamp**: continuity test or swap with a known-good lamp.
2. **Power**: hot to neutral at the fixture (qualified person).
3. **Switch**: switch leg voltage with switch on (qualified person), or continuity with power off.
4. **Socket**: with power off, check that the center contact (socket eye) springs up to touch the
   lamp and isn't burnt.
5. **Thermal protector**: with power off and the fixture cool, check continuity. An open
   protector usually means the fixture overheated — a lamp too large, or insulation packed
   around a non-IC fixture. Fix the cause, not just the part.

## Key Takeaways
- Every "check power" step asks where along the path current stops.
- Line is where power comes in; load is where it goes out. Confirm before blaming a device.
- Voltage appears across an open: full voltage across an open switch, blown fuse or tripped thermal protector.
- Hot-to-ground voltage with no hot-to-neutral voltage means an open neutral — report it.
- Continuity tests are done only de-energized and with the part isolated.
