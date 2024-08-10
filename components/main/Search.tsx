import { ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import useLocalStorageSearchValue from '../../helpers/hooks';
import { defaultPage } from '../../helpers/constants';
import ButtonGreen from '../common/ButtonGreen';
import style from './style.module.css';

function Search() {
  const router = useRouter();
  const { query } = router;

  const { searchValue, setSearchValue, saveSearchValueInLS } = useLocalStorageSearchValue();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = async () => {
    saveSearchValueInLS();
    router.push({ query: { ...query, page: defaultPage.toString(), search: searchValue } });
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
