/*
 Polyfill for useCallback
useCallback memoizes functions.

Since useCallback is just useMemo for functions, we reuse our useMemo polyfill.



*/


function useCallback(fn, deps) {
    return useMemo(() => fn, deps);
  }
  