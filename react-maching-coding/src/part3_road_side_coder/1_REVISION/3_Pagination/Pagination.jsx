import React from 'react';
import { PRODUCTS_PER_PAGE } from './constants/constants';
const Pagination = ({
  totalProducts,
  onNextPage,
  onPrevPage,
  onChangeIndex,
  currentIndex,
}) => {
  const totalPages = Math.floor(totalProducts / PRODUCTS_PER_PAGE);
  const pages = (totalPages) => {
    const arr = [];

    for (let i = 1; i <= totalPages; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <div className="pagination flex justify-center gap-4 fixed bottom-0 bg-white w-full p-4">
      <button
        onClick={onPrevPage}
        className="bg-gray-200 px-4 py-2 rounded-md font-bold cursor-pointer"
      >
        Prev
      </button>

      {pages(totalPages).map((page) => (
        <button
          key={page}
          onClick={() => onChangeIndex(page)}
          className={`text-white  px-4 py-2 rounded-md cursor-pointer ${
            currentIndex === page ? 'bg-blue-600' : 'bg-blue-400'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={onNextPage}
        className="bg-gray-200 px-4 py-2 rounded-md font-bold cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
