import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import ProductItems from './ProductItems';
import Pagination from './Pagination';
import { PRODUCTS_PER_PAGE } from './constants/constants';
const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState('');
  const [error, setError] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        setError('');
        const res = await fetch(
          `https://dummyjson.com/products?limit=${PRODUCTS_PER_PAGE}&skip=${
            PRODUCTS_PER_PAGE * currentIndex
          }`
        );
        if (!res.ok) {
          throw new Error('Problem fetching the products');
        }
        const data = await res.json();
        if (data && data.products && data.products.length > 0) {
          setProducts(data.products);
          setTotalProducts(data.total);
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [currentIndex]);

  let startIndex =
    currentIndex === 1
      ? 0
      : currentIndex * PRODUCTS_PER_PAGE - PRODUCTS_PER_PAGE;
  let endIndex = currentIndex * PRODUCTS_PER_PAGE;
  function handlePrevPage() {
    setCurrentIndex((currentIndex) =>
      currentIndex === 1 ? Math.max(1, currentIndex - 1) : currentIndex - 1
    );
  }

  function handleNextPage() {
    const lastPage = products.length / PRODUCTS_PER_PAGE;
    setCurrentIndex((currentIndex) =>
      currentIndex === lastPage
        ? Math.min(lastPage, currentIndex + 1)
        : currentIndex + 1
    );
  }
  function handleCurrentIndex(index) {
    setCurrentIndex(index);
  }
  const finalProducts = products.slice(startIndex, endIndex);

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center text-2xl font-bold">
        <p>Loading Products...</p>
      </div>
    );
  }
  if (error.length > 0) {
    return (
      <div className="h-screen w-screen flex justify-center items-center text-2xl font-bold">
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div className="products p-4">
      <ProductList
        items={products}
        render={(product) => (
          <ProductItems key={product.id} product={product} />
        )}
      />
      <Pagination
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        onChangeIndex={handleCurrentIndex}
        totalProducts={totalProducts}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default Products;
