import React, { useEffect, useRef, useState } from 'react';
import CountDownInput from './CountDownInput';
import Button from './Button';
import UseOnclickOutsideTest from './../../../part4_custom-hooks-interview/use-outside-click/test';
const style = {};

const CountdownTimer = () => {
  const [startToggle, setStartToggle] = useState(false);
  const [pauseToggle, setPauseToggle] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  //   let [timerId, setTimerId] = useState(null);
  let timerId = useRef(null);
  function runTimer(hours, minutes, seconds, timerId) {
    if (hours > 0 && minutes === 0) {
      setHours((hours) => hours - 1);
      setMinutes(59);
    } else if (minutes > 0 && seconds === 0) {
      setMinutes((minutes) => minutes - 1);
      setSeconds(59);
    } else if (hours === 0 && minutes === 0 && seconds === 0) {
      resetTimer();
      clearInterval(timerId);
    } else {
      setSeconds((seconds) => seconds - 1);
    }
  }
  function handlePause() {
    setPauseToggle(true);
    clearInterval(timerId.current);
  }

  function handleReset() {
    setStartToggle(false);
    setPauseToggle(false);
    resetTimer();
  }

  function handleContinue() {
    setPauseToggle(false);
    runTimer(hours, minutes, seconds, timerId);
  }

  function resetTimer() {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId.current);
  }

  function handleStart() {
    if (hours > 0 || minutes > 0 || seconds > 0) {
      setStartToggle(true);
    } else {
      alert('Enter time is invalid');
    }
  }
  function handleInput(e) {
    const id = e.target.id;
    if (id === 'hours') {
      setHours(parseInt(e.target.value));
    } else if (id === 'minutes') {
      setMinutes(parseInt(e.target.value));
    } else {
      setSeconds(parseInt(e.target.value));
    }
  }
  useEffect(() => {
    // let tid;
    if (startToggle) {
      timerId.current = setInterval(() => {
        runTimer(hours, minutes, seconds, timerId.current);
      }, 1000);
    //   setTimerId(timerId.current);
    }
    return () => {
      clearInterval(timerId.current);
    };
  }, [startToggle, hours, minutes, seconds]);

  return (
    <div className="countdown-timer flex justify-center items-center h-full ">
      <div className="countdown-timer__container border-2 border-black p-4 w-[40%]">
        <h1 className="text-3xl text-center">Countdown Timer</h1>
        <CountDownInput
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          handleInput={handleInput}
          startToggle={startToggle}
        />
        <div className="countdown-timer__actions flex justify-center gap-4">
          {!startToggle ? (
            <Button title={'Start'} type={'start'} onClick={handleStart} />
          ) : !pauseToggle ? (
            <Button title={'Pause'} type={'pause'} onClick={handlePause} />
          ) : (
            <Button
              title={'Continue'}
              type={'continue'}
              onClick={handleContinue}
            />
          )}
          <Button
            title={'Reset'}
            type={'reset'}
            onClick={() => handleReset()}
          />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
