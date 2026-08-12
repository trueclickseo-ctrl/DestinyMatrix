import type { ParsedDate } from './types';

/**
 * Checks if a given year is a leap year according to the Gregorian calendar.
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Validates whether a day/month/year combination represents a real calendar date.
 */
export function isValidCalendarDate(day: number, month: number, year: number): boolean {
  if (year < 1000 || year > 9999 || month < 1 || month > 12 || day < 1) {
    return false;
  }

  const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day <= daysInMonth[month - 1];
}

/**
 * Parses and validates ISO date strings (YYYY-MM-DD) or localized formats (DD/MM/YYYY, MM/DD/YYYY).
 */
export function parseDate(dateStr: string): ParsedDate {
  if (!dateStr || typeof dateStr !== 'string') {
    return { day: 15, month: 7, year: 1995, isValid: false, isLeapYear: false, error: 'Empty date input' };
  }

  const clean = dateStr.trim();
  const parts = clean.split(/[-/.]/);

  if (parts.length !== 3) {
    return { day: 15, month: 7, year: 1995, isValid: false, isLeapYear: false, error: 'Invalid date format' };
  }

  const p0 = parseInt(parts[0], 10);
  const p1 = parseInt(parts[1], 10);
  const p2 = parseInt(parts[2], 10);

  if (isNaN(p0) || isNaN(p1) || isNaN(p2)) {
    return { day: 15, month: 7, year: 1995, isValid: false, isLeapYear: false, error: 'Non-numeric date components' };
  }

  let year = 1995;
  let month = 7;
  let day = 15;

  if (p0 > 31) {
    // Format: YYYY-MM-DD
    year = p0;
    month = p1;
    day = p2;
  } else if (p2 > 31) {
    // Format: DD-MM-YYYY or MM-DD-YYYY (assume DD first)
    day = p0;
    month = p1;
    year = p2;
  } else {
    // Two-digit year or ambiguous format
    day = p0;
    month = p1;
    year = p2 < 100 ? (p2 > 30 ? 1900 + p2 : 2000 + p2) : p2;
  }

  const valid = isValidCalendarDate(day, month, year);
  const leap = isLeapYear(year);

  return {
    day,
    month,
    year,
    isValid: valid,
    isLeapYear: leap,
    error: valid ? undefined : 'Date is outside valid calendar bounds',
  };
}
