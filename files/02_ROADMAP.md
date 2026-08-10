# 02 — Roadmap
### Phases, Deliverables, Definitions of Done

> Governed by 00_PROJECT_MANIFESTO.md. Architecture referenced here is defined in 01_ARCHITECTURE.md. Quality gates referenced here are defined in 03_STANDARDS.md. Full per-pillar entity lists referenced here are in 04_DOMAIN_SPEC.md.

---

## How to Use This Roadmap

- Do not begin a phase until the previous phase's Mandatory Quality Gates (03_STANDARDS.md) are met and reported.
- Each content phase (2 onward) only adds *content and calculators through the existing engines/services/data layer* from 01_ARCHITECTURE.md. If a phase seems to require new engine capability, extend the relevant engine/service first as a mini-step, then use it.
- Phase 1 is the only phase that builds core architecture; it builds most systems as stubs/interfaces only (00_PROJECT_MANIFESTO.md Section 2.5), except the Design System, which is built for real in Phase 1 since everything else depends on it immediately.

---

## Phase 1 — Foundation

**Deliverables:**
1. Theme config, logo/tagline slot, and 3–5 tagline options built around the confirmed brand "Souliography" (00_PROJECT_MANIFESTO.md Section 3) — the brand name itself is decided, do not revisit it
2. Design System: full token set + core primitives (Button, Card, Input, Form field, Icon wrapper) — built for real, not stubbed (01_ARCHITECTURE.md Section 3)
3. Astro project scaffold with all other 01_ARCHITECTURE.md Section 2 modules **stubbed and typed** (interfaces + folder structure), plus `/data` and `/services` skeletons
4. Folder structure confirmed (01_ARCHITECTURE.md Section 9)
5. i18n routing (`/[locale]/...`) with fallback to default locale, RTL support verified with a placeholder Arabic page using real Design System components
6. SEO Engine + Schema Engine wired into a single sample page, output validated
7. Knowledge Graph: minimal working version — enough node/edge types defined to link one calculator to one guide and one related entity, proving the shape before Phase 10 scales it
8. Event bus: implemented with 2–3 real events wired end-to-end (e.g. `CalculatorCompleted` → triggers a recommendation lookup), rest stubbed
9. One working end-to-end example: a single trivial calculator (e.g. Life Path Number) built entirely through Calculator Engine → Interpretation Engine → Report Engine → Visualization Engine, styled entirely with Design System components, in 2 locales

**Definition of Done:** all applicable Mandatory Quality Gates (03_STANDARDS.md) pass, one working calculator renders correctly in 2 locales including one RTL locale using only Design System components, and SEO/Schema/Knowledge Graph output is verifiable in the built output.

**What to return before writing code:**
1. Tagline options for "Souliography" (brand name is final, do not propose alternatives)
2. Proposed folder structure (confirm or adjust 01_ARCHITECTURE.md Section 9)
3. Confirmation of the 12-phase plan and Phase 1 scope, explicitly confirming which architecture systems are stub-only vs. built for real in Phase 1
4. Any open questions that block starting (keep this short — default to reasonable assumptions and state them rather than blocking)

---

## Phase 2 — Numerology

25–30 calculators, 40–60 guides. Full entity list: 04_DOMAIN_SPEC.md Section 3.

Each calculator: data in `/data/numerology`, calculation logic in `/services/calculation`, interpretation text in `/services/interpretation`, registered via `calculators.config.ts`, linked into the Knowledge Graph, built entirely from Design System components.

## Phase 3 — Destiny Matrix

Matrix engine (extends Calculator Engine with a grid-based result shape), interactive matrix chart (extends Visualization Engine), matrix reports (extends Report Engine), compatibility matrix. Full entity list: 04_DOMAIN_SPEC.md Section 4.

## Phase 4 — Astrology

Birth/Natal Chart, signs, elements, planetary data, moon phases. Full entity list: 04_DOMAIN_SPEC.md Section 5.

## Phase 5 — Compatibility

Love, marriage, friendship, business, parent-child, and other compatibility types as composable inputs into one Compatibility report shape. Full entity list: 04_DOMAIN_SPEC.md Section 6.

## Phase 6 — Angel Numbers

Programmatic architecture for 000–9999, Master Numbers, Repeating/Mirror/Sequential Numbers — a content-generation problem, not thousands of hand-written calculators; design the data-table + templating pattern that generates these pages, don't write them individually. Full spec: 04_DOMAIN_SPEC.md Section 7.

## Phase 7 — Chakra & Spiritual

Chakra tools, energy balance, healing, compatibility, aura, spirit animal, lucky color/day, energy reports. Full entity list: 04_DOMAIN_SPEC.md Section 8.

## Phase 8 — Human Design

Type, Strategy, Authority, Centers, Profile, Gates, Channels, Incarnation Cross. Full entity list: 04_DOMAIN_SPEC.md Section 9.

## Phase 9 — Personality & Psychology

Communication, leadership, learning, decision-making, career, relationship style assessments; strengths/weaknesses reports. Full entity list: 04_DOMAIN_SPEC.md Section 10.

## Phase 10 — Content Hub

500+ educational guides, numerology encyclopedia, glossary, Tarot and Dream Meanings content pillars (04_DOMAIN_SPEC.md Section 11). This phase brings the Knowledge Graph, Taxonomy Engine, and internal linking layer to full scale across the whole site — earlier phases use a minimal version, this is where it becomes comprehensive.

## Phase 11 — AI & Premium Features

Implement the Auth, Payments, and AI Module stubs: AI interpretation, AI reports, AI chat, downloadable/PDF reports, saved profiles, user dashboard. First real Plugin Engine consumers (e.g. AI provider plugin, payments provider plugin).

## Phase 12 — Enterprise SEO & Scale Hardening

Full rollout across all 16 locales (earlier phases can ship in English + 1–2 priority locales first), Search Engine hardened to full semantic/multilingual search, advanced schema coverage audit, Core Web Vitals / Lighthouse 95+ pass at scale, accessibility AA audit, analytics finalization, performance tuning across thousands of static pages.
