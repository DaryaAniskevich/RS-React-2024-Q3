import { useContext } from 'react';
import { defaultPage } from '../../helpers/constants';
import { ThemeContext } from '../../context/themeContext';

function Pagination({
  pages,
  currentPage,
  changePage,
}: {
  pages: number;
  currentPage: number;
  changePage: (page: number) => void;
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="pagination">
      <button
        type="button"
        className={`${theme} button-pagination`}
        disabled={currentPage === defaultPage}
        onClick={() => changePage(currentPage - 1)}>
        Prev
      </button>
      {currentPage} of {pages}
      <button
        type="button"
        className={`${theme} button-pagination`}
        disabled={currentPage >= pages}
        onClick={() => changePage(currentPage + 1)}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
