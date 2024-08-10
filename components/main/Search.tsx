import { ChangeEvent, useContext } from 'react';
import { useRouter } from 'next/router';
import useLocalStorageSearchValue from '../../helpers/hooks';
import { defaultPage } from '../../helpers/constants';
import { ThemeContext } from '../../context/themeContext';

function Search() {
  const router = useRouter();
  const { query } = router;

  const { searchValue, setSearchValue, saveSearchValueInLS } = useLocalStorageSearchValue();
  const { theme } = useContext(ThemeContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = async () => {
    saveSearchValueInLS();
    router.push({ query: { ...query, page: defaultPage.toString(), search: searchValue } });
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
