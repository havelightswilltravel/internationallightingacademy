---
title: Half-Splitting and Fault Isolation
minutes: 35
video:
video_suggestion: >
  In an open-ceiling training area with a row of 12 daisy-chained fixtures, a tech finds a
  ground fault on a de-energized circuit by half-splitting: opening the circuit at the middle
  junction box, testing each half with a meter (and an insulation tester demonstrated by a
  qualified lead), and repeating until the pinched whip is found. On-screen counter shows
  how few tests it took.
---

## The Idea

**Half-splitting** means dividing the system in half, testing to see which half contains the
problem, and repeating on that half. Each test eliminates half the remaining possibilities.

| Points to check | Testing one by one (worst case) | Half-splitting (worst case) |
|---|---|---|
| 8 | 8 tests | 3 tests |
| 16 | 16 tests | 4 tests |
| 32 | 32 tests | 5 tests |

On a long lighting circuit with many junction boxes and fixtures, half-splitting can save
hours — and a lot of ladder moves.

## When to Use It

- Several fixtures out in a row, and you need to find the open splice
- A breaker trips immediately, and you need to find the short or ground fault on a long
  circuit
- A string of fixtures flickers and you suspect a loose connection somewhere along it
- A long underground or conduit run with several pull points (exterior lighting, LT3-C05)

## Example 1: Open Circuit (Fixtures Out Downstream)

**Situation:** A corridor circuit feeds 12 fixtures daisy-chained through junction boxes.
Fixtures 1–4 work; 5–12 are out. The break is somewhere between fixture 4 and fixture 5 — or
in a splice that affects only the downstream fixtures.

This one doesn't even need half-splitting: the pattern tells you the fault is between the
last working fixture (4) and the first dead one (5). Check, in order:
1. The splice at fixture 4's junction box (where the circuit continues on).
2. The whip or conductors from that box toward fixture 5.
3. The splice at fixture 5's box.

Look for: a loose connector, a backstabbed conductor that pulled out, a burned splice.
Measure voltage (energized, PPE) at fixture 4's outgoing conductors and fixture 5's input,
then lock out and repair.

## Example 2: Short or Ground Fault (Breaker Trips Immediately)

**Situation:** The same 12-fixture circuit trips its breaker the instant it's reset. Something
is shorted hot-to-neutral or hot-to-ground somewhere in the circuit.

1. **Leave the breaker off, lock it out, and verify absence of voltage** at the first box.
2. **Disconnect loads** if practical (ballast/driver leads at a few fixtures) so their
   internal resistance doesn't confuse readings, or note that a driver input can show
   resistance between hot and neutral that is normal.
3. **Split at the middle.** Open the splices at the junction box near fixture 6, separating
   the circuit into an upstream half (panel to box 6) and a downstream half (box 6 to
   fixture 12).
4. **Test each half** with your meter's ohms function: hot to ground and hot to neutral. A
   reading near 0 Ω (or a beep) on hot-to-ground indicates the fault is in that half. A
   qualified lead may use an insulation resistance tester for faults that a DMM can't find
   — never use one on circuits with connected drivers or electronics unless the
   manufacturer allows it.
5. **Split the faulted half again** (say at fixture 9), test, and repeat.
6. **Within two or three splits** you'll be down to one or two fixtures or whips. Inspect
   for a pinched whip, a screw through a conductor, a damaged fixture lead, or water.
7. **Repair**, reconnect all splices properly (new connectors), and **verify** by restoring
   power and confirming the breaker holds and every fixture works.

> **Safety:** Every step in Example 2 is done de-energized, locked out and verified. Do not
> use the breaker as a test instrument by repeatedly resetting it onto a short to "see if
> it's fixed" — each reset onto a fault can cause an arc flash and damages the breaker.

## Example 3: Inside the Fixture

Half-splitting works inside a fixture too. For an LED troffer with correct supply voltage at
its input but no light:
1. **Input side vs output side** of the driver: does the driver have input voltage (energized
   measurement at the input splice)? If yes, is there output (DC voltage at the LED module
   connector, measured per the manufacturer's instructions)?
2. **No driver output** → driver (or its input connection) is the problem.
3. **Driver output present** → the LED board, its connector or wiring is the problem.

That one measurement split the fixture in half.

## Rules for Good Isolation

- **Change one thing at a time.** After each change, test.
- **Restore what you open.** Keep track of every splice you separate. Photograph or label
  before opening. Re-make with new connectors.
- **Verify your test equipment.** A dead meter battery or blown fuse can send you down the
  wrong path. Verify on a known source.
- **Don't ignore the neutral.** Opens and faults happen on neutrals too.
- **Expect more than one problem.** Old buildings sometimes have two faults; if the symptom
  changes after your repair, keep going.
- **Respect intermittents.** If the fault disappears when you open a box, the act of moving
  the conductors may have "fixed" a loose connection. Remake every splice in that box.

## Key Takeaways
- Half-splitting cuts the possibilities in half with each test — 16 points take at most 4 tests.
- Use the failure pattern first; the fault is often between the last working and first dead fixture.
- Find shorts and ground faults de-energized, with the meter's ohms function, splitting the circuit at middle junction boxes.
- Never use repeated breaker resets as a test.
- Measure driver input and output to split a fixture into input side and output side.
- Change one thing at a time, track every splice you open, and remake splices with new connectors.
