'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { localStorageSearchValue } from './constants';

const useLocalStorageSearchValue = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localStorageValue = localStorage.getItem(localStorageSearchValue);
      if (typeof localStorageValue === 'string') {
        router.push(`${pathname}/?page=${page}&search=${localStorageValue}`);
        setSearchValue(localStorageValue);
      }
    }
  }, [page, pathname, router]);

  const saveSearchValueInLS = () => localStorage.setItem(localStorageSearchValue, searchValue);

  return { searchValue, setSearchValue, saveSearchValueInLS };
};

export default useLocalStorageSearchValue;
