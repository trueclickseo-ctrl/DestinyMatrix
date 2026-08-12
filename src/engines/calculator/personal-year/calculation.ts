import { parseDate } from '../core/date-parser';
import { reducePythagorean } from '../core/reduction';
import type { CalculationBreakdownStep } from '../core/types';

export interface PersonalYearResult {
  dob: string;
  targetYear: number;
  monthReduced: number;
  dayReduced: number;
  targetYearReduced: number;
  personalYearNumber: number;
  isMasterNumber: boolean;
  breakdown: CalculationBreakdownStep[];
  isValid: boolean;
  error?: string;
}

/**
 * Pure calculation engine for Personal Year Number.
 * Formula: Birth Month (reduced) + Birth Day (reduced) + Target Year Digits Sum (reduced).
 * Reduces sum to 1-9, preserving Master Numbers 11, 22.
 */
export function calculatePersonalYear(dobString: string, targetYearInput?: number): PersonalYearResult {
  const parsed = parseDate(dobString);
  const targetYear = targetYearInput || new Date().getFullYear();

  if (!parsed.isValid) {
    return {
      dob: dobString, targetYear, monthReduced: 7, dayReduced: 6, targetYearReduced: 8,
      personalYearNumber: 3, isMasterNumber: false, breakdown: [], isValid: false, error: parsed.error || 'Invalid DOB',
    };
  }

  const monthRes = reducePythagorean(parsed.month, true);
  const dayRes = reducePythagorean(parsed.day, true);

  const yearDigitsSum = targetYear.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  const yearRes = reducePythagorean(yearDigitsSum, true);

  const totalSum = monthRes.final + dayRes.final + yearRes.final;
  const finalRes = reducePythagorean(totalSum, true);

  const breakdown: CalculationBreakdownStep[] = [
    { label: 'Birth Month Reduced', operation: `Month ${parsed.month}`, result: monthRes.final },
    { label: 'Birth Day Reduced', operation: `Day ${parsed.day}`, result: dayRes.final },
    { label: 'Target Year Reduced', operation: `Year ${targetYear} digits (${targetYear.toString().split('').join('+')}) = ${yearDigitsSum}`, result: yearRes.final },
    { label: 'Combined Sum', operation: `${monthRes.final} + ${dayRes.final} + ${yearRes.final}`, result: totalSum },
    { label: 'Personal Year Reduction', operation: finalRes.intermediateSteps.join(' -> '), result: finalRes.final },
  ];

  return {
    dob: dobString,
    targetYear,
    monthReduced: monthRes.final,
    dayReduced: dayRes.final,
    targetYearReduced: yearRes.final,
    personalYearNumber: finalRes.final,
    isMasterNumber: finalRes.isMasterNumber,
    breakdown,
    isValid: true,
  };
}
