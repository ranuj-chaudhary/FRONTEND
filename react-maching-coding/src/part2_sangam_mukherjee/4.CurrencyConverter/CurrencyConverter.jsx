import React, { useEffect, useState } from 'react';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amountToConvert, setAmountToConvert] = useState(1);
  const [amountConverted, setAmountConverted] = useState(1);
  const [convertionRate, setConvertionRate] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setError] = useState('');

  useEffect(() => {
    async function fetchConvertionRate() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://open.er-api.com/v6/latest/${fromCurrency}`,
          {
            method: 'GET',
          }
        );
        if (!res.ok) {
          throw new Error('Problem Converting Currency. Try Again.');
        }
        const data = await res.json();

        const rate = data?.rates[toCurrency];

        if (!rate) {
          throw new Error('Problem Converting Currency. Try Again.');
        } else {
          setConvertionRate(rate);
          setAmountConverted((amountToConvert * rate).toFixed(2));
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchConvertionRate();
  }, [fromCurrency, toCurrency, amountToConvert]);

  if (isLoading) {
    return (
      <div className="currency__loading">
        <p>Converting Currency...</p>
      </div>
    );
  }

  if (errorMessage.length > 0) {
    return (
      <div className="currency__loading">
        {' '}
        <p>{errorMessage}</p>
      </div>
    );
  }

  return (
    <main className="currency" role='main'>
      <h1 className="currency__heading">Currency Converter</h1>
      <section className="currency__input-container">
        <label htmlFor="currency__amount" className="currency__label">
          FROM:
          <input
            type="number"
            id="currency__amount"
            className="currency__input"
             aria-label="Amount to Convert"
            onChange={(e) => setAmountToConvert(e.target.value)}
            value={amountToConvert}
            min={1}
          />
        </label>
        <select
          name="number"
          className="currency__select"
          onChange={(e) => setFromCurrency(e.target.value)}
          value={fromCurrency}
        >
          <option value="">Select Currency</option>
          <option value="INR">"INR"</option>
          <option value="USD">"USD"</option>
          <option value="AED">"UGX"</option>
          <option value="JPY">"VUV"</option>
        </select>
      </section>
      <div className="currency__input-container">
        <label htmlFor="currency__amount-converted" className="currency__label">
          TO:
          <input
            type="text"
            id="currency__amount-converted"
            className="currency__input"
            onChange={(e) => setAmountConverted(e.target.value)}
            value={amountConverted}
            readOnly
            min={0}
          />
        </label>
        <select
          name="number"
          className="currency__select"
          onChange={(e) => setToCurrency(e.target.value)}
          value={toCurrency}
        >
          <option value="">Select Currency</option>
          <option value="INR">"INR"</option>
          <option value="USD">"USD"</option>
          <option value="AED">"UGX"</option>
          <option value="JPY">"VUV"</option>
        </select>
      </div>
    </main>
  );
};

export default CurrencyConverter;
