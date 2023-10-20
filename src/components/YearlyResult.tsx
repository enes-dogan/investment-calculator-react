import { YearlyResultProps } from '../types';


const YearlyResult = ({ investment }: YearlyResultProps) => {
  return (
    <tr>
      <td>{investment.year}</td>
      <td>{investment.savingsEndOfYear}</td>
      <td>{investment.yearlyInterest}</td>
      <td>{0}</td>
      <td>{investment.yearlyContribution}</td>
    </tr>
  );
};

export default YearlyResult;
