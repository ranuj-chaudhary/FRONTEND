import React, { useEffect, useState } from "react";
import "./DigitalClock.css";
import useTime from "./useTime";
const DigitalClock = () => {
  const [hour, minutes, seconds] = useTime();
  return (
    <div className="digital-clock">
      <span className="digital-clock-time">{hour}H:</span>
      <span className="digital-clock-time">{minutes}M:</span>
      <span className="digital-clock-time">{seconds}S</span>
    </div>
  );
};

export default DigitalClock;
