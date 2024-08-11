import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import { useRouter } from 'next/navigation';
import { ResultProvider } from '../context/resultContext';
import Results from '../components/main/Results';
import { SelectedProvider } from '../context/selectedContext';
import { fetchSearchData } from '../api/api';
import { selectedItems } from './mockData';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/search',
  useSearchParams: () => new URLSearchParams(),
}));

vi.mock('../api/api', () => ({
  fetchSearchData: vi.fn(),
}));

describe('Results page render', () => {
  const pushMock = vi.fn();
  useRouter().push = pushMock;

  it('should show Loader in case of loading', () => {
    render(
      <ResultProvider page="1">
        <Results />
      </ResultProvider>,
    );
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('renders card list when data is fetched', async () => {
    const mockData = {
      page: {
        pageNumber: 0,
        pageSize: 10,
        numberOfElements: 2,
        totalElements: 2,
        totalPages: 1,
        firstPage: true,
        lastPage: true,
      },
      sort: {
        clauses: [],
      },
      magazines: selectedItems,
    };
    (fetchSearchData as Mock).mockResolvedValueOnce(mockData);

    render(
      <SelectedProvider>
        <Results />
      </SelectedProvider>,
    );

    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });

    expect(screen.getByText('Magazines Results')).toBeInTheDocument();
    const elements = screen.getAllByRole('listitem');
    expect(elements.length).toBe(selectedItems.length);
    expect(screen.getByText(`1 of 1`)).toBeInTheDocument();
  });
});
