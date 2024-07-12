import { defaultPage } from '../../helpers/constants';

function Pagination({
  pages,
  currentPage,
  changePage,
}: {
  pages: number;
  currentPage: number;
  changePage: (page: number) => void;
}) {
  return (
    <div className="pagination">
      <button
        type="button"
        className="button-pagination"
        disabled={currentPage === defaultPage}
        onClick={() => changePage(currentPage - 1)}>
        Prev
      </button>
      {currentPage} of {pages}
      <button
        type="button"
        className="button-pagination"
        disabled={currentPage >= pages}
        onClick={() => changePage(currentPage + 1)}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
