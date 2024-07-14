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

  const savedSearchValueInLS = () => localStorage.setItem(localStorageSearchValue, searchValue);

  return { searchValue, setSearchValue, savedSearchValueInLS };
};

export default useLocalStorageSearchValue;
