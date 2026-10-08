---
title: Troubleshooting Incandescent & Recessed Fixtures
minutes: 30
video:
video_suggestion: >
  A technician works a "recessed can out" call start to finish: asks the customer questions,
  checks whether nearby fixtures work, applies LOTO and verifies dead, tests the removed lamp
  with a DMM on ohms, tries a known-good lamp, inspects the socket eye, then (with a qualified
  coworker) checks voltage at the socket, continuity across the thermal protector with the
  circuit locked out, and documents the findings on the work order.
---

## The Company Procedure, in Safe Step Order

The company's Master Troubleshooting Guide gives this sequence for incandescent fixtures:
**check continuity or replace the bulb with a known-good bulb, check power, check the light
switch, check the socket/socket eye, check for a thermal protector.**

That order is right: start with the cheapest, most likely cause (the lamp) and work back
toward the power source. Below, the same steps are written out with the safety steps added
and with all de-energized work grouped together so you do not switch power on and off more
than necessary.

> **Safety:** At LT1 you work de-energized. Voltage measurements on a live circuit ("check
> power") are done only by a person qualified under the company's NFPA 70E electrical safety
> program, wearing the required PPE. If you are not qualified for energized testing, the
> de-energized checks below still find most problems, and the rest is written up.

## Step 0: Gather Information

Before you touch a ladder, ask and look:

1. **One fixture or many?** If a whole room or a row of fixtures is dark, the problem is
   probably upstream (breaker, switch, wiring). That is usually write-it-up territory.
2. **Off all the time, or on and off?** A fixture that goes out after 10 to 30 minutes and
   comes back later points to the **thermal protector** (Lesson 2).
3. **Recent changes?** New lamps, new dimmer, insulation work in the attic, a remodel.
4. **Read the fixture label** if visible: maximum wattage, lamp type, IC or non-IC.

## Steps 1 to 4: De-energized Checks

1. **Shut off and lock out.** Turn off the switch, then lock out the branch circuit per
   company LOTO procedure. Verify absence of voltage at the fixture with a tested meter
   (live-dead-live). Let a hot lamp and housing cool before handling.
2. **Check the lamp.** Remove it and look for a broken filament, blackened glass, or a loose
   base. Set your DMM to ohms and touch one probe to the center contact of the base and one
   to the screw shell. A good lamp reads low resistance (a 60 W, 120 V lamp reads roughly
   15 to 20 ohms cold). An open filament reads OL (open). Or install a **known-good lamp**:
   one you have tested or taken from a working fixture of the same type.
3. **Check the socket and socket eye.** With the lamp out and power still locked out, look
   inside the socket. Is the center contact flattened, pitted, or scorched? Is the socket body
   cracked? Are there signs of heat on the wires (brittle, darkened insulation)? Lift a lightly
   flattened tab slightly, or plan to replace the socket.
4. **Check the thermal protector (de-energized).** If you can reach it from the opening (many
   cans let you drop the junction box or reach the protector through the aperture), check it
   with the DMM on continuity once the can has cooled. A cool protector should read closed
   (near 0 ohms). An open reading on a cool protector means it has failed. Also confirm the lamp
   matches the label; a wrong lamp is the most common reason protectors trip.

Install the correct, known-good lamp, remove your lock and tag per procedure, and test. Many
calls end here.

## Steps 5 and 6: Power and Switch

If the fixture is still dark with a good lamp and a good-looking socket:

5. **Check power.** A qualified person measures voltage at the socket (center contact to
   screw shell) with the switch on. About 120 V means power is reaching the socket, so suspect
   socket contact or the lamp again. No voltage means the problem is upstream.
6. **Check the switch.** Wiggle the switch handle; a loose feel or flicker suggests a worn
   switch. A qualified person can check for voltage in and out of the switch. Or, with the
   circuit **locked out and verified dead**, remove the switch and check continuity across
   its terminals in the ON and OFF positions (closed when on, open when off). Look for loose
   terminal screws and burned or backstabbed connections. Switch replacement is covered in
   LT1-C09.

If there is no voltage at the switch either, stop. Breakers, panels and branch-circuit wiring
are written up for an electrician.

## Quick Reference Table

| Symptom | Most likely cause | Next step |
|---------|-------------------|-----------|
| One fixture dark, lamp reads OL | Burned-out lamp | Replace with correct lamp |
| New lamp does not light, socket tab flat | Socket eye not touching | Lift tab (de-energized) or replace socket |
| Goes out and comes back by itself | Thermal protector tripping | Correct lamp wattage and type; check insulation; write up if it persists |
| Cool protector reads open | Failed thermal protector | Write up for replacement or listed LED conversion |
| Flickers when switch is touched | Worn switch or loose terminal | Replace switch (C09) |
| Several fixtures dark | Upstream circuit or switch | Write it up |
| Scorched socket, brittle wires | Overheating over years | Replace socket/fixture; write up wiring damage |

## When to Escalate

Write it up for an electrician when you find any of the following:

- No power at the switch or at a group of fixtures
- Burned, brittle, or bare wires in the junction box or ceiling
- A non-IC can buried in insulation, or a fixture that has been running hotter than its label allows
- Evidence that someone has bypassed or removed a thermal protector
- A tripped breaker that trips again

Document everything: what you tested, the readings, what you replaced (with part numbers) and
what still needs to be done.

## Key Takeaways
- Follow the company order: lamp (continuity or known-good lamp), power, switch, socket/socket eye, thermal protector.
- Do every check you can while locked out and verified dead; energized voltage tests are for qualified persons only.
- A cool thermal protector should read closed; on-and-off operation points to heat, usually from the wrong lamp.
- No power at the switch or several fixtures out means upstream trouble: write it up.
- Record readings, parts and remaining issues on the work order.
