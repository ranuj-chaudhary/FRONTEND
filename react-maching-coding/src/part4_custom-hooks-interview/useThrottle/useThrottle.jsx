import React, { useEffect, useRef, useState } from 'react';

const useThrottle = ( scrollY, delay = 500 ) => {
  const [throttledValue, setThrottledValue] = useState(scrollY);
 
  let lastCall = useRef(Date.now())
 
  useEffect(() => {

     if(Date.now() - lastCall.current >= delay){
        setThrottledValue(scrollY);
        lastCall.current = Date.now()
      }

  }, [scrollY, delay]);

  return throttledValue;
};

export default useThrottle;
