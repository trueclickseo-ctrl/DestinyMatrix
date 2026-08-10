import { reduceToSingleDigit } from './core-math';

export function calculatePersonalYear(birthDate: string, targetYear: number = new Date().getFullYear()): number {
  const parts = birthDate.split('-');
  const month = parseInt(parts[1] || '1', 10);
  const day = parseInt(parts[2] || '1', 10);
  
  const mDigit = reduceToSingleDigit(month, false);
  const dDigit = reduceToSingleDigit(day, false);
  const yDigit = reduceToSingleDigit(targetYear, false);

  return reduceToSingleDigit(mDigit + dDigit + yDigit);
}

export function calculatePersonalMonth(birthDate: string, targetMonth: number = new Date().getMonth() + 1): number {
  const py = calculatePersonalYear(birthDate);
  const mDigit = reduceToSingleDigit(targetMonth, false);
  return reduceToSingleDigit(py + mDigit);
}

export function calculatePersonalDay(birthDate: string, targetDay: number = new Date().getDate()): number {
  const pm = calculatePersonalMonth(birthDate);
  const dDigit = reduceToSingleDigit(targetDay, false);
  return reduceToSingleDigit(pm + dDigit);
}

export function calculatePinnacles(birthDate: string) {
  const parts = birthDate.split('-');
  const month = reduceToSingleDigit(parseInt(parts[1] || '1', 10));
  const day = reduceToSingleDigit(parseInt(parts[2] || '1', 10));
  const year = reduceToSingleDigit(parseInt(parts[0] || '1990', 10));

  const p1 = reduceToSingleDigit(month + day);
  const p2 = reduceToSingleDigit(day + year);
  const p3 = reduceToSingleDigit(p1 + p2);
  const p4 = reduceToSingleDigit(month + year);

  return { p1, p2, p3, p4 };
}

export function calculateChallenges(birthDate: string) {
  const parts = birthDate.split('-');
  const month = reduceToSingleDigit(parseInt(parts[1] || '1', 10), false);
  const day = reduceToSingleDigit(parseInt(parts[2] || '1', 10), false);
  const year = reduceToSingleDigit(parseInt(parts[0] || '1990', 10), false);

  const c1 = Math.abs(month - day);
  const c2 = Math.abs(day - year);
  const c3 = Math.abs(c1 - c2);
  const c4 = Math.abs(month - year);

  return { c1, c2, c3, c4 };
}
