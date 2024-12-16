import React from "react";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const { title, price, thumbnail } = product;

  return (
    <div className="product">
      <p className="product__title">{title}</p>
      <div className="product__image-container">
        <img className="product__image" src={thumbnail} alt={title} />
      </div>
      <p className="product__price">Price: Rs. {price}</p>
    </div>
  );
};

export default ProductItem;
