import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { useRouter } from 'next/router';
import type { Mock } from 'jest-mock';
import Pagination from '../components/common/Pagination';
import { currentPage } from './mockData';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

describe('Pagination render', () => {
  it('should update URL on page change', () => {
    const page = currentPage + 1;
    const pushMock = vi.fn();

    (useRouter as Mock).mockImplementation(() => ({
      query: { page: page.toString() },
      push: pushMock,
    }));

    const changePage = (newPage: number) => {
      pushMock({ query: { page: newPage.toString() } });
    };

    render(<Pagination pages={3} currentPage={page} changePage={changePage} />);

    const prevButtonElement = screen.getByText('Prev');
    const nextButtonElement = screen.getByText('Next');

    const text = screen.getByText(`${page} of 3`);

    expect(text).toBeInTheDocument();

    fireEvent.click(prevButtonElement);
    expect(pushMock).toHaveBeenCalledWith({ query: { page: (page - 1).toString() } });

    fireEvent.click(nextButtonElement);
    expect(pushMock).toHaveBeenCalledWith({ query: { page: (page + 1).toString() } });

    expect(nextButtonElement).toBeInTheDocument();
  });
});
