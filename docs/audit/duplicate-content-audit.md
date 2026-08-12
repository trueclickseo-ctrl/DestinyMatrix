# Duplicate Content Audit

## 1. Identified Content Overlap & Repetitive Patterns

### A. Birthday Pages (`/destiny-matrix/birthdays/[dateSlug]/`)
- **Problem**: The existing code calculates `dayArcanaNum = dayNum % 22` and injects `dayArcana` expressions directly.
- **Impact**: Dates sharing the same day number across months (e.g., February 5, March 5, April 5, May 5) render identical positive expressions, shadow challenges, career paths, and money lines.
- **Solution**: Build a structured 365-day dataset (`src/data/birthdays.ts`) providing date-specific seasonal context, day vibrations, primary and secondary Arcana relationships, and practical reflection questions.

### B. Numerology Number Pages (`/numerology/[calcSlug]/[number]/`)
- **Problem**: Uses `calcContextMap` with generic 1-sentence templates per calculator. Every number (1..33) gets identical strength/challenge strings ("Deep focus, resilience...", "Patience cultivation...").
- **Solution**: Build `src/data/numerology-content.ts` with distinct, in-depth editorial guides for every number and calculator combination.

### C. Major Arcana Pages (`/destiny-matrix/arcana/[arcanaSlug]/`)
- **Problem**: Follows a rigid prose template across all 22 pages (*Title -> Core Meaning -> Positive/Shadow -> Vocation/Love/Money -> Daily Wisdom*).
- **Solution**: Introduce flexible, Arcana-specific section layouts and RHLF layered editorial content.
