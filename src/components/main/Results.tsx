import { useContext } from 'react';
import Loader from '../common/Loader';
import { ResultContext } from '../../context/resultContext';
import Pagination from '../common/Pagination';
import ErrorMessage from '../common/ErrorMessage';
import CardList from './CardList';

function Results() {
  const { items, isLoading, isError, pages, currentPage } = useContext(ResultContext);

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isError) {
    content = <ErrorMessage />;
  } else {
    content = (
      <>
        <CardList items={items} currentPage={currentPage} />
        <Pagination pages={pages} currentPage={currentPage} />
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
