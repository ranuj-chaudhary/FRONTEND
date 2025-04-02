/*
 Polyfill for useMemo
useMemo memoizes expensive computations.

How It Works:

Stores memoized values and their dependencies.

Only re-computes if dependencies change.

*/

let memoStore = [];
let memoIndex = 0;

function useMemo(callback, deps) {
  const prevDeps = memoStore[memoIndex]?.deps;
  if (!prevDeps || deps.some((dep, i) => dep !== prevDeps[i])) {
    memoStore[memoIndex] = { value: callback(), deps };
  }
  return memoStore[memoIndex++].value;
}

// Example Usage
function Component() {
  const result = useMemo(() => {
    console.log('Expensive calculation');
    return 42;
  }, []);

  console.log('Memoized result:', result);
}

Component();
Component(); // "Expensive calculation" does not run again
