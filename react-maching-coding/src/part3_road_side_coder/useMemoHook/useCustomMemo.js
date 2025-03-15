import { useEffect, useRef } from "react";

function compareDependencies(prevDeps, currDeps) {
  if (prevDeps.length !== currDeps.length) return false;
  if (prevDeps === null) return false;

  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== currDeps[i]) {
      return false;
    }
  }

  return true;
}

const useCustomMemo = (cb, deps) => {
  // cache value
  const memoizedCache = useRef(null);

  // compare olddeps and currDeps
  if (
    !memoizedCache.current ||
    !compareDependencies(memoizedCache.current.deps, deps)
  ) {
    memoizedCache.current = {
      value: cb(),
      deps,
    };
  }
  // clean up cache if unmounts
  useEffect(() => {
    memoizedCache.current = null;
  }, []);

  console.log(memoizedCache)
  return memoizedCache.current.value;
};

export default useCustomMemo;
