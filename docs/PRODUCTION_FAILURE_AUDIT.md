# PRODUCTION FAILURE DIAGNOSTIC AUDIT & TECHNICAL SPECIFICATION

**Website**: https://souliography.com/  
**Audit Date**: August 13, 2026  
**Status**: CRITICAL PRODUCTION RECOVERY AUDIT COMPLETE  

---

## 1. Technical Framework & System Architecture Audit

### A. Framework & Build Infrastructure
- **Framework**: Astro v7.1.6 (`output: "static"`)
- **Build Tooling**: Vite + `@tailwindcss/vite` (TailwindCSS v4.3.3)
- **Architecture**: Static Site Generation (SSG) with dynamic route parameterization (`getStaticPaths` across all 40 locales).
- **Routing Architecture**: File-based routing located under `src/pages/[locale]/`:
  - `/[locale]/` -> `index.astro` (Homepage & Destiny Matrix Chart Engine)
  - `/[locale]/numerology/` -> `index.astro` (Numerology Knowledge Hub)
  - `/[locale]/numerology/[calcSlug]/` -> `index.astro` (Calculators & Specific Core Number Index)
  - `/[locale]/numerology/[calcSlug]/[number].astro` -> `[number].astro` (Individual Number Profile)
  - `/[locale]/calculators/` -> `index.astro` (All Calculators Directory)
  - `/[locale]/calculators/[slug]/` -> `[slug].astro` (Individual Calculator Apps)
  - `/[locale]/guides/` -> `index.astro` (Guides Directory)
  - `/[locale]/guides/[slug]/` -> `[slug].astro` (Individual Guide)
  - `/[locale]/destiny-matrix/arcana/` -> `index.astro` (22 Major Arcana Hub)
  - `/[locale]/destiny-matrix/arcana/[slug]/` -> `[slug].astro` (Individual Arcana)
  - `/[locale]/destiny-matrix/birthdays/` -> `index.astro` (365 Birthdays Directory)
  - `/[locale]/destiny-matrix/birthdays/[slug]/` -> `[slug].astro` (Individual Birthday Profile)
- **Deployment Platform**: FTP Deployment to cPanel/Apache web hosting root (`public_html`).
- **Deployment Command**: `node src/deploy.mjs` (Full `dist` upload via `basic-ftp`).
- **Build Command**: `npm run build` (`astro build`).

---

### B. Locale System Audit
- **Authoritative Source**: `src/config/locales.config.ts` (`localesConfig`)
- **Total Supported Locales**: 40
- **Supported Locales Table**:
  - `en` (English, LTR, Default)
  - `de` (German, LTR)
  - `fr` (French, LTR)
  - `es` (Spanish, LTR)
  - `pt` (Portuguese, LTR)
  - `it` (Italian, LTR)
  - `nl` (Dutch, LTR)
  - `pl` (Polish, LTR)
  - `sv` (Swedish, LTR)
  - `da` (Danish, LTR)
  - `no` (Norwegian, LTR)
  - `fi` (Finnish, LTR)
  - `is` (Icelandic, LTR)
  - `cs` (Czech, LTR)
  - `sk` (Slovak, LTR)
  - `hu` (Hungarian, LTR)
  - `ro` (Romanian, LTR)
  - `bg` (Bulgarian, LTR)
  - `el` (Greek, LTR)
  - `uk` (Ukrainian, LTR)
  - `ru` (Russian, LTR)
  - `tr` (Turkish, LTR)
  - `id` (Indonesian, LTR)
  - `ms` (Malay, LTR)
  - `vi` (Vietnamese, LTR)
  - `th` (Thai, LTR)
  - `zh` (Chinese, LTR)
  - `ja` (Japanese, LTR)
  - `ko` (Korean, LTR)
  - `ar` (Arabic, RTL)
  - `hi` (Hindi, LTR)
  - `bn` (Bengali, LTR)
  - `ta` (Tamil, LTR)
  - `te` (Telugu, LTR)
  - `mr` (Marathi, LTR)
  - `gu` (Gujarati, LTR)
  - `kn` (Kannada, LTR)
  - `ml` (Malayalam, LTR)
  - `pa` (Punjabi, LTR)
  - `ur` (Urdu, RTL)
- **Translation File Organization**:
  - UI dictionaries live in `src/i18n/ui/[locale].ts`
  - Calculator dictionaries live in `src/i18n/ui/calculators.ts`
  - Core i18n lookup engine in `src/i18n/index.ts`
- **Translation Completeness Status**: Incomplete across non-English UI dictionaries; multiple Astro components contain hardcoded English strings in templates instead of referencing `t()`.

---

### C. Routing & URL Resolution Audit
- **Issue**: Some localized URLs produce 404 or redirect loops.
- **Root Cause**:
  1. `astro.config.mjs` enforces `trailingSlash: 'always'`. If links omit trailing slashes or if sub-directory deployments miss index files, web servers return 404.
  2. Selective upload script (`deploy-priority.mjs`) previously uploaded only selected HTML files, leaving many localized route directories un-deployed on production.

---

