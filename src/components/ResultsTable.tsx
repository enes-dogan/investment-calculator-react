import { useState } from 'react';

import YearlyResult from './YearlyResult';

import styles from './ResultsTable.module.css';

const ResultsTable = ({ results }) => {
  const [endResult, setEndResult] = useState();

  console.log(results)


    // currency formatter
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    // use like this:
    const output = formatter.format(value);
    console.log(output);

  // currencyFormatter(5000);

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map(
          singleResult => (
            <YearlyResult
            key={singleResult.year}
            year={singleResult.year}
            totalSavings={singleResult.savingsEndOfYear}
            interest={singleResult.yearlyInterest}
             />
          )
        )}
      </tbody>
    </table>
  );
};

export default ResultsTable;
