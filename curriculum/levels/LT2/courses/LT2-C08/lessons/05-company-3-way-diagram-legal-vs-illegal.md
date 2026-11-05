---
title: The Company 3-Way Diagram — Legal vs. Illegal Wiring
minutes: 30
video:
video_suggestion: >
  An instructor holds up the company 3-way switching reference sheet next to two training-wall
  boards. Board one is wired the legal way (line hot to a common, two travelers, the other common
  to the light, neutral straight to the light). Board two is wired the illegal way, with the
  neutral landing on a traveler terminal. Both light and switch normally; then, with the switches
  off, the instructor shows a non-contact tester lighting up on the illegal board's lamp socket.
  The segment ends with the tech locking out the board and writing it up.
---

## Why the Company Keeps This Sheet
Our company's training folder includes a one-page **3-way switching diagram** that every tech is
expected to understand. It shows the same two switches and one light wired two ways: one marked
**LEGAL** and one marked **ILLEGAL**, both labeled "colors vary." The point of the sheet is simple:
**a 3-way circuit can work perfectly and still be wired wrong — and dangerous.** The company
procedure in Lesson 3 ends with "use the 3-way switching diagram to trace power flow"; this is the
diagram it means. (The original drawing is a third-party reference sheet; the description below is
in our words.)

Remember the company's view: 3-way work is **higher-level tech work**. At LT2 you learn to read the
diagram and recognize both versions. Finding and correcting a miswired 3-way without supervision
is LT3-and-up work, and correcting a code violation like the illegal version may need an
electrician.

## The Legal Version
```
 SOURCE HOT ─────► [COM  SW1]                    [SW2  COM] ─────► (L) lamp
                     T1 ══════ traveler ══════ T1
                     T2 ══════ traveler ══════ T2
 SOURCE NEUTRAL ───────────────────────────────────────────────► (L) neutral
```
What makes it legal:
- The **line hot** lands on the common of one switch.
- The **two travelers** run between the traveler terminals of the two switches and carry only the hot.
- The **common of the other switch** feeds the lamp (the switch leg).
- The **neutral goes straight to the lamp**. It is never connected to a switch terminal. (In a
  power-to-switch layout it may be spliced through a switch box, but it is still never switched.)

Every flip of either switch connects or breaks the hot path to the lamp. When the light is off,
the lamp and fixture are disconnected from the hot.

## The Illegal Version
```
 SOURCE HOT ──────► T1 [SW1]          T1 [SW2]
 SOURCE NEUTRAL ──► T2 [SW1]          T2 [SW2]
   (hot and neutral jumpered through to SW2's travelers)
                  [SW1 COM] ──────► (L) ◄────── [SW2 COM]
```
Here the hot and the **neutral are both brought to the traveler terminals**, and the lamp is
connected **between the two commons**. Each switch picks either hot or neutral for its side of
the lamp. When the two switches pick different conductors, the lamp lights; when they pick the
same one, it goes out. It switches from both locations, so the customer never complains.

Why it is illegal and dangerous:
- **The neutral is switched.** The NEC requires 3-way and 4-way switches to do all switching in
  the ungrounded (hot) conductor only (NEC 404.2(A)), and does not allow a switch to disconnect
  the grounded (neutral) conductor (NEC 404.2(B)).
- **The light can be "off" with both lamp terminals hot.** With both switches on the hot
  traveler, the lamp is dark, but the socket shell, the lamp base and the fixture wiring are all at
  line voltage. A tech who "turns off the switch" to change a lamp can be shocked.
- **The neutral ends up in the wrong place.** Neutral conductors land on switch terminals and may
  be marked as travelers, so the next person misidentifies every wire in the box.

> **Safety:** Never trust a wall switch as your disconnect — this diagram is the reason. Before
> touching a lamp, socket or fixture on any 3-way circuit, **lock out and tag out the breaker and
> verify absence of voltage (live-dead-live) at the fixture**, testing each conductor to ground. A
> non-contact tester lighting up at a fixture with the switch off is a warning, not a diagnosis:
> stop and verify with a meter.

## How You Spot the Illegal Version
| Clue | What it suggests |
|---|---|
| Non-contact tester alerts at the socket or fixture wires with the light switched off | Hot present on the "off" fixture — miswired switching (or switched neutral) |
| A white conductor from the source landing on a traveler terminal | Neutral used as a traveler |
| Lamp connected between two switch legs, with no neutral splice at the fixture | Lamp between the two commons |
| De-energized continuity: the fixture neutral traces back to a switch instead of the source neutral | Switched neutral |

At LT2, the **de-energized continuity trace** from Lessons 2 and 3 is your tool: with the circuit
locked out and verified dead, follow each conductor and compare it to the legal sketch. Do not
work energized to "prove" it — that is for a qualified person.

## What You Do About It
1. **Stop** and make the fixture safe — leave the circuit locked out.
2. **Tell your lead or supervisor** and photograph the wiring with each conductor labeled.
3. **Write it up**: "3-way switching wired with neutral switched — fixture energized with
   switches off. Needs rewiring to code." An LT3+ tech or an electrician corrects it, depending on
   whether new conductors are needed.
4. **Tell the customer** the fixture is hazardous to service from the switch, and don't leave the
   site without the issue documented.

"Colors vary" on the sheet is a reminder that wire color proves nothing. A white wire may be a
re-identified hot, and a black wire may be a neutral someone ran wrong. Trace, label and verify.

## Key Takeaways
- Legal: hot to a common, two travelers between switches, other common to the lamp, neutral straight to the lamp.
- Illegal: hot and neutral on the travelers and the lamp between the commons — it switches normally but the neutral is switched (NEC 404.2).
- An illegally wired 3-way can leave the fixture fully energized with the light off.
- Never use the wall switch as your disconnect: LOTO and live-dead-live at the fixture.
- LT2 learns and recognizes; LT3+ troubleshoots 3-way circuits unsupervised; write up code violations.
