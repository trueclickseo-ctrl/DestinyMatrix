import { analyzeName, type NameAnalysisResult } from '../core/char-map';
import { reducePythagorean } from '../core/reduction';
import type { CalculationBreakdownStep } from '../core/types';

export interface PersonalityResult {
  rawName: string;
  analysis: NameAnalysisResult;
  personalityNumber: number;
  isMasterNumber: boolean;
  breakdown: CalculationBreakdownStep[];
  isValid: boolean;
  warning?: string;
}

/**
 * Pure calculation engine for Personality Number.
 * Sums only consonant values in full legal name and reduces to 1-9 or Master Numbers (11, 22, 33).
 */
export function calculatePersonalityNumber(fullName: string): PersonalityResult {
  const analysis = analyzeName(fullName);
  const consonants = analysis.characters.filter(c => c.isConsonant && c.value > 0);

  if (consonants.length === 0 || analysis.consonantSum === 0) {
    return {
      rawName: fullName,
      analysis,
      personalityNumber: 1,
      isMasterNumber: false,
      breakdown: [],
      isValid: false,
      warning: 'No valid Latin consonants detected in the input name.',
    };
  }

  const redRes = reducePythagorean(analysis.consonantSum, true);
  const personalityNumber = redRes.final;

  const breakdown: CalculationBreakdownStep[] = [
    {
      label: 'Consonant Characters Sum',
      operation: consonants.map(c => `${c.char.toUpperCase()}(${c.value})`).join(' + '),
      result: analysis.consonantSum,
    },
    {
      label: 'Pythagorean Reduction',
      operation: redRes.intermediateSteps.join(' -> '),
      result: personalityNumber,
      note: redRes.isMasterNumber ? `Master Number ${personalityNumber}` : undefined,
    },
  ];

  let warning: string | undefined = undefined;
  if (analysis.hasNonLatinCharacters) {
    warning = `Notice: Some characters (${analysis.unsupportedChars.join(', ')}) are outside the standard Latin alphabet used in Pythagorean numerology and were ignored in calculations.`;
  }

  return {
    rawName: fullName,
    analysis,
    personalityNumber,
    isMasterNumber: redRes.isMasterNumber,
    breakdown,
    isValid: true,
    warning,
  };
}
