import React, { useEffect, useState } from 'react';
import './ScrollTracker.css';
import useThrottle from './useThrottle';

const ScrollTracker = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const throttledValue = useThrottle(scrollY, 2000);
  const [count, setCount] = useState(-1);
  useEffect(() => {
    function handleScrollY() {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', handleScrollY);
    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  }, []);

  useEffect(() => {
    setCount((count) => count + 1);
  }, [throttledValue]);

  return (
    <div className="scrolltracker bg-white p-4 text-3xl">
      <p>ScrollY: {scrollY.toFixed()}</p>
      <p>ThrottledY: {throttledValue.toFixed()}</p>
      <p>Count of Req: {count.toFixed()}</p>
    </div>
  );
};

export default ScrollTracker;
