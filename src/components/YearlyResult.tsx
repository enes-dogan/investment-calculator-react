import React from 'react'

const YearlyResult = ({ year, totalSavings, interest }) => {



  return (
    <tr>
      <td>{year}</td>
      <td>{totalSavings}</td>
      <td>INTEREST GAINED IN YEAR</td>
      <td>{interest}</td>
      <td>TOTAL INVESTED CAPITAL</td>
    </tr>
  )
}

export default YearlyResult