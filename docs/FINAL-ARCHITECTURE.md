# Souliography — Final Architecture Specifications

## 1. System Overview
Souliography is built on Astro SSG with TypeScript calculation engines decoupled from UI components.

## 2. Calculation Engines (`src/engines/calculator/`)
- `core/reduction.ts`: Contains `reduceTo22` (Natalia Ladini 22 Arcana) and `reducePythagorean` (preserving Master Numbers 11, 22, 33).
- `core/date-parser.ts`: Strict Gregorian date parsing and leap year validation.
- `core/char-map.ts`: Pythagorean Latin letter-to-number mapping ($A=1 \dots Z=8$), diacritic normalization, $Y$-vowel rules, non-Latin script detection.
- `core/methodology.ts`: Registry tracking version `1.0` methodology records, disclosures, and sources.
- Pure calculation modules: `life-path/`, `destiny-matrix/`, `name/`, `personal-year/`, `compatibility/`.

## 3. Translation Architecture (`src/i18n/`)
- Master registry in `src/i18n/index.ts`.
- Dictionary files in `src/i18n/ui/*.ts` covering 40 supported locales.
- Legacy `src/services/translation/index.ts` fully deprecated.

## 4. UI Components (`src/components/common/`)
- `CalculationBreakdown.astro`: Displays step-by-step arithmetic operations ("Why did I get this number?").
- `MethodologyBox.astro`: Displays system traditions, sources, and disclosures.
- `DisclaimerBox.astro`: Non-dogmatic self-reflection disclaimers.
- `Breadcrumbs.astro`: Semantic HTML breadcrumb navigation.
