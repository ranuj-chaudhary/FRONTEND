import React, { useCallback, useMemo, useState } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState({
    id: '121323',
    num: 0,
  });
  const [show, setShow] = useState(false);
  function handleChangeCount(action) {
    action === 'increment'
      ? setCount({ num: count.num++, ...count })
      : setCount({ num: count.num--, ...count });
  }
  

const handleSquare = useCallback(() => {
    console.log('memoized value');
    return count.num * count.num;
  }, [count.num])
  return (
    <div className="count">
      {show && <p>{count.id}</p>}
      <div className="count__btn">
        <button onClick={() => handleChangeCount('increment')}>+</button>
        <p>{count.num}</p>
        <button onClick={() => handleChangeCount('decrement')}>-</button>
      </div>
      <Child handleSquare={handleSquare} setShow={setShow} />
    </div>
  );
};

const Child = React.memo(function ({ handleSquare, setShow }) {
  console.log('child rendered');
  return (
    <div className="square">
      <p>Child Rendered: {handleSquare}</p>
      <button onClick={() => setShow((show) => !show)}>Change</button>
    </div>
  );
});

export default ParentComponent;
