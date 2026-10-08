# SME Review Notes

The curriculum writers flagged these specific items for a licensed electrician or other
subject-matter expert to verify. Work through them during Phase 2 of the roadmap. Check off
each item, and correct the content if needed.

## Troubleshooting library (`curriculum/library/`)
- [ ] NFPA 70E wording on voltage testing in `safety/verifying-absence-of-voltage.md`: whether testing and troubleshooting are exempt from the written energized work permit but still need justification, risk assessment and PPE.
- [ ] Code citations to confirm against the 2023 NEC: 250.4(A)(5), 210.4(B), 300.13(B), 210.20(A); OSHA 1910.147 and 1910.333.
- [ ] Typical values:
  - HID restrike times
  - capacitor tolerance (±6% or ±10%)
  - GFCI trip level (4–6 mA)
  - insulation-resistance minimum of about 100 MΩ
  - voltage-drop K constants (12.9 Cu / 21.2 Al) and the worked example
  - open-neutral example voltages
  - 0–10V levels
  - sensor power-pack voltage
  - photocell aim and twist-lock wire colors
- [ ] Emergency lighting: test intervals, recharge time, feeding emergency drivers from an unswitched hot.
- [ ] Regulatory statements: tritium exit sign disposal, PCB ballast presumption (pre-1979, no "No PCBs" label), mercury vapor ballast ban, 811 call before digging.
- [ ] TLED Type B socket guidance (shunted vs non-shunted).
- [ ] Level tags on each guide.

## LT5 — Certified Advanced Lighting Technician
- [ ] NEC 110.3(B), 210.4(B), 410.130(G) (application to LED-retrofitted luminaires).
- [ ] PoE cable bundling reference: the Class 2 provisions were renumbered in the 2023 NEC; add the correct section.
- [ ] Energy-code values given as "common": occupancy-sensor time-out (20 min), override limits, functional testing. Tie each to the edition your jurisdiction has adopted.
- [ ] NFPA 101 emergency lighting values: 1.5 h; 1 fc average / 0.1 fc minimum; 40:1; 0.6 / 0.06 fc at end of duration.
- [ ] NFPA 70E PPE categories (4/8/25/40 cal/cm²) and the 1.2 cal/cm² arc-flash boundary.
- [ ] OSHA 1926.1053 ladder setup.
- [ ] 0–10V failure-mode behavior (varies by manufacturer).
- [ ] Fast-moving facts in LT5-C04: PoE power classes, UV-C wavelengths and exposure references, ANSI C136.10/.41, Zhaga Book 18 / D4i, IEEE 802.11bb, CIE S 026.
- [ ] Replace the illustrative labor units and contingencies in LT5-C01 with company data.
- [ ] **Management decision:** capstone minimum scope and retake policy.
- [ ] Low-voltage (PoE) licensing statement varies by state.

## EA3 — Electrical Apprentice III
- [ ] NFPA 70E (2024) section numbers: 130.2, 130.4, 130.5, Table 130.4(E)(a), Tables 130.7(C)(15)(a)/(c).
- [ ] PPE category table rows in EA3-C05 Lesson 2 (panelboards ≤240 V = Cat 1 / 19 in; >240–600 V = Cat 2 / 3 ft). The hospital label values are illustrative.
- [ ] 2023 NEC values:
  - Table 430.250 currents
  - Table 430.52 percentages and Exception No. 2
  - Table 450.3(B)
  - 240.21(B)/(C) tap rules
  - Table 220.12 values
  - 220.42/220.44 demand factors
  - 230.71
  - 110.14(D)
  - 215.12(C) and 210.5(C)
  - 220.87
