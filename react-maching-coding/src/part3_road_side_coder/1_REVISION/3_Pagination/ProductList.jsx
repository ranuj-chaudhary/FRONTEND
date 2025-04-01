import React from 'react'

const ProductList = ({items, render}) => {
  return (
    <div className="products__items flex flex-wrap p-4 gap-4">{
        items.map(product => render(product))
    }</div>
  )
}

export default ProductList;
