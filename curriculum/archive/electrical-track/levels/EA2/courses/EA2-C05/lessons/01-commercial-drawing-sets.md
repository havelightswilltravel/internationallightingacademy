---
title: Navigating a Commercial Drawing Set
minutes: 40
video:
video_suggestion: >
  In a job trailer, a foreman flips through a full commercial drawing set — cover sheet, sheet
  index, architectural reflected ceiling plans, mechanical plans and the E-series — explaining how
  to find the electrical symbols legend, general notes, keyed notes and details, and how to
  cross-reference a detail bubble to its sheet. Ends by checking the revision block and the
  latest ASI/bulletin log.
---

## From Lighting Plans to Full Commercial Sets

In LT2 you read lighting plans, fixture schedules and panel schedules. A commercial electrical set
covers much more: power, lighting, systems (fire alarm, data, security), one-line and riser
diagrams, schedules, details and the specifications. Learning where things live in the set is the
first skill — you can't install what you can't find.

## Sheet Organization

Most U.S. drawing sets follow a discipline-letter convention (based on the U.S. National CAD
Standard):

| Prefix | Discipline |
|---|---|
| G | General (cover, index, code summary) |
| C / L | Civil / Landscape (site utilities, site lighting) |
| A | Architectural (floor plans, reflected ceiling plans, elevations) |
| S | Structural |
| M / P / FP | Mechanical / Plumbing / Fire Protection |
| E | Electrical |
| T or EY | Technology / communications (varies) |
| FA | Fire alarm (sometimes within E-series) |

A typical E-series:

| Sheet | Content |
|---|---|
| E0.01 | Symbols legend, abbreviations, general notes |
| E0.02 | Electrical site plan |
| E1.xx | Lighting plans by floor |
| E2.xx | Power plans by floor |
| E3.xx | Systems plans (fire alarm, data, security) |
| E4.xx | Enlarged plans (electrical rooms, kitchens) |
| E5.xx | Details |
| E6.xx | One-line diagram, riser diagrams |
| E7.xx | Panel schedules, equipment and luminaire schedules |

Numbering varies by firm — always start at the **sheet index** on the cover.

## Reading the Title Block

Every sheet's title block tells you:
- Project name and number, sheet title and number
- Engineer of record and professional seal
- **Revision block** — revision numbers, dates and descriptions
- Issue status: "For Permit," "For Bid," "For Construction," "Conformed"

> **Field rule:** Build only from the current **For Construction** (or conformed) set. Before
> starting any area, check that your sheet's latest revision matches the master set and the
> bulletin/ASI log. Clouded areas with a delta (triangle) and number show what changed in that
> revision.

## Symbols, Abbreviations and Notes

- The **symbols legend** shows what each symbol means on *this* project. Symbols are not fully
  standardized; a symbol that means a quad receptacle on one job may mean something else on another.
- **General notes** apply to every sheet in the series (for example, "All branch circuits shall
  have a dedicated neutral" or "Mount receptacles at 18 in. AFF unless noted").
- **Sheet notes / keyed notes** are numbered hexagons or circles that point to a specific item on
  that sheet only.
- Common abbreviations: AFF (above finished floor), AFG (above finished grade), EC (electrical
  contractor), GC (general contractor), NIC (not in contract), NL (night light), EM (emergency),
  WP (weatherproof), GFI/GFCI, TYP (typical), UON (unless otherwise noted), EWC (electric water cooler).

## Reading a Power Plan

On a power plan, each device symbol has a **circuit tag** — for example "LP-2A-14" meaning panel
LP-2A, circuit 14. Home run arrows point toward the panel and carry the circuit numbers. Hash marks
on a raceway line may indicate conductor counts (long marks for neutrals, short for hots, with a
distinct mark for EGCs — check the legend). Many modern drawings omit hash marks and expect the
installer to apply the specification and code.

### Worked Example — Counting Conductors in a Home Run
A home run arrow labeled "LP-2A-1,3,5" with a note "3 #12, 1 #12 N, 1 #12 G, ¾ in. C" tells you:
- Three 20 A circuits on phases A, B and C sharing one neutral — a **multiwire branch circuit**
- Five conductors in ¾ in. conduit
- Breakers must provide simultaneous disconnect (210.4(B)) — handle ties or a 3-pole breaker
- Current-carrying count for derating: three hots; the neutral counts if the load is mainly nonlinear (EA2-C03)

## Coordination With Other Trades

Electrical plans show *approximate* device locations. Final locations are set by:
- **Architectural** plans and elevations (casework, finishes, door swings)
- **Reflected ceiling plans** (luminaires, sensors, ceiling heights)
- **Mechanical** equipment schedules (HVAC equipment ratings and disconnect locations)
- **Dimensions on enlarged plans** — always take precedence over scaling a drawing

> **Field tip:** Never scale a drawing to locate critical items. Prints may not be printed at
> true scale. Use dimensions, or confirm with the foreman.

> **Safety:** Drawings identify existing energized equipment, but they are not proof of its state.
> Before working near existing panels, switchgear or circuits shown on demolition or renovation
> drawings, verify the actual conditions in the field and follow LOTO and verification of absence
> of voltage.

## Key Takeaways
- Start at the sheet index; learn the E-series organization for your project.
- Check the title block revision and the bulletin/ASI log before building from any sheet.
- Use the project-specific symbols legend, general notes and keyed notes.
- Circuit tags and home run notes tell you panel, circuit, conductor count and raceway size.
- Coordinate with architectural and mechanical drawings; never scale for critical locations.
