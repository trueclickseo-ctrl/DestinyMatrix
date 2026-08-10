# 05 — Deployment
### Live FTP Testing After Every Phase (Souliography)

> Governed by 00_PROJECT_MANIFESTO.md. Applies alongside the Mandatory Quality Gates in 03_STANDARDS.md — a phase is not "done" until it both passes its gates and deploys cleanly.

---

## 1. How This Site Deploys

Static build (Astro `astro build` → `/dist`) pushed via FTP to the hosting `public_html` folder. No CI/CD pipeline yet — deployment is manual/agent-triggered per phase so the site can be checked live at every step.

**Credentials live in `.env` at the project root — never in these markdown docs, never committed to git.** `.env` is listed in `.gitignore`. `.env.example` documents the required variable names with no values, for reference.

Required environment variables (see `.env.example`):
- `FTP_HOST`
- `FTP_USERNAME`
- `FTP_PORT`
- `FTP_PASSWORD`
- `FTP_REMOTE_DIR` (currently `public_html`)

---

## 2. Deploy Steps (what the agent should do at the end of each phase)

1. Confirm all applicable Mandatory Quality Gates (03_STANDARDS.md) pass.
2. Run `astro build` and confirm `/dist` is produced with no errors.
3. Upload the contents of `/dist` to `FTP_REMOTE_DIR` on `FTP_HOST` using the credentials in `.env`, over FTP on `FTP_PORT`.
4. Confirm the live domain (`souliography.com`) reflects the new build — spot-check the homepage and the phase's key new page(s).
5. Report deploy status as part of the Phase Report (00_PROJECT_MANIFESTO.md Section 2.3): what was uploaded, any upload errors, and the live URL(s) to check.

---

## 3. Cautions

- **This deploys straight to production** — there is no staging environment. Treat every deploy as user-visible immediately. If a phase's build fails Section 1's checks, do not deploy it, even partially.
- **Never print, log, or write the FTP password into any committed file, console output, or generated documentation.** Read it from `.env` only.
- **If `.env` is ever accidentally committed,** stop and flag it — the password should be rotated via the hosting control panel before continuing.
- A future phase (post-Phase 1, optional) could replace manual FTP pushes with a proper CI/CD pipeline (e.g. GitHub Actions → FTP deploy on merge to main) — not required now, but the Service Layer's config-over-hardcoding principle (01_ARCHITECTURE.md) means the deploy step should be scripted/repeatable, not ad hoc, so this upgrade is easy later.
