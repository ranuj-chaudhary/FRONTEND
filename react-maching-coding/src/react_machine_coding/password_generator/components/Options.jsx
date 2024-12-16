import React from "react";
import "./Options.css";
const Options = ({ items, onOptionChange }) => {
  return (
    <div className="options">
      {items &&
        items.map((item) => {
          return (
            <Item key={item.id} item={item} onOptionChange={onOptionChange} />
          );
        })}
    </div>
  );
};

function Item({ item, onOptionChange }) {
  const { type, id, value } = item;

  return (
    <div className="options__items">
      <input type="checkbox" onClick={() => onOptionChange(id)} value={value} />
      <span>{type}</span>
    </div>
  );
}

export default Options;
