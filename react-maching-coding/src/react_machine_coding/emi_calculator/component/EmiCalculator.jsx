import React, { useCallback, useEffect, useState } from "react";
import "./EmiCalculator.css";
import InputText from "./InputText";
import InputRange from "./InputRange";
import Tenures from "./Tenures";

import { convertToCurrency } from "../utils/helpers";
const tenureData = [
  {
    id: "aa19ba12-1a98-4d14-a4ef-3cd72efa1e18",
    value: 12,
  },
  {
    id: "5a648924-a7e8-4608-a8c8-281393554796",
    value: 24,
  },
  {
    id: "4026d9a8-dc41-4c56-8a92-437b8db6837b",
    value: 36,
  },
  {
    id: "cc51cb38-6602-4d65-8187-ffcac56cf60a",
    value: 72,
  },
];

const EmiCalculator = () => {
  const [totalPrice, setTotalPrice] = useState(100000);
  const [loanEmi, setLoanEmi] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [interestRate, setInteresetRate] = useState(10);
  const [processingFee, setProcessingFee] = useState(2);

  const calculateEMI = (downPayment) => {
    if (!totalPrice) return;

    const loanAmount = Number(totalPrice) - Number(downPayment);
    const rateOfInterest = Number(interestRate) / 100;
    const noOfYears = Number(tenure / 12);

    const totalEmi =
      (loanAmount * rateOfInterest * (1 + rateOfInterest) ** noOfYears) /
      ((1 + rateOfInterest) ** noOfYears - 1);

    return Number(totalEmi / 12).toFixed(0);
  };

  useEffect(() => {
    if (!(totalPrice > 0)) {
      setDownPayment(0);
      setLoanEmi(0);
    }

    const emi = calculateEMI(Number(downPayment)) || 0;
    setLoanEmi(emi);
  }, [totalPrice, tenure]);

  function handleTenure(value) {
    setTenure(value);
  }

  function totalDownPayment() {
    let totalDownPayment =
      Number(downPayment) +
      (totalPrice - Number(downPayment)) * (processingFee / 100);
    return convertToCurrency("INR", Math.floor(totalDownPayment));
  }

  function totalLoanAmount() {
    const totalLoanAmount = Number(calculateEMI(downPayment)) * Number(tenure);
    return Number(totalLoanAmount).toFixed(0);
  }

  function updateDownPayment(e) {
    if (!totalPrice) return;
    const emi = Number(e.target.value);
    setLoanEmi(emi);

    const downPaymentPercent = Math.floor(100 - (emi / calculateEMI(0)) * 100);
    const calcDownPayment = (totalPrice * downPaymentPercent) / 100;
    setDownPayment(calcDownPayment);
  }

  function updateLoanEmi(e) {
    const value = Number(e.target.value).toFixed(0);
    setDownPayment(value);

    // calculate emi;
    const emi = calculateEMI(value);
    setLoanEmi(emi);
  }

  return (
    <div className="emi-calculator">
      <div className="emi-calculator__container">
        <h1 className="emi-calculator__heading">EMI Calculator</h1>

        <InputText
          title={"Total Price"}
          state={totalPrice}
          onChange={(e) => {
            setTotalPrice(e.target.value);
          }}
        />

        <InputText
          title={"Interset Rate (in %)"}
          state={interestRate}
          onChange={(e) => setInteresetRate(e.target.value)}
        />

        <InputText
          title={"Processing Fee (in %)"}
          state={processingFee}
          onChange={(e) => setProcessingFee(e.target.value)}
        />

        <InputRange
          title={"Down Payment"}
          subTitle={`Total Down Payment ${totalDownPayment()}`}
          labelMin="0%"
          labelMax="100%"
          min={0}
          max={totalPrice}
          state={downPayment}
          onChange={updateLoanEmi}
        />

        <InputRange
          title={`Loan Per Month`}
          subTitle={`Total Loan Amount: ${totalLoanAmount()} `}
          min={calculateEMI(totalPrice)}
          max={calculateEMI(0)}
          state={Number(loanEmi).toFixed(0)}
          onChange={updateDownPayment}
        />

        <Tenures
          tenures={tenureData}
          title={"Tenure"}
          tenure={tenure}
          handleTenure={handleTenure}
        />
      </div>
    </div>
  );
};

export default EmiCalculator;
