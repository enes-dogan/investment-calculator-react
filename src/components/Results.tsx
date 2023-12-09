import { ResultsProps } from '../types';
import { formatter } from '../util/investment';

export default function Results({ result }: ResultsProps) {
  return (
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
      {result.map(yearlyInvestment => (
        <tbody>
          <tr>
            <td>{yearlyInvestment.year}</td>
            <td>{formatter.format(yearlyInvestment.valueEndOfYear)}</td>
            <td>{formatter.format(yearlyInvestment.interest)}</td>
            <td>{formatter.format(yearlyInvestment.totalInterest)}</td>
            <td>{formatter.format(yearlyInvestment.annualInvestment)}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
