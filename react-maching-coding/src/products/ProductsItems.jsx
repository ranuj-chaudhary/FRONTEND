import React from 'react';
import { addCartItems, useProductContext } from './Reducer/ProductReducer';

const ProductsItems = ({ product }) => {
  const { id, title, price, thumbnail: imageUrl, category } = product;
  const { dispatch } = useProductContext();
  return (
    <div className="border-2 p-2 bg-gray-400">
      <div className="">
        <img className="w-40" src={imageUrl} alt="" />
      </div>
      <p>{title}</p>
      <p>
        <span>Price:</span>
        {price}
      </p>
      <p>
        <span>Category:</span>
        {category}
      </p>
      <button
        className="px-4 py-2 bg-blue-500 text-white"
        onClick={() =>
          dispatch(addCartItems({ id, title, price, quantity: 1 }))
        }
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductsItems;
