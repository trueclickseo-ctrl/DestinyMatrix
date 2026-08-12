import { parseDate } from '../core/date-parser';
import { reducePythagorean } from '../core/reduction';
import type { CalculationBreakdownStep } from '../core/types';

export interface LifePathResult {
  dob: string;
  day: number;
  month: number;
  year: number;
  monthReduced: number;
  dayReduced: number;
  yearReduced: number;
  lifePathNumber: number;
  isMasterNumber: boolean;
  breakdown: CalculationBreakdownStep[];
  isValid: boolean;
  error?: string;
}

/**
 * Pure calculation engine for Life Path Number using Pythagorean Period Reduction.
 * Algorithm:
 * 1. Reduce Month to single digit or 11.
 * 2. Reduce Day to single digit or 11, 22.
 * 3. Reduce Year digits to single digit or 11, 22.
 * 4. Sum the three reduced components.
 * 5. Reduce the final sum to 1-9, preserving 11, 22, 33.
 */
export function calculateLifePath(dobString: string): LifePathResult {
  const parsed = parseDate(dobString);

  if (!parsed.isValid) {
    return {
      dob: dobString,
      day: 15,
      month: 7,
      year: 1995,
      monthReduced: 7,
      dayReduced: 6,
      yearReduced: 6,
      lifePathNumber: 1,
      isMasterNumber: false,
      breakdown: [],
      isValid: false,
      error: parsed.error || 'Invalid date of birth input',
    };
  }

  const { day, month, year } = parsed;

  // Step 1: Reduce Month
  const monthRes = reducePythagorean(month, true);
  const monthReduced = monthRes.final;

  // Step 2: Reduce Day
  const dayRes = reducePythagorean(day, true);
  const dayReduced = dayRes.final;

  // Step 3: Reduce Year Digits
  const yearDigitSum = year
    .toString()
    .split('')
    .reduce((a, b) => a + parseInt(b, 10), 0);
  const yearRes = reducePythagorean(yearDigitSum, true);
  const yearReduced = yearRes.final;

  // Step 4: Sum Reduced Period Values
  const periodSum = monthReduced + dayReduced + yearReduced;

  // Step 5: Reduce Final Sum
  const finalRes = reducePythagorean(periodSum, true);
  const lifePathNumber = finalRes.final;

  const breakdown: CalculationBreakdownStep[] = [
    {
      label: 'Step 1: Month Reduction',
      operation: `Month ${month}`,
      result: monthReduced,
      note: monthRes.isMasterNumber ? 'Preserved as Master Number 11' : undefined,
    },
    {
      label: 'Step 2: Day Reduction',
      operation: `Day ${day}`,
      result: dayReduced,
      note: dayRes.isMasterNumber ? `Preserved as Master Number ${dayReduced}` : undefined,
    },
    {
      label: 'Step 3: Year Reduction',
      operation: `${year} digits (${year.toString().split('').join(' + ')}) = ${yearDigitSum}`,
      result: yearReduced,
      note: yearRes.isMasterNumber ? `Preserved as Master Number ${yearReduced}` : undefined,
    },
    {
      label: 'Step 4: Period Sum',
      operation: `${monthReduced} (Month) + ${dayReduced} (Day) + ${yearReduced} (Year)`,
      result: periodSum,
    },
    {
      label: 'Step 5: Final Life Path Reduction',
      operation: finalRes.intermediateSteps.join(' -> '),
      result: lifePathNumber,
      note: finalRes.isMasterNumber ? `Master Number ${lifePathNumber}` : undefined,
    },
  ];

  return {
    dob: dobString,
    day,
    month,
    year,
    monthReduced,
    dayReduced,
    yearReduced,
    lifePathNumber,
    isMasterNumber: finalRes.isMasterNumber,
    breakdown,
    isValid: true,
  };
}
