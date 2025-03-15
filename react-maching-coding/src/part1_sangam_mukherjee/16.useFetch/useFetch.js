import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url, options = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url, {
          ...options,
        });
        if (!res.ok) throw new Error('Problem fetching products');
        const data = await res.json();
        if (data?.products) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(true);
      }
    })();
  }, [url]);

  return [products, loading, error];
};

export default useFetch;
