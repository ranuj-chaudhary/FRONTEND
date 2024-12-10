import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductItem from "./ProductItem";
import { PRODUCTS_API_URL, PRODUCTS_PER_PAGE } from "../../utils/constants";
import Pagination from "./Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = products.length / PRODUCTS_PER_PAGE;
  const startPage = page * PRODUCTS_PER_PAGE - 10;
  const endPage = page * PRODUCTS_PER_PAGE;
  useEffect(() => {
    (async () => {
      const res = await fetch(`${PRODUCTS_API_URL}/?limit=100`);
      const data = await res.json();

      if (data && data.products) {
        setProducts(data.products);
      }
    })();
  }, [page]);
  return (
    <div className="products">
      <h1 className="products__heading">Products</h1>
      <div className="products_items">
        {products &&
          products.length > 0 &&
          products
            .slice(startPage, endPage)
            .map((prod) => <ProductItem product={prod} key={prod.id} />)}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Products;
