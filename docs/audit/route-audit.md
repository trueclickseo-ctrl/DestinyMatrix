# Route Audit

## 1. Route Map & Parameter Breakdown

The site operates on a dynamic localized URL structure under `src/pages/[locale]`:

| Route Pattern | Handled Slugs / Count | Description |
| :--- | :--- | :--- |
| `/[locale]/` | 40 locales | Main Homepage & Destiny Matrix Calculator |
| `/[locale]/calculators/[slug]/` | 26 calculators | Interactive Numerology Calculators |
| `/[locale]/destiny-matrix/arcana/` | 1 hub directory | Arcana Encyclopedia Index |
| `/[locale]/destiny-matrix/arcana/[arcanaSlug]/` | 22 Arcana | Individual Arcana Deep Guides (e.g. `1-the-magician`) |
| `/[locale]/destiny-matrix/birthdays/` | 1 hub directory | Birthdays Directory Index |
| `/[locale]/destiny-matrix/birthdays/[dateSlug]/` | 365 dates | Birthday Matrix Profiles (e.g. `february-5`) |
| `/[locale]/numerology/` | 1 hub directory | Numerology Knowledge Directory Index |
| `/[locale]/numerology/[calcSlug]/` | 26 calculator hubs | Specific Numerology Calculator Hub |
| `/[locale]/numerology/[calcSlug]/[number]/` | 12 numbers $\times$ 24 calcs | Specific Number Meanings (e.g. `life-path-number/3`) |
| `/[locale]/guides/destiny-vs-life-path/` | Static | Comparative Guide |
| `/[locale]/guides/how-to-read-destiny-matrix-chart/` | Static | Instructional Guide |
| `/[locale]/contact/`, `/privacy/`, `/terms/`, `/disclaimer/` | Static | Standard Legal & Contact Pages |

## 2. Route Investigation & Redirect Issues
- **Life Path Calculator Route (`/[locale]/calculators/life-path-number/`)**: Confirmed functioning path defined in `calculators.config.ts`. Any unexpected redirect to `/` occurs if `slug` parameter matching fails or trailing slashes are mishandled.
- **Trailing Slash Enforcements**: `astro.config.mjs` sets `trailingSlash: 'always'`. All `href` values and canonical links must strictly end with `/`.
- **Locale Prefix Preservation**: `LanguageSwitcher.astro` uses pathname stripping (`pathname.replace(/^\/[a-z]{2}/, '')`). Target route matching is preserved, but missing localized data defaults to raw English strings in templates.
