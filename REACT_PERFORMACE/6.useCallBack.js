// WHAT IS REACT.useCallback?
/* 
--> React.useCallback is a hook that returns a memoized version of the callback function that 
    only changes if one of the dependencies has changed.
--> It is useful for optimizing performance in functional components, especially when passing callbacks to
    child components that rely on reference equality to prevent unnecessary renders.
--> It is similar to React.memo for functional components, but it is used for functions instead of components.

*/