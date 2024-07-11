import { ChangeEvent, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import useLocalStorageSearchValue from '../../helpers/hooks';
import { ResultContext } from '../../context/resultContext';
import { defaultPage } from '../../helpers/constants';

function Search() {
  const [, setSearchParams] = useSearchParams();

  const { searchValue, setSearchValue } = useLocalStorageSearchValue();
  const { fetchData } = useContext(ResultContext);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const handleSubmit = () => {
    setSearchParams({ page: defaultPage.toString() });
    fetchData({ search: searchValue, page: defaultPage });
  };

  return (
    <div className="search">
      <input value={searchValue} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit} className="button-search">
        Search
      </button>
    </div>
  );
}

export default Search;
