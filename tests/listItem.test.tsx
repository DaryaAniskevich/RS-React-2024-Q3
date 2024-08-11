import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import type { Mock } from 'jest-mock';
import { useRouter } from 'next/router';

import ListItem from '../components/main/ListItem';
import { defaultPage, magazineKeyTranslation } from '../helpers/constants';
import { ResultProvider } from '../context/resultContext';
import { MagazineItem } from '../helpers/types';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

const currentPage = defaultPage;
const title = 'Test Magazine 1';
const publishedYear = 1999;
const numberOfPages = 70;

const item: MagazineItem = {
  uid: '1',
  title,
  publishedYear,
  publishedMonth: null,
  publishedDay: null,
  coverYear: null,
  coverMonth: null,
  coverDay: null,
  numberOfPages,
  issueNumber: null,
};
const selectItem = () => {};
describe('Card List item render', () => {
  it('should render relevant card data', () => {
    const pushMock = vi.fn();

    (useRouter as Mock).mockReturnValue({
      push: pushMock,
      query: { page: currentPage.toString() },
    });

    render(
      <ResultProvider page="1">
        <ListItem magazine={item} currentPage={currentPage} selectItem={selectItem} />
      </ResultProvider>,
    );

    const titleElement = screen.getByText(`Name: ${title}`);
    const typeElement = screen.getByText(
      `${magazineKeyTranslation.publishedYear}: ${publishedYear}, ${magazineKeyTranslation.numberOfPages}: ${numberOfPages}`,
    );
    expect(titleElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
  });

  it('should render relevant card data with no data message', () => {
    const pushMock = vi.fn();

    (useRouter as Mock).mockReturnValue({
      push: pushMock,
      query: { page: currentPage.toString() },
    });

    item.publishedYear = null;
    item.numberOfPages = null;

    render(
      <ResultProvider page="1">
        <ListItem magazine={item} currentPage={currentPage} selectItem={selectItem} />
      </ResultProvider>,
    );

    const titleElement = screen.getByText(`Name: ${title}`);
    const typeElement = screen.getByText(
      `${magazineKeyTranslation.publishedYear}: No data, ${magazineKeyTranslation.numberOfPages}: No data`,
    );
    expect(titleElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
  });
});
