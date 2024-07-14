import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ResultContext } from '../context/resultContext';
import Results from '../components/main/Results';

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

const providerValue = {
  items,
  currentPage: 1,
  isLoading: false,
  isError: false,
  pages: 1,
  fetchData: () => {},
};

describe('Results page render', () => {
  it('should render 2 items', () => {
    providerValue.items = items;
    render(
      <BrowserRouter>
        <ResultContext.Provider value={providerValue}>
          <Results />
        </ResultContext.Provider>
      </BrowserRouter>,
    );
    const elements = screen.getAllByRole('listitem');
    expect(elements.length).toBe(items.length);
  });

  it('should render 0 items and show no results message', () => {
    providerValue.items = [];

    render(
      <BrowserRouter>
        <ResultContext.Provider value={providerValue}>
          <Results />
        </ResultContext.Provider>
      </BrowserRouter>,
    );

    const textElement = screen.getByText('No results');
    expect(textElement).toBeInTheDocument();
  });

  it('should show Error message in case of error', () => {
    providerValue.isError = true;

    render(
      <BrowserRouter>
        <ResultContext.Provider value={providerValue}>
          <Results />
        </ResultContext.Provider>
      </BrowserRouter>,
    );

    const textElement = screen.getByText('Something went wrong');
    expect(textElement).toBeInTheDocument();
  });

  it('should show Loader in case of loading', () => {
    providerValue.isLoading = true;

    render(
      <BrowserRouter>
        <ResultContext.Provider value={providerValue}>
          <Results />
        </ResultContext.Provider>
      </BrowserRouter>,
    );

    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
});
