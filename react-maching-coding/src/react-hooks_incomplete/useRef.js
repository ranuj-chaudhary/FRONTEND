/*
Polyfill for useRef
useRef creates a persistent object across renders.

How It Works:
Stores refs in refsStore, ensuring they persist across renders.

*/



let refsStore = [];
let refIndex = 0;

function useRef(initialValue) {
  if (!refsStore[refIndex]) {
    refsStore[refIndex] = { current: initialValue };
  }
  return refsStore[refIndex++];
}

// Example Usage
function Component() {
  const myRef = useRef(10);
  console.log("Ref Value:", myRef.current);

  myRef.current = 20;
}

Component();
Component(); // Ref value persists across renders
