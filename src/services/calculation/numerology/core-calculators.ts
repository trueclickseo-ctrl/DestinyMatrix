import { reduceToSingleDigit, calculateNameScore } from './core-math';

export function calculateLifePath(birthDate: string): number {
  const digits = birthDate.replace(/\D/g, '');
  if (!digits) return 1;
  const sum = digits.split('').reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  return reduceToSingleDigit(sum);
}

export function calculateDestiny(fullName: string): number {
  return calculateNameScore(fullName, 'pythagorean');
}

export function calculateSoulUrge(fullName: string): number {
  return calculateNameScore(fullName, 'pythagorean', 'vowels');
}

export function calculatePersonality(fullName: string): number {
  return calculateNameScore(fullName, 'pythagorean', 'consonants');
}

export function calculateBirthdayNumber(birthDate: string): number {
  const parts = birthDate.split('-');
  const day = parseInt(parts[2] || '1', 10);
  return reduceToSingleDigit(day);
}

export function calculateMaturityNumber(birthDate: string, fullName: string): number {
  const lp = calculateLifePath(birthDate);
  const dest = calculateDestiny(fullName);
  return reduceToSingleDigit(lp + dest);
}
