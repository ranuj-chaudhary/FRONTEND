import React from 'react';
import './DynamicRecursiveTreeMenu.css';
import Children from './Children';
import menus from './data';
const DynamicRecursiveTreeMenu = ({ listitem }) => {
  return (
    <div className="dynamic menu">
      {listitem && listitem.length > 0
        ? listitem.map((menu, index) => <Children key={index} listitem={menu} />)
        : null}
    </div>
  );
};

export default DynamicRecursiveTreeMenu;
