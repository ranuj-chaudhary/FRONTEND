
// Code Splitting
/*
For reducing the size of the javascript bundle, we can use code splitting.

// PROBLEM
// - The initial bundle size is too large.
// - The user has to wait for the entire bundle to load before they can see anything on the page.

NOTE: 
- biggest problem that web developers is having application that has assets that are too large.
- The initial bundle size is too large.
- The user has to wait for the entire bundle to load before they can see anything on the page.

WHY WE USE CODE SPLITTING?
user with slow processors or slow internet connections will be able to see the page faster.

Note: 
i) Developers must test the application on a slow connection to see if the code splitting is working as expected.
*/

// HOW TO CHECK THE PERFORMANCE OF THE APPLICATION?
// 1) Chrome Dev Tools
//  --> Performance Tab
//  --> Network Tab
//  --> Lighthouse
//  --> Coverage Tab
//  --> Memory Tab
//  --> Performance Monitor
//  --> Audits
//  --> Performance Insights
//  --> Performance Markers
//  --> Performance Timeline
//  --> Performance Profiler
//  --> Performance Analysis

// 2) React Dev Tools
//  --> React Profiler
//  --> React Profiler API
//  --> React Profiler Timeline
//  --> React Profiler Markers
//  --> React Profiler Analysis
//  --> React Profiler Insights
//  --> React Profiler Performance
//  --> React Profiler Performance Markers
//  --> React Profiler Performance Analysis
//  --> React Profiler Performance Insights
//  --> React Profiler Performance Timeline


// WHICH DEVICE HAS EFFECT ON CODE SPLITTING THE MOST?
// 1) Slow Processors
// 2) Slow Internet Connections
// 3) Slow Devices
// 4) Slow Browsers
// 5) Slow Operating Systems


import { off } from "process"
// example of lazy loading a component

import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
// import ProductsList from "./ProductsList"
const ProductsList = React.lazy(() => {
  return import("./ProductsList")
});
// HOW LAZY LOADING WORKS?

// 1) The component is not loaded until it is needed.
// 2) lazy loading has pending promise which is not resolved until the component is needed.

function App() {
  const [count, setCount] = React.useState(0)
  const [showProducts, setShowProducts] = React.useState(false)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>
        -
            </button>
      <button className="button" onClick={increment}>
        +
            </button>
      <br />
      <br />
      <button
        className="button"
        onClick={() => setShowProducts(prev => !prev)}
      >
        Show Products
            </button>
      <br />
      <br />
      <div className="products-list">
        {showProducts && <ProductsList />}
      </div>
    </>
  )
}
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
   
  </React.StrictMode>
)
