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
| Safety content (LT1-C01, C02, C06, C11, LT3-C06, LT3-C12, LT4-C07, safety guides and toolbox talks) | Every 12 months | New OSHA rule or NFPA 70E edition (every 3 years: 2024, 2027, …), any incident or near-miss |
| Code content (NEC references, especially LT2-C02, LT4-C06) | When your state adopts a new NEC edition (published every 3 years: 2023, 2026, 2029) | Local amendments |
| Technology courses (LED/drivers, controls, NLC, emerging tech) | Every 12 months | New product categories, DLC/ENERGY STAR spec changes, manufacturer bulletins |
| Energy codes (LT4-C02) | Every 12 months | New ASHRAE 90.1 / IECC / Title 24 adoption |
| Troubleshooting library | Per guide (`review_interval_months`, default 12) | Field feedback, repeat callbacks |
| Question banks | Every 6 months | Item analysis shows questions most people miss, or that everyone gets right |

The app flags library guides past their review date (**Admin → Library**).

## 3. Technology watch list

Topics that are changing quickly and will need new or updated content:

- **Codes:** 2026 NEC adoption by states (load calculations moved to a new Article 120; other reorganization). Plan the code-reference update for when your state adopts it.
- **LED and controls:** networked lighting controls (NLC) and luminaire-level lighting control, wireless mesh protocols, Bluetooth Mesh/Zigbee/Matter in commercial lighting, DLC NLC specifications.
- **PoE and DC lighting:** Power-over-Ethernet luminaires and DC microgrids.
- **Human-centric and tunable-white lighting:** circadian metrics, standards updates.
- **UV-C disinfection:** safety requirements and exposure limits.
- **Solar and off-grid site lighting,** battery chemistry and storage safety.
- **Smart-city and IoT sensors** on poles; cybersecurity for connected lighting.
- **Fluorescent phase-outs:** state bans on fluorescent lamp sales are expanding, which changes relamping work and adds retrofit volume.

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

## 7. Program-wide practice decisions

These decisions apply to every course and library guide. Writers and reviewers should keep new
content consistent with them.

- **No group relamping (decided November 2026).** Group relamping is an older practice that has been replaced by retrofitting or replacing fixtures with LED. Teach spot relamping only as a service-call task on fixtures staying in place. For aging fluorescent or HID systems, the recommendation to the customer is a **retrofit or fixture replacement**. Group relamping may appear only as brief historical context.
- **Example figures only (decided November 2026).** Do not put the company's real labor rates, prices, costs or response commitments in the curriculum. Any lesson that uses dollar figures, labor units or response times must label them as made-up examples: use the standard "Example figures only" callout before the first figure, or an inline "example rate" note for a single number. Quiz questions with money use hypothetical wording.
- **Confirmed company policies (November 2026):**
  - Every removed magnetic ballast goes to the recycler, kept separate from suspect PCB ballasts and counted.
  - All lamps are recycled, including low-mercury lamps.
  - Lamps are never crushed unless the company has an approved, state-allowed system.
  - Nobody rides or moves a rolling scaffold with anyone on it.
- **Program scope (decided November 2026).** The program ends at Senior (LT4) and Master Lighting Technician (LT5). It does not lead to a journeyman electrician license, which requires an accredited or state-approved apprenticeship or school. Do not add content that promises an electrician's license path. Work that local law reserves for licensed electricians is taught as "recognize it and escalate." The earlier draft electrical-apprentice levels are archived, unused, in `curriculum/archive/electrical-track/`.
- **Dust masks are voluntary (decided November 2026).** Masks above ceilings and in attics are available and encouraged, not required. Anyone who wears one gets the OSHA 29 CFR 1910.134 Appendix D information. If a respirator ever becomes required, a full respirator program is needed.
- **Energized lighting work during business hours (company stance, November 2026).** Our company allows qualified, authorized technicians to work on energized lighting when shutting it off in an occupied building would create a hazard (OSHA 1910.333(a)(1) lists removal of illumination as an example; NFPA 70E 130.2(A)(1)). Every place this is taught carries a "company stance; your company decides its own" notice, because licensees must set their own policy.
- **Daily check-in when traveling (November 2026).** Technicians on out-of-town work talk with their supervisor every day.
- **Images (November 2026).** Photos from our safety meetings, including other companies' crews, and suitable images from the internet may be used in training, with all company names, logos and identifiable people's names removed. Use images whose license allows training use (your own photos, purchased stock, or free-to-use sources), and keep a note of where each came from.
- **Five levels (decided November 2026).** The program keeps five levels, LT1 to LT5, plus the Manager Module. The twelve-grade proposal (Discussion 006) was not adopted. Course placement by year and order is managed with the Program Index workbook (`docs/Lighting Academy Program Index.xlsx`, rebuilt by `scripts/program-index/`).
- **Safety-first task design (decided November 2026).** Every lesson that teaches a task asks the trainee to name the hazards and choose controls using the hierarchy of controls, and to think through the task sequence and next steps before starting; quizzes and "show me" modules for task courses include at least one such question. Trainees who lack the training to do a task safely stop, call their supervisor, and suggest new or revised training.
