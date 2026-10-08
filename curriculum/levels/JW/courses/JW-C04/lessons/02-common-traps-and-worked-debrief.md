---
title: Common Exam Traps — A Worked Debrief
minutes: 40
video:
video_suggestion: >
  The instructor reviews ten frequently missed practice questions on a whiteboard, first showing
  the tempting wrong answer and the exact reasoning error that leads to it, then the correct
  path through the code book. Each trap is labeled on screen (wrong column, missed exception,
  one-way length, nameplate vs. table, etc.).
---

## How Exam Writers Build Wrong Answers
Multiple-choice distractors are rarely random. Most wrong choices are the answer you get when
you make a **specific, predictable mistake**. Learn the mistakes and you will recognize the
traps. Section numbers below are from the **2023 NEC**; verify them in the edition your state
tests.

## Trap 1: Wrong Temperature Column
*Question:* What is the allowable ampacity of 6 AWG copper NM-B cable?
- Tempting: 65 A (75°C column) or 75 A (90°C column, the conductor insulation rating).
- **Correct: 55 A.** NM cable ampacity is limited to the **60°C** column (334.80), though the
  90°C rating may be used for derating.

## Trap 2: Ignoring 240.4(D)
*Question:* Ten AWG copper THHN in a raceway with three current-carrying conductors at 30°C.
Maximum OCPD for a general-purpose branch circuit?
- Tempting: 40 A (Table 310.16, 90°C) or 35 A (75°C).
- **Correct: 30 A** — 240.4(D)(7).

## Trap 3: Nameplate vs. Table Current for Motors
*Question:* A 7½-hp, 230-V, 3-phase motor has a nameplate FLA of 20 A. Minimum branch-circuit
conductor ampacity?
- Tempting: 20 × 1.25 = 25 A.
- **Correct: 22 × 1.25 = 27.5 A** — use Table 430.250 FLC (22 A), not the nameplate, for
  conductors (430.6(A)(1)). The nameplate is used only for overloads.

## Trap 4: Round-Trip Length in Voltage Drop
*Question:* A 120-V, 10-A load is 100 ft from the panel on 12 AWG copper. Voltage drop?
- Tempting: using 200 ft in the formula *and* the 2 multiplier → 7.9 V.
- **Correct:** VD = (2 × 12.9 × 10 × 100) ÷ 6,530 = **3.95 V**. The "2" already accounts for the
  return conductor.

## Trap 5: Applying the 75% Appliance Demand to Three Appliances
*Question:* A dwelling has a dishwasher (1,200 VA), disposal (900 VA), and water heater
(4,500 W). Load?
- Tempting: 6,600 × 0.75 = 4,950 VA.
- **Correct: 6,600 VA.** The 75% factor in 220.53 requires **four or more** appliances.

## Trap 6: Next Size Up Where It Isn't Allowed
*Question:* Motor feeder OCPD: largest branch device 90 A plus other motor FLCs of 14 A and
7.6 A. Maximum standard feeder OCPD?
- Tempting: 125 A (next size up from 111.6 A).
- **Correct: 110 A.** 430.62 says "not greater than" — round **down**. Next-size-up permission
  applies to motor branch circuits (430.52) and some other rules, not here.

## Trap 7: Dwelling vs. Non-Dwelling Rules
*Question:* Receptacle load for 40 general-purpose receptacles in a dwelling?
- Tempting: 40 × 180 = 7,200 VA.
- **Correct:** In dwellings, general-use receptacles are **included in the 3 VA/ft²** general
  lighting load; they are not counted at 180 VA each (220.14(J)).

## Trap 8: Minimum vs. Maximum
*Question:* "What is the **maximum** distance from a box that NM cable must be secured?"
- Tempting: 4½ ft (the maximum interval between supports).
- **Correct: 12 in** from the box (334.30). Read the question's subject: the distance from the
  box, not the spacing between supports.

## Trap 9: Counting Grounds in Box Fill
*Question:* A box has three cables, each with an EGC. How many volume allowances for the EGCs?
- Tempting: 3.
- **Correct: 1** (all EGCs together count as one, based on the largest) — 314.16(B)(5).

## Trap 10: Informational Notes as Requirements
*Question:* "The NEC requires branch-circuit voltage drop not to exceed 3%." True or false?
- **False** for general branch circuits — the 3% and 5% figures appear in **informational
  notes**, which are not enforceable (90.5(C)). Specific articles (such as fire pumps) do set
  enforceable limits.

## Summary Table of Traps
| Trap | Defense |
|---|---|
| Wrong temperature column | Check wiring method limits (NM 60°C) and 110.14(C) terminals |
| Forgetting 240.4(D) | Always check small-conductor OCPD limits last |
| Nameplate vs. table | Table FLC for conductors and SC/GF protection; nameplate for overloads |
| Round-trip length | Use one-way length with the 2 or 1.732 multiplier |
| Demand factor conditions | Read the conditions (four or more appliances, etc.) |
| Next size up | Allowed only where the rule says so; "not greater than" means round down |
| Dwelling vs. other | Identify occupancy before choosing the rule |
| Min vs. max, subject of question | Underline the subject and qualifier |
| EGC box fill | All EGCs = one allowance |
| Informational notes | Not enforceable requirements |

> **Safety:** Several of these traps mirror real field errors that cause fires: NM cable sized
> from the wrong column, 10 AWG on a 40-A breaker, and motor conductors sized from nameplate
> current. Getting them right on the exam and on the job protects people and property.

## Key Takeaways
- Every distractor is a predictable error — learn the errors.
- Check wiring-method temperature limits, 240.4(D), and terminal ratings on every ampacity
  question.
- Use table FLC for motor conductors and short-circuit protection; nameplate for overloads.
- Read conditions, qualifiers, occupancy type, and the exact subject of each question.
