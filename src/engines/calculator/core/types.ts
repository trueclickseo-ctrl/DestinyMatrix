export type MethodologyStatus =
  | 'UNVERIFIED'
  | 'RESEARCHING'
  | 'FORMULA_DEFINED'
  | 'TESTING'
  | 'VERIFIED_WITH_METHODOLOGY_NOTE'
  | 'REQUIRES_HUMAN_REVIEW'
  | 'DO_NOT_PUBLISH';

export interface MethodologyRecord {
  calculatorId: string;
  name: string;
  system: string;
  methodologyVersion: string;
  status: MethodologyStatus;
  reductionRule: string;
  masterNumberPolicy: string;
  edgeCasePolicy: string;
  disclosures: string[];
  sources: string[];
}

export interface ReductionResult {
  raw: number;
  intermediateSteps: number[];
  final: number;
  isMasterNumber: boolean;
}

export interface CalculationBreakdownStep {
  label: string;
  operation: string;
  result: number | string;
  note?: string;
}

export interface ParsedDate {
  day: number;
  month: number;
  year: number;
  isValid: boolean;
  isLeapYear: boolean;
  error?: string;
}
