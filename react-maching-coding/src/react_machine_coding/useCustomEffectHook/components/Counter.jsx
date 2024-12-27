import React, { useState } from "react";
import "./Counter.css";
import useCustomEffect from "../hooks/useCustomEffect";

const Counter = () => {
  const [count, setCount] = useState(0);

  useCustomEffect(() => {
    console.log("Effect triggered");

    return () => {
      console.log("cleanup successfull");
    };
  },[]);

  function handleIncrement() {
    setCount((count) => count + 1);
  }
  function handleDecrement() {
    setCount((count) => count - 1);
  }

  return (
    <div className="counter">
      <p className="couter__text">{count}</p>
      <button className="btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="btn" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
