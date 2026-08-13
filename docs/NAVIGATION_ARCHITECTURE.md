# SOULIOGRAPHY NAVIGATION ARCHITECTURE

## 1. Canonical Navigation Taxonomy Registry

Navigation links across the entire application (Header, Desktop Mega-Menu, Mobile Drawer, and Categorized Footer) are generated dynamically from a single canonical taxonomy file:

`src/config/navigation.config.ts`

### Benefits:
- **Zero Manual Link Maintenance**: Adding a route to `navigation.config.ts` updates header menus and footers automatically across all 40 locales.
- **100% Valid URLs**: Prevents broken 404 links by deriving link targets from verified content slugs.
- **Strict Locale Prefixing**: All links are prefixed dynamically with `/${locale}/`.

---

## 2. Header & Desktop Mega-Menu Architecture

Component: `src/components/navigation/SiteNavigation.astro`

### Navigation Structure:
1. **Logo**: Souliography -> `/${locale}/`
2. **Home**: `/${locale}/`
3. **Numerology Hub (Dropdown)**:
   - Overview -> `/${locale}/numerology/`
   - Life Path Number -> `/${locale}/calculators/life-path-number/`
   - Destiny Number -> `/${locale}/calculators/destiny-number/`
   - Soul Urge Number -> `/${locale}/calculators/soul-urge-number/`
   - Personality Number -> `/${locale}/calculators/personality-number/`
   - Personal Year -> `/${locale}/calculators/personal-year/`
   - Essence Number -> `/${locale}/calculators/essence-number/`
4. **Destiny Matrix Hub (Dropdown)**:
   - Destiny Matrix Chart Engine -> `/${locale}/`
   - 22 Major Arcana Library -> `/${locale}/destiny-matrix/arcana/`
   - 365 Birthday Profiles -> `/${locale}/destiny-matrix/birthdays/`
5. **Calculators Hub (Dropdown)**:
   - All Calculators Directory -> `/${locale}/calculators/`
   - Life Path Calculator -> `/${locale}/calculators/life-path-number/`
   - Destiny Calculator -> `/${locale}/calculators/destiny-number/`
   - Soul Urge Calculator -> `/${locale}/calculators/soul-urge-number/`
   - Personal Year Calculator -> `/${locale}/calculators/personal-year/`
   - Essence Calculator -> `/${locale}/calculators/essence-number/`
6. **Arcana Direct Link**: `/${locale}/destiny-matrix/arcana/`
7. **Birthdays Direct Link**: `/${locale}/destiny-matrix/birthdays/`
8. **Guides Direct Link**: `/${locale}/guides/`
9. **Language Selector**: Modal dialog supporting search across all 40 supported locales.

---

## 3. Categorized Footer Architecture

Component: `src/components/navigation/FooterNavigation.astro`

### Columns:
1. **Destiny Matrix**: Engine, Arcana Library, Birthday Profiles, Guides
2. **Numerology**: Directory Overview, Life Path, Destiny, Soul Urge, Personality, Personal Year, Essence Number
3. **Calculators**: All Calculators Directory, Life Path, Destiny, Soul Urge, Personal Year, Essence
4. **Legal & Reference**: Contact & Support, Terms of Service, Privacy Policy, Disclaimer
5. **Brand & Language**: Mission summary + Language Switcher modal trigger.

All link text labels consume `t(key, locale)` to ensure 100% translated rendering on non-English locales.
