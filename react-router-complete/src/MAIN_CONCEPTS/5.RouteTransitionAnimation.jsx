// MOST POPULAR REACT ANIMATION LIBRARY
// #####################################

// 1) React Transiont Group (for animations)
// 2) Framer Motion if you need more complex animations
// 3) React Spring
// 4) React Motion

/*
1) React Transiont Group

a) <Transition>
This component tracks the mounting/unmounting of a component and applies transitions based on its lifecycle

b) <CSSTransition>
It adds and removes CSS classes during the transition states (e.g., enter, enter-active, exit, exit-active)

c) <SwitchTransition>
Used when you need to switch between two components with a smooth transition.

d) <TransitionGroup>
Manages a set of transitioning components (useful for lists).

import { CSSTransition, TransitionGroup } from 'react-transition-group';

function ListExample({ items }) {
  return (
    <TransitionGroup>
      {items.map((item) => (
        <CSSTransition key={item.id} timeout={300} classNames="item">
          <div>{item.text}</div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

Final Tips for Using React Transition Group in Real Apps
##########################################################

Prefer CSSTransition for simple CSS animations like fades, slides, etc.
Use Transition when you need custom control over JS-based animations.
Combine TransitionGroup with CSSTransition for dynamic lists.
Use SwitchTransition for toggling between two elements smoothly
*/

