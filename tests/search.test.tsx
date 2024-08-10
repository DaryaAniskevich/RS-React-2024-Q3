import { fireEvent, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, vi } from 'vitest';
import { useRouter } from 'next/router';
import type { Mock } from 'jest-mock';
import Search from '../components/main/Search';
import { localStorageSearchValue } from '../helpers/constants';

const searchValue = 'magazine';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

describe('Search render', () => {
  it('should save search value in the local storage', async () => {
    const pushMock = vi.fn();

    (useRouter as Mock).mockReturnValue({
      push: pushMock,
      query: {},
    });

    render(<Search />);
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

    const { getByDisplayValue } = render(<Search />);

    const searchInput = getByDisplayValue(searchValue);

    expect(searchInput).toBeInTheDocument();
  });
});
