import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './sangam_mukherjee_part2/3.Pagination/Pagination';

const PAGES_PER_PAGE = 10;

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchedProducts = Array.from({ length: 100 }, (x, idx) => {
      const prod = { id: idx + 1, productName: `${idx + 1} product` };
      return prod;
    });
    setProducts(fetchedProducts);
  }, [currentPage]);

  const totalPages = Math.floor(products.length / PAGES_PER_PAGE);

  const lastIndex = PAGES_PER_PAGE * currentPage;
  const startIndex = PAGES_PER_PAGE * currentPage - PAGES_PER_PAGE;

  const productsByPages = [...products].slice(startIndex, lastIndex);

  function renderProducts() {
    if (productsByPages.length > 0) {
      return productsByPages.map((prod) => {
        return (
          <div className="products__card" key={prod.id}>
            <p>{prod.id}</p>
            <p>{prod.productName}</p>
          </div>
        );
      });
    }
  }

  function handleChangeData(idx) {
    setCurrentPage(idx);
  }

  return (
    <div className="app">
      <div className="products">{renderProducts()}</div>
      <Pagination
        currentPage={currentPage}
        productsPerPage={PAGES_PER_PAGE}
        onChangeData={handleChangeData}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
