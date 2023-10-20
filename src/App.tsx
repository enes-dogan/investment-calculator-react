import { useState } from 'react';

import InvestmentForm from './components/InvestmentForm';
import MainHeader from './components/MainHeader';
import ResultsTable from './components/ResultsTable';

const INITIAL_STATE = [
  {
    currentSavings: '10000',
    yearlyContribution: '1200',
    expectedReturn: '7',
    duration: '10',
  },
];

function App() {
  const [userInput, setUserInput] = useState(INITIAL_STATE);

  function inputChangeHandler(identifier: string, value: string) {
    setUserInput(prevUserInput => {
      return prevUserInput.map(input => {
        switch (identifier) {
          case 'current-savings':
            return { ...input, currentSavings: value };
          case 'yearly-contribution':
            return { ...input, yearlyContribution: value };
          case 'expected-return':
            return { ...input, expectedReturn: value };
          case 'duration':
            return { ...input, duration: value };
          default:
            return;
        }
      });
    });
  }

  const [investmentData, setInvestmentData] = useState([]);

  const calculateHandler = () => {
    const yearlyData = [];

    let currentSavings = parseInt(userInput[0].currentSavings);
    const yearlyContribution = parseInt(userInput[0].yearlyContribution);
    const expectedReturn = parseInt(userInput[0].expectedReturn) / 100;
    const duration = parseInt(userInput[0].duration);

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setInvestmentData(yearlyData);
  };

  function InvestmentFormHandler() {
    calculateHandler();
  }

  return (
    <>
      <MainHeader />
      <InvestmentForm
        inputFields={userInput}
        onInvestmentSubmit={InvestmentFormHandler}
        onUserInput={inputChangeHandler}
        onReset={() => setUserInput(INITIAL_STATE)}
      />
      {investmentData.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No investment calculated yet.</p>
      ) : (
        <ResultsTable results={investmentData} />
      )}
    </>
  );
}

export default App;
