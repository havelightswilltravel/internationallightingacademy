# Content Governance: Keeping the Training Current and Correct

Lighting technology, codes and safety standards change constantly. This is how the program
stays accurate.

## 1. Status of the initial content

The first version of the curriculum (October 2026) was drafted with AI assistance from
well-established public standards and industry practice. **Every lesson, question, skill
checklist and library guide is a DRAFT until it has been signed off by a qualified reviewer.**
Before technicians rely on it:

- [ ] A **licensed master or journeyman electrician** reviews every safety procedure, code reference and calculation.
- [ ] An **experienced lighting field lead** reviews the troubleshooting guides and hands-on skill criteria against how your crews actually work.
- [ ] Your **safety manager** reviews the LOTO, PPE, ladder, MEWP and arc-flash content against your written safety program.
- [ ] Your own **troubleshooting guides** are added to `curriculum/library/` or uploaded through **Admin → Library**.

Record each review in the commit message or pull request, e.g. `Reviewed LT2-C05 — J. Smith, Master Electrician #12345`.

## 2. Review cycle

| What | How often | Trigger for an early review |
|---|---|---|
| Safety content (LT1-C01, C02, C06, EA1-C05, EA3-C05, safety guides) | Every 12 months | New OSHA rule or NFPA 70E edition (every 3 years: 2024, 2027, …), any incident or near-miss |
| Code content (NEC references, EA/JW levels) | When your state adopts a new NEC edition (published every 3 years: 2023, 2026, 2029) | Local amendments |
| Technology courses (LED/drivers, controls, NLC, emerging tech) | Every 12 months | New product categories, DLC/ENERGY STAR spec changes, manufacturer bulletins |
| Energy codes (LT4-C02) | Every 12 months | New ASHRAE 90.1 / IECC / Title 24 adoption |
| Troubleshooting library | Per guide (`review_interval_months`, default 12) | Field feedback, repeat callbacks |
| Question banks | Every 6 months | Item analysis shows questions most people miss, or that everyone gets right |

The app flags library guides past their review date (**Admin → Library**).

## 3. Technology watch list

Topics that are changing quickly and will need new or updated content:

- **Codes:** 2026 NEC adoption by states (load calculations moved to a new Article 120; other reorganization). Plan the EA/JW update for when your state adopts it.
- **LED and controls:** networked lighting controls (NLC) and luminaire-level lighting control, wireless mesh protocols, Bluetooth Mesh/Zigbee/Matter in commercial lighting, DLC NLC specifications.
- **PoE and DC lighting:** Power-over-Ethernet luminaires and DC microgrids.
- **Human-centric and tunable-white lighting:** circadian metrics, standards updates.
- **UV-C disinfection:** safety requirements and exposure limits.
- **Solar and off-grid site lighting,** battery chemistry and storage safety.
- **Smart-city and IoT sensors** on poles; cybersecurity for connected lighting.
- **Fluorescent phase-outs:** state bans on fluorescent lamp sales are expanding, which changes relamping work and adds retrofit volume.
- **EV charging and energy storage** (feeds the EA4 course).

## 4. How to update content

1. Edit or add files in `curriculum/`. The format is in `curriculum/README.md`.
2. Run `npm run validate-curriculum` and fix any errors.
3. Get it reviewed (pull request).
4. Deploy, then re-import: **Platform → Curriculum → Re-import**, or `npm run import-curriculum`.

Re-importing never deletes learner history. Removed lessons and questions are hidden, and past
attempts still show. **Never reuse a question ID for a different question.** Give rewritten
questions a new ID.

## 5. Field feedback loop

- Evaluators note confusing or outdated material in the skill sign-off notes.
- Feed repeat callbacks and new failure modes into the troubleshooting library.
- Each quarter, the curriculum owner reviews feedback, quiz statistics and new technology, then schedules updates.

## 6. Ongoing research with AI assistance

Claude can help keep the content current. For example: *"Review LT3-C01 against current DLC
technical requirements and the latest LED driver practices; propose changes as a pull request."*
Always have a qualified person review AI-proposed changes before they are published.
