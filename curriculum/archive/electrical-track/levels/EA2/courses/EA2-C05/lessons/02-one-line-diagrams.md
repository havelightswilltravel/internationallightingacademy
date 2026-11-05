---
title: Reading One-Line Diagrams
minutes: 45
video:
video_suggestion: >
  Split screen: on one side a project one-line diagram, on the other a walk through the building's
  electrical rooms. The narrator traces from the utility transformer to the main switchboard,
  distribution panel, a dry-type transformer and a lighting panel, matching each symbol to the real
  equipment nameplate (viewed from outside arc-flash boundaries with covers closed).
---

## What a One-Line Diagram Shows

A **one-line (single-line) diagram** represents the power distribution system using single lines
and standard symbols, regardless of how many conductors actually exist. It answers the big
questions:
- Where does power come from (utility, generator, PV)?
- What equipment does it pass through?
- What protects each piece of equipment?
- What voltage is present at each point?

It does **not** show physical locations or routing — that's the plans' job.

## Common One-Line Symbols

| Symbol (typical) | Meaning |
|---|---|
| Two interlocking circles or coil symbols | Transformer, with kVA, primary/secondary voltage and connection (e.g., 480 V Δ – 208Y/120 V) |
| Square-bracket arc or "breaker" symbol with rating | Circuit breaker — frame/trip (e.g., 400AF/350AT) |
| Switch blade with a fuse | Fused disconnect switch, with switch rating and fuse rating (e.g., 200A/3P, 150A fuses) |
| Heavy horizontal line | Bus (switchboard or panelboard bus), with rating (e.g., 1200 A bus) |
| Circle with "M" | Motor or utility meter (context matters — check the legend) |
| "CT" with ratio | Current transformers, often for metering |
| Box labeled ATS | Automatic transfer switch (normal / emergency) |
| Ground symbol | Grounding electrode system / system grounding point |
| Box labeled SPD or TVSS | Surge protective device |
| "G" in a circle | Generator, with kW rating |

Symbols vary; always use the project legend.

## Reading Equipment Tags

A one-line typically labels each element:
- **MSB** — main switchboard: 1200 A, 480Y/277 V, 3φ, 4W, 65 kAIC
- **DP-1** — distribution panel: 400 A MLO (main lugs only)
- **T-1** — transformer: 75 kVA, 480 V Δ primary – 208Y/120 V secondary
- **LP-1A** — lighting/appliance panel: 225 A MCB (main circuit breaker), 208Y/120 V

**kAIC** is the interrupting rating (EA2-C03). **MLO** means the panel has no main breaker — it is
protected by the upstream feeder breaker. **MCB** means it has its own main.

## Feeder Designations

Feeders are often labeled with a tag that refers to a **feeder schedule**:
`F-4: (4) #3/0 + (1) #6 G, 2" C` → four 3/0 AWG conductors plus one 6 AWG EGC in 2 in. conduit.
Parallel feeders show sets: `(2) sets of (4) 250 kcmil + (1) #2 G in (2) 3" C`.

> **Field tip:** Check every feeder against what you learned in EA2-C02 and C03: does the EGC
> match Table 250.122 for the upstream OCPD? Does the conductor size match the OCPD? Does each
> parallel raceway carry a full-size EGC? Questions you raise early prevent expensive rework.

## Worked Example — Tracing a Panel to Its Source

**Task:** Find what feeds lighting panel LP-2B and what voltage is available.

1. Find LP-2B on the one-line: 225 A, 208Y/120 V, 42 circuits, 150 A MCB.
2. Trace the line upward: it connects to secondary of **T-2B**, 45 kVA, 480 V Δ – 208Y/120 V.
3. Continue upward from T-2B's primary: fed from breaker **#7 in DP-2**, rated 70 A, 3-pole.
4. DP-2 is fed from **MSB**, breaker #4, 400 A.
5. **Result:** LP-2B is a separately derived 208Y/120 V system. To lock it out completely,
   you must open its own main (150 A) — but to de-energize the panel's supply conductors, you must
   lock out **DP-2 breaker #7** feeding the transformer.

### Quick check of the transformer protection
T-2B full-load current, primary: 45,000 ÷ (1.732 × 480) ≈ **54 A**. Secondary: 45,000 ÷ (1.732 × 208)
≈ **125 A**. A 70 A primary breaker and a 150 A secondary main are plausible values — Article 450
transformer protection rules are covered in EA3. If something looks wrong, raise an RFI rather than
guessing.

## Emergency and Standby Systems

One-lines show the **normal** and **emergency** sources, the transfer switches, and which panels are
on each system. Emergency (Article 700) wiring must be kept independent of normal wiring, with
limited exceptions — the one-line tells you which feeders and panels fall under those rules.

## Available Fault Current and Labels

Many one-lines (or the short-circuit study) list **available fault current** at each bus. Service
equipment in other than dwelling units must be field-marked with the maximum available fault
current and the date it was determined (110.24). Arc-flash labels are developed from the study and
applied per NFPA 70E and 110.16.

> **Safety:** The one-line is your map for lockout. A panel can have more than one source —
> generator, UPS, PV, or a tie breaker. Identify **every** source on the one-line before planning
> LOTO, and verify absence of voltage at the point of work regardless of what the drawing says.
> Apprentices do not open energized switchgear to confirm nameplate data; read labels with covers
> closed or have a qualified person assist.

## Key Takeaways
- A one-line shows sources, distribution equipment, protection and voltages — not physical routing.
- Read equipment tags for bus rating, voltage, main type (MLO/MCB) and interrupting rating.
- Feeder tags reference a schedule of conductors, EGCs and raceway sizes — check them against code.
- Trace any panel upward to find its source and upstream device for LOTO.
- Identify all sources, including emergency and alternate sources, before planning lockout.
