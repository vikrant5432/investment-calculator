import Input from "../Input/Input";
const InputInvestment = ({ onInvestmentInput, investmentData }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <Input
            labelTitle={"INITAL INVESTMENT"}
            name={"initalInvestment"}
            value={investmentData.initalInvestment}
            onInvestmentInput={onInvestmentInput}
          />
        </p>
        <p>
          <Input
            labelTitle={"ANNUAL INVESTMENT"}
            name={"annualInvestment"}
            value={investmentData.annualInvestment}
            onInvestmentInput={onInvestmentInput}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <Input
            labelTitle={"EXPECTED RETURN"}
            name={"expectedReturn"}
            value={investmentData.expectedReturn}
            onInvestmentInput={onInvestmentInput}
          />
        </p>
        <p>
          <Input
            labelTitle={"DURATION"}
            name={"duration"}
            value={investmentData.duration}
            onInvestmentInput={onInvestmentInput}
          />
        </p>
      </div>
    </section>
  );
};

export default InputInvestment;
