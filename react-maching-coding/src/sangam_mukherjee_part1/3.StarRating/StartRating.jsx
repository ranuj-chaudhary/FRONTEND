import React, { useState } from 'react';
import './StarRating.css';
import { AiFillStar } from 'react-icons/ai';

const StartRating = ({ rating, noOfStars = 5, setRating, setIsRated }) => {
  const [currentRating, setCurrentRating] = useState(0);

  function generateRating(noOfStars) {
    let ratings = [];
    for (let i = 1; i <= noOfStars; i++) {
      ratings.push(i);
    }
    return ratings;
  }

  function handleMouseOver(index) {
    setCurrentRating(index);
  }

  function handleOnMouseLeave() {
    setCurrentRating(rating);
  }

  function handleOnClick(index) {
    setRating(index);
    setIsRated(true);
  }

  return (
    <div className="ratings">
      {generateRating(noOfStars).map((index) => (
        <AiFillStar
          key={index + 'yellow'}
          size={28}
          color={`${currentRating < index ? 'gray' : 'green'}`}
          onClick={() => handleOnClick(index)}
          onMouseLeave={() => handleOnMouseLeave()}
          onMouseOver={() => handleMouseOver(index)}
        />
      ))}
    </div>
  );
};

export default StartRating;
