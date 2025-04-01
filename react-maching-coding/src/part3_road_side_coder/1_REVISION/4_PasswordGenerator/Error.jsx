import React, { useEffect, useState } from 'react';

const Error = ({ error, setError }) => {
  useEffect(() => {
    let errorTimerId = '';

    if (error.length > 0) {
      errorTimerId = setTimeout(() => {
        setError('');
      }, 1000);
    }
    return () => {
      clearTimeout(errorTimerId);
    };
  }, [error.length, setError]);


  return (
    <div className="error my-1 w-full">
      <p
        className={`text-red-600  ${
          error.length === 0 ? 'invisible' : 'visible'
        }`}
      >
        {error.length > 0 ? error : 'No Error'}
      </p>
    </div>
  );
};

export default Error;
