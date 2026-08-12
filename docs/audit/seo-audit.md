# Technical SEO Audit

## 1. Metadata, Canonical & Hreflang Configuration
- **Canonical URLs**: Generated in `BaseLayout.astro` (`https://souliography.com/${locale}/${rawPath}/`). Must ensure trailing slashes are strictly enforced.
- **Hreflang Tags**: `seoMeta.hreflangs` maps available locales. Needs validation to ensure every localized route links to valid language alternates across all 40 locales.
- **OpenGraph & Twitter Cards**: Configured in `BaseLayout.astro`, but fallback OG descriptions revert to hardcoded English strings on translated pages.

## 2. Structured Data / Schema Audit
- **DOCTYPE Error**: `BaseLayout.astro` line 42 renders `<!xhtml>` instead of valid `<!DOCTYPE html>`.
- **JSON-LD Schemas**:
  - `WebApplication` schema on Homepage has hardcoded English `description` and `name`.
  - `HowTo` schema on Homepage has hardcoded English step text.
  - `FAQPage` schema on Homepage has hardcoded English Q&A strings.
  - `BreadcrumbList` schema on `[dateSlug].astro` and `[number].astro` has hardcoded English item names ("Home", "Birthdays", "Numerology").
  - `Article` schema on `[number].astro` has hardcoded English headline and author strings.

## 3. Sitemap & Trailing Slash Policy
- `astro.config.mjs` configures `@astrojs/sitemap` with `trailingSlash: 'always'`. Filter excludes parameter reports appropriately.
