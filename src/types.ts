export interface UserInput {
  currentSavings: string;
  yearlySavings: string;
  expectedInterest: string;
  investmentDuration: string;
}

export interface InvestmentFormProps {
  userInputs: UserInput;
  onInputChange: (idf: string, value: string) => void;
  onFormReset: () => void;
  onCalculate: () => void;
}

export interface InvestmentData {
  year: number;
  yearlyInterest: string;
  savingsEndOfYear: string;
  yearlyContribution: string;
}

export interface ResultsTableProps {
  investmentsByYear: InvestmentData[];
}

export interface YearlyResultProps {
  investment: InvestmentData;
}
