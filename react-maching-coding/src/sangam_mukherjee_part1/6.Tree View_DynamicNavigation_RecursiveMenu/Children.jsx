import React, { useState } from 'react';
import './Children.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import DynamicRecursiveTreeMenu from './DynamicRecursiveTreeMenu';
const Children = ({ listitem }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="children_menu">
      <div className="menu-name">
        <p>{listitem.label}</p>
        {listitem && listitem.children && listitem.children.length ? (
          <span onClick={() => setToggle((toggle) => !toggle)}>
            {toggle ? (
              <AiOutlineMinus size={16} />
            ) : (
              <AiOutlinePlus size={16} />
            )}
          </span>
        ) : null}
      </div>
      {toggle && listitem.children ? (
        <DynamicRecursiveTreeMenu listitem={listitem.children} />
      ) : null}
    </div>
  );
};

export default Children;
