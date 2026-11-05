---
title: "Local code and scope-of-work disclaimer"
status: Implemented (first version), open for your input
raised: 2026-11-05
---

# Discussion 001: Local code and scope-of-work disclaimer

## The question
Before anyone uses the program, it should be clear that **local codes and licensing rules decide
what a technician may actually do**. They vary by area, and some areas allow a technician only a
subset of what this program teaches, because the program covers the full range up to Master
Lighting Technician. (The program does not lead to a journeyman electrician license.)

## What I did (first version, ready for your review)
1. **A written notice**, `docs/DISCLAIMER.md`, in plain language. It covers:
   - Local codes vary, and the AHJ's adopted edition governs.
   - Licensing and scope of work vary, so a technician may be limited to a subset.
   - OSHA, NFPA 70E, company programs and manufacturer instructions still apply.
   - Completing a course is not a license and does not by itself make someone a "qualified person."
   - Content is reviewed but codes and products change.
2. **A required acknowledgment in the app.** Every user sees the notice on first sign-in and must
   check "I understand" before continuing. The app records who acknowledged it and when. If the
   wording ever changes, everyone is asked again automatically.
3. **Always available.** A public "Full notice" link sits on the sign-in page and in every page
   footer.

## Options for going further

| Option | What it does | Effort | My view |
|---|---|---|---|
| A. Acknowledgment at sign-in (done) | Everyone confirms they read it | Done | Keep. It's the baseline. |
| B. Notice in the license agreement | Licensee companies accept responsibility for local compliance contractually | Attorney time | **Do it.** This is where the real legal protection lives. |
| C. "Check your local rules" flags on specific lessons and skills | A visible badge on topics most often restricted: panel work, branch circuits, neon and signs, low-voltage and data, energized testing | Small | **Recommended.** It reminds people right where it matters. |
| D. Company "scope settings" | Each licensee's admin can mark skills or courses as *not performed by our technicians in our area*. Those skills still teach but drop out of promotion requirements, and techs see a clear "not in our scope" label. | Medium | **Recommended for licensing.** It turns a one-size program into one that fits each company's state. |
| E. State or jurisdiction profiles | Pre-built scope settings per state | Large, ongoing | Not yet. Licensees know their own rules better than we can maintain them. |

## My recommendation
Keep A. Add **B** when the license agreement is drafted, and add **C** next (cheap and visible).
Plan **D** before the first outside licensee goes live, since it makes the program usable in
states with stricter licensing.

## Questions for you
1. Should a company admin also have to acknowledge, on behalf of the company, that they have set
   their scope? This would be part of D.
2. Do you want the notice to name your company as the program publisher, or stay generic?
3. Who should review the wording: your attorney, your insurance carrier, or both?
