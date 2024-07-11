import Loader from '../common/Loader';
import { ResultsProps } from '../../helpers/types';
import ListItem from './ListItem';

function Results({ data, isLoading, isError }: ResultsProps) {
  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isError) {
    content = <div>Something went wrong</div>;
  } else {
    content = (
      <ul className="list">
        {data.map((item) => (
          <ListItem key={item.uid} food={item} />
        ))}
      </ul>
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
