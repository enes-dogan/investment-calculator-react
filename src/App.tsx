import { useState } from 'react';

import InvestmentForm from './components/InvestmentForm';
import MainHeader from './components/MainHeader';
import ResultsTable from './components/ResultsTable';

import { InvestmentData } from './types';

const initialState = {
  currentSavings: '10000',
  yearlySavings: '1200',
  expectedInterest: '7',
  investmentDuration: '10',
};

function App() {
  const [investmentValues, setInvestmentValues] = useState(initialState);
  const [yearlyData, setYearlyData] = useState<InvestmentData[]>([]);

  function investmentValueChangeHandler(idf: string, value: string) {
    switch (idf) {
      case 'current-savings':
        setInvestmentValues(prevInputs => {
          return { ...prevInputs, currentSavings: value };
        });
        break;
      case 'yearly-contribution':
        setInvestmentValues(prevInputs => {
          return { ...prevInputs, yearlySavings: value };
        });
        break;
      case 'expected-return':
        setInvestmentValues(prevInputs => {
          return { ...prevInputs, expectedInterest: value };
        });
        break;
      case 'duration':
        setInvestmentValues(prevInputs => {
          return { ...prevInputs, investmentDuration: value };
        });
        break;
      default:
        break;
    }
  }

  const calculateHandler = () => {
    let currentSavings = +investmentValues.currentSavings;
    const yearlyContribution = +investmentValues.yearlySavings;
    const expectedReturn = +investmentValues.expectedInterest / 100;
    const duration = +investmentValues.investmentDuration;

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const newYearlyData: InvestmentData[] = [];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      newYearlyData.push({
        year: i + 1,
        yearlyInterest: formatter.format(yearlyInterest),
        savingsEndOfYear: formatter.format(currentSavings),
        yearlyContribution: formatter.format(+investmentValues.currentSavings + yearlyContribution),
      });
    }
    setYearlyData(newYearlyData);
  };

  return (
    <>
      <MainHeader />
      <InvestmentForm
        userInputs={investmentValues}
        onInputChange={investmentValueChangeHandler}
        onCalculate={calculateHandler}
        onFormReset={() => setInvestmentValues(initialState)}
      />
      {yearlyData.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No investment calculated yet.</p>
      ) : (
        <ResultsTable investmentsByYear={yearlyData} />
      )}
    </>
  );
}

export default App;
