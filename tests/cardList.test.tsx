import '@testing-library/jest-dom';

import { vi, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import type { Mock } from 'jest-mock';
import { useRouter } from 'next/router';

import CardList from '../components/main/CardList';
import { MagazineItem } from '../helpers/types';
import { ResultProvider } from '../context/resultContext';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

const items = [
  {
    uid: '1',
    title: 'Test Magazine 1',
    publishedYear: 1999,
    publishedMonth: null,
    publishedDay: null,
    coverYear: null,
    coverMonth: null,
    coverDay: null,
    numberOfPages: 70,
    issueNumber: null,
  },
  {
    uid: '2',
    title: 'Test Magazine 2',
    publishedYear: 1999,
    publishedMonth: null,
    publishedDay: null,
    coverYear: null,
    coverMonth: null,
    coverDay: null,
    numberOfPages: 70,
    issueNumber: null,
  },
];

describe('Card List render', () => {
  it('should render 2 items', () => {
    const currentPage = 1;

    const pushMock = vi.fn();

    (useRouter as Mock).mockReturnValue({
      push: pushMock,
      query: {},
    });

    render(
      <ResultProvider>
        <CardList items={items} currentPage={currentPage} />
      </ResultProvider>,
    );
    const elements = screen.getAllByRole('listitem');
    expect(elements.length).toBe(items.length);
  });

  it('should render 0 items and show no results message', () => {
    const currentPage = 1;
    const emptyItems: MagazineItem[] = [];

    render(
      <ResultProvider>
        <CardList items={emptyItems} currentPage={currentPage} />
      </ResultProvider>,
    );

    const textElement = screen.getByText('No results');
    expect(textElement).toBeInTheDocument();
  });
});
