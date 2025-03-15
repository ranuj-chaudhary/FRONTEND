import React, { useEffect, useState } from "react";
import Progress from "../utils/constants";
import "./ProgressBar.css";

const ProgreessBar = ({ value = 0, onComplete }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    if (percent === Progress.MAX_PERCENT) {
      onComplete();
    }
    setPercent(
      Math.min(Progress.MAX_PERCENT, Math.max(Progress.MIN_PERCENT, value))
    );
  }, [value]);

  return (
    <div className="progress">
      <span style={{color: `${percent > 50 ? "white" : ''}`}}>{percent}%</span>
      <div
        style={{
          transform: `scaleX(${percent / Progress.MAX_PERCENT})`,
          transformOrigin: "left",
        }}
        role="progressbar"
        aria-valuemin={Progress.MIN_PERCENT}
        aria-valuemax={Progress.MAX_PERCENT}
        aria-valuenow={percent}
        className="progress-bar"
      ></div>
    </div>
  );
};

export default ProgreessBar;
