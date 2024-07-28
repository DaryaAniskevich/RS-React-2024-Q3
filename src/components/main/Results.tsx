import { useContext } from 'react';
import { useSelector } from 'react-redux';

import { useSearchParams } from 'react-router-dom';
import Loader from '../common/Loader';
import { ResultContext } from '../../context/resultContext';
import Pagination from '../common/Pagination';
import ErrorMessage from '../common/ErrorMessage';
import CardList from './CardList';
import useLocalStorageSearchValue from '../../helpers/hooks';
import { selectedItemsSelector, selectSearchResultData } from '../../store/selectors';
import { MagazineListResponse } from '../../helpers/types';
import ActionsWithSelectedItems from './ActionsWithSelectedItems';

function Results() {
  const { pages, currentPage, isLoading, isError, fetchData } = useContext(ResultContext);

  const [, setSearchParams] = useSearchParams();

  const searchData: MagazineListResponse | undefined = useSelector(selectSearchResultData);

  const { searchValue } = useLocalStorageSearchValue();
  const { selectedItems } = useSelector(selectedItemsSelector);

  const numberOfSelectedItems = selectedItems.length;

  const changePage = (page: number) => {
    setSearchParams({ page: page.toString() });
    fetchData({ search: searchValue, page });
  };

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isError) {
    content = <ErrorMessage />;
  } else {
    content = (
      <>
        <CardList items={searchData ? searchData?.magazines : []} currentPage={currentPage} />
        <Pagination pages={pages} currentPage={currentPage} changePage={changePage} />
        {numberOfSelectedItems > 0 && <ActionsWithSelectedItems />}
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
