---
title: Pole Light Out - Whole Circuit vs. Single Pole
category: exterior
tags: [exterior, pole-light, site-lighting, handhole, fuse, underground, half-splitting]
levels: [LT3, LT4]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- One pole light dark while others on the circuit work
- Every light on a circuit dark
- All poles "downstream" of a certain point dark (poles fed in a daisy chain)
- Lights on some heads of a multi-head pole but not others

## Safety first

- **De-energize, LOTO and verify absence of voltage** before opening pole handholes, in-line
  fuse holders, or fixture wiring. Site lighting often runs at **277 V or 480 V**.
- Exterior circuits may be fed from more than one panel or controlled by a contactor in a
  separate enclosure - verify every conductor in the handhole.
- Energized testing is **qualified persons only**, with risk assessment, appropriate PPE and
  an energized-work justification per NFPA 70E.
- **Inspect the pole before working on or near it:** corroded base, loose or missing anchor
  nuts, cracked concrete base, leaning pole, vehicle impact damage. Do not climb or set a
  MEWP against a damaged pole.
- MEWP training and inspection, fall protection, traffic control in parking lots, and
  minimum approach distances from overhead power lines.
- An open handhole with exposed conductors is a public hazard - do not leave it unattended
  or uncovered.

## Tools needed

- CAT III multimeter, clamp meter, known source
- Replacement in-line fuses (correct type and rating for the fuse holder and fixture)
- Megohmmeter (insulation resistance tester) for suspected underground faults
- Site drawing / lighting plan showing circuits and pole feed order
- MEWP, traffic cones, flashlight

## Likely causes

**Single pole out:**

| Cause | How to confirm | Fix |
|---|---|---|
| Fixture failure (driver/lamp/ballast) | Voltage at fixture input, no light | See LED/HID guides |
| Blown in-line fuse in pole base | Fuse tests open (de-energized) | Find cause (shorted driver/wiring), then replace with the correct fuse |
| Fixture-mounted photocell failed | Shorting cap test | See photocell guide |
| Open connection in handhole (corroded splice) | Voltage at handhole but not at fixture, or none in this handhole | Remake with wet-location/direct-burial rated splices |
| Wiring damaged inside the pole | Continuity test pole base to fixture | Replace pole wiring |

**Whole circuit (or downstream) out:**

| Cause | How to confirm | Fix |
|---|---|---|
| Photocell, time clock or contactor | Contactor not closing; see controls guides | Repair control |
| Breaker tripped | Panel | Investigate before resetting - possible ground fault |
| Open conductor/splice between poles | Voltage present at last working pole, absent at next | Repair splice or conductor |
| Underground ground fault or short | Breaker trips on reset; low insulation resistance | See underground ground fault guide |

## Step-by-step diagnosis

1. Map the outage on the site plan: which poles are out, which work, and which circuit and
   feed order each pole is on. The pattern tells you where to start.
2. **Single pole:** inspect pole and base condition, then work at that pole: fixture, photocell,
   fuses, handhole splices.
3. **Whole circuit:** start at the source - breaker, contactor, photocell/clock. Use the HOA
   switch (if present) to separate control faults from power faults.
4. **Downstream group out:** the open is between the last working pole and the first dead one.
5. **De-energize, LOTO, verify absence of voltage.** Open the handhole. Inspect splices for
   corrosion, water, burned insulation. Test fuses for continuity (expected ~0 Ω; open = blown).
6. **(Qualified, energized, with PPE)** Measure voltage at the handhole terminals (line to
   neutral, or line to line on 480 V/208 V circuits). Expected: circuit voltage at a working
   pole's handhole; zero where the feed is open.
7. If a fuse is blown, find out why (shorted driver, pinched wire in the pole arm) before
   replacing it with the same type and rating.
8. If the breaker trips on reset or insulation resistance is low, stop and use the
   underground ground fault guide.
9. Close up handholes with covers secured; restore and verify all poles.

## When to escalate

- Pole structural damage (lean, corrosion, loose anchors, vehicle hit) - make safe and report
- Underground cable faults requiring excavation (811 locate required before digging)
- Repeated outages after storms (surge, water intrusion)

## Documentation

- Pole IDs/locations and circuit numbers affected; outage pattern
- Pole/base condition observations (with photos)
- Voltages measured, fuses replaced (type/rating), splices repaired
- Underground problems found and recommended next steps
