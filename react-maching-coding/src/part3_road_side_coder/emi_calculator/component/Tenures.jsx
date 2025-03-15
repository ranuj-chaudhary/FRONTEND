import React, { useEffect, useState } from "react";
import "./Tenures.css";
const Tenures = ({ title, tenures, handleTenure, tenure }) => {
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    setSelectedId(tenure);
  }, []);

  function handleSelected(month) {
    const { id, value } = month;
    handleTenure(value);
    setSelectedId(value);
  }

  return (
    <>
      <div className="list">
        <p className="list__title">{title}</p>
        <ul className="list__items">
          {tenures &&
            tenures.length > 0 &&
            tenures.map((month) => (
              <li
                key={month.id}
                className={`list__item ${
                  selectedId === month.value ? "list__item--selected" : null
                }`}
                onClick={() => handleSelected(month)}
              >
                {month.value}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Tenures;
