import { analyzeName } from '../core/char-map';
import { reducePythagorean } from '../core/reduction';
import { parseDate } from '../core/date-parser';
import type { CalculationBreakdownStep } from '../core/types';

export interface EssenceResult {
  fullName: string;
  dob: string;
  targetYear: number;
  ageAtTargetYear: number;
  activeLetters: { char: string; value: number }[];
  rawSum: number;
  essenceNumber: number;
  isMasterNumber: boolean;
  breakdown: CalculationBreakdownStep[];
  isValid: boolean;
  warning?: string;
}

/**
 * Pure calculation engine for Essence Cycle Number in Pythagorean Name Numerology.
 * Calculates active letter transits for the given age and sums their numerical frequencies.
 */
export function calculateEssenceNumber(fullName: string, dobString: string, targetYearInput?: number): EssenceResult {
  const nameAnalysis = analyzeName(fullName);
  const parsedDate = parseDate(dobString);
  const targetYear = targetYearInput || new Date().getFullYear();

  if (!nameAnalysis.characters.length || !parsedDate.isValid) {
    return {
      fullName, dob: dobString, targetYear, ageAtTargetYear: 0,
      activeLetters: [], rawSum: 1, essenceNumber: 1, isMasterNumber: false, breakdown: [], isValid: false,
      warning: 'Please provide a valid full legal name and birth date.',
    };
  }

  const birthYear = parsedDate.year;
  const ageAtTargetYear = Math.max(0, targetYear - birthYear);

  // Determine active letters based on letter values cycle length
  const totalLetters = nameAnalysis.characters.length;
  const totalCycleLength = nameAnalysis.totalSum || 1;
  const cycleOffset = ageAtTargetYear % totalCycleLength;

  let accumulatedDuration = 0;
  const activeLetters: { char: string; value: number }[] = [];

  for (const c of nameAnalysis.characters) {
    accumulatedDuration += c.value;
    if (accumulatedDuration >= cycleOffset) {
      activeLetters.push({ char: c.char.toUpperCase(), value: c.value });
      if (activeLetters.length >= 2) break; // Select primary active transit letters
    }
  }

  if (activeLetters.length === 0 && nameAnalysis.characters.length > 0) {
    const firstChar = nameAnalysis.characters[0];
    activeLetters.push({ char: firstChar.char.toUpperCase(), value: firstChar.value });
  }

  const rawSum = activeLetters.reduce((sum, item) => sum + item.value, 0) || nameAnalysis.totalSum;
  const redRes = reducePythagorean(rawSum, true);
  const essenceNumber = redRes.final;

  const breakdown: CalculationBreakdownStep[] = [
    {
      label: 'Age & Target Year Transit',
      operation: `Birth Year ${birthYear} -> Target Year ${targetYear} (Age ${ageAtTargetYear})`,
      result: ageAtTargetYear,
    },
    {
      label: 'Active Name Transit Letters',
      operation: activeLetters.map(l => `${l.char}(${l.value})`).join(' + '),
      result: rawSum,
    },
    {
      label: 'Pythagorean Essence Reduction',
      operation: redRes.intermediateSteps.join(' -> '),
      result: essenceNumber,
      note: redRes.isMasterNumber ? `Preserved Master Number ${essenceNumber}` : undefined,
    },
  ];

  return {
    fullName,
    dob: dobString,
    targetYear,
    ageAtTargetYear,
    activeLetters,
    rawSum,
    essenceNumber,
    isMasterNumber: redRes.isMasterNumber,
    breakdown,
    isValid: true,
  };
}
