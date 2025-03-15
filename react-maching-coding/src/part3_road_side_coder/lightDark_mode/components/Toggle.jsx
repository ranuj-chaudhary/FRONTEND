import React from "react";
import { useTheme } from "../context/useTheme";
import "./Toggle.css";
const Toggle = () => {
  const { theme, setIsDark } = useTheme();
  
  return (
    <div className="toggle">
      <label htmlFor="toggle__theme">
        <input
          id="toggle__theme"
          className="toggle__input"
          type="checkbox"
          onChange={() => setIsDark((dark) => !dark)}
          checked={theme === "dark"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Toggle;
