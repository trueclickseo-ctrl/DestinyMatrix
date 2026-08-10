import type { CalculatorInput, CalculatorResult } from '../../../engines/calculator/types';

export function calculateLifePathNumber(birthDate: string): number {
  const digits = birthDate.replace(/\D/g, '');
  if (!digits) return 1;

  let sum = digits.split('').reduce((acc, curr) => acc + parseInt(curr, 10), 0);

  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum
      .toString()
      .split('')
      .reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  }

  return sum;
}

export function runLifePathCalculator(input: CalculatorInput): CalculatorResult {
  const birthDate = input.birthDate || '1990-01-01';
  const lifePathNumber = calculateLifePathNumber(birthDate);

  return {
    id: 'life-path-number',
    title: 'Life Path Number',
    rawInput: input,
    primaryValue: lifePathNumber,
    calculatedAt: new Date().toISOString(),
  };
}
