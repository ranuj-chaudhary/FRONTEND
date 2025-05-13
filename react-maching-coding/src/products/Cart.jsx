import React from 'react'
import { useProductContext } from './Reducer/ProductReducer'

const Cart = () => {
    const {cart} = useProductContext()
    const cartTotalPrice = cart.reduce((acc, item) => acc +( item.quantity * item.price), 0)
  return (
    <div className=''>
      <ul className="cartitems">

      </ul>
      <div>
        
      </div>
    </div>
  )
}

export default Cart
