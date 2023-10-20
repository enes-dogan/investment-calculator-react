import YearlyResult from './YearlyResult';

import { ResultsTableProps } from '../types';

import styles from './ResultsTable.module.css';

const ResultsTable = ({ investmentsByYear }: ResultsTableProps) => {

  console.log(investmentsByYear);

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
        {investmentsByYear.map((singleYear) => (
          <YearlyResult key={singleYear.year} investment={singleYear} />
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
