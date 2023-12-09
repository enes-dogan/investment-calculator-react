export interface UserInputsType {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

type InvestmentResult = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  totalInterest: number;
  annualInvestment: number;
};

export type annualDataArrayTypes = InvestmentResult;
[];

export interface UserInputProps {
  inputs: UserInputsType;
  onUpdate: (updatedInputs: string, value: number) => void;
}

export interface ResultsProps {
  result: annualDataArrayTypes;
}
