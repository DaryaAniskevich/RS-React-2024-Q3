import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { useRouter } from 'next/navigation';

import Search from '../components/main/Search';
import { localStorageSearchValue } from '../helpers/constants';

const searchValue = 'magazine';

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
  })),
  usePathname: vi.fn(() => '/search'),
  useSearchParams: vi.fn(() => new URLSearchParams()),
}));

describe('Search render', () => {
  it('should retrieve the value from the local storage upon mounting', () => {
    localStorage.setItem(localStorageSearchValue, searchValue);

    const { getByDisplayValue } = render(<Search />);

    const searchInput = getByDisplayValue(searchValue);

    expect(searchInput).toBeInTheDocument();
  });

  it('should submit the form and update search params on submit', () => {
    const mockRouterPush = vi.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush, replace: mockRouterPush });

    render(<Search />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockRouterPush).toHaveBeenCalledWith('/search/?page=1&search=magazine'); // Assuming defaultPage is 1
  });
});
