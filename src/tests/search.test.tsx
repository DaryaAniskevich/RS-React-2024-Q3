import { fireEvent, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Search from '../components/main/Search';
import { localStorageSearchValue } from '../helpers/constants';

const searchValue = 'magazine';

describe('Search render', () => {
  it('should save search value in the local storage', async () => {
    render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>,
    );
    const searchInput: HTMLInputElement = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button');

    const initialValue = searchInput.value;
    expect(initialValue).toBe('');

    userEvent.type(searchInput, searchValue);

    fireEvent.click(searchButton, () => {
      const LSValue = localStorage.getItem(localStorageSearchValue);
      expect(LSValue).toBe(searchValue);
    });
  });

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
