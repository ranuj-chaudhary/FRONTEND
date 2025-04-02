import React from 'react';

const Cell = ({ isFilled, isDisabled, onClick }) => {
  return (
    <button
      className={`border-2 border-black ${
        isFilled ? 'bg-green-400' : 'bg-gray-400'
      }`}
      onClick={onClick}
      disabled={isDisabled}
    />
  );
};

export default Cell;
