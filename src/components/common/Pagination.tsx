import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { defaultPage } from '../../helpers/constants';
import { ResultContext } from '../../context/resultContext';
import useLocalStorageSearchValue from '../../helpers/hooks';

function Pagination({ pages, currentPage }: { pages: number; currentPage: number }) {
  const { fetchData } = useContext(ResultContext);

  const [, setSearchParams] = useSearchParams();
  const { searchValue } = useLocalStorageSearchValue();

  const changePage = (page: number) => {
    setSearchParams({ page: page.toString() });
    fetchData({ search: searchValue, page });
  };

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
