import React, { use, useEffect, useState } from 'react';
import './LoadMoreButton.css';

const LoadMoreProducts = ({ url, limit = 20 }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    (async function fetchProducts() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`${url}?limit=${limit}&skip=${count * limit}`);

        if (!res.ok) {
          throw new Error('Error fetching products');
        }
        const data = await res.json();

        if (data && data.products.length > 0) {
          const fetchedProducts = data.products;
          setProducts((products) => [...products, ...fetchedProducts]);
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();

    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      return window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [count]);

  useEffect(() => {
    if (products.length === 100) setDisable(true);
  }, [products.length]);

  function handleLoadMore() {
    setCount((count) => count + 1);
  }

  function handleScrollEvent() {
    console.log(document.scrollHeight);
  }

  if (loading) {
    return (
      <div className="products__loading">
        <p>Loading Products</p>
      </div>
    );
  }
  if (error.length > 0 || !url) {
    return (
      <div className="products__error">
        <p>{}</p>
      </div>
    );
  }
  console.log(products);
  return (
    <div className="products">
      <div className="products__items">
        {products && products.length
          ? products.map((product) => {
              return (
                <div key={product.title} className="products__item">
                  <img
                    className="products__image"
                    src={product.thumbnail}
                    alt={product.description}
                  />
                  <p>{product.title}</p>
                  <p>{product.description}</p>
                  <p>Rs. {product.price}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="products__load-btn">
        <button
          className="btn btn--primary btn--disable"
          disabled={disable}
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default LoadMoreProducts;
