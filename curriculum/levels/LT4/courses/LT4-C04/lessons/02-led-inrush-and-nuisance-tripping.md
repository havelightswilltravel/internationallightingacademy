---
title: LED Inrush Current & Nuisance Tripping
minutes: 35
video:
video_suggestion: >
  On a training board with a 20 A breaker, a relay and 20 LED drivers, a qualified tech uses a
  clamp meter's inrush function to capture the switch-on spike (show the number on screen), then
  splits the drivers into two staggered groups to show the reduction. Follow with a short field
  segment walking through the nuisance-tripping diagnostic checklist at a real panel (covers on,
  narration only).
---

## What Inrush Current Is

When an LED driver is first energized, its input capacitors charge almost instantly. For a brief
moment – typically **microseconds to a few milliseconds** – the driver can draw a current spike many
times its normal running current. Depending on the driver, a single unit's peak can be tens of amps.
Put 30 or 40 drivers on one circuit, switch them on together, and the combined peak can be very large
even though the steady-state load is only a few amps.

Inrush depends on:
- Driver design (some include inrush limiting; check the spec sheet for peak current and duration)
- **Where on the AC waveform** the switch closes – closing at the voltage peak produces the worst
  spike; closing near zero produces the least
- Source impedance – short, heavy circuits close to the transformer deliver bigger spikes
- Number of drivers switched at the same instant

## What Inrush Can Do

| Problem | Mechanism |
|---|---|
| Breaker trips on switch-on | Peak exceeds the breaker's instantaneous (magnetic) trip level |
| Relay or sensor contacts weld closed | Arcing during high-current make welds contacts; lights won't turn off |
| Early failure of switches and power packs | Contacts erode from repeated inrush |
| Occupancy sensors that "stick on" | Welded internal relay |
| Lights flicker as other loads start | Voltage sag on shared circuits |

The industry standard **NEMA 410** defines an inrush test waveform for electronic drivers and ballasts
so that relays, switches and sensors can be rated for these loads. When selecting control devices,
use ratings for **"electronic ballast/LED driver"** loads, not just the resistive or incandescent rating.

## Breaker Basics for Lighting

- A standard thermal-magnetic breaker has a **thermal** (overload, time-delay) element and a
  **magnetic** (instantaneous) element. Inrush affects the magnetic element; an overload affects the
  thermal element.
- Lighting is generally a **continuous load** (on 3 hours or more). The branch-circuit overcurrent
  device must be rated at least 125% of the continuous load (NEC 210.20(A)), which means
  continuous load should not exceed **80%** of a standard breaker's rating – 16 A on a 20 A breaker.
- Breakers used to switch 120 V or 277 V fluorescent lighting circuits daily must be listed and marked
  **SWD** or **HID**; for HID lighting circuits they must be marked **HID** (NEC 240.83(D)). Many
  facilities switch LED lighting at the panel – check breaker markings and confirm the switching
  practice is suitable.

## Diagnosing Nuisance Tripping: Step by Step

"Nuisance" tripping is a label, not a diagnosis. A breaker may be tripping because it is doing its
job. Use this procedure (skill LT4-S03):

1. **Interview.** When does it trip – at switch-on, after hours of operation, randomly, in wet weather?
   - At switch-on → suspect inrush or a short circuit.
   - After running a while → suspect overload or a heating connection.
   - Wet weather → suspect ground fault in exterior wiring.
2. **Risk assessment and PPE.** Determine the arc-flash PPE from the label or NFPA 70E tables before
   opening the panel cover.
3. **Measure steady-state current** with a true-RMS clamp meter. Compare to 80% of breaker rating.
   If over, it is an overload – split the circuit; do not upsize the breaker unless the conductor and
   design permit it.
4. **Measure inrush** with the meter's inrush/peak function at switch-on. Compare to driver data
   multiplied by driver count and to the breaker's instantaneous trip range from the manufacturer's
   trip curve.
5. **De-energize, LOTO, verify absence of voltage.** Inspect the breaker terminal and bus connection for
   heat damage, check torque per manufacturer, and inspect splices on the circuit. A hot, loose
   termination can heat the thermal element and trip the breaker.
6. **Insulation-resistance test** the circuit (with drivers and electronics disconnected per
   manufacturer instructions – megohmmeter voltage can damage them) to find insulation faults.
7. **Fix the root cause** and verify with repeat measurements.

## Fixes for Inrush Problems

| Fix | Notes |
|---|---|
| Reduce drivers per circuit or per relay | Most reliable fix |
| Stagger switching | NLC systems can switch groups with a short delay |
| Use zero-cross switching relays | Close near zero volts to minimize spike |
| Add listed inrush current limiters | Follow manufacturer and listing |
| Use control devices rated for LED/electronic loads | NEMA 410-tested ratings |
| Different breaker trip characteristic | Only as directed by the engineer and permitted by listing and code |

## GFCI and AFCI Trips on Lighting Circuits

LED drivers include EMI filter capacitors that leak a small current to ground. One driver's leakage
is tiny, but many on one circuit add up. A Class A **GFCI** for personnel protection trips at 4–6 mA
(UL 943), so long runs of fixtures on a GFCI-protected circuit can trip without any true fault.
Before blaming leakage, **sectionalize** (disconnect portions of the circuit with LOTO) to find out
whether one section has a real ground fault – such as a water-filled pole base or damaged
underground conductor. Never replace a required GFCI or AFCI with a standard breaker to stop trips.

> **Safety:** Repeated tripping is a warning. Never reset a breaker repeatedly, tape it on, or
> install a larger breaker to stop trips. Resetting onto a fault can cause an arc flash. Find the cause.

## Key Takeaways
- LED drivers draw a large, very short inrush spike when energized; many drivers switched together can trip breakers and weld contacts.
- Use control devices rated (NEMA 410) for electronic ballast/LED loads.
- Lighting is continuous load – keep it at or below 80% of a standard breaker's rating.
- Breakers used as switches for 120/277 V fluorescent circuits must be marked SWD or HID (240.83(D)).
- Diagnose nuisance tripping with interview, steady-state and inrush measurements, inspection under LOTO and insulation testing.
- Fix the cause – reduce drivers per circuit, stagger, zero-cross switching – never just upsize the breaker or remove required GFCI/AFCI protection.
