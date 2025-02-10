import { useEffect, useState } from 'react';

const useCurrentTheme = (key, defaultTheme = 'light') => {
  const [theme, setTheme] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultTheme)
      );
      console.log(currentValue);
    } catch (err) {
      currentValue = defaultTheme;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);

  return [theme, setTheme];
};

export default useCurrentTheme;
