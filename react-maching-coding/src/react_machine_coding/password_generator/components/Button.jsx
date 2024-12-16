import React from "react";
import "./Button.css"
const Button = ({ title, type, onClick }) => {
  if (type === "small") {
    return (
      <button onClick={onClick} className="btn btn--sm">
        {title}
      </button>
    );
  } else if (type === "medium") {
    return (
      <button onClick={onClick} className="btn btn--md">
        {title}
      </button>
    );
  } else {
    return (
      <button onClick={onClick} className="btn btn--lg">
        {title}
      </button>
    );
  }
};

export default Button;
