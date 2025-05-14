// WHAT IS REACT.MEMO?
/*

React.memo is a higher order component that memoizes the result of a component. It will only re-render if the props change.

Points to remember:
--> This is useful for optimizing performance in functional components, especially when they receive complex props 
    or are expensive to render.
--> It is similar to React.PureComponent for class components.
--> It is a performance optimization technique that can help to avoid unnecessary re-renders of functional components.
--> It is a higher order component that takes a component and returns a new component that is memoized.
--> It is a way to optimize functional components by preventing them from re-rendering when their props have not changed.

*/

/* 
Note: Fix the slow render before you fix the re-render
------------------------------------------------------

https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render
*/