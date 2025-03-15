import { useEffect, useState } from 'react';
import axios from 'axios';
const useProducts = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  async function fetchProducts(getUrl) {
    try {
      setLoading(true);
      const res = await axios.get(`${getUrl}`);
      let data = res.data;
      if (data && data.products && data.products.length > 0) {
        setProducts(data.products);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts(url);
  }, [url]);

  return [products, loading, error];
};

export default useProducts;
