# 03 — Standards
### Engineering Principles, Coding Standards, Content Governance, SEO, Quality Gates

> Governed by 00_PROJECT_MANIFESTO.md. Applies to every phase in 02_ROADMAP.md and every module in 01_ARCHITECTURE.md.

---

## 1. Enterprise Engineering Principles

The platform must follow:

- SOLID Principles
- Domain-Driven Design
- Clean Architecture
- Composition over inheritance
- Dependency Injection where appropriate
- Feature-based modular architecture
- Single Responsibility Principle
- Open/Closed Principle
- Explicit interfaces
- Immutable data where practical
- Functional programming for calculations
- Zero business logic inside Astro pages
- Configuration over convention
- Convention over duplication
- Progressive enhancement
- Accessibility-first development
- Mobile-first design
- Test-driven architecture where practical
- Documentation-driven development

**Every architectural decision should prioritize long-term maintainability over short-term implementation speed.**

---

## 2. Standing Coding Standards

- **No hardcoded navigation** — nav is config-driven and reflects the calculator/content registry automatically.
- **No duplicated components** — if a later phase needs something an existing engine/service doesn't support, extend it rather than forking a new pattern.
- **No interpretation text inside calculator logic** — it belongs in the Interpretation Engine / `/services/interpretation`.
- **No arbitrary design values** — every color, spacing, typography, radius, shadow, or motion value comes from Design System tokens (01_ARCHITECTURE.md Section 3).
- **Everything typed, documented, testable, scalable** — a future developer should be able to add a new calculator or pillar by reading the config schema and data folder conventions, not by reading engine internals.

---

## 3. Content Quality & Governance

**Content Versioning** — every guide and calculator metadata record includes: `version`, `created`, `updated`, `reviewed`, `reviewedBy`, `generatedBy`, `contentStatus`, `factChecked`, `qualityScore`. Supports future editorial workflows and E-E-A-T improvements.

**E-E-A-T** — every educational page supports: Author, Reviewer, Last Updated, References, Sources, Reading Time, Difficulty, Related Topics, Entity References, and a slot for future Expert Review. All generated from metadata, never manually inserted per page.

**Content Import Engine** — a generic import interface for future content sources (Markdown, CSV, JSON, CMS, scripts, AI-generated drafts, bulk imports). All imports validate against Content Collection schemas before publication.

---

## 4. SEO Requirements (every page)

- Unique title, description, H1
- Breadcrumb
- FAQ block where relevant
- Schema (see 01_ARCHITECTURE.md Section 2, Schema Engine)
- Canonical
- OpenGraph + Twitter card
- Internal linking (via Knowledge Graph, 01_ARCHITECTURE.md Section 7)
- Author + last-updated date
- Language metadata (hreflang set)

All of the above are generated through the SEO/Schema Engines — never hand-written per page.

---

## 5. Mandatory Quality Gates

Before reporting **any** phase complete, automatically verify:

- ✓ Build succeeds
- ✓ TypeScript passes
- ✓ Lint passes
- ✓ No duplicate routes
- ✓ No broken internal links
- ✓ No orphan pages
- ✓ Canonicals correct
- ✓ hreflang generated
- ✓ Schema valid
- ✓ Sitemap generated
- ✓ Robots.txt valid
- ✓ Accessibility AA
- ✓ Lighthouse ≥ 95
- ✓ Bundle size acceptable
- ✓ Responsive layouts
- ✓ Images optimized
- ✓ Metadata unique per page
- ✓ Internal linking coverage (no page unreachable from the graph)
- ✓ No design-token violations (no raw hex/px values bypassing the Design System)

**If any gate fails, fix it before reporting the phase complete.** Early phases (1–2) may not yet have enough pages for some checks (e.g. sitemap scale, linking coverage) to be meaningful — apply what's applicable and note which gates are not yet testable and why.