- [ ] 9-lead dual-voltage motor connection table (the motor's own diagram governs).
- [ ] Industry guidance figures: voltage drop, NEMA MG 1 unbalance derating, ANSI C84.1, VFD discharge times, starting current.
- [ ] Rubber glove retest and issue rules (OSHA 1910.137) against your safety program.
- [ ] Tap-change example in EA3-C01 Lesson 4: check that it reads clearly.

## EA2 — Electrical Apprentice II
- [ ] Check these tables against a printed 2023 NEC:
  - Table 310.16
  - ambient correction factors (add the table number)
  - Table 310.15(C)(1)
  - Tables 250.66 and 250.122
  - Table 250.102(C)(1) (stepping above 1,100 kcmil)
  - Tables 314.16(A)/(B)
  - Chapter 9 Tables 4, 5 and 8
  - Table 352.30
  - Table 300.5
- [ ] Box fill: all EGCs count as one, plus ¼ for each beyond four (314.16(B)(5)).
- [ ] Flexible metal conduit as an EGC (6 ft / 20 A); MC support distances; anti-short bushing wording.
- [ ] Neutral-to-ground continuity test procedure in EA2-C02 Lesson 4 against company procedure.
- [ ] CSI MasterFormat section titles in EA2-C05.

## EA1 — Electrical Apprentice I
- [ ] Table 110.26(A)(1) voltage row label in the 2023 NEC.
- [ ] GFCI scope and location list (210.8(A)); tamper-resistant 250 V extension (406.12); isolated-ground (406.3(D)); AFCI extensions (210.12(D)).
- [ ] Countertop receptacles: 2023 island/peninsula changes (210.52(C)); 210.52(G) garage rule.
- [ ] Typical bender take-up values (5/6/8/11 in); how to teach shrink on a four-point saddle.
- [ ] OSHA clearances: 1926.600(a)(6), 1910.333(c)(3), 1926.451(f)(6), 1926.1408.
- [ ] Silica Table 1 entry for core drilling.
- [ ] 590.6 scope; Class A GFCI range; 12 AWG resistance (1.93 Ω per 1,000 ft); K values.

## LT1 — Lighting Technician I
- [ ] **Policy decision (important):** OSHA 1910.333(b)(2) and NFPA 70E treat voltage verification and breaker operation as qualified-person tasks. LT1 content allows these only after training, in company-required PPE, and under direct supervision of a qualified person, until the company documents the technician as qualified for that task. Confirm this matches your electrical safety program, including the shock and arc-flash PPE required for testing at 120/277 V.
- [ ] NFPA 70E approach boundaries (3 ft 6 in / 10 ft) and the 1.2 cal/cm² arc flash boundary definition; shock-current table; arc temperature figure.
- [ ] Fall clearance rule of thumb (a 6 ft lanyard needs about 18 ft of clearance).
- [ ] OSHA citations:
  - 1910.333(c)(3), (c)(7) and (b)(2)
  - 1910.147(e)(3), (f)(3) and (f)(4)
  - 1910.137
  - 1926.1053(b) subsections
  - 1926.501(b)(1)
  - 1926.502(d)(15)
  - 1926.404(b)(1)
  - 1904.39
  - 1910.28
  - 1910.1200
  - 1926.417
- [ ] Universal waste (40 CFR 273), PCB rules (40 CFR 761) and EPA broken-lamp cleanup, against the rules of the states where you work.
- [ ] Lamp data: efficacy and CRI ranges, HID restrike times, the 2008 mercury vapor ballast ban, the lamp-base table.
- [ ] Add company standard practice for multi-tap ballast wiring; make sure the company procedures the lessons refer to (energy control, broken-lamp kit, PCB drum) exist.

## LT3 — Lighting Technician III
- [ ] NFPA 101 7.9/7.10 references; OSHA 1910.333(c)(3), 1926.453, 1910.67; NEC Table 300.5 burial depths.
- [ ] 2023 NEC power-limited articles (722/724/725); Article 404 neutral-at-switch and electronic-switch statements.
- [ ] Standards named: ANSI C137.1, NEMA SSL 7A, ANSI C136.10/.41, ANSI E1.11, IEC 62386, IEEE 1789; how a BCELTS is listed (UL 924 / UL 1008); how the DALI bus is classified for wiring.
- [ ] Rules of thumb:
  - constant-voltage driver loading of 80%
  - DALI bus limits
  - photocell turn-on light level
  - 28 mph MEWP wind rating
  - 35 ft from an energized machine
  - 30-minute lightning rule
  - 24 h battery charge
  - insulation-resistance test voltages
- [ ] **Policy decisions:**
  - mandatory harness use in scissor lifts
  - whether LT3 technicians may do energized diagnostic testing (skills S02 and S06)
  - tritium exit-sign return procedure

## LT4 — Lighting Technician IV (Senior)
- [ ] 2023 NEC sections:
  - 410.16
  - 410.30(B)
  - 410.130(G)
  - 404.2(C)
  - 404.22
  - 225.7
  - 600.3–600.6
  - 700.10(B), 700.12, 700.16 and the unit-equipment rule
  - Article 411 limits
  - Article 242 (replaced Article 285 in 2020)
- [ ] Add an explicit 2026 NEC note where your AHJ has adopted it.
- [ ] Energy-code values (all hedged in the text): vacancy shutoff time, override limits, partial-ON level, example LPD values.
- [ ] Industry figures: DLC power factor and THD; ANSI C136.2 surge levels; NEMA 410; GFCI trip range.
- [ ] IES illuminance and uniformity targets against current IES Recommended Practices.
- [ ] **Policy decision:** LT4 skills S03, S04 and S05 assume energized measurements in panels as a qualified person in arc-rated PPE. Confirm this against your NFPA 70E qualification policy and state licensing rules.

## LT2 — Lighting Technician II
- [ ] 2023 NEC sections:
  - 110.3(B), 110.12, 110.14, 110.16, 110.26 (working space depths and dimensions)
  - 210.4(B)
  - 240.4(D), 240.83(D)
  - 300.14
  - 408.4
  - 410.117(C) (18 in–6 ft tap and 6 ft unsupported whip)
- [ ] UL 1598C Listed/Classified wording and retrofit label content.
- [ ] HID figures: restrike times, ignitor pulse voltages, capacitor tolerance, "O"/"E" lamp ratings.
- [ ] **Company policies the writer proposed (management sign-off):**
  - Meters must be CAT III 1000 V / CAT IV 600 V and true-RMS.
  - Always pull a green EGC in every whip.
  - Lock out before relamping any Type B fixture.
  - LT2s remove dead fronts only under qualified supervision.
- [ ] **Policy decision:** skills S01 and S08 have LT2 trainees measuring in energized panels under qualified supervision. Confirm this against your NFPA 70E program.
- [ ] Interim instruction for LT2s who find emergency ballasts during a retrofit (currently deferred to LT3-C04).

## EA4 — Electrical Apprentice IV and JW — Journeyman Exam Preparation
- [ ] **Dwelling general lighting citation:** in the 2023 NEC the 3 VA/ft² dwelling value is in 220.41 (Table 220.12 covers non-dwelling occupancies). EA4/JW use 220.41; check every level for consistency. Confirm the demand factor table numbering (220.42).
- [ ] 2023 NEC sections:
  - 220.57 (EVSE), 220.70 (energy management)
  - 220.82(B): EVSE treated as a nameplate load
  - Articles 722/724/725 and the PoE bundling section
  - 517.31/517.33, 517.18(B)/517.19(B)
  - 500.8 (threads)
  - 310.10(G)
  - 760.136
  - 706.15
- [ ] Table 220.12 unit loads (office 1.3, retail 1.9, school 1.5, warehouse 1.2, restaurant 1.5, hospital 1.6 VA/ft²).
- [ ] Pool rules (680.21/680.22) and the GFCI list against the adopted edition.
- [ ] **Program decisions:** JW-S01 pass bar (21/25 lookups in 50 min); JW-S02 pass bar (12/15 calculations in 45 min); JW-S03 passing-score rule.
- [ ] Journeyman exam format figures are typical; each state's candidate bulletin governs.

---

# Round 2 — company documents and new system courses

## Corrections made to the company Master Troubleshooting Guide (confirm with your field leads)
- [ ] **Neon (most important):** "listen/look/feel for voltage in the glass" was changed to *look and listen only, from a distance*. Never touch energized glass, electrodes, boots or GTO cable. Secondaries reach about 15 kV.
- [ ] **Neon split-half isolation:** "go from GTO to ground on each lead" was replaced with a locked-out method using GTO-rated jumpers between each test. Grounding a live secondary is a high-voltage fault, and secondary ground-fault-protected transformers will trip on it. **Confirm exactly what your original step means and how your sign specialists do it.**
- [ ] **Neon transformer check:** "replace if it won't send power with secondary leads disconnected" now says test only by the manufacturer's method. Many protected or electronic units are designed not to output into an open secondary.
- [ ] **HID:**
  - Socket voltage is read by a qualified person with the igniter disconnected while locked out, using a meter rated above the open-circuit voltage.
  - Capacitors are discharged and tested for capacitance with power off.
  - The open-circuit voltage chart in LT2-C04 Lesson 5 uses approximate values. **Replace it with your company socket voltage chart or manufacturer data.**
- [ ] **Breakers:**
  - Checking amperage tolerance needs the dead front open, so it is qualified-only. Otherwise techs add up the connected load against 80% of the breaker rating.
  - The wiggle test is done gently with the dead front in place, and never when there are signs of heat.
  - A breaker is reset no more than once.
- [ ] **Steps that check line voltage, coil voltage, switch legs or sockets with power on** (incandescent, outlets, motion sensors, contactors, low-voltage, track, case lighting, LED signs) are marked as qualified-person work under NFPA 70E. Everyone else works locked out, with live-dead-live verification.
- [ ] **Motion sensors:** "check for good ground" now says check both the ground *and* the neutral.
- [ ] **Case lighting:** a defrost cycle or case controller never counts as a lockout. Do not change refrigeration settings.
- [ ] **Data cable:** "Cat5 pin chart" was updated to T568A/T568B for Cat5e/6/6A.
- [ ] **Emergency:** before replacing a standard ballast, confirm the switched feed is present. Before condemning a battery unit, check the battery plug, the charge indicator and the initial charge time.

## New courses: items to verify
- [ ] **LT1-C08–C10:**
  - ANSI ballast codes (M59, S55; M135 for 400 W pulse-start MH)
  - Recessed-luminaire insulation clearance (about 3 in, Article 410)
  - 2023 NEC 210.8 / 210.12 / 406.9 / 406.12 / 110.14(D)
  - the "no backstabs on replacements" recommendation
  - federal incandescent/halogen phase-out statement
- [ ] **LT2-C08–C11:**
  - H/J/L track contact descriptions
  - SWD/HID breaker marking (240.83(D))
  - rules of thumb: transformer loading 75–80%, halogen lamp voltage, 100 VA per Class 2 output, trip-time bands
- [ ] **LT3-C07–C11:**
  - defrost duration and case temperature ranges
  - PoE classes
  - BACnet MS/TP wiring practices
  - neon/LED sign standards (UL 2161, UL 879A, UL 48/1310/8750)
  - 600.6 sign disconnect
- [ ] **Scope decision:** LT1-C09 lets LT1 technicians replace receptacles and switches like-for-like, only when the company authorizes it and under supervision until skill LT1-S10 is signed off. Confirm this matches your policy and state licensing rules.

## Hiring kits & Manager Module (have HR and employment counsel review)
- [ ] These kit questions were reworded (each shows an ⓘ note on the scorecard):
  - attendance (was absences)
  - lifting/physical demands and heights (essential-functions framing)
  - "Healthy" requirement (replaced with essential physical functions)
  - "work around live electricity" (now about following lockout procedures)
  - tools (now the company tool policy)
  - smartphone/computer (now the device/reimbursement policy)
  - driving record (now a written standard, with an FCRA check after a conditional offer)
  - personal goals, likes and dislikes, "what matters" (now job-related)
- [ ] Write the company **tool policy**, **device/reimbursement policy** and **driving-record standard** the reworded questions refer to.
- [ ] Each company sets its own service area and state license question (the original named the Wasatch Front and a Utah license).
- [ ] MGR-C04 is general training, not legal advice. Have counsel review it against your state's rules (salary-history bans, fair-chance laws, drug testing).
