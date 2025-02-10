import { useEffect, useState } from 'react';
import './App.css';
// import Accordion from './sangam_mukherjee_part1/1.Accordion/Accordion';
// import RandomColorGenerator from './sangam_mukherjee_part1/2.RandomColorGenerator/RandomColorGenerator';
import StartRating from './sangam_mukherjee_part1/3.StarRating/StartRating';
function App() {
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated] = useState(false);


  return (
    <div className="app">
      <div className="app">
        {/* <Accordion /> */}
        {/* <RandomColorGenerator /> */}
        {!isRated ? (
          <StartRating
            rating={rating}
            setRating={setRating}
            noOfStars={5}
            setIsRated={setIsRated}
          />
        ) : (
          <p>You rated with: {rating} </p>
        )}
      </div>
    </div>
  );
}

export default App;
