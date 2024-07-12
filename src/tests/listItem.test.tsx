import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ListItem from '../components/main/ListItem';
import { defaultPage, magazineKeyTranslation, PATHS } from '../helpers/constants';
import { ResultProvider } from '../context/resultContext';

const currentPage = defaultPage;
const title = 'Test Magazine 1';
const publishedYear = 1999;
const numberOfPages = 70;

const item = {
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

describe('Card List item render', () => {
  it('should render relevant card data', () => {
    render(
      <BrowserRouter>
        <ResultProvider>
          <ListItem magazine={item} currentPage={currentPage} />
        </ResultProvider>
      </BrowserRouter>,
    );

    const titleElement = screen.getByText(`Name: ${title}`);
    const typeElement = screen.getByText(
      `${magazineKeyTranslation.publishedYear}: ${publishedYear}, ${magazineKeyTranslation.numberOfPages}: ${numberOfPages}`,
    );
    expect(titleElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
  });

  it('should open details', () => {
    render(
      <BrowserRouter>
        <ResultProvider>
          <ListItem magazine={item} currentPage={currentPage} />
        </ResultProvider>
      </BrowserRouter>,
    );

    const card = screen.getByRole('link');
    fireEvent.click(card);
    const { location } = window;
    const { pathname, search } = location;
    expect(pathname + search).toBe(`${PATHS.DETAILS_PAGE}${item.uid}?page=${currentPage}`);
  });
});
