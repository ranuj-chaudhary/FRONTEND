import React from 'react';

const Button = ({ type, title, onClick }) => {
  if (type === 'small') {
    return (
      <button onClick={onClick} className="btn btn--sm">
        {title}
      </button>
    );
  } else if (type === 'medium') {
    return (
      <button onClick={onClick} className="btn btn--md">
        {title}
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className="w-full bg-green-700 py-2 cursor-pointer hover:bg-green-800/80 transition-all duration-300 active:scale-95"
      >
        {title}
      </button>
    );
  }
};

export default Button;
