import React, { use, useEffect, useState } from 'react';
import './ScrollTracker.css';
import useThrottle from './useThrottle';

const ScrollTracker = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const throttledValue = useThrottle(scrollY, 1000);

  useEffect(() => {
    function handleScrollY() {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', handleScrollY);
    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  }, []);

  return (
    <div className="scrolltracker">
      <p>ScrollY: {scrollY}</p>
      <p>ThrottledY: {throttledValue}</p>
    </div>
  );
};

export default ScrollTracker;
