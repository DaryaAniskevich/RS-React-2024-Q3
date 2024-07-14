import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from '../common/Loader';
import { ResultContext } from '../../context/resultContext';
import Pagination from '../common/Pagination';
import ErrorMessage from '../common/ErrorMessage';
import CardList from './CardList';
import useLocalStorageSearchValue from '../../helpers/hooks';

function Results() {
  const { items, isLoading, isError, pages, currentPage, fetchData } = useContext(ResultContext);

  const [, setSearchParams] = useSearchParams();
  const { searchValue } = useLocalStorageSearchValue();

  const changePage = (page: number) => {
    setSearchParams({ page: page.toString() });
    fetchData({ search: searchValue, page });
  };

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isError) {
    content = <ErrorMessage />;
  } else {
    content = (
      <>
        <CardList items={items} currentPage={currentPage} />
        <Pagination pages={pages} currentPage={currentPage} changePage={changePage} />
      </>
    );
  }

  return (
    <div className="results">
      <h2>Magazines Results</h2>
      {content}
    </div>
  );
}

export default Results;
