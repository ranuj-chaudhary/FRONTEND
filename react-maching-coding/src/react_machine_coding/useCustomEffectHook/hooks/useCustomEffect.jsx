import React, { useRef } from "react";

const useCustomEffect = (effect, deps) => {
  // if empty dependency
  const prevDeps = useRef(true);
  const oldDeps = useRef([]);

  if (prevDeps.current) {
    prevDeps.current = false;
    effect();
    return;
  }

  // deps change or no dependency;
  const dependencyChange = deps
    ? JSON.stringify(deps) !== JSON.stringify(oldDeps.current)
    : true;

  if (dependencyChange) {
    const cleanUp = effect();

    if (cleanUp && typeof cleanUp === "function" && deps) {
      cleanUp();
    }
  }

  // cleanup;

  oldDeps.current = deps || [];
};

export default useCustomEffect;
