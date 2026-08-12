# NAVIGATION ARCHITECTURE & TAXONOMY SPECIFICATION

## 1. Primary Header Navigation (`SiteNavigation.astro`)
- **Visual Aesthetic**: Early-2000s Digital Occult Reference Library design system.
- **Color Tokens**: Deep violet background (`#231530`), antique gold borders/accents (`#C4A052`), parchment surfaces (`#FBF9F5`).
- **Typography**: Playfair Display / Cinzel serif headings + compact monospaced labels.
- **Top-Level Sections**:
  1. `[ SOULIOGRAPHY ]` — Home (`/[locale]/`)
  2. `[ NUMEROLOGY ▼ ]` — Dropdown: Overview, Life Path Number, Destiny Number, Soul Urge Number, Personality Number.
  3. `[ DESTINY MATRIX ▼ ]` — Dropdown: Chart Engine, 22 Major Arcana Library, 365 Birthday Directory.
  4. `[ CALCULATORS ▼ ]` — Dropdown: All Calculators Directory, By Birth Date, By Name.
  5. `[ ARCANA ]` — Direct Link to `/[locale]/destiny-matrix/arcana/`
  6. `[ BIRTHDAYS ]` — Direct Link to `/[locale]/destiny-matrix/birthdays/`
  7. `[ LANGUAGE SWITCHER ]` — 40-locale modal with quick search filter.

## 2. Categorized Calculator Directory (`/[locale]/calculators/`)
Organized into 4 distinct categories:
- **Birth Date Calculators**: Life Path Number, Birthday Number, Personal Year Cycle, Destiny Matrix Chart.
- **Name & Identity Calculators**: Destiny (Expression) Number, Soul Urge Number, Personality Number, Essence Cycle Number.
- **Cycle Calculators**: Personal Month, Personal Day, Pinnacle Cycles, Challenge Numbers.
- **Relationship & Life Parameter Calculators**: Compatibility Matrix, Marriage Date, Career Alignment, House/Address, Phone, License Plate.

## 3. Footer Architecture (`FooterNavigation.astro`)
- **EXPLORE**: Numerology Directory, Destiny Matrix Engine, Arcana Encyclopedia, Birthday Directory.
- **CALCULATORS**: All Calculators Directory, Life Path Number, Destiny Number, Soul Urge Number, Personal Year, Essence Number.
- **REFERENCE & LEGAL**: Terms of Service, Privacy Policy, Report Overview.
- **BRAND & LOCALE**: Multilingual selector and brand summary.
