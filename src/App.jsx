import { useState } from "react";
import Header from "./Component/Header/Header";
import InputInvestment from "./Component/Input-investment/InputInvestment";
import InvestmentResult from "./Component/Investment-result/InvestmentResult";

const payloadInput = {
  initalInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 1200,
  duration: 6,
};

function App() {
  const [investmentData, setInvestmentData] = useState(payloadInput);

  const inputIsValidDuration = investmentData.duration > 0;

  const handleInvestmentInput = (event) => {
    const { name, value } = event.target;
    setInvestmentData((prevInvestmentData) => {
      return { ...prevInvestmentData, [name]: +value };
    });
  };
  return (
    <>
      <Header />
      <InputInvestment
        onInvestmentInput={handleInvestmentInput}
        investmentData={investmentData}
      />
      {!inputIsValidDuration && (
        <p className="center">Duration must be greater than 0</p>
      )}
      {inputIsValidDuration && (
        <InvestmentResult investmentData={investmentData} />
      )}
    </>
  );
}

export default App;
