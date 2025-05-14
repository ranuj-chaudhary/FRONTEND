// What is useMemo?

/*
--> Avoid recalculation expensive calculations if it's not necessary.
--> Maintain the referential equality of an object or array between renders.
--> Avoid unnecessary re-renders of child components.
--> Memoize a value between renders.
--> Use it when you have a calculation that is expensive and you want to avoid recalculating it on every render.


*/ 

// example

import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from "./Product"
import productsData from "./data"
import { slowCountItems } from "./utils"

function App() {
  const [count, setCount] = React.useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }
  
  const productsCount = React.useMemo(() => {
    return slowCountItems(productsData, 500)
  }, [productsData])
  
  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>-</button>
      <button className="button" onClick={increment}>+</button>
      <br />
      <br />
      <h2>There are {productsCount} products</h2>
      <div className="products-list">
        {
          productsData.map(product => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}

function slowCountItems(data, ms) {
  const wakeUpTime = Date.now() + ms;
  while(Date.now() < wakeUpTime) {}
  return data.length
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);