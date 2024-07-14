import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CardList from '../components/main/CardList';
import { MagazineItem } from '../helpers/types';
import { ResultProvider } from '../context/resultContext';

describe('Card List render', () => {
  it('should render 2 items', () => {
    const currentPage = 1;
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

    render(
      <BrowserRouter>
        <ResultProvider>
          <CardList items={items} currentPage={currentPage} />
        </ResultProvider>
      </BrowserRouter>,
    );
    const elements = screen.getAllByRole('listitem');
    expect(elements.length).toBe(items.length);
  });

  it('should render 0 items and show no results message', () => {
    const currentPage = 1;
    const items: MagazineItem[] = [];

    render(
      <BrowserRouter>
        <ResultProvider>
          <CardList items={items} currentPage={currentPage} />
        </ResultProvider>
      </BrowserRouter>,
    );

    const textElement = screen.getByText('No results');
    expect(textElement).toBeInTheDocument();
  });
});
