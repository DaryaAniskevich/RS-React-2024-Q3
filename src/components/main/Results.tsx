import { useContext } from 'react';
import Loader from '../common/Loader';

import ListItem from './ListItem';
import { ResultContext } from '../../context/resultContext';
import Pagination from '../common/Pagination';

function Results() {
  const { items, isLoading, isError, pages } = useContext(ResultContext);
  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isError) {
    content = <div>Something went wrong</div>;
  } else {
    content = (
      <>
        {items.length > 0 ? (
          <ul className="list">
            {items.map((item) => (
              <ListItem key={item.uid} food={item} />
            ))}
          </ul>
        ) : (
          <div>No results</div>
        )}
        <Pagination pages={pages} />
      </>
    );
  }

  return (
    <div className="results">
      <h2>Results</h2>
      {content}
    </div>
  );
}

export default Results;
