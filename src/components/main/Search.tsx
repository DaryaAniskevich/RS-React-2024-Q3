import { ChangeEvent, useEffect, useState } from 'react';
import { localStorageSearchValue } from '../../helpers/constants';

function Search() {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const localStorageValue = localStorage.getItem(localStorageSearchValue);
    if (localStorageValue) {
      setInputValue(localStorageValue);
    }
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem(localStorageSearchValue, inputValue);
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="search">
      <input value={inputValue} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit} className="button-search">
        Search
      </button>
    </div>
  );
}

export default Search;
