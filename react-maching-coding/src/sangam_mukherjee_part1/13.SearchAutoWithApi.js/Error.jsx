import React from 'react';

const Error = ({ error }) => {
  return (
    <div className="absolute w-full h-full bg-black bg-opacity-30 flex justify-center items-center">
      <p className="text-2xl text-white">{error}</p>
    </div>
  );
};

export default Error;
