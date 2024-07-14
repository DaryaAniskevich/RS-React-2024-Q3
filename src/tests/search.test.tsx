import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Search from '../components/main/Search';
import { localStorageSearchValue } from '../helpers/constants';

const searchValue = 'magazine';

describe('Search render', () => {
  it('should retrieve the value from the local storage upon mounting', () => {
    localStorage.setItem(localStorageSearchValue, searchValue);

    const { getByDisplayValue } = render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>,
    );

    const searchInput = getByDisplayValue(searchValue);

    expect(searchInput).toBeInTheDocument();
  });
});
