import { useContext } from 'react';
import Loader from '../common/Loader';
import ListItem from './ListItem';
import { ResultContext } from '../../context/resultContext';
import Pagination from '../common/Pagination';
import ErrorMessage from '../common/ErrorMessage';

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
        {items.length > 0 ? (
          <ul className="list">
            {items.map((item) => (
              <ListItem key={item.uid} magazine={item} currentPage={currentPage} />
            ))}
          </ul>
        ) : (
          <div>No results</div>
        )}
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
