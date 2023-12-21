import { calculateInvestmentResults, formatter } from "../../util/investment";

const InvestmentResult = ({ investmentData }) => {
  console.log(investmentData);
  const result = calculateInvestmentResults({
    initialInvestment: investmentData.initalInvestment,
    annualInvestment: investmentData.annualInvestment,
    expectedReturn: investmentData.expectedReturn,
    duration: investmentData.duration,
  });

  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id="result" className="center">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result ? (
          result.map((item, index) => {
            const totalInterest =
              item.valueEndOfYear -
              item.annualInvestment * item.year -
              initialInvestment;

            const totalAmountInvested = item.valueEndOfYear - totalInterest;
            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="3">No data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default InvestmentResult;
