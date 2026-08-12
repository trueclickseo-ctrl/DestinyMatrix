import { calculatePersonalYear } from './calculation';

export function runPersonalYearUnitTests(): { passed: number; failed: number; errors: string[] } {
  const res = calculatePersonalYear('1995-07-15', 2026);
  if (res.isValid && res.personalYearNumber > 0 && res.personalYearNumber <= 33) {
    return { passed: 1, failed: 0, errors: [] };
  }
  return { passed: 0, failed: 1, errors: ['Personal year calculation failed for 1995-07-15'] };
}
