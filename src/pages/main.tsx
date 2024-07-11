import { useEffect, useState } from 'react';
import Search from '../components/main/Search';
import Results from '../components/main/Results';
import { FoodItem } from '../helpers/types';
import useLocalStorageSearchValue from '../helpers/hooks';
import api from '../api/api';

function Main() {
  const { searchValue } = useLocalStorageSearchValue();

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingError, setIsLoadingError] = useState(false);
  const [items, setItems] = useState<FoodItem[]>([]);

  const addError = () => {
    setIsError(true);
  };
  const setRequestResult = (data: FoodItem[]) => {
    setIsLoading(false);
    setItems(data);
  };

  const fetchData = (search?: string) => {
    try {
      setIsLoading(true);
      setIsLoadingError(false);
      if (search) {
        api.getSearchResult(search).then((result) => {
          setRequestResult(result.foods);
        });
      } else {
        api.getAllList().then((result) => {
          setRequestResult(result.foods);
        });
      }
    } catch (e) {
      setIsLoadingError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(searchValue);
  }, []);

  if (isError) {
    throw new Error('Something went wrong');
  }

  return (
    <main className="container">
      <button type="button" onClick={addError} className="button-boundary">
        Check Error Boundary
      </button>
      <Search fetchData={fetchData} />
      <Results data={items} isLoading={isLoading} isError={isLoadingError} />
    </main>
  );
}

export default Main;
