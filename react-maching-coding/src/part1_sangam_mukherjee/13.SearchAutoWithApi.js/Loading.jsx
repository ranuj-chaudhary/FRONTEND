import React from 'react';

const Loading = () => {
  return (
    <div className="absolute w-full h-full bg-black bg-opacity-30 flex justify-center items-center">
      <p className="text-2xl text-white">Fetching Products....</p>
    </div>
  );
};

export default Loading;
