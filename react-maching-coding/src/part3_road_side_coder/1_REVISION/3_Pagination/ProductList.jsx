import React from 'react'

const ProductList = ({items, render}) => {
  return (
    <div className="products__items flex flex-wrap p-4 gap-4">{
        items.map(render)
    }</div>
  )
}

export default ProductList
