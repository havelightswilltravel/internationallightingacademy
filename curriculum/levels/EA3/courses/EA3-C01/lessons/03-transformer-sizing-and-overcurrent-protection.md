---
title: Transformer Sizing & Overcurrent Protection
minutes: 50
video:
video_suggestion: >
  Instructor works two transformer protection problems at a table with the NEC open to
  Article 450 and Article 240, then walks to a real installation to show the primary breaker,
  the secondary conductors and the secondary main breaker in the panel they feed.
---

## Sizing a Transformer

The engineer usually sizes transformers, but you need to understand the logic so you can spot
mistakes and answer field questions.

1. Total the connected load in VA (or kVA) that the transformer will serve, applying the
   demand factors the design uses.
2. Allow for continuous loads and future growth (designers often leave 20–25% spare).
3. Pick the next standard size up: common three-phase dry-type sizes include 15, 30, 45, 75,
   112.5, 150, 225 and 300 kVA.
4. Consider harmonic (nonlinear) loads — large amounts of electronic equipment may call for a
   K-rated or harmonic-mitigating transformer.

**Example:** A new panel will serve a calculated 52 kVA of 208Y/120 V load. 52 x 1.25 = 65 kVA.
The next standard size is **75 kVA**.

## Article 450 Overcurrent Protection Concepts

Article 450 (2023 NEC) sets the *maximum* overcurrent protection for transformers, mainly
to protect the transformer itself. Separately, Article 240 protects the **conductors**. You
must satisfy both. For transformers rated 1000 V and less, the code gives two approaches
(Table 450.3(B)):

### Method 1 — Primary protection only
- Primary OCPD rated not more than **125%** of primary FLA.
- If 125% does not correspond to a standard size, the **next higher standard size** is
  permitted when the primary current is 9 A or more.
- Smaller transformers get higher percentages (167% for primary current from 2 A to less than
  9 A; 300% below 2 A).

### Method 2 — Primary and secondary protection
- Secondary OCPD rated not more than **125%** of secondary FLA (next standard size up permitted
  when secondary current is 9 A or more).
- Primary OCPD then may be as large as **250%** of primary FLA.

Method 2 exists because transformer inrush current can trip a primary breaker sized at 125%.
Most commercial installations end up with secondary protection anyway (see below), so Method 2
is common.

Standard OCPD ratings come from 240.6(A) — for example 15, 20, 25, 30, 35, 40, 45, 50, 60, 70,
80, 90, 100, 110, 125, 150, 175, 200, 225, 250, 300, 350, 400 A.

### Worked example — 75 kVA, 480 V delta to 208Y/120 V
Primary FLA = 90.2 A; secondary FLA = 208.2 A.

**Method 1:** 90.2 x 1.25 = 112.8 A → next standard size **125 A** primary OCPD.

**Method 2:** Secondary: 208.2 x 1.25 = 260.3 A → next standard size **300 A** maximum
(many designs use 225 A or 250 A to match the panel; the code sets a maximum, not a minimum).
Primary may then be up to 90.2 x 2.50 = 225.5 A → **225 A** maximum. Note that the next-size-up
allowance in the table applies to the 125% values, not the 250% value.

## Don't Forget the Conductors

Transformer protection is only half the job. The **primary conductors** must have ampacity
not less than the rating of the primary OCPD (unless a specific code rule allows otherwise),
and the **secondary conductors** must be protected per 240.21(C).

- For a delta-wye (208Y/120 V, 4-wire) secondary, the primary OCPD **cannot** protect the
  secondary conductors. 240.4(F) permits primary-side protection only for single-phase 2-wire
  secondaries and three-phase delta-delta 3-wire secondaries, with the protection reflected
  through the turns ratio.
- The secondary conductors must therefore terminate in an OCPD sized for them, within the
  length limits of 240.21(C) — for example the **10 ft** rule (conductors not over 10 ft, with
  ampacity not less than the rating of the device they terminate in, and enclosed in a raceway
  or otherwise as permitted) or the **25 ft** rule for industrial-style installations meeting
  its specific conditions. Read the full conditions in the code; they are tested heavily.

### Worked example — secondary conductors
75 kVA secondary FLA = 208.2 A. The secondary conductors will terminate in a 225 A main
breaker in the panel within 10 ft. Conductors must have an ampacity of at least 225 A at the
termination temperature rating. From Table 310.16, 4/0 AWG copper THWN-2 in the 75 °C column
is rated 230 A — acceptable for a 225 A device with 75 °C terminations, assuming no
adjustment or correction factors apply.

## Location, Ventilation and Access

Key Article 450 installation concepts for dry-type transformers:

- Transformers must be **accessible** for inspection, except as specifically permitted
  (450.13 covers some exceptions, such as certain small units above suspended ceilings).
- Ventilation must remove heat; keep the clearances marked on the transformer, and don't
  block ventilation openings (450.9).
- Dry-type units over 112.5 kVA have additional location and separation requirements from
  combustible material (450.21) — check the code and the listing.
- Working space per 110.26 applies in front of the transformer's terminal compartment and its
  disconnect.

> **Safety:** Transformer inrush, high secondary current and high available fault current
> make transformer secondaries an arc-flash concern. The secondary side of a large dry-type
> often has higher incident energy than the 480 V primary because the primary OCPD may not
> clear a secondary arcing fault quickly. Always read the label on *both* sides.

## Quick Reference Workflow

| Step | Action |
|---|---|
| 1 | Calculate primary and secondary FLA from kVA and voltage |
| 2 | Choose protection method (primary only, or primary and secondary) |
| 3 | Apply 125% / 250% maximums and next-size-up rules where allowed |
| 4 | Size primary conductors for the primary OCPD |
| 5 | Protect secondary conductors per 240.21(C); check 240.4(F) applicability |
| 6 | Check grounding/bonding per 250.30 (Lesson 4) |

## Key Takeaways
- Size transformers from the calculated load plus growth; pick the next standard kVA.
- Primary-only protection: 125% of primary FLA (next size up allowed at 9 A or more).
- Primary and secondary: secondary 125%, primary up to 250%.
- Article 450 protects the transformer; Article 240 protects the conductors — satisfy both.
- Delta-wye secondary conductors need their own OCPD within the 240.21(C) tap-length rules.
- Check the arc-flash label on both sides of the transformer.
