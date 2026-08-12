# Calculator Audit

## 1. Calculator Inventory & Evaluation

| Calculator Name | Route | Source Code File | Current Math Logic | Validation | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Destiny Matrix** | `/[locale]/` | `src/services/calculation/destiny-matrix.ts` | 22 Arcana Reduction (`val > 22 => sum digits`) | Basic string split | `UNVERIFIED` |
| **Life Path Number** | `/[locale]/calculators/life-path-number/` | Client `<script>` in `[slug].astro` | Raw digit sum of all date digits | Basic input check | `UNVERIFIED` (Needs Period Reduction) |
| **Destiny / Expression** | `/[locale]/calculators/destiny-number/` | Client `<script>` in `[slug].astro` | Pythagorean A=1..Z=8 letter sum | RegEx `[^a-z]` | `UNVERIFIED` (Needs Y vowel rule & non-Latin handling) |
| **Soul Urge Number** | `/[locale]/calculators/soul-urge-number/` | Client `<script>` in `[slug].astro` | Uses generic `calculateVal` letter sum | RegEx `[^a-z]` | `UNVERIFIED` |
| **Personality Number** | `/[locale]/calculators/personality-number/` | Client `<script>` in `[slug].astro` | Uses generic `calculateVal` letter sum | RegEx `[^a-z]` | `UNVERIFIED` |
| **Birthday Number** | `/[locale]/calculators/birthday-number/` | Client `<script>` in `[slug].astro` | Generic reduction | Basic date check | `UNVERIFIED` |
| **Personal Year** | `/[locale]/calculators/personal-year/` | Client `<script>` in `[slug].astro` | Generic reduction | Basic date check | `UNVERIFIED` |
| **Compatibility Matrix** | `/[locale]/calculators/compatibility/` | `src/engines/compatibility-engine.ts` | Sum of DOB strings | Basic string split | `REQUIRES_HUMAN_REVIEW` |

## 2. Identified Deficiencies & Remediation Required
1. **Lack of Step-by-Step Breakdown**: Calculators currently display only the final single digit without exposing intermediate operations, raw component reductions, or Master Number preservation steps.
2. **Formula Inaccuracies**: Life Path calculator uses raw digit summing (`reduceNum(total)`) instead of Pythagorean Period Reduction (reducing Month, Day, and Year separately).
3. **Missing Methodology Explanations**: No human-readable breakdown explaining Pythagorean vs Chaldean or Ladini 22 Arcana frameworks on calculator pages.
4. **Scattered Engine Code**: Math logic is duplicated between server TS files and inline client scripts.
