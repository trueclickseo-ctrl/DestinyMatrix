# Architecture Audit

## 1. System Overview & Technology Stack
- **Framework**: Astro 7.1.6 (`@astrojs/sitemap`, `@tailwindcss/vite`, `typescript`).
- **Rendering Model**: Static Site Generation (SSG) with dynamic `getStaticPaths` routes for 40 locales.
- **Node Engine**: `>=22.12.0`.
- **Build Tools**: Vite 6+ with Tailwind CSS v4 integration.

## 2. Directory & Component Topology
- `src/pages/[locale]`: Primary entry point for localized routes. Dynamic parameters: `[locale]`, `[slug]`, `[arcanaSlug]`, `[dateSlug]`, `[number]`.
- `src/components`: Split between `common` (`Footer.astro`, `LanguageSwitcher.astro`), `matrix` (`DestinyMatrixChart.astro`, `ChakraEnergyTable.astro`), and `ui` (`Button.astro`, `Card.astro`, `FormField.astro`, `Icon.astro`, `Input.astro`).
- `src/layouts`: `BaseLayout.astro` (wraps pages with `<head>`, `<header>`, `<main>`, `<footer>`).
- `src/services`: Duplicate services layer containing `calculation`, `interpretation`, `knowledge`, and `translation`.
- `src/engines`: Unstructured logic mix (`chakra-engine.ts`, `compatibility-engine.ts`, `destiny-matrix-engine.ts`, `schema`, `seo`).
- `src/i18n`: Localized UI dictionary files (`ui/*.ts` for 40 locales).

## 3. Discovered Architectural Flaws & Risk Factors
1. **Duplicate Translation Services**: Both `src/services/translation/index.ts` and `src/i18n/index.ts` exist. Pages import from both, causing missing translation keys and fallback bleed.
2. **Inline Calculation Logic**: Mathematics are scattered between `src/services/calculation/destiny-matrix.ts`, client-side `<script is:inline>` blocks in `[slug].astro`, and `src/engines/*.ts`.
3. **Invalid DOCTYPE**: `BaseLayout.astro` outputs `<!xhtml>` instead of `<!DOCTYPE html>`.
4. **Client-Side Script Redundancy**: Interactive calculator forms use unbundled inline JavaScript that bypasses TypeScript type safety and reusable engines.
5. **Lack of Automated Unit Tests**: No test suite for pure calculation functions, golden test vectors, or translation key coverage.
