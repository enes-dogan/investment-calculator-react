import { useState } from 'react';

import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

import { calculateInvestmentResults } from './util/investment';

const initialInputs = {
  initialInvestment: 10_000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function App() {
  const [userInputs, setUserInputs] = useState(initialInputs);

  function updateUserInputs(updatedInput: string, newValue: number) {
    let updatedValue = newValue;
    if (newValue < 0 || isNaN(newValue)) {
      updatedValue = 0;
    }
    setUserInputs(prevInputs => ({
      ...prevInputs,
      [updatedInput]: updatedValue,
    }));
  }

  const annualData = calculateInvestmentResults({ ...userInputs });

  return (
    <>
      <Header />
      <UserInput inputs={userInputs} onUpdate={updateUserInputs} />
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        {annualData.map(yearlyInvestment => {
          return (
            <Results key={yearlyInvestment.year} result={yearlyInvestment} />
          );
        })}
      </table>
    </>
  );
}
