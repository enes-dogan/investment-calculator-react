import { useState } from 'react';
import { calculateInvestmentResults } from './util/investment';

import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

const initialInputs = {
  initialInvestment: 10_000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function App() {
  const [userInputs, setUserInputs] = useState(initialInputs);

  function updateUserInputs(updatedInput: string, newValue: string) {
    let updatedValue = parseInt(newValue);
    if (updatedValue < 0 || isNaN(updatedValue)) {
      updatedValue = 0;
    }
    setUserInputs(prevInputs => ({
      ...prevInputs,
      [updatedInput]: updatedValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInputs={userInputs} onUpdate={updateUserInputs} />
      <Results result={calculateInvestmentResults(userInputs)} />
    </>
  );
}
