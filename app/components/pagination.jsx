export const Pagination = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {

  return (
    <div>
      <button
        className="mx-4 bg-white  border border-asafe rounded px-4 py-1 text-sm font-medium"
        onClick={onPrevPage}
        disabled={currentPage === 1}>
        Prev
      </button>
      <button
        className="mx-4 border bg-white border-asafe rounded py-1 px-4  text-sm font-medium"
        onClick={onNextPage}
        disabled={currentPage === totalPages}>
        Next
      </button>
      <span className="  text-sm font-medium">
        {currentPage} of {totalPages}
      </span>
    </div>
  );
};
