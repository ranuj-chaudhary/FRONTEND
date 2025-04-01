import React from 'react';

const Options = ({ items, handleCharType }) => {
  return (
    <div className="character__types flex flex-wrap gap-4 my-4 p-2">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            type={item.type}
            handleCharType={() => handleCharType(item.id)}
          />
        );
      })}
    </div>
  );
};

function Item({ handleCharType, type }) {
  const id = type.replace(/\s/g, '-').toLowerCase();
  return (
    <div className="input flex gap-2 w-[45%]">
      <input
        className="w-6 h-6 rounded-md cursor-pointer"
        type="checkbox"
        onChange={handleCharType}
        id={id}
        name={id}
      />
      <label htmlFor={type}>{type}</label>
    </div>
  );
}
export default Options;
