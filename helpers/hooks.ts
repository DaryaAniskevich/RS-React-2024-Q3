import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { localStorageSearchValue } from './constants';

const useLocalStorageSearchValue = () => {
  const router = useRouter();
  const { query } = router;

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localStorageValue = localStorage.getItem(localStorageSearchValue);
      if (typeof localStorageValue === 'string') {
        router.push({ query: { ...query, search: localStorageValue } });

        setSearchValue(localStorageValue);
      }
    }
  }, []);

  const saveSearchValueInLS = () => localStorage.setItem(localStorageSearchValue, searchValue);

  return { searchValue, setSearchValue, saveSearchValueInLS };
};

export default useLocalStorageSearchValue;
