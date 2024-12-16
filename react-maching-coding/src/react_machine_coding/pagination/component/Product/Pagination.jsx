import React, { useEffect, useState } from "react";
import "./Pagination.css";

const Pagination = ({ page, setPage, totalPages }) => {
  const [selectedPage, setSelectedPage] = useState(0);

  function handlePagination(idx) {
    setPage(idx);
    setSelectedPage(idx);
  }
  function handlePrev() {
    setPage((page) => page - 1);
  }
  function handleNext() {
    setPage((page) => page + 1);
  }

  useEffect(() => {
    setSelectedPage(page);
  }, [page]);

  return (
    <div className="pagination">
      <span
        className={`pagination__btn pagination__btn--prev ${
          selectedPage === 1 ? "pagination__btn--hidden" : ""
        }`}
        onClick={handlePrev}
      >
        Prev
      </span>
      <div className="pagination__buttons">
        {[...Array(totalPages)].map((_, i) => (
          <span
            className={`pagination__btn ${
              selectedPage === i + 1 ? "pagination__btn--selected" : ""
            }`}
            key={i}
            onClick={() => handlePagination(i + 1)}
          >
            {i + 1}
          </span>
        ))}
      </div>
      <span
        className={`pagination__btn pagination__btn--prev ${
          selectedPage === 10 ? "pagination__btn--hidden" : ""
        }`}
        onClick={handleNext}
      >
        Next
      </span>
    </div>
  );
};

export default Pagination;
