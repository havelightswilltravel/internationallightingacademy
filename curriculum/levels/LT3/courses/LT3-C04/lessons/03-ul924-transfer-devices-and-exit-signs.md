---
title: UL 924 Control & Transfer Devices and Exit Signs
minutes: 30
video:
video_suggestion: >
  The trainer shows a dimmed, sensor-controlled corridor where some fixtures are on a
  generator-fed emergency circuit. With an automatic load control relay (ALCR) installed, the
  normal circuit breaker is switched off and the emergency fixtures are forced to full
  brightness despite the wall control being off. The second half shows exit sign types —
  LED, combo, tritium and photoluminescent — and how to inspect each.
---

## The Problem: Controls vs Life Safety
Modern buildings dim, schedule and sensor-control nearly every fixture, including fixtures that
also serve as emergency lighting. During a power outage those emergency fixtures must come on at
full (or designed) output **regardless of what the normal controls are doing** — even if the
wall switch is off, a sensor has timed out, or a dimmer is at 10%.

Devices that make normal controls and emergency lighting work together are **emergency lighting
control devices**, listed under **UL 924**. You must recognize them, never bypass them, and test
them.

## Common UL 924 Control and Transfer Devices
| Device | What it does | Where you see it |
|---|---|---|
| **Automatic Load Control Relay (ALCR)** | Normally lets the switch/sensor control an emergency-fed fixture; when it senses loss of normal power, it **forces the fixture on**, bypassing the local control | Generator- or inverter-fed emergency fixtures that are also switched or sensor-controlled |
| **Emergency 0–10V/dimming override** (often integrated into an ALCR or emergency control device) | Forces the driver to full (or a set emergency level) by overriding the dimming signal during an outage | Dimmed emergency fixtures |
| **Branch Circuit Emergency Lighting Transfer Switch (BCELTS)** | Transfers a branch circuit of emergency lighting from the normal source to an emergency source (generator or inverter) when the normal branch circuit fails | Areas where emergency fixtures are fed by a generator or inverter but must respond to loss of the local normal circuit |
| **Shunt relay / emergency override in relay panels** | Forces lighting control relays on when normal power is lost | Lighting control panels on emergency feeders |

**How to recognize them:** A small module in a junction box or fixture with a sensing lead
labeled "normal sense," "normal power," or similar; "emergency" input from an emergency panel;
and a "load" output. Labels say UL 924. Many have a test button and status LED.

**Wiring points:**
- The **normal-sense input** must come from the normal branch circuit serving that area — so a
  local breaker trip, not just a building-wide outage, triggers emergency operation.
- The **emergency feed** comes from the emergency panel/inverter, in emergency-system wiring that
  is kept separate from normal wiring as Article 700 requires. The device itself is listed to
  bring normal and emergency conductors into one enclosure with the required separation.
- Never connect a normal wall switch, sensor or dimmer **directly** in an emergency circuit
  without a listed device that overrides it on loss of normal power.

## Field Rules
1. **Do not remove or bypass** an ALCR or BCELTS because "the lights won't turn off." Find out
   why — often a failed normal-sense input (e.g., normal breaker off) makes the device think
   there is an outage.
2. **When adding controls** (a new sensor, dimmer or networked control) to a space with
   emergency-fed fixtures, check how those fixtures will be forced on during an outage. Involve
   your supervisor and, as needed, the engineer.
3. **Test** by interrupting the normal-sense circuit (with permission, after warning the
   occupants) or using the device's test function. The emergency fixtures must go to full/design
   output with the local controls set to off or dimmed.

## Exit Signs
Exit signs identify exits and the direction to them. NFPA 101 (Section 7.10) and the IBC set
locations and visibility, and OSHA 1910.37 requires exits to be marked by visible signs in
workplaces.

| Type | How it works | Inspection points |
|---|---|---|
| **Internally illuminated LED** | LED sign on normal AC with battery backup or emergency circuit | Lit letters, battery test, charge indicator |
| **Combo exit/emergency** | LED exit plus emergency heads, one battery | Test sign and heads together |
| **Self-luminous (tritium)** | Radioactive tritium gas in glass tubes glows without power | Brightness fades over its rated life (often 10, 15 or 20 years) — check expiration date; **regulated radioactive material** |
| **Photoluminescent** | Glow-in-the-dark material charged by normal lighting | Requires a specified level of charging light continuously when the building is occupied; listed to UL 924 |
| **Edge-lit / panel** | LED edge-lighting an engraved panel | Same as internally illuminated |

**Exit sign basics:**
- The word **EXIT** must be legible and illuminated; NFPA 101 sets minimum letter size (commonly
  6 in. high letters for new internally illuminated signs) and illumination requirements.
- **Directional arrows (chevrons)** must point the correct way. Many signs have knockout chevrons;
  set them during installation and check them after any relocation.
- Signs must be **continuously illuminated** when the building is occupied and remain lit during
  power failures where emergency lighting is required.
- Don't block signs with displays, banners, or new partitions.

> **Safety:** **Tritium exit signs are regulated by the U.S. Nuclear Regulatory Commission (or an
> Agreement State).** Never throw them in the trash, break them open or remove them without
> following your company's procedure — they must be returned to the manufacturer or a licensed
> recipient, and the transfer documented. A broken tritium sign requires notifying your
> supervisor and following the cleanup and reporting instructions on the label.

## Replacing an Exit Sign
1. Confirm the replacement type meets the specification (single/double face, chevrons, color —
   red or green as the local code requires, battery or emergency-circuit fed).
2. Apply LOTO to the circuit (it may be an emergency circuit from a separate panel or an
   unswitched normal circuit) and verify absence of voltage. Disconnect the old sign's battery.
3. Install with unswitched supply (exit signs must not be on a switch).
4. Set chevrons, connect the battery, restore power, check the charge indicator, press test.
5. Record the installation in the emergency lighting log.

## Key Takeaways
- Emergency-fed fixtures that are switched, dimmed or sensor-controlled need a UL 924 listed
  control device (ALCR, BCELTS, override) to force them on during an outage.
- Normal-sense inputs must come from the local normal lighting circuit.
- Never bypass emergency control devices; investigate why they are holding lights on.
- Exit signs must be legible, continuously illuminated, correctly arrowed and unobstructed.
- Tritium signs are regulated radioactive material — never discard in the trash.
