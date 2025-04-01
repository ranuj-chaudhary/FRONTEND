import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';

const ShowProgress = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let timerId;
    timerId = setInterval(() => {
      setValue((value) => value + 1);
    }, 100);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <ProgressBar value={value} />
    </div>
  );
};

export default ShowProgress;

