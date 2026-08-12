import { analyzeName, type NameAnalysisResult } from '../core/char-map';
import { reducePythagorean } from '../core/reduction';
import type { CalculationBreakdownStep } from '../core/types';

export interface SoulUrgeResult {
  rawName: string;
  analysis: NameAnalysisResult;
  soulUrgeNumber: number;
  isMasterNumber: boolean;
  breakdown: CalculationBreakdownStep[];
  isValid: boolean;
  warning?: string;
}

/**
 * Pure calculation engine for Soul Urge (Heart's Desire) Number.
 * Sums only vowel values in full legal name and reduces to 1-9 or Master Numbers (11, 22, 33).
 */
export function calculateSoulUrgeNumber(fullName: string): SoulUrgeResult {
  const analysis = analyzeName(fullName);
  const vowels = analysis.characters.filter(c => c.isVowel && c.value > 0);

  if (vowels.length === 0 || analysis.vowelSum === 0) {
    return {
      rawName: fullName,
      analysis,
      soulUrgeNumber: 1,
      isMasterNumber: false,
      breakdown: [],
      isValid: false,
      warning: 'No valid Latin vowels detected in the input name.',
    };
  }

  const redRes = reducePythagorean(analysis.vowelSum, true);
  const soulUrgeNumber = redRes.final;

  const breakdown: CalculationBreakdownStep[] = [
    {
      label: 'Vowel Characters Sum',
      operation: vowels.map(c => `${c.char.toUpperCase()}(${c.value})`).join(' + '),
      result: analysis.vowelSum,
    },
    {
      label: 'Pythagorean Reduction',
      operation: redRes.intermediateSteps.join(' -> '),
      result: soulUrgeNumber,
      note: redRes.isMasterNumber ? `Master Number ${soulUrgeNumber}` : undefined,
    },
  ];

  let warning: string | undefined = undefined;
  if (analysis.hasNonLatinCharacters) {
    warning = `Notice: Some characters (${analysis.unsupportedChars.join(', ')}) are outside the standard Latin alphabet used in Pythagorean numerology and were ignored in calculations.`;
  }

  return {
    rawName: fullName,
    analysis,
    soulUrgeNumber,
    isMasterNumber: redRes.isMasterNumber,
    breakdown,
    isValid: true,
    warning,
  };
}
