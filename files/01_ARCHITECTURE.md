# 01 — Architecture
### Engines, Modules, Design System, Data Flow, Folder Structure

> Governed by 00_PROJECT_MANIFESTO.md. Quality bar for everything below is set in 03_STANDARDS.md. Domain content that plugs into this architecture is defined in 04_DOMAIN_SPEC.md.

---

## 1. Non-Negotiable Tech Stack

- **Astro 5** with static generation (SSG) as the default rendering mode
- **TypeScript** everywhere, strict mode on
- **Content Collections** (Zod-validated schemas) for all content — no content hardcoded in components
- **MDX** for long-form guide/article content
- **Tailwind** for styling, configured to consume Design System tokens (Section 3) — never arbitrary values
- **Cloudflare** for hosting/deployment
- Config-driven calculators and navigation — adding a calculator must never require touching routing or nav components directly

---

## 2. Global Architecture — Required Modules

Build these as independent, typed, documented modules from Phase 1 onward (stub-first — see 00_PROJECT_MANIFESTO.md Section 2.5). Every later phase plugs into these; they are not rebuilt per content pillar.

| Module | Responsibility |
|---|---|
| **Calculator Engine** | Generic runner: typed input schema + calculation function + result schema; renders form, validates input, produces a typed result. All pillars' calculators are *instances* of this engine, not bespoke code. |
| **SEO Engine** | Generates title, meta description, canonical, hreflang set, OpenGraph, Twitter card, and breadcrumb schema from page + locale metadata. |
| **Schema Engine** | Generates JSON-LD (Organization, WebSite, WebPage, CollectionPage, FAQPage, HowTo, Article, BreadcrumbList, Person, SoftwareApplication) from typed page metadata. |
| **Translation Engine** | Key-based i18n. No hardcoded UI strings anywhere, including inside calculator components. Locale-aware number/date formatting. |
| **Content Engine** | Content Collections wrapper: enforces frontmatter schema (title, description, locale, pillar, related links, last-updated, author). |
| **Knowledge Engine** | Semantic backbone. Models relationships between entities (calculators, guides, Arcana, angel numbers, astrology signs, chakras, compatibility types, personality traits, etc.) as a knowledge graph (Section 7). Powers related content, breadcrumbs, recommendations, semantic internal linking, entity pages, future AI retrieval. |
| **Report Engine** | Takes a Calculator Engine result and renders it as interactive on-page report, printable view, and (Phase 11+) PDF export. Supports saved/comparison/timeline report "shapes." |
| **Interpretation Engine** | Converts raw calculator outputs into structured interpretation objects — strengths, weaknesses, meanings, compatibility summaries, career insights, personality descriptions, recommendations, warnings, educational notes, references. **Calculator logic must never contain interpretation text directly.** |
| **Visualization Engine** | Reusable chart/diagram primitives (radar chart, circular chart, matrix grid, timeline, progress bar, relationship graph, tree chart, energy lines), built on Design System tokens. Pillar visuals compose these, never bespoke SVG per calculator. |
| **Design System** | See Section 3. Not UI components — tokens that every component, including the Visualization Engine's, is built from. |
| **Theme / Brand** | Colors, typography, logo, tagline — sourced from one config, expressed through Design System tokens, never duplicated. |
| **Analytics** | Thin, swappable tracking wrapper. |
| **Recommendation Engine** | Recommends related calculators, guides, encyclopedia pages, compatibility reports, and educational content using Knowledge Engine relationships, user journey, popularity, and semantic similarity. |
| **Search Engine** | Site-wide semantic search: calculators, guides, encyclopedia entries, autocomplete, synonyms, multilingual search, future vector/AI search. Configuration-driven, not page-specific. |
| **Plugin Engine** | Extension system for future modules (AI providers, analytics, ads, affiliate widgets, payments, newsletters, CRM integrations, search providers, external APIs) without modifying platform core. Plugins register capabilities through typed interfaces. |
| **Auth (stub)** | Interface defined, not implemented until Phase 11. |
| **Payments (stub)** | Interface defined, not implemented until Phase 11. |
| **AI Module (stub)** | Interface defined for AI interpretation/chat/reports; not called until Phase 11. |

### Architecture Diagram

```
Core Platform
│
├── Plugin Engine
├── Knowledge Engine
├── Taxonomy Engine
├── Translation Engine
├── Design System
├── Calculator Engine
├── Interpretation Engine
├── Recommendation Engine
├── Visualization Engine
├── Report Engine
├── Search Engine
├── SEO Engine
├── Schema Engine
├── Analytics
└── Presentation Layer (Astro Pages)
```

---

## 3. Design System

This is a **design system**, not a component library. Every visual element on the platform — including the Visualization Engine's charts and every pillar's calculator UI — must be built from a shared token set, never from one-off values.

