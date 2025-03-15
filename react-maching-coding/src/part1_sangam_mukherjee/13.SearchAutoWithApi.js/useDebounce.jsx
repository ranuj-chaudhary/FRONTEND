import React, { useEffect, useState } from 'react';

const useDebounce = (query, delay) => {
  const [debounceQuery, setDebounceQuery] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceQuery(query);
    }, delay);
    return () => {
      clearTimeout(timerId);
    };
  }, [query, delay]);

  return debounceQuery;
};

export default useDebounce;
