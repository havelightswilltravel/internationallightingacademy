# Licensing the Program to Other Companies

The platform is **multi-company** from the ground up. Each licensee company gets its own
private space, and you, as platform owner, control licenses centrally.

## What a licensee gets

- The full academy curriculum (all levels, lessons, quizzes, exams and skill checklists) and every future update you publish.
- Its own users, evaluators, admins, reports and pay scale.
- The ability to add **its own** videos and troubleshooting guides, visible only to its own people.
- Certificates its technicians can show customers (`/verify/<certificate-number>`).

## What stays private

Each company sees only its own users, progress, hours, sign-offs, guides and videos. Platform-wide
content (your curriculum, videos and library) is shared with every licensee.

## How to license a company (in the app)

1. **Platform → Companies → License a new company.** Enter the company name, plan, number of technician seats, expiry date, and the company admin's name and email.
2. Copy the temporary password shown and send it to the company admin securely.
3. The company admin signs in, sets a new password, and adds users one at a time or in bulk.
4. To change seats, extend or renew, or suspend for non-payment: **Platform → Companies → company**.
   - **Suspended** or **expired** companies cannot sign in, but their data is kept.
   - **Seat limit** applies to active technicians. Admins and evaluators do not use seats.

## Suggested commercial model (for discussion)

| Plan | Typical buyer | Suggested structure |
|---|---|---|
| Trial | Prospects | 30 days, up to 5 technicians |
| Standard | Small lighting contractors | Per active technician per month, annual contract |
| Professional | Multi-branch service companies | Volume pricing, company-branded videos, onboarding help |
| Enterprise | National facility-service firms | Custom content, private deployment option, SSO, API access |

Common add-ons: evaluator training, on-site placement assessments, custom content development,
and apprenticeship-registration support.

## Before selling — checklist

- [ ] **SME sign-off** of all content (see `CONTENT_GOVERNANCE.md`). Selling unreviewed safety training creates liability.
- [ ] **License agreement / Terms of Service** drafted by an attorney, covering: no warranty that training replaces employer safety programs; the licensee remains responsible for supervision, PPE and code compliance; content IP stays yours; data ownership and retention; limitation of liability.
- [ ] **Privacy policy** covering technician personal data and training records.
- [ ] **Trademark** search and registration for the academy name.
- [ ] **Hosted deployment** with backups and HTTPS (see `DEPLOYMENT.md`).
- [ ] **Billing:** invoice manually at first. Online billing (e.g., Stripe) is on the roadmap.
- [ ] Decide whether licensees may rename or brand the academy.

## Apprenticeship note for licensees

Licensees who want electrical-track hours to count toward a journeyman license must register
their own apprenticeship program, or join yours as a participating employer, with the U.S. DOL
Office of Apprenticeship or their State Apprenticeship Agency. Supervision must be by licensed
electricians. Requirements vary by state.
