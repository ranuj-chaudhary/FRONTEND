import { useEffect, useState } from 'react';

const useFetch = (currentCity) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchWeather(currentCity) {
    try {
      setLoading(true);
      setError('');
      const res = await fetch(
        `http://api.weatherstack.com/current?access_key=68f725c8aca831f5c6b23694c51737e1&query=${currentCity}`,
        {
          method: 'GET',
        }
      );
      if (!res.ok) {
        throw new Error('Problem fetching the data');
      }
      const data = await res.json();

      if (data) {
        setData([data]);
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (currentCity) {
      fetchWeather(currentCity);
    }
  }, [currentCity]);

  return [data, loading, error];
};

export default useFetch;
