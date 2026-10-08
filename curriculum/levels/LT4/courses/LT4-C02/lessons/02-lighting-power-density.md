---
title: Lighting Power Density (LPD)
minutes: 30
video:
video_suggestion: >
  At a desk with a floor plan, fixture schedule and calculator, a senior tech calculates the LPD
  for a small office suite before and after a proposed LED retrofit, then compares the result to
  an allowance from the adopted code. Show where the input wattage comes from on a spec sheet and
  why lamp wattage is the wrong number.
---

## What LPD Is

**Lighting power density (LPD)** is installed lighting power divided by floor area:

> **LPD (W/ft²) = Total installed luminaire input watts ÷ Floor area (ft²)**

Energy codes set a maximum allowed LPD – the **lighting power allowance** – for each building or
space type. The installed LPD must not exceed the allowance.

## Getting the Watts Right

Use **luminaire input power** – the watts the complete luminaire draws from the circuit, including
driver or ballast losses. Do not use lamp wattage or the "equivalent" wattage on a box.

| Source of wattage | Use it? |
|---|---|
| Manufacturer spec sheet "input watts" at the selected configuration | Yes |
| DLC QPL listed wattage for the exact model | Yes |
| Measured input watts with a power meter | Yes (useful in audits) |
| "Replaces 400 W metal halide" | No |
| Lamp wattage on a fluorescent lamp (e.g., 32 W) | No – a 2-lamp T8 with ballast draws roughly 55–60 W |

For adjustable-output (field-selectable) luminaires, codes generally require using the maximum
possible setting unless the setting is locked or otherwise permanently limited in a way the code
accepts – check the adopted code. Track lighting and plug-in lighting have their own rules.

## Two Prescriptive Methods

### Building Area Method
One allowance (W/ft²) is applied to the whole building based on its type (office, warehouse, retail,
school). Simple, but less flexible.

### Space-by-Space Method
Each space type (open office, corridor, restroom, storage) has its own allowance. Multiply each
allowance by that space's area, add them up for a total allowed wattage, and compare to the total
installed wattage. This method permits trade-offs – a bright lobby can be balanced by efficient
storage rooms – and usually gives a larger total allowance for real buildings. Some codes also
grant **additional allowances** for specific situations such as decorative or display lighting,
only when that lighting is separately controlled.

## Worked Example (Space-by-Space Method)

Illustrative allowances only – **always use the values from the adopted code edition.**

| Space | Area (ft²) | Allowance (W/ft²) | Allowed W |
|---|---|---|---|
| Open office | 3,000 | 0.60 | 1,800 |
| Corridor | 600 | 0.40 | 240 |
| Storage | 400 | 0.40 | 160 |
| **Total** | 4,000 | | **2,200** |

Proposed retrofit:

| Space | Luminaire | Qty | Input W | Installed W |
|---|---|---|---|---|
| Open office | 2x4 LED troffer | 50 | 32 | 1,600 |
| Corridor | 2x2 LED troffer | 10 | 22 | 220 |
| Storage | 4 ft LED strip | 8 | 25 | 200 |
| **Total** | | | | **2,020** |

Total installed (2,020 W) is below total allowed (2,200 W), so the project complies on the
space-by-space method even though storage alone is over its own allowance (200 W vs 160 W) – the
trade-off is permitted in that method. Installed LPD = 2,020 ÷ 4,000 = **0.51 W/ft²**.

## Exterior Lighting Power

Exterior lighting has its own allowances, typically based on **lighting zones** (from very dark rural
zones to high-activity urban zones) and on areas or lengths such as parking area square footage,
building entrance count, and façade area. Some exterior allowances are "tradable" between areas and
some are not. Use the adopted code's exterior tables.

## What This Means in the Field

1. **Install what was submitted.** If the compliance document lists 32 W troffers, installing 40 W
   troffers because they were in stock can push the project over the allowance.
2. **Submit substitutions in writing.** Include the spec sheet so the designer can re-check LPD.
3. **Watch field-adjustable drivers.** Some luminaires ship at a high wattage setting with a switch
   or tool to reduce it. Set them as specified and note the setting.
4. **Audits need real numbers.** When you collect existing-conditions data (skill LT4-S06), record
   actual ballast factor/lamp counts or measured input watts so the "before" LPD and savings are real.

> **Safety:** Measuring luminaire input watts in the field means energized measurement. Use a
> properly rated meter, follow the company's energized-work rules and PPE requirements, and never
> open a luminaire wiring compartment energized to attach clamps – de-energize, apply LOTO, verify
> absence of voltage, install the meter connections, then restore power with covers closed.

## Key Takeaways
- LPD = installed luminaire input watts ÷ floor area; the code allowance is the maximum.
- Always use complete-luminaire input watts, not lamp watts or "equivalent" watts.
- The building area method uses one allowance; the space-by-space method allows trade-offs between spaces.
- Exterior allowances are based on lighting zones and specific areas or lengths.
- Field substitutions and adjustable-wattage settings can break compliance – install what was submitted and document changes.
