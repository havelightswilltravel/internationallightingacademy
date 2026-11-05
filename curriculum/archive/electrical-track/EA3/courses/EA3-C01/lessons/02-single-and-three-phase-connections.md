---
title: Single-Phase and Three-Phase Transformer Connections
minutes: 50
video:
video_suggestion: >
  Close-up demonstration on a training board: wiring a single-phase 240/480 V primary for
  480 V (series) and 240 V (parallel), then a three-phase delta-wye bank showing line versus
  phase voltages measured with a meter on a low-voltage trainer.
---

## Single-Phase Connections

Many single-phase dry-type transformers have **dual primary windings** (for example two
240 V windings, H1-H2 and H3-H4) and **dual secondary windings** (two 120 V windings, X1-X2
and X3-X4). How you connect them sets the voltage.

| Desired voltage | Primary connection (two 240 V windings) | Secondary connection (two 120 V windings) |
|---|---|---|
| 480 V primary | Series: jumper H2-H3, supply to H1 and H4 | — |
| 240 V primary | Parallel: H1-H3 and H2-H4 tied | — |
| 120/240 V 3-wire secondary | — | Series: jumper X2-X3 (becomes X0/neutral), lines on X1 and X4 |
| 120 V 2-wire secondary | — | Parallel: X1-X3 and X2-X4 tied |

The exact terminal numbering varies by manufacturer — the nameplate diagram governs. A wrong
jumper can put both windings in opposition (near-zero output) or short a winding. Before you
energize, have a second person check the jumpers against the diagram.

## Three-Phase Connections

A three-phase transformer (or a bank of three single-phase units) has three primary and three
secondary windings. Each set can be connected in **delta** or **wye**.

### Delta (Δ)
Windings connected end-to-end in a closed loop. Line voltage equals winding (phase) voltage.
Line current equals winding current x 1.732.

### Wye (Y)
One end of each winding is tied to a common point, which becomes the neutral (X0 on the
secondary). Line voltage equals winding voltage x 1.732. Line current equals winding current.

| Connection | Line voltage | Line current |
|---|---|---|
| Delta | = phase (winding) voltage | = phase current x 1.732 |
| Wye | = phase voltage x 1.732 | = phase current |

### The common building transformer: 480 V delta to 208Y/120 V
- Primary windings are connected in delta across 480 V, so each primary winding sees 480 V.
- Secondary windings are connected in wye; each winding produces 120 V.
- Line-to-line secondary voltage = 120 x 1.732 = 208 V.
- Winding turns ratio = 480 / 120 = 4, even though the line-to-line ratio is 480 / 208 = 2.31.

Other common combinations:

| Primary | Secondary | Typical use |
|---|---|---|
| 480 V delta | 208Y/120 V | Receptacles and 120 V loads in commercial buildings |
| 480 V delta | 240 V delta / 120 V center-tap (high-leg) | Older shops with 240 V motors and some 120 V loads |
| 4160 V or utility MV delta | 480Y/277 V | Building service; 277 V lighting, 480 V motors |
| 480 V delta | 480Y/277 V (isolation) | Creating a new grounded system or a drive isolation transformer |

### Phase shift
A delta-wye transformer shifts the secondary voltages by 30 electrical degrees relative to
the primary. That does not matter for an individual load, but it matters greatly if anyone
tries to parallel two transformers or close a tie between systems fed through different
transformer connections. Parallelling transformers is engineering work — matching ratio,
impedance, connection and phase shift — and is never improvised in the field.

## The Delta-Wye Secondary Is a Separately Derived System

Because the secondary of an isolating transformer has no direct electrical connection to the
supply conductors, it is a **separately derived system**. The NEC (250.30 in the 2023 edition)
requires that a grounded secondary like 208Y/120 V be bonded and grounded on its own:

- A **system bonding jumper** connects X0 (the neutral) to the equipment grounding/bonding
  system — at one point only, either in the transformer or at the first disconnecting means.
- A **supply-side bonding jumper** connects the transformer enclosure to the first
  disconnecting means when the bond is made at the disconnect, or vice versa.
- A **grounding electrode conductor** connects the neutral point to the building grounding
  electrode system (or an approved common GEC tap).

Lesson 4 covers sizing and installation details. The point to understand now: if you forget
the system bonding jumper, the secondary is effectively ungrounded. A ground fault will not
trip anything, and the neutral may float, producing dangerous and erratic voltages.

## Buck-Boost Transformers (Autotransformer Connection)

A buck-boost transformer is a small isolating transformer field-connected as an
**autotransformer** to raise or lower voltage by a small percentage (commonly 5–20%) — for
example to boost 208 V to about 230 V for equipment rated 230 V. Because the windings are
connected together, the output is not isolated, and the kVA it can serve is much larger than
its nameplate kVA. Follow the manufacturer's selection tables and connection diagrams exactly;
a reversed connection bucks when you intended to boost.

> **Safety:** Never assume a transformer bank's connection from the drawings alone. Before
> working on terminals, read the nameplate, establish an electrically safe work condition on
> every source, and test for absence of voltage on H and X terminals and X0. A floating
> neutral on an improperly bonded secondary can carry voltage to ground.

## Field Verification After Energizing (208Y/120 V secondary)

| Measurement | Expected (nominal) |
|---|---|
| X1-X2, X2-X3, X1-X3 | About 208 V each |
| X1-X0, X2-X0, X3-X0 | About 120 V each |
| X0 to ground | Approximately 0 V (bonded) |
| Each X terminal to ground | About 120 V |

If one line-to-neutral reading is very low and the other two are normal, suspect a loose
connection or an open winding. If X0-to-ground shows voltage, the system bonding jumper is
missing or the neutral is open.

## Key Takeaways
- Dual-winding single-phase units: series for the higher voltage, parallel for the lower.
- Delta: line voltage = phase voltage. Wye: line voltage = phase voltage x 1.732.
- A 480 V delta to 208Y/120 V transformer has 120 V secondary windings and a 30° shift.
- The grounded secondary of an isolating transformer is a separately derived system that
  needs its own system bonding jumper (one location) and grounding electrode conductor.
- Buck-boost units are autotransformer connections — not isolated; follow the maker's tables.
- Verify L-L, L-N and N-G voltages before connecting loads.
