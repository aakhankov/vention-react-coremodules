import PropTypes from 'prop-types';
import './Pagination.css';
export default function Pagination({
  currentPage,
  totalPages,
  goToFirstPage,
  goToLastPage,
  setCurrentPage,
}) {
  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={goToFirstPage}>
        First Page
      </button>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
      >
        Prev
      </button>
      <span>{currentPage}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
      >
        Next
      </button>
      <button disabled={currentPage === totalPages} onClick={goToLastPage}>
        Last Page
      </button>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  goToFirstPage: PropTypes.func,
  goToLastPage: PropTypes.func,
  setCurrentPage: PropTypes.func,
};
