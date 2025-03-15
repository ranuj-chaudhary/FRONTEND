import React from 'react';
const style = {
  weatherDetails: 'text-white',
  searchInput: '',
  button: '',
};
const WeatherDetails = ({ weatherData }) => {
  return (
    <div className={style.weatherDetails}>
      <p className="text-3xl">{weatherData.current.temperature}C</p>
      <p className="text-1xl">
        {weatherData.location.name} ,{weatherData.location.country}
      </p>
      <p className="text-1xl">Humidity: {weatherData.current.humidity}%</p>
      <p className="text-1xl">
        Weather: {weatherData.current.weather_descriptions}
      </p>
      <p>Visibility: {weatherData.current.visibility}</p>
      <img src={weatherData.current.weather_icons} alt="" />
    </div>
  );
};

export default WeatherDetails;
