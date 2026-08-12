import type { ReductionResult } from './types';

/**
 * Pure reduction engine for Natalia Ladini's 22 Arcana Destiny Matrix Framework.
 * Rule: If val > 22, sum digits repeatedly until result is between 1 and 22.
 * Zero or negative numbers fallback to 1.
 */
export function reduceTo22(val: number): ReductionResult {
  const steps: number[] = [val];
  let num = Math.abs(val);

  if (num === 0) {
    return { raw: val, intermediateSteps: [0], final: 1, isMasterNumber: false };
  }

  while (num > 22) {
    const digitSum = num
      .toString()
      .split('')
      .reduce((sum, d) => sum + parseInt(d, 10), 0);
    num = digitSum;
    steps.push(num);
  }

  return {
    raw: val,
    intermediateSteps: steps,
    final: num,
    isMasterNumber: false,
  };
}

/**
 * Pure reduction engine for Pythagorean Numerology.
 * Reduces positive integers to single digits (1..9), preserving Master Numbers (11, 22, 33) when enabled.
 */
export function reducePythagorean(val: number, preserveMaster: boolean = true): ReductionResult {
  const steps: number[] = [val];
  let num = Math.abs(val);

  if (num === 0) {
    return { raw: val, intermediateSteps: [0], final: 1, isMasterNumber: false };
  }

  while (num > 9) {
    if (preserveMaster && (num === 11 || num === 22 || num === 33)) {
      break;
    }
    const digitSum = num
      .toString()
      .split('')
      .reduce((sum, d) => sum + parseInt(d, 10), 0);
    num = digitSum;
    steps.push(num);
  }

  const isMaster = preserveMaster && (num === 11 || num === 22 || num === 33);

  return {
    raw: val,
    intermediateSteps: steps,
    final: num,
    isMasterNumber: isMaster,
  };
}
