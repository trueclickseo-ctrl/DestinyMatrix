# Internationalization (i18n) Audit

## 1. System Architecture Analysis
- **Supported Locales**: 40 locales defined in `src/config/locales.config.ts`.
- **UI Dictionaries**: Located in `src/i18n/ui/*.ts` (`en.ts`, `pt.ts`, `de.ts`, `es.ts`, `fr.ts`, `ar.ts`, etc.).
- **Legacy Service Layer**: `src/services/translation/index.ts` contains inline translations for `en`, `ar`, `pt` only.
- **Language Switcher**: `LanguageSwitcher.astro` switches routes correctly, but missing keys lead to raw English fallbacks.

## 2. Discovered Localization Defects
1. **Partial Data Translation**: `src/data/arcana.ts` translates Arcana *names* for only 3 languages (`de`, `hi`, `ar`) and leaves `meaning`, `positiveExpression`, `shadowExpression`, `careerGuidance`, `loveCompatibility`, `moneyChannel`, `spiritualLesson`, and `dailyWisdom` in English for all 40 locales!
2. **Hardcoded English Strings in Templates**:
   - `[arcanaSlug].astro`: Hardcoded titles, meta descriptions, section headers ("22 MAJOR ARCANA ENCYCLOPEDIA", "Core Meaning & Archetypal Frequency", "Positive High Frequency", "Shadow & Blocked Frequency").
   - `[dateSlug].astro`: Hardcoded meta descriptions, breadcrumbs ("Home", "Birthdays Directory"), section titles ("Core Birth Archetype", "Career Vocation & Financial Channel", "Explore Nearby Birthdates").
   - `[number].astro`: Hardcoded breadcrumbs, section titles ("Core Archetypal Traits", "Career & Professional Vocation", "Love, Relationships & Relational Synergy").
3. **Ununified Lookup Functions**: `BaseLayout.astro` imports `t()` from `src/services/translation`, while pages import `t()` from `src/i18n`.

## 3. Remediation Strategy
- Consolidate all calls into `src/i18n/index.ts`.
- Expand dictionary files in `src/i18n/ui/*.ts` to include all UI elements, headings, schema strings, breadcrumbs, calculator controls, and step breakdowns.
- Populate full localized data for Arcana, Birthdays, and Numerology content.
