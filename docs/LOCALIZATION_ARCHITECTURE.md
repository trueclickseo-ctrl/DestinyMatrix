# SOULIOGRAPHY LOCALIZATION ARCHITECTURE

## 1. Authoritative Locale Single Source of Truth

All locale metadata is defined in a single authoritative configuration file:
`src/config/locales.config.ts`

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

### Supported Locales (40 Total)
- **Default Locale**: `en` (English)
- **LTR Locales (38)**: `en`, `de`, `fr`, `es`, `pt`, `it`, `nl`, `pl`, `sv`, `da`, `no`, `fi`, `is`, `cs`, `sk`, `hu`, `ro`, `bg`, `el`, `uk`, `ru`, `tr`, `id`, `ms`, `vi`, `th`, `zh`, `ja`, `ko`, `hi`, `bn`, `ta`, `te`, `mr`, `gu`, `kn`, `ml`, `pa`
- **RTL Locales (2)**: `ar` (Arabic), `ur` (Urdu)

---

## 2. Dynamic Routing Architecture

Every enabled locale is served via deterministic Astro file-based static routes under `src/pages/[locale]/`:
- `/[locale]/` -> Homepage & Destiny Matrix Engine
- `/[locale]/numerology/` -> Numerology Knowledge Hub
- `/[locale]/numerology/[calcSlug]/` -> Core Number Calculator & Profile Index
- `/[locale]/numerology/[calcSlug]/[number]/` -> Specific Number Profile (1-9, 11, 22, 33)
- `/[locale]/calculators/` -> All Calculators Directory
- `/[locale]/calculators/[slug]/` -> Specific Calculator App
- `/[locale]/guides/` -> Guides Index
- `/[locale]/guides/[slug]/` -> Individual Guide Page
- `/[locale]/destiny-matrix/arcana/` -> 22 Major Arcana Hub
- `/[locale]/destiny-matrix/arcana/[slug]/` -> Specific Arcana Profile
- `/[locale]/destiny-matrix/birthdays/` -> 365 Birthdays Hub
- `/[locale]/destiny-matrix/birthdays/[slug]/` -> Specific Birthday Profile

---

## 3. Translation Engine (`src/i18n/index.ts`)

Translations are looked up via the `t(key, locale)` function.
- UI strings are stored in `src/i18n/ui/[locale].ts`
- Calculator strings are stored in `src/i18n/ui/calculators.ts`
- **Strict Translation Rule**: Production builds validate key completeness and prevent silent English fallback on non-English pages.

---

## 4. Internal Link Localization

All internal links inside components MUST use the locale prefix helper:
```astro
<a href={`/${locale}/numerology/`}>{t('nav.numerology', locale)}</a>
```
Cross-locale links are prohibited except inside the explicit `LanguageSwitcher.astro` component.
