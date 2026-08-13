# SOULIOGRAPHY MIGRATION & RECOVERY NOTES

## Overview
This document outlines the architectural repairs and migrations performed during the Souliography Production Recovery Master Plan (August 13, 2026).

---

## Key Migrations & Fixes

### 1. Locale Single Source of Truth
- **Previous State**: Multiple components maintained separate hardcoded lists of supported language codes or links.
- **Migrated State**: `src/config/locales.config.ts` exports `localesConfig`, `supportedLocales`, and `getLocaleConfig()`. All components, routers, SEO engines, and sitemaps consume this canonical registry.

---

### 2. Navigation Architecture
- **Previous State**: Navigation dropdowns and footer links were hardcoded in English inside component files (`SiteNavigation.astro` and `FooterNavigation.astro`).
- **Migrated State**: Created `src/config/navigation.config.ts` as the central content taxonomy. `SiteNavigation.astro` and `FooterNavigation.astro` dynamically render localized labels and localized URLs via `t(key, locale)` and `/${locale}/${href}`.

---

### 3. Translation Lookup Engine
- **Previous State**: `t()` function silently fell back to English (`masterDictionary`) whenever a string was missing in Portuguese (`pt`), German (`de`), French (`fr`), etc.
- **Migrated State**: Translation completeness script (`scripts/audit-translations.js`) checks for missing UI keys and blocks production builds if non-English static pages leak English fallbacks.

---

### 4. CSS Design System & Static Asset Pipeline
- **Previous State**: Tailwind v4 `@supports` queries used modern relative color syntax, causing unstyled raw HTML rendering on older browsers/engines. Selective FTP deployment (`deploy-priority.mjs`) caused asset hash mismatches on sub-routes like `/de/numerology/`.
- **Migrated State**: Added robust CSS reset and fallback rules to `src/design-system/global.css`. Enforced full `dist/` FTP upload via `node src/deploy.mjs` to ensure 100% asset and static route synchronization.

---

### 5. Numerology Content Model
- **Previous State**: `src/pages/[locale]/numerology/index.astro` rendered templated cards with identical repetitive text (*"Explore full vibrational meanings..."*).
- **Migrated State**: Defined structured `NumerologyConcept` model in `src/data/numerology-content.ts` with human-crafted, unique descriptions for all 17 concepts and 12 core vibrations.
