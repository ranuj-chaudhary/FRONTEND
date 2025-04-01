import { useEffect, useState } from 'react';

const ProgressBar = ({ value = 0 }) => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    setPercentage(Math.max(0, Math.min(100, value)));
    // setPercentage(value);
  }, [value]);
  return (
    <div className="wrapper w-96 h-8 relative rouded-full bg-gray-200 border-1 border-black rounded-full overflow-hidden">
      <div
        className={`progress__bar  h-full flex justify-center items-center bg-green-600 transition-all ease-linear duration-300`}
        style={{ width: `${percentage}%` }}
      >
        <span
          className={`${
            percentage >= 50 ? 'text-white' : ''
          } absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