**Tokens (source of truth, config-driven, theme- and locale-aware):**

| Token category | Covers |
|---|---|
| **Color** | Brand palette, semantic colors (success/warning/error/info), surface/background layers, text colors, light + dark mode pairs |
| **Spacing** | A single spacing scale (e.g. 4px base) used everywhere — no arbitrary margin/padding values in components |
| **Typography** | Type scale, font families, weights, line-heights — locale-aware (e.g. CJK and Arabic script line-height needs differ from Latin) |
| **Radius & Elevation** | Border-radius scale, shadow/elevation scale |
| **Motion** | Duration and easing tokens; must respect `prefers-reduced-motion` |
| **Breakpoints** | Shared responsive breakpoint scale, mobile-first |
| **Z-index** | A single layering scale to prevent stacking-context conflicts |

**Components built from tokens only:** Buttons, Cards, Forms, Inputs, Icons, and any other primitive. Each must ship with documented states (default, hover, focus, disabled, error) and pass the accessibility bar below before it's considered done.

**Accessibility is part of the Design System, not a separate audit:**
- Every interactive component has a visible focus state
- Color tokens are pre-checked for AA contrast in both light and dark mode
- Motion tokens respect reduced-motion preferences
- RTL is a first-class mode of the Design System (mirrored spacing/icons where appropriate), not a CSS override layer bolted on later

**Where it lives:** `/src/design-system` (tokens as typed config + Tailwind theme extension generated from those tokens, not hand-duplicated). Tailwind config must import from the token source, never define competing values.

**Phase 1 scope for the Design System:** define the full token set and build the core primitives (Button, Card, Input, Form field, Icon wrapper) end-to-end, since every later phase depends on them immediately — this is one of the few systems in Section 2 that is *not* stub-only in Phase 1.

---

## 4. Core Data Architecture

Separate business logic, knowledge, and presentation. **Presentation must never contain business logic.**

Dedicated data modules — each calculator consumes typed data from these repositories rather than embedding constants inside components:

```
/data
  numerology/
  matrix/
  astrology/
  compatibility/
  angel-numbers/
  arcana/
  human-design/
  chakras/
  dreams/
  translations/
```

All calculations, interpretations, and semantic relationships should be reusable by web UI, future mobile/desktop apps, APIs, browser extensions, and AI services — not just Astro pages.

---

## 5. Service Layer

A reusable service architecture, independent of Astro pages, so the website becomes just one presentation layer over reusable services:

```
/services
  calculation/
  interpretation/
  knowledge/
  translation/
  recommendation/
  search/
  report/
  api/
```

Business logic lives here, not in `.astro` files or components.

---

## 6. Event System

A lightweight typed event bus. Modules communicate via events instead of tight coupling wherever practical.

Example events: `CalculatorCompleted`, `ReportGenerated`, `ReportDownloaded`, `LocaleChanged`, `SearchPerformed`, `RecommendationViewed`, `GuideOpened`, `EntityViewed`, `AIRequested` (future), `PremiumUnlocked` (future).

---

## 7. Knowledge Graph

Every entity is a node: Calculator, Guide, Angel Number, Arcana, Chakra, Planet, Birth Element, Numerology Number, Matrix Position, Compatibility Type, Personality Trait, Career, Life Purpose, Relationship, etc. (Full entity catalog per pillar: 04_DOMAIN_SPEC.md.)

Each node supports: Related Nodes, Parent, Children, Aliases, Synonyms, Translations, References, Popularity, SEO Metadata.

This graph powers: internal linking, related calculators, related guides, recommendations, future AI retrieval, semantic search, and entity pages.

---

## 8. Taxonomy Engine

Classify every page by: Pillar, Topic, Cluster, Intent, Audience, Difficulty, Content Type, Entity Type, Calculator Type, Knowledge Domain.

Avoid manual categorization — relationships are configuration-driven, sourced from the Knowledge Graph and Content Engine metadata.

---

## 9. Folder Structure

```
/src
  /design-system         (tokens, Tailwind theme extension, core primitives)
  /content                (content collections: guides, faq, calculators-meta)
  /content/config.ts       (zod schemas)
  /data                    (Section 4)
  /services                (Section 5)
  /engines
    /calculator
    /seo
    /schema
    /translation
    /report
    /content
    /knowledge
    /interpretation
    /visualization
    /recommendation
    /search
    /taxonomy
    /events
  /modules
    /theme
    /analytics
    /plugin
    /auth        (stub)
    /payments    (stub)
    /ai          (stub)
  /components
    /ui              (Design System components)
    /charts          (Visualization Engine components)
    /calculators     (thin wrappers around Calculator Engine per calculator)
  /layouts
  /pages
    /[locale]/...
  /config
    calculators.config.ts   (registry — adding a calculator = adding an entry here)
    locales.config.ts
    nav.config.ts
```
