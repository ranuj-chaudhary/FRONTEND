import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  function incrementCounter() {
    setCount((count) => count + 1);
  }

  function incrementCounter2() {
    setCount2((count2) => count2 + 1);
  }

  function calculate() {
    console.log('running');

    let sum = count * count;
    for (let i = 0; i < 10000; i++) {
      // Adjusted the range
      sum += i;
    }

    return sum;
  }

  return (
    <div className="counter">
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
      <p>Big Calculation: {calculate()}</p>
      <p>{isCalculating ? 'calculating...' : 'old value'}</p>
      <button
        onClick={incrementCounter}
        className="mr-2 p-2  bg-blue-500 text-white"
      >
        increment
      </button>
      <button
        onClick={incrementCounter2}
        className="mr-2 p-2  bg-blue-500 text-white"
      >
        incrementCounter2
      </button>
    </div>
  );
};

export default Counter;
