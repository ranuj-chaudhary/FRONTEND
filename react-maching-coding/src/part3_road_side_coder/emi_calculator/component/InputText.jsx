import React from "react";
import "./InputText.css";

const InputText = ({ title, state, onChange }) => {
  const id = title.replace(" ", "-").toLowerCase();

  return (
    <React.Fragment>
      <label htmlFor={id} className="input-text__label">
        {title}
      </label>
      <input
        type="number"
        className="input-text__input"
        placeholder={title}
        name={title}
        id={id}
        value={state}
        onChange={onChange}
        required
      />
    </React.Fragment>
  );
};

export default InputText;
