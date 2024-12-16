import React from "react";
import "./InputRange.css";
import { convertToCurrency } from "../utils/helpers";
const InputRange = ({
  title,
  subTitle,
  min,
  max,
  state,
  onChange,
  labelMin,
  labelMax,
}) => {
  const id = title.replace(" ", "-").toLowerCase();

  return (
    <>
      <label htmlFor={id} className="input-range__label">
        {title}
      </label>
      {state > 0 ? <p className="input-range__sub-title">{subTitle}</p> : null}
      <input
        type="range"
        className="input-range__input"
        placeholder={title}
        name={title}
        id={id}
        required
        value={state}
        onChange={onChange}
        min={min}
        max={max}
      />
      {state > 0 && (
        <div className="input-range__values">
          <span>{labelMin ?? convertToCurrency("INR", min)}</span>
          <span>{convertToCurrency("INR", state)}</span>
          <span>{labelMax ?? convertToCurrency("INR", max)}</span>
        </div>
      )}
    </>
  );
};

export default InputRange;
