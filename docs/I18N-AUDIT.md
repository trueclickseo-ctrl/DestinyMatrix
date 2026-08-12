# Souliography — i18n & Localization Audit Report

## 1. Single Source of Truth
- Unified registry: `src/i18n/index.ts`.
- Master dictionary imports 40 locale UI files in `src/i18n/ui/*.ts`.
- Removed legacy duplicate system `src/services/translation/index.ts`.

## 2. Supported Locales (40 Total)
- English (`en`), German (`de`), French (`fr`), Spanish (`es`), Portuguese (`pt`), Italian (`it`), Dutch (`nl`), Polish (`pl`), Swedish (`sv`), Danish (`da`), Norwegian (`no`), Finnish (`fi`), Icelandic (`is`), Czech (`cs`), Slovak (`sk`), Hungarian (`hu`), Romanian (`ro`), Bulgarian (`bg`), Greek (`el`), Ukrainian (`uk`), Russian (`ru`), Turkish (`tr`), Indonesian (`id`), Malay (`ms`), Vietnamese (`vi`), Thai (`th`), Chinese (`zh`), Japanese (`ja`), Korean (`ko`), Arabic (`ar`), Hindi (`hi`), Bengali (`bn`), Tamil (`ta`), Telugu (`te`), Marathi (`mr`), Gujarati (`gu`), Kannada (`kn`), Malayalam (`ml`), Punjabi (`pa`), Urdu (`ur`).

## 3. Zero English Bleed Policy
- Verified localized metadata, headings, breadcrumbs, calculator controls, step-by-step arithmetic labels, footers, and schema JSON-LD scripts across all 40 locales.
