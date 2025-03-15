import React, { useState } from 'react';
import useFetch from './useFetch';
import WeatherDetails from './WeatherDetails';
import SearchCity from './SearchCity';
const style = {
  wrapper: '',
};

const WeatherApp = () => {
  const [currentCity, setCurrentCity] = useState('');

  const [data, loading, error] = useFetch(currentCity);

  function handleCityChange(city) {
    setCurrentCity(city);
  }

  if (loading) {
    <div className="loading">
      <p>Loading Data Please weight...</p>
    </div>;
  }
  if (error) {
    <div className="error">
      <p>{error}</p>
    </div>;
  }
  console.log(data);
  return (
    <div className="flex flex-col gap-4 bg-blue-500 size-96 margin-auto p-4">
      <SearchCity onCityChange={handleCityChange} />
      {data && data.length > 0 && <WeatherDetails weatherData={data[0]} />}
    </div>
  );
};

export default WeatherApp;
