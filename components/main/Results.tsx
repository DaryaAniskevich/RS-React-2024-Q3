'use client';

import { useContext, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Loader from '../common/Loader';
import Pagination from '../common/Pagination';
import CardList from './CardList';
import { MagazineListResponse } from '../../helpers/types';
import style from './style.module.css';
import ActionsWithSelectedItems from './ActionsWithSelectedItems';
import { fetchSearchData } from '../../api/api';
import { SelectedContext } from '../../context/selectedContext';

function Results() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const search = searchParams.get('search');
  const [data, setData] = useState<MagazineListResponse>();

  const getData = async () => {
    const res = await fetchSearchData(Number(page) || 0, search || '');
    setData(res);
  };

  useEffect(() => {
    getData();
  }, [page, search]);

  const { selectedItems } = useContext(SelectedContext);

  const changePage = (newPage: number) => {
    router.push(`${pathname}/?page=${newPage}&search=${search}`);
  };

  const numberOfSelectedItems = selectedItems.length;

  let content;

  if (!data) {
    content = <Loader />;
  } else {
    content = (
      <>
        <CardList items={data?.magazines || []} currentPage={Number(page) || 1} />
        <Pagination
          pages={data?.page?.totalPages || 0}
          currentPage={Number(page) || 1}
          changePage={changePage}
        />
        {numberOfSelectedItems > 0 && <ActionsWithSelectedItems />}
      </>
    );
  }

  return (
    <div className={style.results}>
      <h2>Magazines Results</h2>
      {content}
    </div>
  );
}

export default Results;
