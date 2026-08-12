# LOCALIZATION ARCHITECTURE & TRANSLATION QUALITY GATE

## 1. Single Source of Truth (`src/config/locales.config.ts`)
The `localesConfig` object defines all 40 supported locales with language names, native names, and LTR/RTL text directions:
- `en` (English - LTR, Default)
- `de` (German - LTR)
- `fr` (French - LTR)
- `es` (Spanish - LTR)
- `pt` (Portuguese - LTR)
- `it` (Italian - LTR)
- `ar` (Arabic - RTL)
- `ur` (Urdu - RTL)
- ... (Total 40 locales)

## 2. Translation Dictionaries (`src/i18n/`)
- `src/i18n/ui/*.ts`: Individual locale translation files.
- `src/i18n/ui/calculators.ts`: Dedicated multilingual dictionary for all 26 numerology calculators.
- `src/i18n/index.ts`: Master i18n lookup engine with `t(key, locale)` lookup.

## 3. Strict Translation Completeness Gate (`scripts/audit-translations.js`)
To prevent silent English fallback on localized pages:
1. Crawls all compiled `.html` files in `dist/`.
2. Scans for raw translation keys (`calc.*`, `nav.*`, `form.*`, `result.*`).
3. Checks for unrendered placeholder strings.
4. **Fails the build process** (`exit code 1`) if any raw translation key is detected in any locale output.

## 4. Localized HTML & SEO Attributes
Every generated page strictly renders:
- `<html lang="{locale}" dir="ltr|rtl">`
- Self-referential `<link rel="canonical" href="https://souliography.com/{locale}/{path}/">`
- Reciprocal `<link rel="alternate" hreflang="{locale}" href="...">` for all 40 locales + `x-default`.
