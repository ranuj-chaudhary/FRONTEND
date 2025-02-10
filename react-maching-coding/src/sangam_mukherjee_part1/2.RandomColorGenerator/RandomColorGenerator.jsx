import React, { useEffect, useState } from 'react';
import './RandomColorGenerator.css';
const RandomColorGenerator = () => {
  const [currentColor, setCurrentColor] = useState('#999999');
  const [isHashColor, setIsHashColor] = useState(false);

  function handleHashGenerator() {
    let hashColor = '';
    const colorCode = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * colorCode.length);
      hashColor += colorCode[randomIndex];
    }

    setCurrentColor('#' + hashColor);
    setIsHashColor(true);
  }
  function handleRGBGenerator() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    setCurrentColor(`rgb(${red}, ${green}, ${blue})`);

    setIsHashColor(false);
  }
  function handleRandomGenerator() {
    if (isHashColor) {
      handleHashGenerator();
    } else {
      handleRGBGenerator();
    }
  }

  return (
    <div
      className="randomcolor-generator"
      style={{ backgroundColor: `${currentColor}` }}
    >
      <p className="randomcolor-generator__color">{currentColor}</p>
      <div className="random-color">
        <button disabled={isHashColor} onClick={handleHashGenerator}>
          Create hash Color
        </button>
        <button disabled={!isHashColor} onClick={handleRGBGenerator}>
          {' '}
          Create RGB Color
        </button>
        <button onClick={handleRandomGenerator}>Generate Random Color</button>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
