---
title: Compatibility, Low-End Trim & Dimming Troubleshooting
minutes: 30
video:
video_suggestion: >
  A technician responds to a "lights flicker when dimmed" call in a conference room. The video
  shows identifying the dimming type, checking the dimmer and fixture compatibility charts on a
  phone, adjusting the dimmer's low-end trim with the manufacturer's procedure, and verifying
  smooth dimming with the customer.
---

## Start by Identifying the Dimming Type
Many dimming complaints come from the wrong product being installed somewhere in the chain.
Before touching anything, figure out what kind of system you have:

| Clue | Likely system |
|---|---|
| Only hot and switched-leg wires at the control; screw-in LED lamps | Phase (forward or reverse) |
| Violet and gray wires at fixtures and control | 0–10V |
| Two-wire bus labeled DA, a DALI power supply, addressed drivers | DALI |
| XLR or RJ45 data cable, color-changing fixtures, start addresses | DMX |
| Wireless/networked wall stations, gateways | Networked lighting controls (LT4) |

Then read the **driver label** and the **control label** — they must speak the same language.
A 0–10V driver on a phase dimmer will not dim (and the phase dimmer may damage it). A DALI
driver connected to a 0–10V control will not dim. Some drivers are multi-protocol.

## The Compatibility Checklist
1. **Protocol match:** control and driver use the same dimming method.
2. **Phase type match (phase dimming):** forward vs reverse as recommended by the driver/lamp
   maker.
3. **Load rating:** LED rating of the control (after ganging derate) or sink current/relay
   rating (0–10V) is not exceeded.
4. **Tested combinations:** check manufacturer compatibility charts — many publish lists of
   tested lamp/dimmer pairs.
5. **Same products on a zone:** mixing different LED lamps or drivers on one dimmer often causes
   uneven dimming, flicker or different minimum levels.
6. **Minimum level expectations:** a driver rated "dims to 10%" will never go to 1%, no matter
   which control you install.
7. **Dimming curve:** linear vs logarithmic (square-law) curves look different to the eye.
   Mixing them on one zone gives uneven results.

## Low-End Trim (and High-End Trim)
**Low-end trim** sets the lowest output the control will send. If it is set too low, the
driver gets a signal below what it can handle, and you see:

- Flicker or shimmer at the bottom of the slider.
- **Drop-out** — lights turn off before the slider reaches the bottom.
- **Pop-on** — lights won't start at low settings and suddenly jump on when the slider is
  raised.
- Some fixtures on the zone lit and others off at low levels.

**Raising the low-end trim** until every fixture on the zone stays stable at the bottom
setting usually fixes these. **High-end trim** limits maximum output — sometimes used to save
energy or reduce glare (and in some energy-code "tuning" applications, covered in LT4).

### General low-end trim procedure (follow the dimmer manufacturer's steps)
1. Confirm compatibility first — trim can't fix the wrong product.
2. Enter the dimmer's adjustment mode (dial on the dimmer, button sequence, or app).
3. Set the dimmer to its lowest position.
4. Raise the low-end setting slowly until **all** fixtures on the zone are lit and stable, with
   no flicker.
5. Add a small margin above that point (temperatures and aging change driver behavior).
6. Cycle the lights off and on at the low setting to confirm they start reliably (no pop-on).
7. Exit adjustment mode and record the setting on the work order.

## Systematic Dimming Troubleshooting
Use the LT2-C06 method: verify, gather information, isolate, fix, verify, document.

| Complaint | First checks | Typical fixes |
|---|---|---|
| Flicker at all levels | Lamp/driver marked dimmable? Phase type? Loose connections? | Correct product, correct dimmer mode, tighten/replace connections |
| Flicker only at low end | Low-end trim, mixed products | Raise low-end trim, standardize products |
| Won't dim at all | Protocol mismatch, open or reversed 0–10V, DALI not addressed | Correct wiring/product, program |
| Stuck at minimum | Shorted 0–10V pair; failed control | Locate short, replace control |
| Ghosting when off | Two-wire dimmer leakage | Neutral-wire dimmer or manufacturer-approved load correction |
| Buzzing | Forward-phase on electronic load; overloaded dimmer; noisy driver | Reverse-phase dimmer, reduce load, replace driver |
| Uneven dimming between fixtures | Mixed drivers/curves; voltage drop on long low-voltage runs | Standardize; correct wiring |
| One fixture behaves differently | That fixture's driver or connection | Inspect, swap-test with a known-good driver |

**Swap testing:** If one fixture misbehaves, swapping its driver with a known-good neighbor's
(both de-energized under LOTO) quickly shows whether the problem follows the driver or stays with
the location.

> **Safety:** Diagnostic measurements on dimmers and drivers involve energized line-voltage
> parts. Perform them only when authorized and with the PPE your employer's NFPA 70E program
> requires. Before removing a dimmer, changing a driver, or re-terminating wiring, apply LOTO
> and verify absence of voltage with a tested meter. Multi-gang dimmer boxes often contain more
> than one circuit.

## Explaining It to the Customer
Customers often hear "LEDs dim" and expect them to behave like incandescent — smooth to
nearly zero, warmer color when dim. Explain the realistic minimum level of their drivers, that
standard LEDs do not warm in color as they dim (unless they are "warm-dim" products), and what
you changed. Clear expectations prevent callbacks.

## Key Takeaways
- Identify the dimming system first, then confirm driver and control use the same protocol.
- Check LED load ratings, phase type, tested combinations, and avoid mixing products on a zone.
- Low-end trim fixes low-level flicker, drop-out and pop-on — but not incompatibility.
- Use swap testing and half-splitting to isolate problems.
- Set customer expectations about minimum dim level and color.
