import React, { useLayoutEffect, useState } from 'react';

const useWindowResize = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useLayoutEffect(() => {
    function handleResize() {
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return [windowHeight , windowWidth]
};

export default useWindowResize;
