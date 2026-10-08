---
title: Panel Schedules, Continuous Loads and Signs of Overheating
minutes: 30
video:
video_suggestion: >
  A tech stands at a closed lighting panel, reads the directory card, matches circuit 17 to a
  row of corridor fixtures by turning the breaker off and walking the hall, then corrects the
  directory. Next, she totals fixture nameplate watts for the circuit against the 80% limit on
  a clipboard, and finally points out a discolored dead front and a hot spot on a thermal
  camera image taken from outside the cover.
---

## Reading the Panel Directory and Schedule

Every panelboard should have a **circuit directory** — the card on the inside of the door that
says what each breaker feeds. The drawings may also include a **panel schedule** (LT2-C07). On a
tripping-breaker call, the directory tells you where the load is.

| Directory problem | What to do |
|---|---|
| Blank, faded or "LIGHTS" for everything | Identify circuits by test (below) and update the directory |
| Descriptions don't match the building (renovations) | Verify and correct; note it on the work order |
| Numbers don't match breaker positions | Count carefully: odd numbers usually on the left, even on the right, top to bottom — confirm with the maker's numbering |
| Handwritten changes over many years | Treat as unverified until tested |

The code requires circuits to be legibly identified as to their clear, evident and specific
purpose, and the directory to be located at the panel. Keeping it accurate is everybody's job.

### Identifying what a breaker feeds (without opening the dead front)

1. Get permission from the customer — turning off a breaker shuts off whatever is on it.
2. With the circuit's loads switched on, **turn the breaker off** (operate the handle only — the
   dead front stays on) and walk the area noting what went dark. Turn it back on when done.
3. Or use a **circuit tracer** (transmitter plugged into or clipped to the load, receiver scanned
   across the closed panel's breaker handles) per the tool's instructions.
4. Record the results and update the directory legibly.

> **Safety:** Operating a breaker handle is normal for authorized persons, but stand to the side of
> the panel, use your left hand where practical, and look away when operating it. If the panel is
> damaged, the cover is missing, there are signs of overheating, or the breaker is hot, **do not
> operate it** — write it up.

## The 80% Continuous-Load Concept

A **continuous load** is one where the maximum current is expected to continue for **three hours or
more** — most commercial lighting qualifies. The NEC sizes branch-circuit overcurrent devices so that
a standard breaker carries no more than **80%** of its rating continuously (equivalently, the
breaker is at least 125% of the continuous load). Breakers specifically listed for 100% continuous
operation exist but are uncommon on lighting branch circuits.

| Breaker | 80% current | Max continuous load at 120 V | Max continuous load at 277 V |
|---|---|---|---|
| 15 A | 12 A | 1,440 W | 3,324 W |
| 20 A | 16 A | 1,920 W | 4,432 W |
| 30 A | 24 A | 2,880 W | 6,648 W |

(Watts here assume a power factor close to 1. Use the fixture's **input** watts or VA from its
label — ballast and driver losses count.)

### Estimating a circuit's load from nameplates

1. Identify every fixture and device on the circuit (directory + walking the circuit).
2. Read each fixture's input watts/VA (or input amps at the circuit voltage).
3. Total them. Divide by the circuit voltage to get amps.
4. Compare with 80% of the breaker rating.

**Example:** circuit 17 on a 277 V panel, 20 A breaker, feeds 34 LED troffers at 38 W input =
1,292 W ÷ 277 V ≈ 4.7 A. Well under 16 A. If this breaker trips intermittently, overload is unlikely
— suspect a fault, a loose connection or a weak breaker.

## Signs of Overheating

Heat is the enemy of breakers and connections. A loose terminal or a weak bus connection can make a
breaker run hot and trip **below** its rating — and can start a fire.

| Sign | Where you might notice it (from outside the dead front) |
|---|---|
| **Discoloration** | Brown or darkened breaker handle, browned paint on the dead front or door near one breaker |
| **Smell** | Hot plastic, "fishy" or burning odor at the panel |
| **Heat** | Breaker handle or dead front noticeably warm to the back of your hand compared with neighbors |
| **Sound** | Buzzing, sizzling or crackling |
| **Lights** | Flicker when the breaker handle is touched or when loads change |
| **Damage** | Melted or deformed handle, soot around the breaker opening |

### Thermal imaging

An infrared (thermal) camera shows hot spots as bright colors. From outside the closed panel you
can scan the dead front, door and breaker handles for unusual warmth compared with similar breakers.
A **full** thermographic inspection of terminations requires removing the dead front with the panel
energized — that is energized work for a qualified person with the PPE and procedures of the
company's NFPA 70E program, often done by a certified thermographer.

| Thermal reading (comparison) | Meaning |
|---|---|
| Similar to neighboring breakers with similar load | Normal |
| Noticeably warmer than similar breakers | Investigate — write it up with the image |
| Hot spot at one breaker or at the panel's main lugs | Serious — write it up as urgent |

> **Safety:** If you see smoke, smell burning, see melting or hear arcing, do not touch the panel.
> Move people away, notify the customer and your supervisor immediately, and call for emergency
> help if needed. That is not a write-up-later situation.

## Key Takeaways
- Use the panel directory to find loads, and verify and correct it by test — keep the dead front on.
- Continuous lighting loads should be kept at or below 80% of the breaker rating; total fixture input watts to check.
- A circuit well under 80% that still trips points away from overload and toward a fault, loose connection or weak breaker.
- Overheating signs: discoloration, smell, warmth, buzzing, flicker and thermal hot spots.
- Removing the dead front for thermal inspection is energized work for qualified persons; signs of burning are an immediate stop.
