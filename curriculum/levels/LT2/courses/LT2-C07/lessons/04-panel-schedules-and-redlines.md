---
title: Panel Schedules, Load Totals and Redlines
minutes: 30
video:
video_suggestion: >
  At a plan table, a lead tech traces a fixture from the lighting plan to its homerun label,
  then to the panel schedule on the schedule sheet, reading breaker size, poles, phase and
  load. Then shows a set of field redlines — a relocated fixture, a circuit change and a
  corrected panel directory — and explains how redlines become as-built drawings.
---

## From Plan to Panel

In LT2-C02 you read the panel directory at the panel. The **panel schedule on the drawings**
is the designer's version of that directory, with more information. Connecting a fixture on
the lighting plan to its panel schedule entry is skill LT2-S06.

### Typical panel schedule header

| Field | Example | Meaning |
|---|---|---|
| Panel name | LP-2 | Matches homerun labels on plans |
| Location | Elec Rm 204 | Where to find it |
| Voltage / phase / wires | 480Y/277 V, 3Ø, 4W | System (LT2-C01) |
| Bus rating | 225 A | Max current the bus is rated for |
| Main | MLO or 225 A main breaker | Main protection |
| Fed from | DP-1, circuit 3 | Upstream source |
| AIC / SCCR | 22,000 A (example) | Interrupting/short-circuit rating — breakers must be rated for available fault current |
| Mounting | Surface / recessed | |

### Typical body

| Ckt | Description | VA | Brkr | Ph | Brkr | VA | Description | Ckt |
|---|---|---|---|---|---|---|---|---|
| 1 | Ltg – Rooms 201–205 | 1,850 | 20/1 | A | 20/1 | 2,400 | Ltg – Open Office 210 N | 2 |
| 3 | Ltg – Corridor 200 | 960 | 20/1 | B | 20/1 | 2,250 | Ltg – Open Office 210 S | 4 |
| 5 | Ltg – EM / NL Unswitched | 480 | 20/1 | C | 20/1 | — | Spare | 6 |
| 7 | Ltg – Rooms 206–209 | 1,700 | 20/1 | A | — | — | Space | 8 |

- **Spare** = a breaker installed but not connected to a load.
- **Space** = a position with no breaker installed (bus provisions only).
- At the bottom: total connected VA per phase, total load, demand load, and sometimes
  calculated amps per phase.

### Reading the load data

1. **Per-circuit check:** VA ÷ circuit voltage = approximate amps. Circuit 2: 2,400 ÷ 277 ≈
   8.7 A on a 20 A breaker — well under the 16 A continuous-load threshold.
2. **Phase balance:** compare totals on A, B and C. Designers try to keep them close. If
   you're adding fixtures to a panel, your lead will choose circuits to keep balance.
3. **Spare capacity:** spares and spaces show room for future work.

## Tracing a Fixture From Plan to Breaker: Worked Example

**Task:** Find the breaker for the 2x4 troffers in Room 207.

1. Lighting plan E2.02: Room 207 shows type **A** fixtures with tag "**a**" and circuit label
   "**LP-2-7**" on the homerun arrow.
2. General note: "All lighting 277 V unless noted."
3. Panel schedule LP-2: circuit 7 = "Ltg – Rooms 206–209," 20/1, phase A, 1,700 VA.
4. So: Panel LP-2 in Elec Rm 204, single-pole 20 A breaker #7, phase A, 277 V.
5. In the field: verify with a tracer, lock out breaker 7, verify absence of voltage at a
   Room 207 fixture (live-dead-live). Also check whether the type A fixtures include any
   **A-EM** units with an unswitched feed from circuit 5.

> **Safety:** The drawings are where you **start**, not where you finish. Renovations,
> undocumented changes and errors are common. A circuit number from the drawings must always
> be confirmed by lockout and verification at the point of work.

## Redlines and As-Builts

When field conditions differ from the drawings — a fixture moved to clear a duct, a circuit
reassigned, a homerun routed differently — the change must be recorded. Contractors keep a
**redline set**: a copy of the drawings marked up in red (or a PDF markup) as the job
progresses.

### Good redline practice
- Mark changes **the day they happen**, not at the end of the job from memory.
- Use clear symbols and short notes: "Fixture moved 3 ft east to clear duct — 5/14 JS."
- Record **circuit changes** carefully: new circuit number, panel, and which fixtures.
- Cloud the change and initial/date it.
- Update the **panel directory** in the field at the same time.

At closeout, the redlines become the **as-built** (record) drawings given to the owner. Future
technicians — maybe you — will rely on them to lock out the right breaker years from now.

## Putting It Together: Field Discrepancy Checklist

When the drawings and field don't match, record:

| Item | Example |
|---|---|
| What the drawing shows | Type B fixtures on LP-2-9 |
| What you found | Type A fixtures, fed from LP-2-11 (traced and verified) |
| Location | Room 212, grid D-6 |
| Action | Redlined; panel directory updated; lead notified |

## Key Takeaways
- Panel schedules on drawings show panel name, location, system voltage, bus and main ratings, source, and each circuit's description, breaker, phase and load.
- "Spare" has a breaker; "space" doesn't.
- VA ÷ voltage gives approximate amps; compare to 80% of the breaker for continuous lighting loads.
- Trace plan → homerun label → panel schedule → field verification with lockout and live-dead-live.
- Record every field change on the redline set the same day and update the panel directory; redlines become as-builts.
