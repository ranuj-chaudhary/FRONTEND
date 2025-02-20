import { useEffect } from 'react';

const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    function handleOutsideClick(event) {
      if (ref && !ref.current?.contains(event.target)) {
        handler();
      }
    }
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, handler]);
};

export default useOutsideClick;
