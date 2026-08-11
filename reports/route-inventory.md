# Souliography.com — Complete Application Route Inventory Report

## Overview
- **Total Indexable Pages**: 30,521
- **Configured Locales**: 40
- **Source Language**: English (`en`)
- **Routing Engine**: Astro Static (`output: "static"`, `trailingSlash: "always"`)

## Page Family Breakdown

| Page Family | Route Template | Variations per Locale | Total URLs across 40 Locales | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Root Redirect** | `src/pages/index.astro` | N/A (1 root) | 1 | ACTIVE (301 to `/en/`) |
| **Homepages** | `src/pages/[locale]/index.astro` | 1 per locale | 40 | ACTIVE |
| **Report Pages** | `src/pages/[locale]/report.astro` | 1 per locale | 40 | ACTIVE |
| **Contact Pages** | `src/pages/[locale]/contact.astro` | 1 per locale | 40 | ACTIVE |
| **Privacy Policy** | `src/pages/[locale]/privacy.astro` | 1 per locale | 40 | ACTIVE |
| **Terms of Service** | `src/pages/[locale]/terms.astro` | 1 per locale | 40 | ACTIVE |
| **Disclaimer** | `src/pages/[locale]/disclaimer.astro` | 1 per locale | 40 | ACTIVE |
| **Arcana Index** | `src/pages/[locale]/destiny-matrix/arcana/index.astro` | 1 per locale | 40 | ACTIVE |
| **Birthdays Index** | `src/pages/[locale]/destiny-matrix/birthdays/index.astro` | 1 per locale | 40 | ACTIVE |
| **Numerology Index** | `src/pages/[locale]/numerology/index.astro` | 1 per locale | 40 | ACTIVE |
| **Guide: Read Chart** | `src/pages/[locale]/guides/how-to-read-destiny-matrix-chart.astro` | 1 per locale | 40 | ACTIVE |
| **Guide: Destiny vs Life Path** | `src/pages/[locale]/guides/destiny-vs-life-path.astro` | 1 per locale | 40 | ACTIVE |
| **Calculators** | `src/pages/[locale]/calculators/[slug].astro` | 26 calculators | 1,040 | ACTIVE |
| **Arcana Details** | `src/pages/[locale]/destiny-matrix/arcana/[arcanaSlug].astro` | 22 arcana | 880 | ACTIVE |
| **Birthday Details** | `src/pages/[locale]/destiny-matrix/birthdays/[dateSlug].astro` | 366 dates | 14,640 | ACTIVE |
| **Numerology Calculators** | `src/pages/[locale]/numerology/[calcSlug]/index.astro` | 26 calculators | 1,040 | ACTIVE |
| **Numerology Numbers** | `src/pages/[locale]/numerology/[calcSlug]/[number].astro` | 26 calcs x 12 numbers | 12,480 | ACTIVE |
| **TOTAL** | | | **30,521** | **PASS** |

## Diagnosis of Discovered Technical Issues

### 1. Raw Translation Keys Displaying on Homepage
- **Root Cause**: Keys `calc.howTitle`, `calc.howBody`, `calc.disclaimer`, `faq.q5`, `faq.a5`, `faq.q6`, `faq.a6` exist in the legacy translation service (`src/services/translation/index.ts`), but were omitted from the master UI dictionary (`src/i18n/ui/en.ts`).
- **Impact**: `t(key, locale)` falls back to printing raw key strings on live pages.

### 2. Broken Internal Navigation on Non-English Locales
- **Root Cause**: Hardcoded `href="/en/"` and `href="/en/report?..."` attributes inside:
  - `src/pages/[locale]/index.astro` (lines 677, 685, 693, 701)
  - `src/pages/[locale]/contact.astro` (line 176)
  - `src/components/common/Footer.astro` (line 93)
- **Impact**: Non-English users navigating on German, French, Arabic, Spanish pages get kicked back to English URLs or hit locale mismatch errors.

### 3. GSC Index Discrepancy (1,475 vs 30,521)
- **Root Cause**: GSC discovered 1,475 legacy URLs prior to full 40-locale expansion. Current sitemap (`dist/sitemap-0.xml`) contains all 30,521 legitimate indexable pages.
