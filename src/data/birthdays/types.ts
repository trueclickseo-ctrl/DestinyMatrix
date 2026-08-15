import type { ArcanaEncyclopediaEntry } from '../arcana';

export interface DateComparisonRow {
  dateLabel: string;
  arcanaNum: number;
  arcanaName: string;
  coreTheme: string;
  bestFocus: string;
  keyContrast: string;
  isCurrentDay?: boolean;
}

export interface BirthdayFaqItem {
  question: string;
  answer: string;
}

export interface BirthdayInternalLink {
  label: string;
  href: string;
  reason: string;
}

export interface BirthdayProfileData {
  slug: string;
  month: string;
  day: number;
  formattedDate: string;
  primaryArcanaNum: number;
  primaryArcana: ArcanaEncyclopediaEntry;
  h1Title: string;
  metaTitle: string;
  metaDescription: string;
  snippetAnswer: string;
  vignetteTitle: string;
  vignetteScenario: string;
  birthArchetypeContent: string;
  comparisonTable: DateComparisonRow[];
  highFrequencyExpression: string;
  shadowChallenges: string;
  vocationAndFinance: string;
  reflectionQuestions: string[];
  faqItems: BirthdayFaqItem[];
  imageBrief: string;
  internalLinks: BirthdayInternalLink[];
  // Backwards compatibility fields
  seasonalContext: string;
  dayVibrationNote: string;
  constructiveExpression: string;
  shadowChallenge: string;
  careerGuidance: string;
  moneyChannel: string;
}
