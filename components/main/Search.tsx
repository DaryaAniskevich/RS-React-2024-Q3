'use client';

import { ChangeEvent, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useLocalStorageSearchValue from '../../helpers/hooks';
import { defaultPage } from '../../helpers/constants';
import ButtonGreen from '../common/ButtonGreen';
import style from './style.module.css';

function Search() {
  const router = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const search = searchParams.get('search');

  const { searchValue, setSearchValue, saveSearchValueInLS } = useLocalStorageSearchValue();

  useEffect(() => {
    if (!page) {
      router.replace(`${pathname}?page=${defaultPage}&search=${search || searchValue}`);
    }
  }, [page, search, searchValue, pathname, router]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = async () => {
    saveSearchValueInLS();
    router.push(`${pathname}/?page=${defaultPage}&search=${searchValue}`);
  };

  return (
    <div className={style.search}>
      <input value={searchValue} onChange={handleChange} className={style.input} />
      <ButtonGreen className={style.button_search} onClick={handleSubmit}>
        Search
      </ButtonGreen>
    </div>
  );
}

export default Search;
