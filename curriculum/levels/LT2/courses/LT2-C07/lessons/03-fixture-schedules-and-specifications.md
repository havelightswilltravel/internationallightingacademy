---
title: Fixture Schedules and Specifications
minutes: 30
video:
video_suggestion: >
  A tech compares a fixture schedule line on the drawing with the fixture's carton label and
  its submittal cut sheet, checking catalog number segments one by one (size, lumens, CCT,
  voltage, driver, options). Shows how a mismatch in the voltage or dimming option segment is
  caught before installation.
---

## The Fixture Schedule

The **fixture schedule** (or luminaire schedule) is a table, usually on an electrical schedule
sheet or the lighting plan sheet, that describes every fixture type on the project. The type
tags on the plan point here.

### Typical columns

| Column | What it tells you |
|---|---|
| Type | Tag used on the plan (A, B, F1...) |
| Description | "2x4 recessed LED troffer, center basket," "6-in LED downlight," etc. |
| Manufacturer / catalog number | Basis-of-design product and its full catalog string |
| Lamp / source | LED, lumens, CCT (e.g., 3500 K), CRI |
| Voltage | 120, 277, 120–277 (universal), 347, 480 |
| Watts / VA | Input power — used for circuit loading |
| Mounting | Recessed, surface, pendant (with length), wall, pole (with height) |
| Driver / dimming | Non-dim, 0–10 V, DALI, line-voltage phase dimming, emergency driver |
| Notes | Options, emergency battery, sensors, finish, special requirements |

### Example

| Type | Description | Manufacturer / Catalog | Source | Volts | W | Mounting | Notes |
|---|---|---|---|---|---|---|---|
| A | 2x4 LED troffer | Basis-of-design: (mfr) 2TL4-40L-35K-MVOLT-0-10V | LED 4000 lm, 3500 K, 80 CRI | 120–277 | 32 | Recessed lay-in | 0–10 V dimming |
| A-EM | Same as A with emergency driver | ...-EL14 | Same | 120–277 | 32 | Recessed lay-in | 90-min emergency driver; connect to unswitched leg |
| D | 6-in LED downlight | ... | 1500 lm, 3500 K | 120–277 | 15 | Recessed | IC-rated where in insulated ceilings |
| X | Exit sign | ... | LED | 120–277 | 2 | Universal | Self-test, battery, faces/arrows per plan |

(The catalog strings above are illustrative only.)

### Decoding catalog numbers

Manufacturers build catalog numbers from **segments**: series, size, lumen package, color
temperature, voltage, driver, options. The manufacturer's spec sheet has a decoder table.
Before installing, **compare every segment** on the carton to the schedule. Common catches:
- Voltage: "120" fixture delivered for a 277 V circuit (or "MVOLT"/"UNV" universal is fine
  for both)
- Dimming: non-dimming driver where 0–10 V is scheduled
- CCT mismatch between areas (3000 K vs 4000 K side by side is very noticeable)
- Missing emergency option on a fixture shown shaded on the plan
- Wrong mounting kit or ceiling type (lay-in grid vs drywall flange)

> **Safety:** Installing a 120 V-only fixture on a 277 V circuit will destroy the driver and
> can cause smoke or fire. Check the fixture label voltage against the circuit voltage
> before connecting — every time.

## "Basis of Design," Substitutions and Submittals

- The schedule usually lists a **basis-of-design** product and sometimes "or approved equal"
  alternatives.
- The contractor submits **submittals** (cut sheets for the exact products to be supplied)
  for the engineer's review. Approved submittals are the best reference for what's actually
  being installed.
- If the fixture on site doesn't match the schedule or the approved submittal, **stop and
  tell your lead** before installing. Field substitutions without approval can cost the
  company money and the customer a rebate.

## Specifications

Larger projects include a **project manual** (specifications), written in sections. In the
CSI MasterFormat system, electrical work is **Division 26**. Lighting-related sections
commonly include:

| Section | Title |
|---|---|
| 26 05 xx | Common work results for electrical (wire, boxes, grounding, identification) |
| 26 09 23 | Lighting control devices |
| 26 51 00 | Interior lighting |
| 26 56 00 | Exterior lighting |

Emergency lighting and lighting controls may also appear in their own sections.

### What specs tell you that drawings don't

- Required **quality standards** (listings, DLC qualification, warranty)
- **Installation requirements** (support methods, seismic bracing, independent support wires,
  aiming)
- **Wiring method** requirements (e.g., MC cable allowed only for fixture whips up to 6 ft;
  minimum 12 AWG; color coding)
- **Testing and commissioning** requirements (LT5-C02)
- **Closeout** requirements: spare parts, attic stock, as-builts, O&M manuals

### Order of precedence

When drawings and specifications conflict, the contract usually defines which governs (often
the specifications govern over drawings, and larger-scale details govern over smaller-scale
plans). **Don't decide this yourself in the field** — note the conflict and ask your lead,
who may submit an RFI (Request for Information) to the engineer.

## Key Takeaways
- The fixture schedule describes each fixture type; plan type tags point to it.
- Compare every catalog-number segment on the carton to the schedule — especially voltage, dimming, CCT and emergency options.
- Never connect a fixture whose label voltage doesn't match the circuit.
- Approved submittals show what's actually being supplied; field substitutions need approval.
- Division 26 specifications (e.g., 26 51 00 Interior Lighting) add quality, installation, wiring and closeout requirements.
- When drawings and specs conflict, ask — don't decide in the field.
