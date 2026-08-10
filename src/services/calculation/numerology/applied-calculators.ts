import { reduceToSingleDigit, calculateNameScore } from './core-math';

export function calculateAddressNumerology(address: string): number {
  const digits = address.replace(/\D/g, '');
  if (!digits) return 1;
  const sum = digits.split('').reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  return reduceToSingleDigit(sum);
}

export function calculatePhoneNumerology(phoneNumber: string): number {
  const digits = phoneNumber.replace(/\D/g, '');
  if (!digits) return 1;
  const sum = digits.split('').reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  return reduceToSingleDigit(sum);
}

export function calculateVehicleNumerology(plate: string): number {
  const score = calculateNameScore(plate, 'pythagorean');
  const digits = plate.replace(/\D/g, '');
  const digitSum = digits.split('').reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  return reduceToSingleDigit(score + digitSum);
}

export function calculateCompatibilityScore(num1: number, num2: number): { score: number; harmony: string } {
  const diff = Math.abs(num1 - num2);
  if (num1 === num2) return { score: 95, harmony: 'Soulmate Synergy' };
  if (diff === 2 || diff === 4) return { score: 85, harmony: 'Harmonious Complement' };
  if (diff === 1 || diff === 3) return { score: 75, harmony: 'Dynamic Growth' };
  return { score: 65, harmony: 'Transformational Challenge' };
}
