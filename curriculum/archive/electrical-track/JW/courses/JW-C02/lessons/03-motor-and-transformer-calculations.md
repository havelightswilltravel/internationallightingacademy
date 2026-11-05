---
title: Motor and Transformer Calculations
minutes: 50
video:
video_suggestion: >
  The instructor sizes a complete 25-hp, 460-V motor branch circuit from the code tables on a
  document camera — conductors, short-circuit protection with next-size-up, and overloads —
  then sizes a three-motor feeder. Second half: primary and secondary currents and overcurrent
  protection for a 45-kVA, 480-V delta to 208Y/120-V transformer using Table 450.3(B).
---

## Motor Circuit Sizing (Article 430)
The single most important rule: **use the NEC tables for full-load current (FLC)**, not the
nameplate, when sizing conductors and short-circuit/ground-fault protection (430.6(A)(1)). Use
the **nameplate full-load amps (FLA)** for **overload** protection.

| Table | Use |
|---|---|
| 430.248 | Single-phase AC motor FLC |
| 430.250 | Three-phase AC motor FLC |
| 430.52 | Maximum branch-circuit short-circuit and ground-fault protective device rating (% of FLC) |

### Selected Three-Phase FLC (Table 430.250)
| hp | 208 V | 230 V | 460 V |
|---|---|---|---|
| 5 | 16.7 | 15.2 | 7.6 |
| 7½ | 24.2 | 22 | 11 |
| 10 | 30.8 | 28 | 14 |
| 15 | 46.2 | 42 | 21 |
| 20 | 59.4 | 54 | 27 |
| 25 | 74.8 | 68 | 34 |
| 30 | 88 | 80 | 40 |

### Selected Single-Phase FLC (Table 430.248)
| hp | 115 V | 230 V |
|---|---|---|
| 1 | 16 | 8 |
| 2 | 24 | 12 |
| 3 | 34 | 17 |
| 5 | 56 | 28 |

### The Four Steps
1. **Branch-circuit conductors:** at least **125% of FLC** (430.22).
2. **Short-circuit and ground-fault protection (430.52):** not more than the Table 430.52 % of
   FLC. If that does not correspond to a standard size, the **next higher standard size is
   permitted** (430.52(C)(1) Exception No. 1).

| Device | Max % of FLC (typical squirrel-cage motors) |
|---|---|
| Nontime-delay fuse | 300% |
| Dual-element (time-delay) fuse | 175% |
| Instantaneous-trip breaker | 800% |
| Inverse time breaker | 250% |

3. **Overload protection (430.32):** based on **nameplate FLA** — **125%** for motors with a
   marked service factor of 1.15 or more or a marked temperature rise of 40°C or less; **115%**
   for all others.
4. **Feeder:** conductors at 125% of the largest motor FLC plus the sum of the other motors' FLC
   (430.24); feeder protective device not larger than the largest branch-circuit device plus
   the sum of the other FLCs (430.62) — **no next-size-up**; round **down**.

### Example 1: 25-hp, 460-V, 3-Phase Motor
Nameplate FLA 32 A, service factor 1.15. Inverse time breaker; 75°C terminations.
- FLC (Table 430.250): **34 A**
- Conductors: 34 × 1.25 = 42.5 A → **8 AWG Cu** THWN (50 A at 75°C)
- Inverse time breaker: 34 × 2.50 = 85 A → not standard → next size up **90 A**
- Overload: 32 × 1.25 = **40 A**

### Example 2: Feeder for Three Motors (460 V, 3-phase)
Motors: 25 hp (34 A, 90-A breaker), 10 hp (14 A), 5 hp (7.6 A).
- Feeder conductor ampacity: (34 × 1.25) + 14 + 7.6 = 42.5 + 21.6 = **64.1 A** → 6 AWG Cu (65 A
  at 75°C)
- Feeder OCPD: 90 + 14 + 7.6 = 111.6 A → round **down** to **110 A**

## Transformer Calculations
### Currents
| System | Formula |
|---|---|
| Single-phase | I = VA ÷ E |
| Three-phase | I = VA ÷ (E × 1.732) |

Turns ratio = primary voltage ÷ secondary voltage. Current changes inversely: a 4:1 step-down
transformer has 4 times the current on the secondary.

### Example 3: 45-kVA, 480-V Delta to 208Y/120-V
- Primary: 45,000 ÷ (480 × 1.732) = 45,000 ÷ 831.4 = **54.1 A**
- Secondary: 45,000 ÷ (208 × 1.732) = 45,000 ÷ 360.3 = **124.9 A**

### Overcurrent Protection — Transformers 1000 V and Less (Table 450.3(B))
| Protection method | Primary (currents ≥ 9 A) | Secondary (≥ 9 A) |
|---|---|---|
| Primary only | 125% | Not required |
| Primary and secondary | Up to 250% | 125% |

Where 125% of rated current does not correspond to a standard rating, the **next higher
standard rating is permitted** (Table 450.3(B), Note 1). Lower percentages apply for currents
below 9 A.

**Example 3, continued:**
- Primary-only: 54.1 × 1.25 = 67.6 A → next higher standard size **70 A**
- With secondary protection: primary up to 54.1 × 2.50 = 135.3 A → **125 A** (do not exceed
  250%); secondary 124.9 × 1.25 = 156.1 A → next higher standard size **175 A**

Remember that the secondary **conductors** have their own rules (240.21(C)), and the conductors
must be protected per their ampacity — transformer protection alone does not satisfy 240.4.

### Example 4: Single-Phase
A 25-kVA, 480-V to 240/120-V single-phase transformer:
- Primary: 25,000 ÷ 480 = **52.1 A**
- Secondary: 25,000 ÷ 240 = **104.2 A**
- Turns ratio: 480 ÷ 240 = **2:1**

## Quick Sanity Checks
| Rule of thumb | Approximate |
|---|---|
| 460-V, 3-phase motor | ~1.4 A per hp |
| 230-V, 3-phase motor | ~2.8 A per hp |
| 480-V, 3-phase transformer | ~1.2 A per kVA |
| 208-V, 3-phase transformer | ~2.8 A per kVA |

> **Safety:** Motor circuits can have multiple sources of energy: the motor disconnect, control
> power from a separate source, stored energy in VFD capacitors, and mechanical energy in the
> driven load. Lock out all sources, wait the VFD's marked discharge time, and verify absence of
> voltage before working. Transformers can backfeed — lock out both primary and secondary
> sources where a secondary source exists.

## Key Takeaways
- Use table FLC for conductors and short-circuit protection; nameplate FLA for overloads.
- Conductors: 125% FLC. Inverse time breaker: 250%, next size up permitted. Dual-element fuse:
  175%.
- Overloads: 125% (SF ≥ 1.15 or temp rise ≤ 40°C) or 115% otherwise.
- Feeder: 125% of largest + others; feeder OCPD rounds down.
- Transformer I = VA ÷ E (1φ) or VA ÷ (E × 1.732) (3φ); primary-only protection 125% with next
  size up.
