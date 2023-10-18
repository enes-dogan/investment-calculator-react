import InvestmentForm from "./components/InvestmentForm";
import MainHeader from "./components/MainHeader";
import ResultsTable from "./components/ResultsTable";

import { UserInput } from './types';

const dummyUserInput = {
  'current-savings': '1000',
  'yearly-contribution': '1000',
  'expected-return': '5',
  duration: '10',
};


function App() {
  const calculateHandler = (userInput: UserInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...

    // currency formatter
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    // use like this:
    const output = formatter.format(currentSavings);
    console.log(output); // $1,000.00
  };

  calculateHandler(dummyUserInput);

  return (
    <>
      <MainHeader />
      <InvestmentForm />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {false ? <p style={{ textAlign: 'center' }}>No investment calculated yet.</p> : <ResultsTable />}
    </>
  );
}

export default App;
