import { useEffect, useRef } from "react";

const useThrottle = (func, delay = 500) => {
  let timerId = useRef(null);
  let lastValue = useRef(null);
  useEffect(() => {
    if (!timerId.current && !lastValue.current) {
      // run function instantly
      console.log("running");
      func();
      lastValue.current = Date.now();
    } else {
      clearTimeout(timerId.current);
      console.log(timerId.current);
      // run interval after delay time
      timerId.current = setTimeout(() => {
        const timeDuration = Date.now() - lastValue.current;
        if (timeDuration >= delay) {
          func();
          lastValue.current = Date.now();
        }
      }, delay - (Date.now() - lastValue.current));
    }
  }, [func, delay]);
};

export default useThrottle;
