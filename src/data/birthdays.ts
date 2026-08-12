import { MAJOR_ARCANA_DATABASE, type ArcanaEncyclopediaEntry } from './arcana';

export interface BirthdayProfileData {
  slug: string;
  month: string;
  day: number;
  formattedDate: string;
  primaryArcanaNum: number;
  primaryArcana: ArcanaEncyclopediaEntry;
  seasonalContext: string;
  dayVibrationNote: string;
  reflectionQuestions: string[];
}

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTH_SLUGS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const DAYS_IN_MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/**
 * Calculates primary Arcana (1-22) for a given birth day (1-31).
 */
export function calculateDayArcana(day: number): number {
  let num = day;
  while (num > 22) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return num || 1;
}

/**
 * Generates distinct seasonal context and day vibration notes for each specific calendar date.
 */
export function getBirthdayProfile(monthIndex: number, day: number): BirthdayProfileData {
  const monthName = MONTH_NAMES[monthIndex] || 'January';
  const monthSlug = MONTH_SLUGS[monthIndex] || 'january';
  const slug = `${monthSlug}-${day}`;
  const formattedDate = `${monthName} ${day}`;
  const primaryArcanaNum = calculateDayArcana(day);
  const primaryArcana = MAJOR_ARCANA_DATABASE[primaryArcanaNum] || MAJOR_ARCANA_DATABASE[1];

  const seasonalContextMap: Record<number, string> = {
    0: 'Midwinter reflection, inward focus, and setting foundational seeds for the emerging year.',
    1: 'Late winter transition, cultivating inner resilience, and preparing for spring renewal.',
    2: 'Early spring awakening, balancing emerging creative momentum with grounded planning.',
    3: 'Mid-spring expansion, active growth, blossoming ideas, and outward collaboration.',
    4: 'Late spring culmination, sensory appreciation, and nurturing creative endeavors.',
    5: 'Early summer solstice energy, high vitality, social connectivity, and dynamic initiative.',
    6: 'Midsummer warmth, emotional depth, family focus, and personal sanctuary building.',
    7: 'Late summer radiance, solar leadership, authentic self-expression, and generosity.',
    8: 'Early autumn harvest, analytical evaluation, harvest Organization, and practical clarity.',
    9: 'Mid-autumn balance, aesthetic harmony, relationship discernment, and strategic choices.',
    10: 'Late autumn transformation, deep introspection, ancestral honoring, and essential release.',
    11: 'Early winter solstice transition, spiritual contemplation, quiet wisdom, and annual review.',
  };

  const seasonalContext = seasonalContextMap[monthIndex] || 'Seasonal cycle transition and personal alignment.';

  const dayVibrationNote = `${formattedDate} combines the ${seasonalContextMap[monthIndex].toLowerCase()} with the individual numerical frequency of Day ${day} (governed by ${primaryArcana.name}). Individuals born on this date often balance ${primaryArcana.positiveExpression.toLowerCase()} with a distinct commitment to personal integrity.`;

  const reflectionQuestions = [
    `How does the seasonal energy of ${monthName} influence my natural energy levels and creative focus?`,
    `In what ways can I express the constructive frequency of ${primaryArcana.name} (Arcana ${primaryArcana.number}) today?`,
    `What specific boundary or goal will bring greater balance to my current stage of life?`,
  ];

  return {
    slug,
    month: monthName,
    day,
    formattedDate,
    primaryArcanaNum,
    primaryArcana,
    seasonalContext,
    dayVibrationNote,
    reflectionQuestions,
  };
}

/**
 * Helper to fetch all 365 birthday profiles
 */
export function getAllBirthdayProfiles(): BirthdayProfileData[] {
  const profiles: BirthdayProfileData[] = [];
  for (let m = 0; m < 12; m++) {
    const days = DAYS_IN_MONTH[m];
    for (let d = 1; d <= days; d++) {
      profiles.push(getBirthdayProfile(m, d));
    }
  }
  return profiles;
}
