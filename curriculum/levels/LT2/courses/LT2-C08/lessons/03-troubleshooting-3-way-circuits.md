---
title: Troubleshooting 3-Way Circuits
minutes: 35
video:
video_suggestion: >
  A tech responds to a stairwell light that only works when the bottom switch is up. She
  wiggles each switch arm, locks out the circuit, verifies dead, pulls both switches, finds a
  loose traveler under a back-wire clamp, and proves the fix by running all four switch
  combinations. Close-ups show the meter readings at each step.
---

## The Company Procedure

The Master Troubleshooting Guide gives this procedure for 3-way switching:

1. Wiggle the switch arm — it can indicate a bad switch.
2. If the fixtures receive power intermittently, check the connection points on the switch for
   loose connections.
3. Use the 3-way switching diagram to trace power flow from the switches to the fixtures, or
   write it up for an electrician.

Below, those steps are expanded into a complete, safe field sequence. The intent is unchanged;
the safety and verification steps have been added.

## Common Symptoms and What They Usually Mean

| Symptom | Most likely causes |
|---|---|
| Light works only in certain switch combinations (e.g., only when SW2 is down) | One traveler open (loose, broken, burned splice), travelers swapped with a common, or a 4-way's pairs landed wrong |
| Light works from one switch only; the other does nothing | Common and a traveler swapped at one switch, or a single-pole installed where a 3-way belongs |
| Light never turns off | Line hot landed directly on the switch leg (switches bypassed), or a traveler shorted to the switch leg |
| Light never turns on, from any position | No power to the circuit, open line hot or switch leg, open neutral, bad lamp/driver, or both travelers open |
| Light flickers or drops out when a switch is touched | Loose terminal, worn switch contacts, back-stab connection failing |
| Breaker trips when a switch is flipped | Traveler or switch leg shorted to ground or neutral, or a miswire putting hot onto neutral — **stop and write it up** |
| Switch warm, buzzing, discolored | Loose connection or overloaded switch — de-energize and write up if the box or conductors are damaged |

## Step-by-Step Field Procedure

### Part A — Observe (no tools inside the box yet)

1. **Confirm the complaint.** Operate each switch through every combination and write down the
   results in a table (SW1 up/down × SW2 up/down, plus 4-way positions).
2. **Rule out the load.** Is the lamp, driver or ballast good? Do other lights on the same circuit
   work? A failed fixture can look like a switch problem.
3. **Wiggle the switch arm.** With your finger only, gently rock each toggle or rocker in each
   position without fully throwing it. If the light flickers, drops out or comes on, suspect a
   worn switch mechanism or a loose terminal at that device. Sloppy, gritty or "mushy" feel also
   points to a bad switch.
4. **Feel the cover plate** with the back of your hand. A warm plate on a lightly loaded switch
   suggests a high-resistance connection.

### Part B — De-energize and inspect

5. **Identify the circuit** from the panel directory or by test, and confirm which other
   circuits share each box.
6. **Lock out and tag out** the circuit(s) per company procedure.
7. **Verify absence of voltage** at each box you will open: test your meter on a known live
   source, test every conductor in the box (hot-to-neutral, hot-to-ground, neutral-to-ground),
   then re-test the meter on the known source (live-dead-live).
8. **Remove the switches** from the box and inspect **every connection point**: terminal screws,
   back-wire clamps, back-stab (push-in) holes, wire nuts and splices. Look for loose screws,
   nicked or broken conductors, discolored insulation, melted wire nuts and burned terminals.
9. **Tug-test** each conductor gently at its terminal and each splice.

### Part C — Trace with the diagram (de-energized continuity first)

10. **Sketch the box contents** and match it to a configuration from Lesson 2.
11. **Confirm device terminals** with continuity: on a removed 3-way, the common should show
    continuity to one traveler in one position and the other traveler in the other position.
    On a 4-way, confirm straight-through in one position and crossed in the other.
12. **Ring out the travelers.** Disconnect the travelers from the switches at both ends (label
    them first) so the switch contacts cannot create a false reading. At one switch box, twist the two traveler conductors together
    (circuit still locked out). At the other box, measure continuity between the two travelers —
    you should read near 0 Ω. Untwist and check that they now read open. This proves both
    travelers are continuous and identifies the pair.
13. **Ring out the switch leg** the same way: short it to a known conductor in the same cable at
    one end and confirm continuity at the light.
14. **Compare to your truth table.** Every single switch flip must change continuity from the
    first common to the switch leg. Two neighboring combinations with the same result point to
    the faulty segment.

### Part D — Repair, restore, verify

15. **Repair** loose terminations within your scope: re-terminate on screw terminals (move wires
    off back-stab holes), replace a worn switch with the correct type and rating, replace a
    damaged wire nut. Keep the original conductor functions.
16. **Reinstall, remove your locks** per procedure, and restore power.
17. **Prove the fix:** run every switch combination twice. Wiggle each switch arm again. The
    light must change state on every single flip.

> **Safety:** Energized voltage tracing (meter readings with the circuit live and switches being
> operated) is diagnostic work on exposed energized conductors. Do it only if you are a qualified
> person under the company's NFPA 70E program, with the required PPE and an energized work
> justification where needed. Otherwise, use the de-energized continuity methods above.

## When to Write It Up

Write it up for an electrician when:

- The circuit cannot be explained by any configuration you know, or the cables are not traceable
  (buried splices, missing boxes, conductors disappearing into walls).
- You find **damaged conductors, scorched boxes, or a shared neutral** (multiwire branch circuit)
  that would need to be reworked.
- The breaker trips on switch operation.
- A neutral is needed at the switch box and is not present (Lesson 4).
- Correcting the problem requires pulling new conductors or changing the circuit.

### What to include

| Item | Example |
|---|---|
| Location | "Stair B, levels 1–2, switches at bottom and top landings" |
| Circuit | "Panel LP-1, circuit 14 (verified by test)" |
| Symptom table | All switch combinations and results |
| What you checked | Lamps good, switches replaced, connections tight |
| What you found | "Traveler A open between SW1 and SW2 — no continuity end-to-end" |
| Your sketch | Attach photo of diagram |

## Key Takeaways
- Follow the company order: wiggle the switch arm, check connection points for intermittent power, then trace with the diagram or write it up.
- "Works only in certain positions" usually means an open traveler, a swapped common, or a misland on a 4-way.
- "Never turns off" usually means the line hot is landed straight onto the switch leg.
- Lock out, verify dead live-dead-live at every box, and trace with continuity before any energized testing.
- Prove the fix by running every switch combination; every single flip must change the light.
