# RECOVERY MIGRATION NOTES

## 1. Architectural Changes
- **Calculators Decoupling**: Extracted pure mathematical logic from Astro template files into `src/engines/calculator/` (Life Path, Destiny Matrix, Name Numerology, Personal Year, Compatibility, Essence Cycle).
- **Multilingual System Consolidation**: Removed legacy translation paths and unified all 40 locale files into `src/i18n/index.ts` and `src/i18n/ui/calculators.ts`.
- **Navigation Standardization**: Replaced ad-hoc header and footer implementations with canonical components (`SiteNavigation.astro` and `FooterNavigation.astro`) used across all page layouts via `BaseLayout.astro`.

## 2. Slugs & Route Preservation
All existing canonical SEO routes are 100% preserved:
- `/[locale]/`
- `/[locale]/numerology/`
- `/[locale]/numerology/life-path-number/[number]/`
- `/[locale]/calculators/`
- `/[locale]/calculators/[slug]/`
- `/[locale]/destiny-matrix/arcana/`
- `/[locale]/destiny-matrix/arcana/[arcanaSlug]/`
- `/[locale]/destiny-matrix/birthdays/`
- `/[locale]/destiny-matrix/birthdays/[dateSlug]/`
- `/[locale]/guides/`

No URL structure was altered or broken.
