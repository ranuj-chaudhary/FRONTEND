//useState manages component state and triggers re-renders when updated.

// How it Works Internally
// React stores state in a list of hooks inside the Fiber Node.

// On re-renders, it retrieves and updates state from this list.

let stateStore = [];
let stateIndex = 0;

function useState(initialValue) {
  const currentIndex = stateIndex;

  if (stateStore[currentIndex] === undefined) {
    stateStore[currentIndex] = initialValue;
  }

  function setState(newValue) {
    stateStore[currentIndex] =
      typeof newValue === 'function'
        ? newValue(stateStore[currentIndex])
        : newValue;
    render(); // Simulate re-render (must be defined in the app)
  }

  stateIndex++;
  return [stateStore[currentIndex], setState];
}

// Example usage
function Counter() {
  const [count, setCount] = useState(0);
  console.log('Rendered with count:', count);
  return () => setCount(count + 1);
}

const render = () => {
  stateIndex = 0;
  Counter()(); // Simulates component render
};

render(); // Initial render
