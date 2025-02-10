import React, { useState } from 'react';
import './Accordion.css';
const accordions = [
  { title: 'What are accordion components?', data: 'accordion 1' },
  { title: 'What are they used for?', data: 'accordion 2' },
  { title: 'Question 3?', data: 'accordion 3' },
  { title: 'Question 4?', data: 'accordion 4' },
];

const Accordion = () => {
  const [currentSelected, setCurrentSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(true);
  const [multiple, setMultiple] = useState([]);

  function handleCurrentSelected(index) {
    setCurrentSelected(index);
  }

  function handleMultiSelect(index) {
    const findIndexOfAccordion = multiple.indexOf(index);
    let updateArray = [...multiple];

    if (findIndexOfAccordion !== -1) {
      updateArray.splice(findIndexOfAccordion, 1);
    } else {
      updateArray = [...multiple, index];
    }
    setMultiple(updateArray);
  }

  function handleEnableMultiSelect() {
    setEnableMultiSelect(!enableMultiSelect);
    setCurrentSelected(null);
  }

  return (
    <div className="accordion">
      {accordions.map((content, index) => {
        return (
          <div key={index} className="accordion_container">
            <div className="accordion__title">
              <p>{content.title}</p>
              <button
                onClick={
                  enableMultiSelect
                    ? () => handleCurrentSelected(index)
                    : () => handleMultiSelect(index)
                }
              >
                {(
                  enableMultiSelect
                    ? currentSelected === index
                    : multiple.indexOf(index) !== -1
                )
                  ? '-'
                  : '+'}
              </button>
            </div>
            {currentSelected === index && <p>{content.data}</p>}
            {multiple.indexOf(index) !== -1 && <p>{content.data}</p>}
          </div>
        );
      })}
      <button onClick={handleEnableMultiSelect}>
        {enableMultiSelect ? 'MultiSelect Enabled' : 'Enable MultiSelect'}
      </button>
    </div>
  );
};

export default Accordion;
