import '@testing-library/jest-dom';

import { vi, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import type { Mock } from 'jest-mock';
import { useRouter } from 'next/router';

import CardList from '../components/main/CardList';
import { MagazineItem } from '../helpers/types';
import { SelectedProvider } from '../context/selectedContext';

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

    render(<CardList items={items} currentPage={currentPage} />);
    const elements = screen.getAllByRole('listitem');
    expect(elements.length).toBe(items.length);
  });

  it('should render 0 items and show no results message', () => {
    const currentPage = 1;
    const emptyItems: MagazineItem[] = [];

    render(<CardList items={emptyItems} currentPage={currentPage} />);

    const textElement = screen.getByText('No results');
    expect(textElement).toBeInTheDocument();
  });

  it('should check and uncheck checkboxes in list', () => {
    const currentPage = 1;

    render(
      <SelectedProvider>
        <CardList items={items} currentPage={currentPage} />
      </SelectedProvider>,
    );

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBe(items.length);

    fireEvent.click(checkboxes[0]);

    expect(checkboxes[0]).toBeChecked();

    fireEvent.click(checkboxes[0]);
    expect(checkboxes[0]).not.toBeChecked();
  });
});
