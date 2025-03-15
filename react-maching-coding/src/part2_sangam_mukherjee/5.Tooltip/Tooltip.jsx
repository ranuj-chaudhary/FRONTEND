import React, { useRef, useState } from "react";
import "./Tooltip.css";
const Tooltip = ({ children, content, delay = 500 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const timerId = useRef();

  function handleShowToolTip() {
    timerId.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  }

  function handleHideToolTip() {
    setIsVisible(false);
    clearTimeout(timerId.current);
  }

  return (
    <div
      className="tooltip"
      onMouseEnter={handleShowToolTip}
      onMouseLeave={handleHideToolTip}
    >
      {children}
      {isVisible ? (
        <div className="tooltip__box">
          <p>{content}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Tooltip;
