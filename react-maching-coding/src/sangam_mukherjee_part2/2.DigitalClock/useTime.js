import React, { useEffect, useState } from "react";

const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const hour = time?.getHours().toString().padStart(2, "0");
  const minutes = time?.getMinutes().toString().padStart(2, "0");
  const seconds = time?.getSeconds().toString().padStart(2, "0");
  return [hour, minutes, seconds];
};

export default useTime;
