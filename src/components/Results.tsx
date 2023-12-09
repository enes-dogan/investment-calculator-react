import { ResultsProps } from '../types';
import { formatter } from '../util/investment';

export default function Results({ result }: ResultsProps) {
  const formatInvestmentValue = formatter.format(result.valueEndOfYear);
  const formatInterest = formatter.format(result.interest);
  const formatCapital = formatter.format(result.annualInvestment);
  const formatTotal = formatter.format(result.totalInterest);

  return (
    <tbody>
      <tr>
        <td>{result.year}</td>
        <td>{formatInvestmentValue}</td>
        <td>{formatInterest}</td>
        <td>{formatTotal}</td>
        <td>{formatCapital}</td>
      </tr>
    </tbody>
  );
}
