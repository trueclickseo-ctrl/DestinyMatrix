import { parseDate } from '../core/date-parser';

export interface MatrixValidationResult {
  isValid: boolean;
  message?: string;
}

export function validateDestinyMatrixInput(dateStr: string): MatrixValidationResult {
  if (!dateStr || dateStr.trim() === '') {
    return { isValid: false, message: 'Please enter your date of birth.' };
  }

  const parsed = parseDate(dateStr);
  if (!parsed.isValid) {
    return { isValid: false, message: parsed.error || 'Please enter a valid calendar date.' };
  }

  return { isValid: true };
}
