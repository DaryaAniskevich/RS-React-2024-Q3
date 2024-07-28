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

  const saveSearchValueInLS = () => localStorage.setItem(localStorageSearchValue, searchValue);

  return { searchValue, setSearchValue, saveSearchValueInLS };
};

export default useLocalStorageSearchValue;
