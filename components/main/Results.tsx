import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '../common/Loader';
import { ResultContext } from '../../context/resultContext';
import Pagination from '../common/Pagination';
import CardList from './CardList';
import { MagazineListResponse } from '../../helpers/types';
import style from './style.module.css';
import ActionsWithSelectedItems from './ActionsWithSelectedItems';
import { SelectedContext } from '../../context/selectedContext';

function Results({ data }: { data: MagazineListResponse | undefined }) {
  const router = useRouter();
  const { query } = router;

  const { pages, setAllPagesFn, currentPage } = useContext(ResultContext);
  const { selectedItems } = useContext(SelectedContext);

  useEffect(() => {
    setAllPagesFn(data?.page.totalPages || 0);
  }, [data, setAllPagesFn]);

  const searchData = data?.magazines || [];

  const changePage = (page: number) => {
    router.push({ query: { ...query, page: page.toString() } });
  };

  const numberOfSelectedItems = selectedItems.length;

  let content;

  if (!data) {
    content = <Loader />;
  } else {
    content = (
      <>
        <CardList items={searchData} currentPage={currentPage} />
        <Pagination pages={pages} currentPage={currentPage} changePage={changePage} />
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
