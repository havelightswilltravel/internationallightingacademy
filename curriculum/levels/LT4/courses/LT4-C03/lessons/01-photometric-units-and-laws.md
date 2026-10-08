---
title: Photometric Units & the Laws of Light
minutes: 25
video:
video_suggestion: >
  In a dark warehouse aisle, a tech holds a light meter directly under a high bay at floor level,
  then at 5 ft and 10 ft lower mounting distances using a lift-mounted test fixture (or a portable
  work light on a stand) to demonstrate the inverse square law, then tilts the meter to show the
  cosine effect. On-screen graphics show the numbers.
---

## Four Quantities Every Senior Tech Must Know

In LT1 you learned lumens, watts and efficacy. Photometry adds the quantities that describe **where
light goes** and **how bright surfaces look**.

| Quantity | What it measures | U.S. unit | SI unit | Field example |
|---|---|---|---|---|
| **Luminous flux** | Total light output of a source | lumen (lm) | lumen (lm) | A troffer emits 4,000 lm |
| **Luminous intensity** | Light in a particular direction | candela (cd) | candela (cd) | A spotlight beam is 10,000 cd at center |
| **Illuminance** | Light arriving on a surface | footcandle (fc) = lm/ft² | lux (lx) = lm/m² | 30 fc on a desk |
| **Luminance** | Light leaving a surface toward the eye ("brightness") | cd/ft² (rarely used) | cd/m² (nits) | A glaring lens at 20,000 cd/m² |

**Conversion:** 1 fc = 10.764 lux. In the field, multiply fc by about **10.76** to get lux, or
divide lux by about 10.76 to get fc. (Using 10 for a quick estimate is fine for conversation, not for
a report.)

The light meter you use in a survey measures **illuminance**. It does not measure how bright a
surface looks – a black floor and a white floor under the same lighting read the same footcandles but
look very different. That is why reflectances matter in design.

## The Inverse Square Law

For a point source, illuminance falls off with the square of distance:

> **E = I ÷ d²**
> E = illuminance (fc), I = intensity toward the point (cd), d = distance (ft)

Example: a downlight produces 2,000 cd straight down. At 8 ft: E = 2,000 ÷ 64 = **31 fc**. At 16 ft
(twice as far): E = 2,000 ÷ 256 = **7.8 fc** – one quarter the light.

What this means in the field:

- **Raising mounting height** dramatically lowers illuminance directly below unless optics or
  lumens change. Swapping a 20 ft high bay into a 35 ft ceiling with the same optics will
  disappoint.
- **Lowering** a pendant even a couple of feet noticeably increases task illuminance and glare.
- The law is accurate when distance is at least about **five times** the largest dimension of the
  luminaire. Very close to a large troffer, it overestimates the falloff.

## The Cosine Law

When light strikes a surface at an angle, it spreads over a larger area, so illuminance drops by
the cosine of the angle from perpendicular (θ):

> **E = (I × cos θ) ÷ d²**

At 60° off perpendicular, cos 60° = 0.5, so the surface receives half the light it would get if the
same light hit it straight on. That is why meters must be held **level** on the work plane, and why
quality meters are **cosine-corrected** – their sensor is designed to read correctly when light
arrives from wide angles.

## Light Loss Factors

Lighting designs are calculated for **maintained** illuminance, not initial. Light output drops over
time due to:

| Factor | Cause | Technician's influence |
|---|---|---|
| Lamp/LED lumen depreciation (LLD) | Source ages (LED L70 concept from LT3-C01) | Replace per design life; note age in surveys |
| Luminaire dirt depreciation (LDD) | Dust on lenses/reflectors | Cleaning restores light |
| Room surface dirt | Dirty walls/ceilings reflect less | Note in reports |
| Ballast/driver factor | Output relative to reference | Use correct ballast factor in audits |

Design light loss factors often total 0.7–0.9. A brand-new installation measuring 20–30% above the
maintained target may be exactly right.

## Reading a Photometric Report

Manufacturers publish photometry tested to **IES LM-79** (for LED products), usually as an IES file
(.ies) and a report with:

- **Candela distribution** – intensity at each angle (polar plot).
- **Zonal lumen summary** – where the lumens go (downward, upward, at high angles).
- **Spacing criterion (SC)** – the maximum ratio of spacing to mounting height for reasonably uniform
  light. Example: SC 1.2 at 10 ft above the work plane allows spacing up to about 12 ft.
- **Coefficient of utilization (CU) table** – fraction of lumens reaching the work plane in rooms of
  different shapes and reflectances.

You will not always do lighting calculations, but you should be able to explain why a fixture with a
narrow distribution creates "scalloping" when spaced too far apart.

> **Safety:** Measuring light levels around energized equipment, in active warehouses or from a
> MEWP is still field work. Use your LT1–LT3 safety practices: PPE, traffic awareness around
> forklifts, and MEWP rules if you must take readings at height.

## Key Takeaways
- Lumens = total output; candela = intensity in a direction; footcandles/lux = light on a surface; luminance = brightness seen by the eye.
- 1 fc = 10.764 lux.
- Inverse square law: double the distance, one quarter the illuminance.
- Cosine law: angled light delivers less illuminance – keep the meter level and use a cosine-corrected meter.
- Designs target maintained illuminance; new systems typically read higher than the maintained target.
- Photometric reports (IES LM-79) show candela distribution, spacing criterion and CU data.
