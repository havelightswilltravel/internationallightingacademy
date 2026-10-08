---
title: Crimping Plugs, Punching Down Jacks & Testing Cable
minutes: 40
video:
video_suggestion: >
  Step-by-step bench demonstration: crimping an RJ45 plug on Cat6 to T568B, punching down a
  keystone jack and a patch-panel port with a 110 impact tool, then testing the link with a
  wiremap tester and showing what open, short, reversed and split-pair faults look like on the
  tester screen.
---

## Tools and Materials
| Tool or part | Purpose |
|---|---|
| Cable jacket stripper | Removes outer jacket without nicking conductors |
| Flush cutters | Trims conductors square |
| RJ45 crimp tool | Crimps plugs; must match the plug brand/type |
| RJ45 plugs (male terminals) | Rated for the cable category and conductor type (solid or stranded); Cat6 plugs often use a load bar |
| Keystone jacks (female terminals) | Snap into wall plates and patch panels |
| 110 punch-down (impact) tool | Seats and trims conductors in jacks and patch panels |
| Patch panel | Rows of jacks in a rack where permanent cables end |
| Cable tester | Checks wiremap, continuity and often length |
| Labels / label maker | Identifies each cable at both ends |

The company guide calls plugs and jacks **male and female terminals**. A plug is male; a jack (wall
outlet, patch-panel port, device port) is female.

## Crimping an RJ45 Plug (T568B)
1. Cut the cable end square. Strip about 1–2 in of jacket with a proper stripper. Check for nicked
   insulation; cut off and redo if any conductor is nicked.
2. Remove the spline (Cat6) and ripcord, trimming them flush with the jacket.
3. Untwist the pairs only as much as needed. Straighten each conductor.
4. Arrange the conductors in T568B order from left to right with the contacts facing up: white/orange,
   orange, white/green, blue, white/blue, green, white/brown, brown.
5. If using a load bar, thread the conductors through it in order and slide it toward the jacket.
6. Trim the conductors straight across so they reach the end of the plug — about ½ in beyond the
   jacket, or as the plug maker specifies.
7. Push the conductors into the plug until **every conductor touches the end wall** (look through the
   tip) and the **jacket is inside the plug** under the strain-relief.
8. Check the color order through the clear plug one more time.
9. Crimp firmly with the correct tool until it fully cycles.
10. Inspect: all eight pins pushed down evenly, jacket captured, no copper showing at the back.

**Most bad crimps come from:** conductors not reaching the end, jacket not under the strain-relief,
too much untwist, pairs out of order, or using solid-conductor cable in plugs made for stranded wire
(or the reverse).

## Punching Down a Keystone Jack or Patch Panel
1. Strip the jacket back only as far as needed to reach the termination block.
2. Read the color label on the jack — most show both **A** and **B** color codes. Use the B row for a
   T568B job.
3. Keep pairs twisted to within about ½ in of the termination point. Excess untwist hurts
   performance, especially on Cat6 and Cat6A.
4. Lay each conductor in its slot.
5. Seat it with the 110 punch tool, cutting edge toward the **outside** so the excess is trimmed off.
6. Snap on the jack cap if provided, and secure the cable to the strain-relief or tie bar.
7. On a patch panel, terminate ports in order and support the cables with a rear management bar.

> **Safety:** Wear safety glasses when trimming and punching down — small wire ends fly. Keep the
> punch tool blade pointed away from your hand.

## Testing the Cable
Every termination should be tested before you leave.

| Test | What it shows |
|---|---|
| **Wiremap** | Each of the 8 pins connects to the correct pin at the other end; detects opens, shorts, reversed pairs, crossed pairs and split pairs |
| **Continuity** | Each conductor is unbroken end to end |
| **Length** | Distance to the end or to a fault (time-domain reflectometry on many testers) |
| **Shield continuity** | For shielded cable, the shield is connected end to end |
| **Certification** (advanced) | Full performance against category limits — done with a certification tester, usually by a data contractor |

### Common wiremap faults
| Fault | Meaning | Usual cause |
|---|---|---|
| **Open** | A conductor is not connected | Conductor did not reach the plug end, or was not seated in the jack |
| **Short** | Two conductors touch | Damaged cable, bad crimp, stray copper |
| **Reversed pair** | Two wires of a pair swapped (e.g., 1 and 2) | Color order mistake |
| **Crossed pairs** | Pairs in the wrong positions (e.g., A on one end, B on other) | Mixed standards |
| **Split pair** | Wires from different pairs used together; wiremap may pass on simple testers | Colors placed wrong but same on both ends — causes noise and failures |

A **split pair** passes simple continuity tests but fails in service. Getting the color order right on
both ends prevents it.

## Key Takeaways
- Use the right plug for the cable type and the crimp tool made for it.
- Conductors must reach the end of the plug, and the jacket must be under the strain-relief.
- Keep pair untwist to a minimum, especially on Cat6 and Cat6A.
- Punch down with the cutting edge toward the outside, using the jack's B color row for T568B jobs.
- Test every termination for wiremap, continuity and length before leaving.
- Split pairs can pass a continuity test but still fail — follow the pin chart exactly.
