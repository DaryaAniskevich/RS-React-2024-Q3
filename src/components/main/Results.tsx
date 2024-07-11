import { useEffect, useState } from 'react';
import { apiUrl, localStorageSearchValue } from '../../helpers/constants';
import Loader from '../common/Loader';
import { FoodItem } from '../../helpers/types';
import ListItem from './ListItem';

function Results() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [items, setItems] = useState<FoodItem[]>([]);
  const setRequestResult = (data: FoodItem[]) => {
    setIsLoading(false);
    setItems(data);
  };
  const fetchData = () => {
    const localSearch = localStorage.getItem(localStorageSearchValue);
    try {
      setIsLoading(true);
      if (localSearch) {
        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            name: localSearch,
          }),
        })
          .then((result) => result.json())
          .then((result) => {
            setRequestResult(result.foods);
          });
      } else {
        fetch(apiUrl)
          .then((result) => result.json())
          .then((result) => {
            setRequestResult(result.foods);
          });
      }
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  const handleLocalStorageChange = () => {
    fetchData();
  };

  useEffect(() => {
    window.addEventListener('storage', handleLocalStorageChange, false);
    fetchData();
    return () => {
      window.removeEventListener('storage', handleLocalStorageChange, false);
    };
  }, []);

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isError) {
    content = <div>Something went wrong</div>;
  } else {
    content = (
      <ul className="list">
        {items.map((item) => (
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
