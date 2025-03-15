import React, { useState } from 'react';
import './TipCalculator.css';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [noOfPeople, setNoOfPeople] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0);

  function handleChange(e, setState) {
    const value = parseInt(e.target.value);
    setState(value);
  }

  function handleTipCalculate() {
    if (billAmount === 0 || tipPercentage === 0 || noOfPeople === 0) return;
    setTotalAmount((billAmount * tipPercentage) / 100 + billAmount);
    setTipPerPerson((billAmount * tipPercentage) / (noOfPeople * 100));
    setTotalAmountPerPerson(
      (billAmount * tipPercentage + billAmount) / noOfPeople
    );
  }

  return (
    <main className="tip-calculator">
      <h1 className="tip-calculator__heading">Tip Calculator</h1>
      <section className="tip-calculator__section">
        <div className="tip-calculator__input-container">
          <label
            htmlFor="tip-calculator__bill-amount"
            className="tip-calculator__label"
          >
            Bill Amount:
          </label>
          <input
            type="number"
            id="tip-calculator__bill-amount"
            value={billAmount}
            onChange={(e) => handleChange(e, setBillAmount)}
            placeholder="Enter Bill Amount"
            className="tip-calculator__input"
            min={0}
          />
        </div>
        <div className="tip-calculator__input-container">
          <label
            htmlFor="tip-calculator__tip-percent"
            className="tip-calculator__label"
          >
            tip Percentage
          </label>
          <input
            type="number"
            id="tip-calculator__tip-percent"
            value={tipPercentage}
            onChange={(e) => handleChange(e, setTipPercentage)}
            placeholder="Tip Percent (%)"
            className="tip-calculator__input"
            min={0}
          />
        </div>
        <div className="tip-calculator__input-container">
          <label
            htmlFor="tip-calculator__total-people"
            className="tip-calculator__label"
          >
            Total People:
          </label>
          <input
            type="number"
            id="tip-calculator__total-people"
            value={noOfPeople}
            onChange={(e) => handleChange(e, setNoOfPeople)}
            placeholder="Enter no of people to split money"
            className="tip-calculator__input"
            min={0}
          />
        </div>
        <div className="tip-calculator__action">
          <button className="btn" onClick={handleTipCalculate}>
            Calculate Tip
          </button>
        </div>
      </section>
      <section className="tip-calculator__section">
        <p className="tip-calculator__output-value">
          <span>Total Amount:</span>
          {totalAmount.toFixed(2)}
        </p>
        <p className="tip-calculator__output-value">
          <span>Tip Per Person (%):</span> {tipPerPerson.toFixed(2)}
        </p>
        <p className="tip-calculator__output-value">
          <span>Total Amount Per Person:</span>
          {totalAmountPerPerson.toFixed(2)}
        </p>
      </section>
    </main>
  );
};

export default TipCalculator;
