const Input = ({ labelTitle, onInvestmentInput, value, name }) => {
  return (
    <>
      <label htmlFor="">{labelTitle}</label>
      <input
        type="number"
        required
        name={name}
        value={value}
        onChange={onInvestmentInput}
      />
    </>
  );
};

export default Input;
