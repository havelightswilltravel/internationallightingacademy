---
title: Battery Units, Emergency LED Drivers & Inverters
minutes: 35
video:
video_suggestion: >
  A technician installs an emergency LED driver in a 2x4 troffer on a training ceiling: LOTO,
  identifying the unswitched and switched hots, wiring the emergency driver between the AC
  driver and LED board, mounting the test switch/indicator in the ceiling tile, connecting the
  battery last, then confirming the charge indicator and doing a test-switch check.
---

## Unit Equipment Basics
Every battery-powered emergency unit has the same basic parts: a **charger** that keeps the
battery charged from the normal AC supply, a **battery**, **transfer circuitry** that senses loss
of normal power and switches to battery, and a **test switch and charge indicator**.

| Type | What it is | Field notes |
|---|---|---|
| Emergency "bug-eye" unit | Wall-mounted box with two adjustable heads | Aim heads along the egress path, not at the ceiling |
| Combo exit/emergency | Exit sign with lamp heads and battery | One unit, two jobs; test both |
| Remote heads | Lamp heads wired to a unit elsewhere | Respect the unit's remote capacity and wire size/length limits |
| **Emergency LED driver** (battery pack inside a fixture) | Installs inside a normal LED fixture; drives the LED load from the battery during an outage | Must be compatible with the LED load; usually drives it at reduced output |
| Fluorescent emergency ballast | Same idea for fluorescent fixtures | Still common in legacy buildings |
| Fixture-level mini-inverter | Small inverter that powers the fixture's own AC driver from a battery | Often used with fixtures whose LED module is not compatible with an emergency driver |

**Battery types:** sealed lead-acid, nickel-cadmium (NiCd), nickel-metal hydride, and
lithium iron phosphate (LiFePO4). All lose capacity with age and heat. Typical service lives
range from a few years (lead-acid, hot locations) to longer for NiCd and lithium — replace when
the unit fails its 90-minute test or according to the manufacturer.

## Emergency LED Drivers — Compatibility
An emergency driver must be matched to the LED module, just like an AC driver (LT3-C01):
- Its **output voltage range** must cover the LED module's forward voltage.
- Its **emergency output power** (e.g., 7 W, 10 W, 18 W) determines how much light you get on
  battery. A fixture that runs 40 W normally may produce only a fraction of its normal lumens
  in emergency mode — the lighting design must account for that.
- It must be **listed (UL 924)** for the application and suitable for the fixture's location and
  ambient temperature (cold freezers and hot ceilings shorten battery life — use units rated for
  the temperature).
- Field installation in a listed luminaire must follow the emergency driver's instructions and
  any luminaire manufacturer requirements.

## The Unswitched Hot — the Most Important Wiring Rule
Unit equipment must monitor the **same branch circuit that feeds the normal lighting** in the
area, and its charger must stay powered even when the lights are switched off. So it gets:

- An **unswitched hot** from the normal lighting branch circuit, **ahead of any local switch,
  dimmer, occupancy sensor or relay**. This keeps the battery charged and lets the unit detect a
  true power failure.
- A **switched hot** (on many emergency drivers) so the fixture still turns on and off normally
  with the wall switch.
- Neutral and equipment ground.

Why the "same branch circuit" rule matters: if the emergency unit were fed from a different
circuit, a tripped breaker on the lighting circuit would plunge the area into darkness while the
emergency unit, still powered by its own healthy circuit, would never turn on.

**Common mistakes:**
| Mistake | Result |
|---|---|
| Both inputs connected to the switched leg | Unit goes to battery every time the lights are turned off; battery drained, fails when needed |
| Unswitched hot from a different circuit than the normal lights | Unit won't respond to a tripped lighting breaker |
| Unswitched hot taken after an occupancy-sensor relay | Same problem as switched leg |
| Battery connected before wiring completed | Shock hazard and possible damage to the unit/LEDs |
| Test switch buried above the ceiling | Can't be tested monthly — non-compliant and frustrating |

## Installation Procedure — Emergency LED Driver
1. Confirm the emergency driver is compatible with the LED module and the job (output power,
   voltage window, temperature, listing).
2. Apply LOTO to the lighting circuit; verify absence of voltage (live-dead-live) at the fixture.
   Check for other emergency sources in the fixture.
3. Identify the unswitched hot (same branch circuit, ahead of controls) and the switched hot.
   If no unswitched hot exists at the fixture, you must run one — do not improvise.
4. Mount the emergency driver to the fixture housing per instructions. Wire it between the AC
   driver output and the LED module as shown on its diagram (it typically disconnects the AC
   driver from the LEDs during emergency operation).
5. Mount the **test switch and charge indicator** where they will be visible and accessible from
   the floor (ceiling tile, fixture lens frame or trim, as supplied).
6. Make the **battery connection last**, after all wiring is secure.
7. Restore normal power. Confirm the charge indicator shows charging.
8. Press the test switch: the fixture should go to emergency mode. Release: it returns to normal.
9. Label the unit with the installation date. Note on the work order that the battery needs its
   initial charge period (often 24 hours — check instructions) before a full 90-minute test.

> **Safety:** A charged emergency driver or battery unit can energize the LED output — and
> sometimes other leads — with the breaker locked off. Disconnect the battery connector before
> servicing, and warn other workers by tagging or noting it. Damaged or swollen batteries can
> leak, vent or catch fire; handle and recycle them according to your company's battery handling
> procedure.

## Central Lighting Inverters
A **central lighting inverter** (listed to UL 924) is a large battery-and-inverter system that
supplies normal AC voltage to emergency lighting circuits during an outage. It allows normal
fixtures — without individual batteries — to serve as emergency lighting. Points to know:
- The emergency circuits fed from an inverter are **emergency circuits** — keep them separated
  and marked per Article 700.
- Fixtures on an inverter remain energized when the normal power breaker is off; the inverter
  output breakers must be locked out too.
- Inverters have their own maintenance schedule (batteries, fans, transfer tests) — often a
  service contract with the manufacturer's technicians.
- Inverters are sized in VA/W; adding fixtures can overload them. Don't add loads without
  engineering approval.

## Key Takeaways
- Unit equipment = charger + battery + transfer circuit + test switch/indicator.
- Emergency LED drivers must match the LED module; emergency light output is usually reduced.
- Feed unit equipment with an unswitched hot from the same branch circuit as the area's normal
  lighting, ahead of any switch, dimmer or sensor.
- Connect the battery last; disconnect it before service.
- Inverter-fed fixtures stay live when normal breakers are off — lock out the inverter output too.
