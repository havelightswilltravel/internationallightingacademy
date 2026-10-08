---
title: Type C TLEDs, Retrofit Kits and HID Replacement Lamps
minutes: 35
video:
video_suggestion: >
  A tech installs a troffer retrofit kit (LED panel or strips with driver) into an existing
  2x4 housing following the kit instructions, then shows a Type C remote-driver tube
  conversion and wraps up with a mogul-base LED HID replacement lamp, highlighting weight,
  heat, ballast-bypass wiring and labeling for each.
---

## Type C: Remote-Driver TLEDs

A **Type C** system replaces the ballast with a separate **LED driver** that powers the tubes
with low-voltage (typically Class 2) output. The tubes themselves contain no line-voltage
driver.

| Advantages | Considerations |
|---|---|
| No line voltage at the sockets — safer relamping | More components and higher material cost |
| Often highest efficiency and best light quality among TLED types | Driver and tubes must be the **matched system** from the manufacturer |
| Dimming options (commonly 0–10 V) and control integration | Wiring is specific to the kit; sockets may need replacement |
| One driver can power multiple tubes | Driver becomes the failure point (like a ballast) |

### Installing Type C

1. Lock out and verify absence of voltage (live-dead-live).
2. Remove lamps and ballast; check PCB status of old ballasts.
3. Mount the driver in the ballast location per instructions.
4. Wire line, neutral and ground to the driver input.
5. Wire the driver output to the sockets exactly per the diagram. Output conductors may be
   polarity-sensitive (+/−) — reversed polarity may prevent operation.
6. Connect dimming leads (often violet/gray for 0–10 V) if used, or cap them per
   instructions. LT3-C02 covers 0–10 V dimming.
7. Apply kit labels (modified luminaire; use only specified lamps).
8. Install tubes, restore power, verify, document.

> **Safety:** Even though the sockets are low voltage, the driver input is line voltage.
> Lockout and verification apply to the whole job. Do not mix tubes or drivers from different
> manufacturers — the system is listed as a matched set.

## LED Retrofit Kits for Troffers, Strips and Wraps

Retrofit kits replace the entire lamp/ballast assembly with LED panels, LED strips or a
complete new door assembly, installed into the existing fixture housing. They are evaluated
under UL 1598C and come with detailed instructions specifying which housings they fit.

Typical procedure:
1. **Verify fit** — measure the housing and confirm it is on the kit's list of compatible
   fixture types and dimensions. Inspect housing condition (rust, damage).
2. **Lock out and verify.**
3. **Remove** lens/door, lamps, ballast, sockets and any components the instructions say to
   remove. Some kits require drilling holes; use only the locations and methods the
   instructions specify and protect wiring from sharp edges with grommets or bushings
   provided.
4. **Install** the driver and LED assemblies with the supplied hardware.
5. **Wire** the driver to supply conductors with listed connectors; ground the housing.
6. **Apply labels** in the specified locations.
7. **Restore power, verify, document.**

Drilling or modifying a fixture beyond what the kit instructions allow takes the installation
outside its evaluation — don't improvise.

## LED Replacements for HID Lamps

Screw-in LED lamps (often "corn cob" style) are sold to replace metal halide, HPS and mercury
vapor lamps in mogul (E39) bases. They come in two broad kinds:

| Type | How it is powered | Notes |
|---|---|---|
| Ballast-compatible | Runs on the existing HID ballast | Compatibility list applies; ballast losses and failures remain; ignitor may need to be removed per instructions |
| Ballast-bypass | Line voltage wired directly to the socket | Ballast, capacitor and ignitor removed or disconnected; **line-voltage socket label** and modification labels required |

Field issues to check:
- **Weight and size** — some LED HID replacements are heavy and long; confirm the socket and
  fixture can support them and the lamp fits inside the lens.
- **Heat** — LEDs fail early when they run hot. Check whether the lamp is rated for
  **enclosed** fixtures and the fixture's orientation (base up, base down, horizontal).
- **Light distribution** — the fixture's reflector was designed for a point source. Results
  can be uneven. A full LED fixture replacement may give better results.
- **Ignitors** — an ignitor left connected can damage an LED lamp. Follow the instructions to
  remove or bypass it.
- **Socket voltage** — after bypass, the mogul socket carries line voltage (often 277 V or
  480 V in industrial settings). Make sure the lamp is rated for the supply voltage.

## Picking the Right Solution: Summary

| Situation | Typical recommendation |
|---|---|
| Good electronic IS ballasts on compatibility list, budget-limited | Type A |
| Mixed or failing ballasts, low maintenance desired | Type B |
| Dimming or controls, best quality | Type C or retrofit kit |
| Housings in poor condition, or lens/reflector worn | Retrofit kit or new LED fixture |
| HID high-bays | LED fixture replacement often best; LED HID lamps where cost-limited and conditions suit |

Your lead or the project scope will often make this decision. Your job is to install the
chosen product **exactly per its instructions**, flag problems (incompatible ballasts, damaged
housings, emergency ballasts), and document what you installed.

## After Any Retrofit: Verification Checklist

- [ ] All lamps/modules light without flicker or buzzing
- [ ] Fixture operates from its normal switch, sensor or dimmer
- [ ] Emergency function (if any) addressed per the plan — not just disconnected
- [ ] All labels applied where specified and readable
- [ ] Housing grounded; covers and lenses installed
- [ ] Work order lists location, product model and conversion type

## Key Takeaways
- Type C uses a matched external driver with low-voltage output; driver input is still line voltage.
- Retrofit kits must fit the housing types listed in their instructions; don't modify beyond what instructions allow.
- LED HID replacement lamps are either ballast-compatible or ballast-bypass; bypass puts line voltage on the mogul socket and requires labels.
- Check weight, heat (enclosed rating), orientation, ignitor removal and voltage rating for LED HID lamps.
- Verify operation, controls, emergency function, labels and grounding after every retrofit, and document it.
