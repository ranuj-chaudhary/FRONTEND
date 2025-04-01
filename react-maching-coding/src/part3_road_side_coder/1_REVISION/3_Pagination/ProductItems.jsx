import React from 'react';

const ProductItems = ({ product }) => {
  return (
    <div className="products_item w-[30%] border-2 border-gray-400 p-2">
      <div className="products_item-image">
        <img src={product.thumbnail} alt="" className="object-contain" />
      </div>
      <div className="products__item-content ">
        <p>
          <span className="font-bold">Title:</span> {product.title}
        </p>
        <p>
          <span className="font-bold">Description:</span> {product.description}
        </p>
        <p>
          <span className="font-bold">Price: </span>₹{product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductItems;
