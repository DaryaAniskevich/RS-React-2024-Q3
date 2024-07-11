import { useEffect, useState } from 'react';
import { localStorageSearchValue } from './constants';

const useLocalStorageSearchValue = () => {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem(localStorageSearchValue) ?? '',
  );

  useEffect(() => {
    const localStorageValue = localStorage.getItem(localStorageSearchValue);
    if (typeof localStorageValue === 'string') {
      setSearchValue(localStorageValue);
    }
  }, []);

  useEffect(
    () => () => {
      localStorage.setItem(localStorageSearchValue, searchValue);
    },
    [searchValue],
  );

  return { searchValue, setSearchValue };
};

export default useLocalStorageSearchValue;
