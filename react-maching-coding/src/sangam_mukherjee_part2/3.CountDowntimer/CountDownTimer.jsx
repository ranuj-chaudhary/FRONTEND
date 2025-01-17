import React, { useEffect, useRef, useState } from "react";
import "./CountDownTimer.css";
const CountDownTimer = ({ initialTime, onApiCall }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const timerId = useRef();

  useEffect(() => {
    if (isRunning) {
      timerId.current = setInterval(() => {
        setTime((time) => {
          if (time === 0) {
            clearInterval(timerId.current);
            setIsRunning(false);
            onApiCall();
            return 0;
          } else {
            return time - 1;
          }
        });
      }, 1000);
    }
    return () => {
      clearInterval(timerId.current);
    };
  }, [isRunning, onApiCall]);

  function handleReset() {
    setTime(initialTime);
    setIsRunning(false);
  }
  function handlePause() {
    clearInterval(timerId.current);
    setIsRunning(false);
  }
  function handleStart() {
    setTime(time);
    setIsRunning(true);
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <div className="countdown-timer">
      <div className="countdown-timer__time">
        <span>{minutes.toString().padStart(2, "0")}:</span>
        <span>{seconds.toString().padStart(2, "0")}</span>
      </div>
      <div className="countdown-timer__actions">
        <button className="countdown-timer__btn" onClick={handleReset}>
          Reset
        </button>
        <button className="countdown-timer__btn" onClick={handlePause}>
          Pause
        </button>
        <button className="countdown-timer__btn" onClick={handleStart}>
          Start
        </button>
      </div>
    </div>
  );
};

export default CountDownTimer;
