# 00 — Project Manifesto
### Souliography — Self-Discovery Platform
*(repo codename: DestinyMatrix — internal only, never user-facing)*

> This document set is the project's governing documentation. Antigravity should treat all five files as binding project instructions, not a one-time prompt. Read this file first in every session.

**Governing document set:**
- **00_PROJECT_MANIFESTO.md** (this file) — vision, principles, operating rules, long-term goals
- **01_ARCHITECTURE.md** — engines, modules, design system, data flow, folder structure
- **02_ROADMAP.md** — phases, deliverables, definitions of done
- **03_STANDARDS.md** — engineering principles, coding standards, content governance, SEO, quality gates
- **04_DOMAIN_SPEC.md** — numerology, matrix, astrology, compatibility, and all other domain entities
- **05_DEPLOYMENT.md** — live FTP deployment process, run after every phase

When these documents conflict, this manifesto's principles win, followed by 03_STANDARDS, then 01_ARCHITECTURE, then 02_ROADMAP, then 04_DOMAIN_SPEC, then 05_DEPLOYMENT.

---

## 1. Mission

Build the world's most comprehensive self-discovery platform. This is **not** a calculator website — it is a multilingual educational platform and knowledge system spanning numerology, destiny matrix, astrology, compatibility, spiritual calculators, personality, human design, angel numbers, chakras, self-reflection, and interactive reports. It must exceed existing competitors in content quality, SEO, technical architecture, UX, performance, accessibility, scalability, internationalization, and maintainability.

Treat the platform as a **reusable knowledge operating system**, not a single-purpose calculator site — see 01_ARCHITECTURE.md and Section 5 of this file.

---

## 2. How Antigravity Should Operate

1. **Work in strict phases**, per 02_ROADMAP.md. Do not start work outside the current phase's scope, even if it seems convenient or related.
2. **Every phase must pass the Mandatory Quality Gates in 03_STANDARDS.md before you report it complete, then deploy per 05_DEPLOYMENT.md so it can be checked live.** Run the checks and the deploy yourself and show the output.
3. **At the end of each phase, output a short Phase Report:** what was built, what files changed, what was deliberately deferred, and what the next phase depends on.
4. **Never hardcode** content, strings, interpretation text, tokens, or navigation that could instead be config-, data-, or content-collection-driven. If you find yourself writing a second near-duplicate component, stop and extract a shared one instead.
5. **Architecture vs. implementation:** in Phase 1 you are defining interfaces, folder structure, typed contracts, and stubs for the systems in 01_ARCHITECTURE.md — not building full implementations. A stub returns a typed placeholder and compiles; it does not need real logic yet. Full implementation of any module happens only in the phase where the roadmap actually needs it. Do not over-build Phase 1.
6. **Ask before making an irreversible architectural decision** (e.g. changing the routing strategy, renaming a content collection schema, switching a core library). Everything else, proceed autonomously.
7. If a phase's scope is too large for one pass, **split it into numbered sub-steps and confirm each compiles before moving to the next.**
8. **Long-term maintainability beats short-term implementation speed** on every architectural decision (see Section 4, Enterprise Engineering Principles, in 03_STANDARDS.md).

---

## 3. Brand & Naming

**Decided.** The platform's brand name is **Souliography** (domain: `souliography.com`), owned and confirmed. Do not propose alternative names or revisit this decision.

Note: the git repository is named `DestinyMatrix` for historical reasons — this is a repo/codename artifact only and must never leak into user-facing branding, UI copy, page titles, metadata, or the Theme/Design System config. All public-facing brand references use "Souliography."

The brand name, logo slot, and tagline are part of the Theme module and Design System tokens (01_ARCHITECTURE.md) and are referenced everywhere via config — never hardcoded into pages or components.

**Action for Phase 1:** build out the Theme config and logo/tagline slot around the Souliography name (wordmark, favicon slot, OpenGraph default image slot). A tagline is not yet finalized — propose 3–5 short tagline options that fit an "-ography" (study/mapping of the soul) framing and support the full pillar range (numerology, astrology, human design, angel numbers, compatibility, chakras, personality) without over-indexing on any one of them.

---

## 4. Internationalization Commitment

16 initial locales — English (default), Spanish, Portuguese, French, German, Italian, Dutch, Polish, Romanian, Turkish, Arabic, Hindi, Urdu, Bengali, Japanese, Korean, Chinese, Russian. Arabic and Urdu require RTL support from Phase 1 — build the layout system and Design System RTL-aware now, don't retrofit later. New locales must be addable via config only, never via code changes.

---

## 5. Long-Term Vision

The architecture must support future expansion without core rewrites. Potential future products: mobile applications, desktop applications, browser extensions, a public API, AI assistants, AI-generated reports, premium subscriptions, team dashboards, white-label deployments, and additional knowledge domains (Dream Meanings, Symbolism, Tarot, Name Meanings, MBTI, Enneagram, etc.).

The Astro site is **one presentation layer** over the Data, Service, Knowledge, and Engine layers defined in 01_ARCHITECTURE.md — it is not the architecture itself. Every calculation, interpretation, and semantic relationship should be reusable by web UI, future mobile/desktop apps, APIs, browser extensions, and AI services alike.
