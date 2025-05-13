import React, { useEffect, useState } from 'react';
import ProductsItems from './ProductsItems';
import {useProductContext} from './Reducer/ProductReducer';
const Products = () => {
  const { products } = useProductContext();

  return (
    <div className="flex gap-4 flex-wrap">
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <ProductsItems product={product} key={product.id} />
        ))}
        
    </div>
  );
};

export default Products;
