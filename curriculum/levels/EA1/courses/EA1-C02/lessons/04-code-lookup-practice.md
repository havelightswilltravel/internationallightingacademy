---
title: Code Lookup Method & Practice
minutes: 45
video:
video_suggestion: >
  Over-the-shoulder footage of a journeyman solving five lookup questions against a timer,
  narrating the keywords chosen, how the index entry leads to the article, how the scope is
  checked, and how the final answer is confirmed — including one deliberate wrong turn and
  recovery.
---

## A Repeatable Lookup Method

Code questions come at you on the job ("Does this garage receptacle need GFCI?") and on exams
under time pressure. Use the same method every time:

1. **Restate the question in Code words.** "Plug in the garage" becomes *receptacle*, *garage*,
   *dwelling unit*, *ground-fault circuit-interrupter*.
2. **Pick a starting point.** If you know the article, go to the table of contents or your tab. If
   not, use the **index** with the most specific noun.
3. **Confirm the scope.** Read the xxx.1 scope section and the parent heading. Are you in a
   dwelling or non-dwelling subdivision? A general rule or a Chapter 5–7 modification?
4. **Read the whole section**, including exceptions and the subdivisions around it.
5. **Check definitions** in Article 100 for any word the answer depends on.
6. **Check for modifications** in Chapters 5–7 (for example, pools, health care, hazardous
   locations) and for local amendments.
7. **Answer in your own words** and note the section number.

> **Safety:** A code lookup never replaces safe work practices. Looking up whether a circuit
> needs GFCI protection tells you nothing about whether it is energized right now. Before
> working on any circuit, apply LOTO and verify absence of voltage with a tested meter.

## Worked Lookups (2023 NEC)

Work each of these in your own book before reading the answer. Section numbers are from the 2023
edition; confirm against your AHJ's edition.

### 1. Does a receptacle in a dwelling's attached garage need GFCI protection?
- Keywords: *ground-fault circuit interrupter, dwelling, garage*.
- Index → Ground-fault circuit interrupters → protection for personnel → **210.8**.
- 210.8(A) covers **dwelling units** and lists garages (and accessory buildings meeting the stated
  conditions). **Answer: Yes — 210.8(A).** Note that the 2023 edition's dwelling GFCI rule covers
  125 V through 250 V receptacles supplied by single-phase branch circuits rated 150 V or less to
  ground, so a 240 V garage receptacle is included too. Check your edition — this scope has
  changed over recent cycles.

### 2. Which dwelling rooms require AFCI protection for 120 V, 15 and 20 A branch circuits?
- Index → Arc-fault circuit interrupters → **210.12**.
- 210.12(A) lists kitchens, family rooms, dining rooms, living rooms, parlors, libraries, dens,
  bedrooms, sunrooms, recreation rooms, closets, hallways, laundry areas and similar rooms or
  areas. **Answer: 210.12(A).**

### 3. How often must EMT be supported?
- Go to Article 358 (EMT) → Part II Installation → **358.30**, Securing and Supporting.
- **Answer:** fastened within **3 ft** of each outlet box, junction box, device box, cabinet,
  conduit body or other termination, and supported at intervals not exceeding **10 ft**, with
  exceptions (e.g., for some unbroken lengths and concealed work in finished buildings).

### 4. What is the maximum total of bends between pull points in EMT?
- **358.26** — not more than the equivalent of **four quarter bends (360° total)** between pull
  points, including offsets.

### 5. What is the 90 °C ampacity of 12 AWG copper THHN, and what's the maximum breaker?
- **Table 310.16**, 90 °C column: **30 A**.
- But **240.4(D)** limits overcurrent protection for 12 AWG copper to **20 A**. And
  **110.14(C)** usually limits the ampacity you may use to the terminal temperature rating
  (often 60 °C or 75 °C). The 90 °C value is typically used as the starting point for derating,
  which you'll study in EA2.

### 6. How much box volume does each 12 AWG conductor require?
- **314.16(B)** and **Table 314.16(B)**: **2.25 in³** per 12 AWG conductor (2.0 in³ for 14 AWG,
  2.5 in³ for 10 AWG).

### Worked Box-Fill Example
A device box contains: two 12/2 NM cables with ground (four insulated 12 AWG conductors plus two
bare EGCs), one receptacle, and no internal clamps (the box uses external cable clamps).

| Item | Rule (paraphrased, 314.16(B)) | Count |
|---|---|---|
| Insulated conductors entering the box | 1 each | 4 |
| Equipment grounding conductors | Up to four together count as 1 (a quarter allowance for each one beyond four) | 1 |
| Device (receptacle) on a yoke | 2, based on largest conductor connected | 2 |
| Internal cable clamps | None | 0 |
| **Total** | | **7** |

Volume required = 7 × 2.25 in³ = **15.75 in³**. A box marked 18 in³ is adequate; a box marked
15.5 in³ is not.

### 7. How deep must UF cable be buried under a residential lawn?
- **300.5** and **Table 300.5**. The answer depends on the wiring method and circuit type. The
  general direct-burial column requires 24 in, but a separate column allows **12 in** for
  residential branch circuits rated 120 V or less with GFCI protection and overcurrent protection
  of 20 A or less. **Answer: 24 in generally, or 12 in if those conditions are met.**

### 8. How much free conductor must be left at each box?
- **300.14** — at least **6 in** of free conductor at each outlet, junction and switch point, and
  where the box opening is less than 8 in in any dimension, at least **3 in** must extend outside
  the opening.

### 9. Where is the neutral-at-switch-location rule?
- **404.2(C)** — a grounded conductor must generally be provided at switch locations controlling
  lighting loads, with listed exceptions. This supports occupancy sensors and smart switches that
  need a neutral.

### 10. How many 20 A small-appliance branch circuits does a dwelling kitchen need?
- **210.11(C)(1)** — two or more 20 A small-appliance branch circuits for the receptacle outlets
  covered by 210.52(B).

## Exam Strategy

- Don't read the whole article from the top — use the index to jump in, then read the full
  section.
- Watch for **"dwelling" vs. "other than dwelling"** subdivisions; many questions hinge on it.
- Watch for **"shall be permitted"** versus **"shall."**
- If an answer seems too easy, check for an exception.

## Key Takeaways
- Restate the question in Code words, use the index, confirm scope, read the whole section.
- Always check Article 100 definitions and Chapters 5–7 modifications.
- Table ampacity, terminal temperature (110.14(C)) and small-conductor limits (240.4(D)) work together.
- Box fill: count conductors, count up to four EGCs as one, count devices as two, then multiply by the volume allowance.
- Section numbers here are 2023 NEC; verify in the edition your AHJ enforces.