### D. CSS & Asset Pipeline Failure Audit (Case 1: German Raw HTML)
- **Production Evidence**: `https://souliography.com/de/numerology/` renders raw browser HTML with no styles applied.
- **Root Causes**:
  1. **Tailwind v4 Modern Syntax Incompatibility**: `@tailwindcss/vite` compiles CSS using Tailwind CSS v4 `@supports` queries and relative color syntax (`color: rgb(from red r g b)`). Browsers or webviews that do not support CSS Color Module Level 5 ignore all rules wrapped inside `@supports`, stripping all background, font, flexbox, and grid styling.
  2. **Incomplete Asset Synchronization**: Asset filenames in `dist/_astro/BaseLayout.[hash].css` change on every build. When selective FTP deploys were run, the live server retained old HTML pointing to deleted CSS file hashes, causing HTTP 404 on CSS assets.

---

### E. Translation Fallback Failure Audit (Case 2: Portuguese English Content)
- **Production Evidence**: `https://souliography.com/pt/` and `https://souliography.com/pt/numerology/` contain substantial English text.
- **Root Causes**:
  1. `src/i18n/index.ts` lines 125-128 contain silent fallback: `if (masterDictionary[key]) return masterDictionary[key];`.
  2. Astro templates (e.g. `src/pages/[locale]/numerology/index.astro`) hardcode English text directly into JSX markup instead of calling `t()`.
  3. No build-time completeness validator exists to block builds when non-English translations fall back to English.

---

### F. Navigation & Footer Architecture Audit (Case 4)
- **Current State**:
  - `SiteNavigation.astro` hardcodes dropdown link titles and sub-links in English.
  - `FooterNavigation.astro` contains hardcoded English link names ("Terms of Service", "Privacy Policy", "All Calculators Directory →", "Explore Knowledge Hubs").
  - Content taxonomy is not driven by a central, canonical content registry.

---

### G. Numerology Overview & Content Model Audit (Case 3)
- **Current State**:
  - `src/pages/[locale]/numerology/index.astro` renders generic cards with repeated English text.
  - `src/data/numerology-content.ts` provides core digit data (1-9, 11, 22, 33), but lacks structured, localized models for all core concept categories (Life Path, Destiny, Soul Urge, Expression, Personality, Birthday, Maturity, Balance, Karmic Debt, Challenge, Pinnacle, Personal Year, Personal Month, Personal Day, Name Numerology, Business Numerology).

---

## 2. Root Cause vs. Symptom Matrix

| Problem ID | Affected Production URL | Symptom | True Root Cause | Category | Severity | Proposed Fix |
|---|---|---|---|---|---|---|
| **RC-01** | `/de/numerology/` | Unstyled raw HTML | Tailwind v4 CSS output syntax incompatible with standard CSS parsers + CSS hash mismatch from partial FTP deploy | `CSS` / `ASSET` / `BUILD` | **P0 (CRITICAL)** | Fallback CSS rules + standard Tailwind configuration + clean full `dist/` FTP upload |
| **RC-02** | `/pt/`, `/pt/numerology/` | Portuguese pages display English content | Silent English fallback in `t()` function + hardcoded English text in Astro templates | `TRANSLATION` / `I18N` | **P0 (CRITICAL)** | Remove silent fallback in production, populate full UI dictionaries for all locales, wrap all template text in `t()` |
| **RC-03** | `/[locale]/numerology/` | Generic repeated card descriptions | Hardcoded template strings in `index.astro` and missing concept data model | `CONTENT` | **P1 (HIGH)** | Structured `NumerologyConcept` registry with unique, human-crafted descriptions for every number and concept |
| **RC-04** | All pages | Incomplete, non-localized header/footer | `SiteNavigation.astro` and `FooterNavigation.astro` hardcode links and labels in English | `NAVIGATION` / `FOOTER` | **P1 (HIGH)** | Central taxonomy navigation registry delivering localized labels and valid localized URLs |
| **RC-05** | Localized subpages | 404 errors on localized routes | Partial FTP deployments (`deploy-priority.mjs`) leaving missing static folders on server | `DEPLOYMENT` / `ROUTING` | **P0 (CRITICAL)** | Pure full-directory FTP synchronization script (`deploy.mjs`) ensuring 100% path coverage |
| **RC-06** | All localized pages | Cross-locale internal links | Hardcoded `/en/` links inside localized components | `INTERNAL LINKING` | **P1 (HIGH)** | Enforce dynamic dynamic `${locale}` link prefixing across all components |
| **RC-07** | SEO headers | Invalid hreflang / missing self-canonical | Canonical URLs or hreflang links pointing to missing or English URLs | `SEO` | **P1 (HIGH)** | Dynamic canonical & hreflang generation consuming the authoritative `localesConfig` |

---

## 3. Authoritative Locale Single Source of Truth

**File**: `src/config/locales.config.ts`  
**Interface**:
```typescript
export interface LocaleConfig {
  code: string;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  enabled: boolean;
  isDefault?: boolean;
}
```
All components, routers, navigation bars, footers, sitemaps, hreflangs, and validation scripts MUST import and consume `localesConfig` and `supportedLocales` from this single source of truth.
