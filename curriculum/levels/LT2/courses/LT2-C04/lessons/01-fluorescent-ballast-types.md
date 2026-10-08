---
title: Fluorescent Ballast Types and Starting Methods
minutes: 35
video:
video_suggestion: >
  Bench demo with three two-lamp T8 fixtures side by side: instant-start, rapid-start and
  programmed-start. Show the start delay difference, pull one lamp from each to show
  parallel vs series behavior, and use a continuity tester to show shunted vs non-shunted
  sockets. Close on reading a ballast label line by line.
---

## What a Fluorescent Ballast Does

In LT1 you replaced ballasts like-for-like under supervision. To troubleshoot and select
them correctly you need to know **how** they work. A fluorescent ballast:

1. **Provides a high starting voltage** to strike an arc through the lamp's gas.
2. **Limits current** once the arc is established. A fluorescent lamp has *negative
   resistance* — once lit, it would draw ever-increasing current until it destroyed itself
   without a ballast.
3. **Heats the cathodes** (in some designs) to make starting easier and extend lamp life.

## Magnetic vs Electronic

| | Magnetic | Electronic |
|---|---|---|
| Operating frequency | 60 Hz | High frequency (typically 20 kHz or more) |
| Flicker/hum | Visible flicker possible, audible hum | Essentially no visible flicker, quiet |
| Efficiency | Lower | Higher |
| Weight | Heavy (iron core and copper windings) | Light |
| Status | Federal efficiency standards have largely eliminated new magnetic ballasts for common lamps | Standard for remaining fluorescent service |

You will still find magnetic T12 systems in older buildings. Most T12 lamps and magnetic
ballasts for them are no longer manufactured for general use because of U.S. DOE efficiency
standards. When a T12 magnetic ballast fails, the usual answer is an LED retrofit (LT2-C05)
or a T8 conversion — discuss options with your lead and the customer.

## The Three Electronic Starting Methods

### Instant Start (IS)
- Applies a high voltage (often 600 V or more) to strike the lamp **without preheating** the
  cathodes.
- Starts almost instantly; most efficient (no cathode heating power while running).
- Each start erodes the cathodes more, so **lamp life drops with frequent switching** —
  poor match for occupancy sensors.
- Usually wired in **parallel**: if one lamp fails, the others stay lit.
- Uses **shunted** sockets (the two contacts in each socket are connected together; the lamp
  sees a single connection at each end).

### Rapid Start (RS)
- Heats cathodes **continuously** while starting and running; lamp starts in about a second.
- Traditionally wired in **series** (especially magnetic RS): one failed lamp can put out
  both lamps on the ballast.
- Requires **non-shunted** sockets — the ballast needs two separate wires to each cathode.
- Needs the fixture to be grounded; the grounded metal acts as a starting aid.

### Programmed Start (PS)
- **Preheats** the cathodes to a controlled temperature, then strikes the lamp. Start delay
  is typically about 0.5–1.5 seconds.
- Minimizes cathode wear per start — **best choice for occupancy-sensor-controlled or
  frequently switched spaces**, and for T5 lamps.
- Usually series wiring (parallel programmed-start ballasts exist — read the label).
- Requires **non-shunted** sockets.

| Feature | Instant start | Rapid start | Programmed start |
|---|---|---|---|
| Cathode preheat | No | Continuous | Controlled preheat, then reduced/off |
| Start time | Instant | ~1 s | ~0.5–1.5 s |
| Frequent switching | Poor | Fair | Best |
| Typical wiring | Parallel | Series | Series (some parallel) |
| Sockets | Shunted | Non-shunted | Non-shunted |
| Typical wires per lamp end | 1 | 2 | 2 |

> **Safety:** Ballast output voltage can exceed 600 V at the sockets during starting, even
> on a 120 V circuit. Never touch sockets or lamp pins with the circuit energized, and lock
> out before relamping when the work order or company procedure requires it (LT1-C06).

### Preheat (starter) systems

Very old fixtures use a separate **glow-switch starter** (a small can, e.g., FS-2 or FS-4)
that preheats the cathodes and then opens. Flickering on/off attempts with a starter
fixture usually mean a bad starter or lamp. These are rare and are prime retrofit
candidates.

## Reading a Ballast Label

| Label item | What to check |
|---|---|
| Lamp type and quantity (e.g., "(2) F32T8") | Must match the lamps installed; some ballasts list several options |
| Input voltage (e.g., "120–277 V") | Universal-voltage ballasts accept a range; multi-tap ballasts have separate leads |
| Starting method (IS, RS, PS) | Must match socket type |
| Ballast factor (BF) | Light output relative to a reference ballast: low ≈ 0.77, normal ≈ 0.87–0.88, high ≈ 1.15–1.20 |
| Input watts and current | Use for circuit-load estimates |
| Minimum starting temperature | Standard ≈ 50°F (10°C); cold-weather ballasts start lower (often 0°F / −18°C) |
| Wiring diagram | Follow it exactly — colors vary between manufacturers |
| Sound rating, Class P, "No PCBs" | Class P = internal thermal protection. "No PCBs" marking (or absence on pre-1979 units) — see LT1-C06 |

**Ballast factor matters**: replacing a normal-BF ballast with a low-BF one reduces light
output (and watts) by about 10%. Replacing with high BF increases both. Match the original
unless the customer has approved a change.

## Matching Ballast, Lamp and Socket

Most fluorescent "mystery problems" after a repair are mismatches:
- T8 lamps on a T12 ballast (or vice versa) — short lamp life, poor starting.
- Rapid or programmed-start ballast wired to **shunted** sockets — the ballast's two cathode
  leads are shorted together; lamps won't start or the ballast fails.
- Instant-start ballast on **non-shunted** sockets — some manufacturers permit this with
  specific wiring; others do not. Follow the ballast manufacturer's instructions, and when in
  doubt install the socket type the ballast diagram calls for.
- Wrong lamp length or wattage (e.g., 25 W or 28 W "energy saver" T8 lamps on a ballast not
  rated for them).

## Key Takeaways
- Ballasts strike the lamp, limit current and (sometimes) heat the cathodes.
- Instant start: no preheat, parallel, shunted sockets, poor for frequent switching.
- Rapid start: continuous heating, series, non-shunted sockets, needs grounded fixture.
- Programmed start: controlled preheat — best for occupancy sensors; non-shunted sockets.
- Read the label: lamp type, voltage, starting method, ballast factor, minimum starting temperature, wiring diagram.
- Ballast output can exceed 600 V — never touch sockets energized.
