import { analyzeName, type NameAnalysisResult } from '../core/char-map';
import { reducePythagorean } from '../core/reduction';
import type { CalculationBreakdownStep } from '../core/types';

export interface DestinyNumberResult {
  rawName: string;
  analysis: NameAnalysisResult;
  destinyNumber: number;
  isMasterNumber: boolean;
  breakdown: CalculationBreakdownStep[];
  isValid: boolean;
  warning?: string;
}

/**
 * Pure calculation engine for Destiny / Expression Number using Pythagorean Name Numerology.
 * Sums all character values in full legal name (A=1...Z=8) and reduces to 1-9 or Master Numbers (11, 22, 33).
 */
export function calculateDestinyNumber(fullName: string): DestinyNumberResult {
  const analysis = analyzeName(fullName);

  if (analysis.characters.length === 0 || analysis.totalSum === 0) {
    return {
      rawName: fullName,
      analysis,
      destinyNumber: 1,
      isMasterNumber: false,
      breakdown: [],
      isValid: false,
      warning: 'Please enter a valid legal name using Latin characters.',
    };
  }

  const redRes = reducePythagorean(analysis.totalSum, true);
  const destinyNumber = redRes.final;

  const breakdown: CalculationBreakdownStep[] = [
    {
      label: 'Character Values Sum',
      operation: analysis.characters.map(c => `${c.char.toUpperCase()}(${c.value})`).join(' + '),
      result: analysis.totalSum,
    },
    {
      label: 'Pythagorean Reduction',
      operation: redRes.intermediateSteps.join(' -> '),
      result: destinyNumber,
      note: redRes.isMasterNumber ? `Master Number ${destinyNumber}` : undefined,
    },
  ];

  let warning: string | undefined = undefined;
  if (analysis.hasNonLatinCharacters) {
    warning = `Notice: Some characters (${analysis.unsupportedChars.join(', ')}) are outside the standard Latin alphabet used in Pythagorean numerology and were ignored in calculations.`;
  }

  return {
    rawName: fullName,
    analysis,
    destinyNumber,
    isMasterNumber: redRes.isMasterNumber,
    breakdown,
    isValid: true,
    warning,
  };
}
