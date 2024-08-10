import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '../common/Loader';
import { ResultContext } from '../../context/resultContext';
import Pagination from '../common/Pagination';
import CardList from './CardList';
import { MagazineListResponse } from '../../helpers/types';

function Results({ data }: { data: MagazineListResponse | undefined }) {
  const router = useRouter();
  const { query } = router;

  const { pages, setAllPagesFn, currentPage } = useContext(ResultContext);

  useEffect(() => {
    setAllPagesFn(data?.page.totalPages || 0);
  }, [data, setAllPagesFn]);

  const searchData = data?.magazines || [];

  const changePage = (page: number) => {
    router.push({ query: { ...query, page: page.toString() } });
  };

  let content;

  if (!data) {
    content = <Loader />;
  } else {
    content = (
      <>
        <CardList items={searchData} currentPage={currentPage} />
        <Pagination pages={pages} currentPage={currentPage} changePage={changePage} />
      </>
    );
  }

  return (
    <div className="results">
      <h2>Magazines Results</h2>
      {content}
    </div>
  );
}

export default Results;
