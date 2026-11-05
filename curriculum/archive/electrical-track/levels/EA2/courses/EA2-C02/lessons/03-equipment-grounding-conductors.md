---
title: Equipment Grounding Conductors — Types & Sizing
minutes: 45
video:
video_suggestion: >
  Bench comparison of wiring methods: EMT with setscrew fittings, RMC, flexible metal conduit,
  standard interlocked MC with its green EGC, MC with an aluminum bonding strip listed as an EGC
  (MCAP-type), and AC cable with its bonding strip. Instructor explains which qualify as an EGC
  and under what conditions, then works two Table 250.122 problems including a voltage-drop upsize.
---

## What Counts as an EGC (250.118)

Section 250.118 lists what may serve as an equipment grounding conductor. In summary:

| Type | Qualifies as an EGC? | Notes |
|---|---|---|
| Copper, aluminum or copper-clad aluminum wire (bare, covered or insulated) | Yes | Insulated EGCs are green, or green with yellow stripes, or bare |
| Rigid metal conduit (RMC) | Yes | Fittings must be made up tight |
| Intermediate metal conduit (IMC) | Yes | |
| Electrical metallic tubing (EMT) | Yes | Setscrew or compression fittings must be tight |
| Flexible metal conduit (FMC) | Limited | Only under specific conditions (see below) |
| Liquidtight flexible metal conduit (LFMC) | Limited | Similar conditions, based on trade size and OCPD rating |
| Armor of Type AC cable | Yes | The internal bonding strip works with the armor |
| Standard interlocked-armor Type MC cable | **No** — use the EGC inside | The armor alone is not a listed EGC |
| MC cable whose armor/bonding conductor combination is **listed and identified** as an EGC | Yes | Common in commercial lighting work; check the cable marking |
| Cable trays, cablebus, other listed metal raceways | Under conditions in the code | |

### Flexible Metal Conduit Limits
FMC may serve as the EGC only when it terminates in fittings listed for grounding, the total length
in any ground-return path is **6 ft or less**, the circuit conductors are protected by overcurrent
devices rated **20 A or less**, and the FMC is not installed for flexibility after installation
(such as for vibration or movement). Liquidtight flexible metal conduit has comparable
restrictions based on trade size. If the conditions are not met, pull a wire-type EGC.

> **Field tip:** Many project specifications require a green insulated EGC in **every** raceway,
> even EMT. The NEC is the minimum; the specification may require more. Always read Division 26
> (see EA2-C05) before rough-in.

## Sizing the EGC — Table 250.122

Wire-type EGCs are sized from **Table 250.122** based on the rating of the **overcurrent device
ahead of the circuit** — not on the size of the circuit conductors. Selected copper values:

| OCPD rating (A) | Copper EGC | Aluminum or copper-clad Al EGC |
|---|---|---|
| 15 | 14 AWG | 12 AWG |
| 20 | 12 AWG | 10 AWG |
| 60 | 10 AWG | 8 AWG |
| 100 | 8 AWG | 6 AWG |
| 200 | 6 AWG | 4 AWG |
| 300 | 4 AWG | 2 AWG |
| 400 | 3 AWG | 1 AWG |
| 600 | 1 AWG | 2/0 AWG |
| 800 | 1/0 AWG | 3/0 AWG |
| 1000 | 2/0 AWG | 4/0 AWG |

The EGC never needs to be larger than the circuit conductors supplying the equipment.

**Worked example 1:** A 45 A breaker protects a feeder to a small panel. Table 250.122 rows go
15, 20, 60 … so a 45 A device uses the **60 A row → 10 AWG Cu**.

## Upsizing for Voltage Drop (250.122(B))

When ungrounded conductors are increased in size beyond the minimum needed for ampacity (usually
for voltage drop), the wire-type EGC must be increased **proportionally**, by circular-mil area.
Circular-mil areas come from Chapter 9, Table 8:

| AWG | Circular mils |
|---|---|
| 12 | 6,530 |
| 10 | 10,380 |
| 8 | 16,510 |
| 6 | 26,240 |
| 4 | 41,740 |
| 3 | 52,620 |
| 1/0 | 105,600 |

**Worked example 2 — branch circuit:** A long 20 A circuit is upsized from 12 AWG to 10 AWG Cu
for voltage drop.
1. Ratio = 10,380 ÷ 6,530 = 1.59
2. Minimum EGC from Table 250.122 = 12 AWG = 6,530 cmil
3. New EGC = 6,530 × 1.59 = 10,383 cmil → **10 AWG Cu**

**Worked example 3 — feeder:** A 100 A feeder would use 3 AWG Cu for ampacity, but the designer
specifies 1/0 AWG Cu for voltage drop.
1. Ratio = 105,600 ÷ 52,620 = 2.007
2. Minimum EGC for 100 A = 8 AWG = 16,510 cmil
3. New EGC = 16,510 × 2.007 ≈ 33,140 cmil
4. 6 AWG (26,240) is too small → **4 AWG Cu** (41,740 cmil)

## Multiple Circuits and Parallel Runs

- **Multiple circuits in one raceway (250.122(C)):** A single EGC may serve all of them, sized for
  the **largest** overcurrent device protecting conductors in that raceway or cable.
- **Parallel conductors (250.122(F)):** Where a feeder is run in parallel in multiple raceways,
  an EGC is installed in **each** raceway, and each one is sized from Table 250.122 based on the
  feeder OCPD — it is **not** divided among the raceways.

**Worked example 4:** An 800 A feeder runs in three parallel PVC conduits. Each conduit needs its
own **1/0 AWG Cu** EGC (800 A row), not one-third of that size.

## Making the EGC Connection

- EGCs are connected to boxes with a **green grounding screw**, listed grounding clip or other
  listed device — not with sheet-metal screws (250.8 lists acceptable connection methods).
- At receptacles in metal boxes, a bonding jumper from the box to the receptacle grounding
  terminal is required unless the receptacle is a self-grounding type or the box is surface mounted
  with direct metal-to-metal contact (250.146).
- **Isolated-ground receptacles** (orange triangle) use an insulated EGC that runs back to the
  panel without connecting to the box — but the box and raceway still need their own EGC path.

> **Safety:** Treat every EGC as potentially carrying current until proven otherwise. A downstream
> neutral-ground bond or a fault in progress can put current on the grounding system. De-energize,
> lock out and verify absence of voltage before opening EGC connections.

## Key Takeaways
- 250.118 lists acceptable EGCs; EMT, RMC and IMC qualify, FMC only under limited conditions, and
  standard interlocked MC armor does not.
- Size wire-type EGCs from Table 250.122 using the OCPD rating; use the next higher row when the
  exact rating isn't listed.
- Upsizing phase conductors for voltage drop requires a proportional EGC increase.
- One EGC may serve multiple circuits in a raceway (sized for the largest OCPD); each parallel
  raceway needs its own full-size EGC.
