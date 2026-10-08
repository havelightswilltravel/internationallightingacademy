---
title: Load Calculation Review for the Exam
minutes: 45
video:
video_suggestion: >
  A timed walkthrough of a complete dwelling standard-method calculation and an optional-method
  calculation for the same house, using a printed one-page worksheet, followed by three short
  commercial problems (office lighting, receptacles, and kitchen equipment). The clock runs on
  screen to show the goal of finishing a dwelling calculation in under ten minutes.
---

## Exam Approach
Load calculation questions usually ask for one piece (for example, "the demand load for the
range") or the final service size. Work from a memorized worksheet so you never skip a line.
This lesson uses **2023 NEC Article 220** numbering. If your exam is on the **2026 NEC**, the
same methods appear in **Article 120** with new section numbers — re-tab accordingly. Your
state's bulletin names the edition.

## Dwelling Standard Method — One-Page Worksheet
| Line | Item | Rule (2023 NEC) |
|---|---|---|
| 1 | General lighting | 3 VA/ft², outside dimensions (220.41) |
| 2 | Small-appliance circuits | 1,500 VA each, minimum 2 (220.52(A)) |
| 3 | Laundry circuit | 1,500 VA (220.52(B)) |
| 4 | Apply demand to 1+2+3 | First 3,000 at 100%, 3,001–120,000 at 35%, rest at 25% (Table 220.42) |
| 5 | Fastened-in-place appliances | 75% if four or more (220.53) |
| 6 | Dryer | 5,000 VA or nameplate, larger (220.54) |
| 7 | Range | Table 220.55 (one ≤ 12 kW = 8 kW, Col. C) |
| 8 | Heat or A/C | Larger of the two (220.60) |
| 9 | EVSE | 7,200 VA or nameplate, larger (220.57) |
| 10 | Largest motor | Add 25% of the largest motor if not already included (220.50, 430.24) |
| 11 | Total ÷ 240 V | Service amperes |

### Practice Problem A (Standard Method)
1,500 ft² dwelling; 2 small-appliance circuits; 1 laundry; 1,200-VA dishwasher; 4,500-W water
heater; 700-VA disposal; 5,500-W dryer; 11-kW range; 5,000-VA A/C; 6,000-W electric heat.

| Line | Calculation | VA |
|---|---|---|
| 1–3 | 4,500 + 3,000 + 1,500 | 9,000 |
| 4 | 3,000 + (6,000 × 0.35) | 5,100 |
| 5 | 3 appliances (no 75%) = 1,200 + 4,500 + 700 | 6,400 |
| 6 | Dryer (nameplate larger) | 5,500 |
| 7 | Range (≤ 12 kW) | 8,000 |
| 8 | Heat 6,000 vs. A/C 5,000 | 6,000 |
| | **Total** | **31,000 VA** |

31,000 ÷ 240 = **129.2 A** → minimum standard service **150 A**. Service conductors (83% rule,
310.12): 150 × 0.83 = 124.5 A → **1 AWG Cu** (130 A at 75°C) or **2/0 Al** (135 A).

**Trap check:** only three fastened-in-place appliances — no 75% demand.

## Dwelling Optional Method (220.82)
| Step | Rule |
|---|---|
| General loads | 3 VA/ft² + 1,500 VA per small-appliance and laundry circuit + nameplate of all fastened-in-place, permanently connected, or dedicated-circuit appliances (range, dryer, water heater, etc.) |
| Demand | First 10 kVA at 100%, remainder at 40% |
| Heat/A/C | Largest of: A/C 100%; heat pump options; electric heat 65% (< 4 separately controlled units) or 40% (≥ 4 units) |

### Practice Problem B (Same House, Optional Method)
- General: 4,500 + 3,000 + 1,500 + 1,200 + 4,500 + 700 + 5,500 + 11,000 = **31,900 VA**
- Demand: 10,000 + (21,900 × 0.40) = 10,000 + 8,760 = **18,760 VA**
- Heat/A/C: A/C 5,000 at 100% = 5,000; electric heat (assume baseboard in 5 rooms, separately
  controlled = 4 or more units) 6,000 × 0.40 = 2,400 → larger = **5,000 VA**
- Total = 23,760 VA ÷ 240 = **99 A** → minimum **100 A** (also the 230.79(C) minimum for a
  one-family dwelling).

## Range Demand Quick Reference (Table 220.55)
| Situation | Demand |
|---|---|
| One range ≤ 12 kW | 8 kW (Column C) |
| One range 16 kW | 16 − 12 = 4 kW over → +20% → 9.6 kW |
| Cooktop 6 kW + oven 4 kW, same room | Combine = 10 kW → treat as one range → 8 kW |
| One appliance 3½–8¾ kW | Column B: 80% of nameplate |

## Commercial Quick Reference
| Item | Rule (2023 NEC) |
|---|---|
| General lighting | Table 220.12 unit load × ft² (office 1.3, retail 1.9, school 1.5, warehouse 1.2 VA/ft²); continuous → 125% |
| Receptacles | 180 VA per yoke; first 10 kVA at 100%, rest at 50% (Table 220.44) |
| Office/bank receptacles | Larger of 180 VA each or 1 VA/ft² (220.14(K)) |
| Show window | 200 VA per linear ft |
| Sign outlet | 1,200 VA minimum |
| Multioutlet assembly | 180 VA per 5 ft (or per 1 ft where heavy simultaneous use) |
| Kitchen equipment | 3 units 90%, 4 = 80%, 5 = 70%, 6+ = 65%; not less than two largest |
| 3-phase amperes | VA ÷ (E × 1.732) |

### Practice Problem C
A 4,000 ft² retail store: lighting? 4,000 × 1.9 = 7,600 VA; as a continuous load for feeder
sizing, × 1.25 = **9,500 VA**.

### Practice Problem D
A restaurant kitchen has four units: 10 kW, 8 kW, 5 kW, 3 kW = 26 kW. Four units → 80% → 20.8
kW. Two largest = 18 kW. Use **20.8 kW**.

### Practice Problem E
Total commercial load 150 kVA at 480Y/277 V, 3-phase: 150,000 ÷ (480 × 1.732) = 150,000 ÷ 831.4
= **180.4 A** → **200-A** service.

> **Safety:** Every calculation on paper eventually becomes energized equipment. An undersized
> service or feeder overheats; an incorrect neutral calculation can overload a shared neutral.
> When verifying existing loads in the field with clamp meters, follow NFPA 70E — measure only
> through closed, intact equipment or with the appropriate PPE and authorization.

## Key Takeaways
- Memorize a one-page worksheet for the standard method and follow it every time.
- Fastened-in-place 75% applies only with four or more appliances.
- Optional method: nameplate everything, 10 kVA at 100% and the rest at 40%, plus the largest
  heat/A/C option.
- Commercial: occupancy unit loads, 180 VA receptacles with 10 kVA/50% demand, kitchen
  equipment demand, three-phase current.
- Confirm your exam's NEC edition — the 2026 NEC moved these rules to Article 120.
