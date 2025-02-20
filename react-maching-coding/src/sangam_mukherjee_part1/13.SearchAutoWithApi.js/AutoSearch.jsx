import React, { useEffect, useState } from 'react';
import useDebounce from './useDebounce';
import Loading from './Loading';
import Error from './Error';
const style = {
  list: 'list-none px-4 py-2 bg-blue-400 text-white rounded-md',
};

const AutoSearch = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const debounceQuery = useDebounce(query, 1500);

  useEffect(() => {
    if (debounceQuery.length === 0) return;
    (async function () {
      try {
        setLoading(true);
        setError('');
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${debounceQuery}`
        );

        if (!res.ok) {
          throw new Error('Error fetching data');
        }
        const data = await res.json();
        if (data?.products?.length) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error('Error Fetching the data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [debounceQuery]);

  useEffect(() => {
    if (query.length === 0) {
      setProducts([]);
    }
  }, [query.length]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="auto-search w-full h-full overflow-auto relative">
      <div className="auto-search__container p-4 flex justify-center items-center">
        <input
          type="text"
          className="auto-search__input w-[60%] border-2 border-blue-900 p-4 rounded-full hover:outline-blue-500 focus:outline-blue-500"
          placeholder="type to search products"
          name="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
      </div>
      <div className="fetched-products flex justify-center">
        {products && products.length > 0 && (
          <ProductsList products={products} />
        )}
      </div>
    </div>
  );
};

function ProductsList({ products }) {
  return (
    <div className="auto-search__results flex flex-wrap gap-8 flex-col items-center justify-between overflow-y-auto h-96 max-w-full bg-slate-500 p-4">
      {products &&
        products.length > 0 &&
        products.map((prod) => (
          <li key={prod.id} className={style.list}>
            {prod.title}
          </li>
        ))}
    </div>
  );
}

export default AutoSearch;
