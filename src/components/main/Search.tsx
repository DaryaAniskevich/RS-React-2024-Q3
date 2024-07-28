import { ChangeEvent, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import useLocalStorageSearchValue from '../../helpers/hooks';
import { ResultContext } from '../../context/resultContext';
import { defaultPage } from '../../helpers/constants';
import { ThemeContext } from '../../context/themeContext';

function Search() {
  const [, setSearchParams] = useSearchParams();

  const { searchValue, setSearchValue, saveSearchValueInLS } = useLocalStorageSearchValue();
  const { fetchData } = useContext(ResultContext);
  const { theme } = useContext(ThemeContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = async () => {
    setSearchParams({ page: defaultPage.toString() });
    saveSearchValueInLS();
    fetchData({ search: searchValue, page: defaultPage });
  };

  return (
    <div className="search">
      <input value={searchValue} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit} className={`${theme} button-search`}>
        Search
      </button>
    </div>
  );
}

export default Search;
