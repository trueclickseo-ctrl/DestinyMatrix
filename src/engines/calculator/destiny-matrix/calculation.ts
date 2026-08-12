import { parseDate } from '../core/date-parser';
import { reduceTo22 } from '../core/reduction';
import type { CalculationBreakdownStep } from '../core/types';

export interface DestinyMatrixNodes {
  // Core 4 Corners
  dayArcana: number;     // Position A (Left / Personal Purpose)
  monthArcana: number;   // Position B (Top / Talent)
  yearArcana: number;    // Position C (Right / Karmic Past)
  bottomArcana: number;  // Position D (Bottom / Foundation)
  centerArcana: number;  // Position E (Heart / Comfort Zone)

  // Diagonals (Ancestral Lines)
  topLeftArcana: number;     // TL
  topRightArcana: number;    // TR
  bottomRightArcana: number; // BR
  bottomLeftArcana: number;  // BL

  // Channels
  moneyArcana: number;       // Money Line
  loveArcana: number;        // Love Line
  karmicTailArcana: number;  // Karmic Tail

  // Synthesis Purpose Nodes
  personalPurpose: number;
  socialPurpose: number;
  spiritualPurpose: number;
}

export interface DetailedDestinyMatrixEngineResult {
  dob: string;
  day: number;
  month: number;
  year: number;
  nodes: DestinyMatrixNodes;
  breakdown: CalculationBreakdownStep[];
  isValid: boolean;
  error?: string;
}

/**
 * Pure calculation engine for Natalia Ladini's 22 Arcana Destiny Matrix Framework.
 * Matrix Position Specification:
 * - Position A (Left): reduceTo22(Day)
 * - Position B (Top): reduceTo22(Month)
 * - Position C (Right): reduceTo22(SumOfYearDigits)
 * - Position D (Bottom): reduceTo22(A + B + C)
 * - Center E (Heart): reduceTo22(A + B + C + D)
 * - Diagonals: TL = reduceTo22(A+B), TR = reduceTo22(B+C), BR = reduceTo22(C+D), BL = reduceTo22(D+A)
 * - Money Line: reduceTo22(Center + C)
 * - Love Line: reduceTo22(Center + D)
 * - Karmic Tail: reduceTo22(Bottom + Center)
 */
export function calculateDestinyMatrixNodes(dobString: string): DetailedDestinyMatrixEngineResult {
  const parsed = parseDate(dobString);

  if (!parsed.isValid) {
    const fallbackNodes: DestinyMatrixNodes = {
      dayArcana: 15, monthArcana: 7, yearArcana: 6, bottomArcana: 10, centerArcana: 16,
      topLeftArcana: 22, topRightArcana: 13, bottomRightArcana: 16, bottomLeftArcana: 3,
      moneyArcana: 22, loveArcana: 4, karmicTailArcana: 8,
      personalPurpose: 5, socialPurpose: 12, spiritualPurpose: 17,
    };
    return {
      dob: dobString, day: 15, month: 7, year: 1995,
      nodes: fallbackNodes, breakdown: [], isValid: false, error: parsed.error || 'Invalid DOB',
    };
  }

  const { day, month, year } = parsed;

  // 1. Core 4 Corners
  const dayArcana = reduceTo22(day).final;
  const monthArcana = reduceTo22(month).final;

  const yearDigitSum = year.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  const yearArcana = reduceTo22(yearDigitSum).final;

  const bottomArcana = reduceTo22(dayArcana + monthArcana + yearArcana).final;
  const centerArcana = reduceTo22(dayArcana + monthArcana + yearArcana + bottomArcana).final;

  // 2. Diagonals
  const topLeftArcana = reduceTo22(dayArcana + monthArcana).final;
  const topRightArcana = reduceTo22(monthArcana + yearArcana).final;
  const bottomRightArcana = reduceTo22(yearArcana + bottomArcana).final;
  const bottomLeftArcana = reduceTo22(bottomArcana + dayArcana).final;

  // 3. Channels
  const moneyArcana = reduceTo22(centerArcana + yearArcana).final;
  const loveArcana = reduceTo22(centerArcana + bottomArcana).final;
  const karmicTailArcana = reduceTo22(bottomArcana + centerArcana).final;

  // 4. Purpose Synthesis
  const personalPurpose = reduceTo22(dayArcana + monthArcana).final;
  const socialPurpose = reduceTo22(yearArcana + bottomArcana).final;
  const spiritualPurpose = reduceTo22(personalPurpose + socialPurpose).final;

  const nodes: DestinyMatrixNodes = {
    dayArcana,
    monthArcana,
    yearArcana,
    bottomArcana,
    centerArcana,
    topLeftArcana,
    topRightArcana,
    bottomRightArcana,
    bottomLeftArcana,
    moneyArcana,
    loveArcana,
    karmicTailArcana,
    personalPurpose,
    socialPurpose,
    spiritualPurpose,
  };

  const breakdown: CalculationBreakdownStep[] = [
    { label: 'Position A (Day / Left)', operation: `Day ${day} -> reduceTo22(${day})`, result: dayArcana },
    { label: 'Position B (Month / Top)', operation: `Month ${month} -> reduceTo22(${month})`, result: monthArcana },
    { label: 'Position C (Year / Right)', operation: `${year} digits (${year.toString().split('').join('+')}) = ${yearDigitSum} -> reduceTo22(${yearDigitSum})`, result: yearArcana },
    { label: 'Position D (Bottom / Root)', operation: `A (${dayArcana}) + B (${monthArcana}) + C (${yearArcana}) = ${dayArcana + monthArcana + yearArcana}`, result: bottomArcana },
    { label: 'Center E (Heart / Comfort Zone)', operation: `A (${dayArcana}) + B (${monthArcana}) + C (${yearArcana}) + D (${bottomArcana}) = ${dayArcana + monthArcana + yearArcana + bottomArcana}`, result: centerArcana },
    { label: 'Money Line Arcana', operation: `Center (${centerArcana}) + Position C (${yearArcana}) = ${centerArcana + yearArcana}`, result: moneyArcana },
    { label: 'Love Line Arcana', operation: `Center (${centerArcana}) + Position D (${bottomArcana}) = ${centerArcana + bottomArcana}`, result: loveArcana },
    { label: 'Karmic Tail Arcana', operation: `Position D (${bottomArcana}) + Center (${centerArcana}) = ${bottomArcana + centerArcana}`, result: karmicTailArcana },
  ];

  return {
    dob: dobString,
    day,
    month,
    year,
    nodes,
    breakdown,
    isValid: true,
  };
}
