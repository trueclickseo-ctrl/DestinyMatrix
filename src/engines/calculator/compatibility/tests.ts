import { calculateCompatibilityMatrix } from './calculation';

export function runCompatibilityUnitTests(): { passed: number; failed: number; errors: string[] } {
  const res = calculateCompatibilityMatrix('1995-07-15', '1992-03-20');
  if (res.isValid && res.combinedNodes.unionCenter >= 1 && res.combinedNodes.unionCenter <= 22) {
    return { passed: 1, failed: 0, errors: [] };
  }
  return { passed: 0, failed: 1, errors: ['Compatibility matrix calculation failed'] };
}
