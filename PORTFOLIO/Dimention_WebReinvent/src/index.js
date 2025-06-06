import "./style.css";
const horizontalStars = ['images/star-pattern-1.svg', 'images/star-pattern-2.svg', 'images/star-pattern-3.svg', 'images/star-pattern-4.svg']
const verticalStars = ['images/vertical-star-pattern-1.svg', 'images/vertical-star-pattern-2.svg', 'images/vertical-star-pattern-3.svg', 'images/vertical-star-pattern-4.svg']
const horizontalStar = document.querySelector(".start__blinking img")
const verticalStar = document.querySelector(".vertical__start__blinking img")

let i = -1;

 setInterval(()=> {
    i++  
    if(i === 4) i = 0;
    //   vertical start blinking
    horizontalStar.classList.remove("fade-in");
    horizontalStar.classList.add("fade-out");
    horizontalStar.src = horizontalStars[i];
     horizontalStar.onload = () => {
        horizontalStar.classList.remove("fade-out");
        horizontalStar.classList.add("fade-in");
      };

    //   vertical start blinking
    verticalStar.classList.remove("fade-in");
    verticalStar.classList.add("fade-out");

     verticalStar.src = verticalStars[i];
     verticalStar.onload = () => {
        verticalStar.classList.remove("fade-out");
        verticalStar.classList.add("fade-in");
      };
    
}, 2000)

