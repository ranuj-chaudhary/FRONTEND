import { tab } from '@testing-library/user-event/dist/tab';
import React, { useState } from 'react';

const CustomTabs = ({ tabContents, onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  function handleCurrentIndex(currIdx) {
    setCurrentIndex(currIdx);
    onChange(currIdx);
  }
  return (
    <div className="wrapper">
      <div className="wrapper__headings flex gap-4">
        {tabContents &&
          tabContents.length > 0 &&
          tabContents.map((tab, idx) => (
            <li
              key={tab + idx}
              className={`list-none cursor-pointer bg-blue-600 text-white p-2 ${
                currentIndex === idx ? 'bg-blue-400' : ''
              }`}
              onClick={() => handleCurrentIndex(idx)}
            >
              {tab.label}
            </li>
          ))}
      </div>
      <div className="wrapper__tab-content ">
        {tabContents[currentIndex] && tabContents[currentIndex].content}
      </div>
    </div>
  );
};

export default CustomTabs;
