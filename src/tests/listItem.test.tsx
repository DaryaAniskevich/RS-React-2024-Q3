import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ListItem from '../components/main/ListItem';
import { defaultPage, magazineKeyTranslation, PATHS } from '../helpers/constants';
import { ResultProvider } from '../context/resultContext';
import store from '../store/store';

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
      <Provider store={store}>
        <BrowserRouter>
          <ResultProvider>
            <ListItem magazine={item} currentPage={currentPage} selectItem={() => {}} />
          </ResultProvider>
        </BrowserRouter>
      </Provider>,
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
      <Provider store={store}>
        <BrowserRouter>
          <ResultProvider>
            <ListItem magazine={item} currentPage={currentPage} selectItem={() => {}} />
          </ResultProvider>
        </BrowserRouter>
      </Provider>,
    );

    const card = screen.getByRole('link');
    fireEvent.click(card);
    const { location } = window;
    const { pathname, search } = location;
    expect(pathname + search).toBe(`${PATHS.DETAILS_PAGE}${item.uid}?page=${currentPage}`);
  });
});
