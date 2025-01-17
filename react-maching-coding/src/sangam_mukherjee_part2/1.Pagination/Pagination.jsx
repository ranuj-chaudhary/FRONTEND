import "./Pagination.css";

const Pagination = ({ currentPage, onChangeData, totalPages }) => {
  function generatePages(totalPages) {
    let pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }

  return (
    <div className="pagination">
      <button
        className="pagination__btn pagination__btn--prev"
        onClick={() => onChangeData(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {generatePages(totalPages).map((ele, idx) => {
        console.log(ele)
        return (
          <button
            className={`pagination__btn ${
              currentPage === ele ? "btn--active" : ""
            }`}
            key={ele}
            onClick={() => onChangeData(ele)}
          >
            {ele}
          </button>
        );
      })}
      <button
        className="pagination__btn pagination__btn--next"
        onClick={() => onChangeData(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
