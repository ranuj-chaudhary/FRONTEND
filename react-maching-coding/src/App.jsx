import { useEffect, useState } from 'react';
import './App.css';

// import ScrollIndiator from './sangam_mukherjee_part1/9.ScrollIndicator/components/ScrollIndiator';
// import LightDarkTheme from './sangam_mukherjee_part1/8.LightDarkTheme/LightDark';
// import Accordion from './sangam_mukherjee_part1/1.Accordion/Accordion';
// import RandomColorGenerator from './sangam_mukherjee_part1/2.RandomColorGenerator/RandomColorGenerator';
// import StartRating from './sangam_mukherjee_part1/3.StarRating/StartRating';
// import ImageSlider from './sangam_mukherjee_part1/4.ImageSlider/ImageSlider';
// import LoadMoreProducts from './sangam_mukherjee_part1/5.LoadMoreButton/LoadMoreButton';
// import menus from './sangam_mukherjee_part1/6.Tree View_DynamicNavigation_RecursiveMenu/data';
// import DynamicRecursiveTreeMenu from './sangam_mukherjee_part1/6.Tree View_DynamicNavigation_RecursiveMenu/DynamicRecursiveTreeMenu';
// import QrGenerator from './sangam_mukherjee_part1/7.QrGenerator/QrGenerator';
import Todo from './redux/features/Todo/Todo';
function App() {
  return (
    <div className="app">
      <div className="app">
        {/* <Accordion /> */}
        {/* <RandomColorGenerator /> */}
        {/*         
          <StartRating
            rating={rating}
            setRating={setRating}
            noOfStars={5}
            setIsRated={setIsRated}
          /> */}
        {/* <ImageSlider url={'https://picsum.photos/v2/list'} /> */}
        {/* <LoadMoreProducts url={'https://dummyjson.com/products/'} /> */}
        {/* <DynamicRecursiveTreeMenu listitem={menus} /> */}
        {/* <LightDarkTheme defaultTheme="light" /> */}
        {/* <ScrollIndiator /> */}
        <Todo />
      </div>
    </div>
  );
}

export default App;
