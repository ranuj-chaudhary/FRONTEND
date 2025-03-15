import React from 'react';
import './ProgressBar.css';
const ProgressBar = ({ progressPercent }) => {
  return (
    <div className="progress-wrapper">
      <div
        className={`progress ${
          progressPercent === 100 ? 'upload__progress' : ''
        }`}
        style={{ width: `${progressPercent}%` }}
      ></div>
      <span className="progress__percent">{progressPercent}%</span>
    </div>
  );
};

export default ProgressBar;
