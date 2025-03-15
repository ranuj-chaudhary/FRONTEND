import './Pagination.css';

const Pagination = ({ currentPage, onChangeData, totalPages }) => {
  function generatePages(totalPages) {
    let pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }

  function renderPages() {
    return generatePages(totalPages).map((ele, idx) => {
      return (
        <button
          className={`pagination__btn ${
            currentPage === ele ? 'btn--active' : ''
          }`}
          key={ele}
          onClick={() => onChangeData(ele)}
        >
          {ele}
        </button>
      );
    });
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
      {renderPages()}
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
