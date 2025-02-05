import React, { useEffect, useRef, useState } from "react";
import "./RandomQuoteGenerator.css";
const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const cachedQuotes = useRef([]);
  async function fetchQuotes() {
    try {
      const res = await fetch("https://dummyjson.com/quotes", {
        method: "GET",
      });
      if (!res.ok) {
        throw new Error("Problem fetching quotes..");
      }
      const data = await res.json();
      if (data && data.quotes.length > 0) {
        const quotes = data.quotes.map((quotes) => quotes.quote);
        const length = quotes.length;
        const randomIndex = Math.floor(length * Math.random());
        setQuote(quotes[randomIndex]);
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  }

  return (
    <div className="random-quotes">
      {isLoading ? <p>Lading Quotes...</p> : <blockquote>{quote} </blockquote>}
      <button className="random-quotes__btn" onClick={fetchQuotes}>
        Generate Quote
      </button>
    </div>
  );
};

export default RandomQuoteGenerator;
