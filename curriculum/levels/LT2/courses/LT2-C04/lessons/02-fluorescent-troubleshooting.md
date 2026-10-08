---
title: Troubleshooting Fluorescent Systems
minutes: 35
video:
video_suggestion: >
  A tech works through three staged fluorescent faults on a training wall: a two-lamp fixture
  with one dim, flickering end (bad lamp), a fixture that's completely dark (failed ballast,
  confirmed by measuring supply voltage then checking ballast with power off), and a
  fixture with a cracked socket. Show each step: known-good lamp substitution, LOTO, meter
  readings, repair and verification.
---

## Start With What You Can See

Fluorescent problems usually announce themselves. Read the symptom before reaching for
tools.

| Symptom | Most likely causes |
|---|---|
| Lamp ends blackened, lamp slow to start or flickering | Lamp at end of life |
| One lamp out, others lit (instant start) | Failed lamp, socket, or that lamp's ballast output |
| Both lamps out on a series ballast | One failed lamp, socket, or the ballast |
| Lamps glow at ends only, never fully strike | Wrong lamp/ballast combination, failed lamp, failed ballast, poor ground (rapid start), or low temperature |
| Swirling or spiraling light | New lamp "settling" (normal for the first hours) or ballast problem if it persists |
| Lamps pink or dim, then fail | End of life; sometimes low voltage |
| Fixture cycles on and off | Ballast thermal protector tripping (overheating), loose connection, or failing ballast |
| Loud hum or buzz | Magnetic ballast (normal to some degree), loose mounting, failing ballast |
| Burning smell, tar leaking | Failed magnetic ballast — de-energize and replace; check for PCBs if old (LT1-C06) |
| Lights fail in cold weather | Ballast minimum starting temperature too high for the location |

## Systematic Procedure for a Dark or Misbehaving Fluorescent Fixture

This follows the general method in LT2-C06, applied to fluorescent fixtures.

1. **Verify the complaint.** Operate the switch or control. Look at neighboring fixtures on
   the same circuit — if all are out, suspect the circuit or control, not the fixture.
2. **Substitute known-good lamps.** This is the cheapest, fastest test and solves most calls.
   Use lamps of the correct type for the ballast. Handle per LT1 relamping procedures
   (lockout per company policy, eye protection).
3. **Inspect.** With the circuit locked out and verified dead: open the wireway, look for
   burnt, cracked or loose sockets; scorched or loose wiring; discolored or leaking ballast;
   loose splices.
4. **Check supply voltage.** Remove your lock (following your company's procedure for
   temporary re-energizing for testing), wear PPE for energized work, and measure at the
   ballast input leads: hot-to-neutral and hot-to-ground. No voltage → the problem is
   upstream (switch, control, circuit, breaker). Correct voltage → the problem is in the
   fixture.
5. **Lock out again** before touching anything inside.
6. **Check sockets.** With power off, check continuity from each ballast output lead to its
   socket contact. Check that shunted/non-shunted sockets match the ballast type (LT2-C04
   Lesson 1). Replace damaged sockets with the correct type.
7. **Evaluate the ballast.** If supply voltage is correct, sockets and wiring are good, and
   known-good lamps don't light, the ballast is the likely cause. Electronic ballasts
   generally cannot be meaningfully tested with a DMM in the field; the practical test is
   substitution with a correct replacement. Some manufacturers sell ballast testers.
8. **Replace and verify.** Install the replacement per its diagram. Restore power, confirm
   all lamps start fully and promptly, and check that the fixture operates from its normal
   control.
9. **Document.** Record the cause (e.g., "Failed ballast; replaced with (2) F32T8 IS NBF
   120–277 V"), and note any related issues.

> **Safety:** Steps 4 and 7 involve energized testing. Measure only at accessible input
> leads or splices with insulated probes, PPE per company program, and a tested CAT-rated
> meter. **Never** probe ballast output leads or sockets while energized — output voltages
> are high and electronic ballasts can be damaged by meter connections.

## Common Root Causes Worth Fixing

Replacing a ballast without asking *why* it failed means you may be back next month.

| Root cause | What to look for | Fix |
|---|---|---|
| Heat | Fixture in a hot plenum, insulation packed on top, fixture lens sealed with no ventilation | Correct installation conditions; choose ballast rated for the environment |
| Wrong lamps | Lamps not on ballast's rated lamp list | Correct lamps; label fixture |
| Frequent switching on instant start | Occupancy sensor control | Programmed-start ballast or LED retrofit |
| High voltage | Readings consistently above about +5% | Report; may need investigation of the service or transformer taps |
| Bad sockets | Cracked, heat-discolored, loose | Replace sockets with the correct type |
| Loose connections | Discolored splices, loose push-in wires | Remake connections with listed connectors |

## The Ballast Replacement Decision

Before ordering a fluorescent ballast, ask:
- **Is this fixture on a retrofit plan?** Many customers prefer converting to LED when a
  ballast fails. Your company may have a standing policy.
- **How many fixtures have failed?** Many failures in one area at about the same time
  suggests a group relamp/retrofit makes sense or a voltage/heat problem exists.
- **Is the ballast PCB-containing?** Pre-1979 ballasts without a "No PCBs" marking must be
  treated as PCB-containing (LT1-C06).
- **Correct replacement:** same lamp type and quantity, same starting method (or one
  appropriate for the controls), same or approved ballast factor, correct voltage.

## Lamp Disposal

Fluorescent lamps contain mercury and are managed as universal waste (or per state rules,
which may be stricter). Pack spent lamps in their boxes or approved containers, label and
date containers, and clean up breakage per company procedure (LT1-C06).

## Key Takeaways
- Read the symptom first; most fluorescent calls are solved with known-good lamp substitution.
- Check neighbors on the same circuit to separate fixture problems from circuit or control problems.
- Measure supply voltage at the ballast input (energized, with PPE); never probe ballast outputs or sockets energized.
- Electronic ballasts are confirmed by substitution once supply, sockets and wiring check good.
- Find and fix root causes: heat, wrong lamps, wrong starting method, high voltage, bad sockets, loose connections.
- Consider retrofit policy and PCB status before ordering a replacement ballast.
