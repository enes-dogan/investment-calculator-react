export interface UserInputsType {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface UserInputProps {
  userInputs: UserInputsType;
  onUpdate: (updatedInputs: string, value: string) => void;
}

export interface ResultsProps {
  result: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    totalInterest: number;
    annualInvestment: number;
  }[];
}
