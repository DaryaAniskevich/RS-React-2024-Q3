import { ChangeEvent } from 'react';
import useLocalStorageSearchValue from '../../helpers/hooks';

function Search({ fetchData }: { fetchData: (search?: string) => void }) {
  const { searchValue, setSearchValue } = useLocalStorageSearchValue();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search">
      <input value={searchValue} onChange={handleChange} />
      <button type="submit" onClick={() => fetchData(searchValue)} className="button-search">
        Search
      </button>
    </div>
  );
}

export default Search;
