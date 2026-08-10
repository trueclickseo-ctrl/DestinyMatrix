export interface CalculatorInput {
  name?: string;
  birthDate?: string;
  [key: string]: any;
}

export interface CalculatorResult {
  id: string;
  title: string;
  rawInput: CalculatorInput;
  primaryValue: string | number;
  secondaryValues?: Record<string, string | number>;
  calculatedAt: string;
}

export interface CalculatorDefinition {
  id: string;
  pillar: string;
  title: string;
  description: string;
  calculate: (input: CalculatorInput) => CalculatorResult;
}
