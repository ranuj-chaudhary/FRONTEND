import React, { useEffect, useRef, useState } from 'react';
import Cell from './Cell';
const grids = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const GridLights = () => {
  const [clickOrder, setClickOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  let timerId = useRef(null);
  function deactivateGrid() {
    clearInterval(timerId.current);
    timerId.current = setInterval(() => {
      setClickOrder((clickOrder) => {
        const newOrder = [...clickOrder];
        newOrder.pop();
        setIsDeactivating(true);
        if (newOrder.length === 0) {
          clearInterval(timerId.current);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, 300);
  }

  function handleActivateGrid(index) {
    const newOrder = [...clickOrder, index];
    setClickOrder(newOrder);
  }

  useEffect(() => {
    if (grids.flat(1).length - 1 === clickOrder.length) {
      deactivateGrid();
    }
  }, [clickOrder.length]);

  return (
    <div
      className="grid gap-2 border-2 border-black h-96 w-96 m-4"
      style={{ gridTemplateColumns: `repeat(${grids[0].length}, 1fr) ` }}
    >
      {grids.flat(1).map((grid, i) => {
        if (grid) {
          return (
            <Cell
              key={i}
              onClick={() => handleActivateGrid(i)}
              isFilled={clickOrder.includes(i)}
              isDisabled={clickOrder.includes(i) || isDeactivating}
            />
          );
        } else {
          return <span key={i} />;
        }
      })}
    </div>
  );
};

export default GridLights;
