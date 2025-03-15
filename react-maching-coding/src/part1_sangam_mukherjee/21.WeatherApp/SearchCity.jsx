import React, { useState } from 'react';
const style = {
  searchCity: 'flex gap-2 ',
  searchInput: 'p-2 flex-1',
  button: 'px-4 py-2 text-black bg-gray-200',
};
const SearchCity = ({ onCityChange }) => {
  const [city, setCity] = useState('');
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      onCityChange(city);
    }
  }
  function handleCityChange(e) {
    onCityChange(city);
  }
  return (
    <div className={style.searchCity}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className={style.searchInput}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleCityChange} className={style.button}>
        Search
      </button>
    </div>
  );
};

export default SearchCity;
