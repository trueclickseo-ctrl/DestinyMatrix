import { calculateEssenceNumber } from './calculation';

export function runEssenceUnitTests(): { passed: number; failed: number; errors: string[] } {
  const res = calculateEssenceNumber('John Doe', '1995-07-15', 2026);
  if (res.isValid && res.essenceNumber >= 1 && res.essenceNumber <= 33) {
    return { passed: 1, failed: 0, errors: [] };
  }
  return { passed: 0, failed: 1, errors: ['Essence calculation failed'] };
}
