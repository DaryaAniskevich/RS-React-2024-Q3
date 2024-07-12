import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DetailsData from '../components/details/DetailsData';
import { item, numberOfPages, publishedYear, publisherName, seriesTitle, title } from './mockData';

const itemEmpty = {
  uid: '1',
  title,
  publishedYear: null,
  publishedMonth: null,
  publishedDay: null,
  coverYear: null,
  coverMonth: null,
  coverDay: null,
  numberOfPages: null,
  issueNumber: null,
  magazineSeries: [],
  publishers: [],
  editors: [],
};

describe('Details card data render', () => {
  it('should render detail data in card with full data', () => {
    render(
      <BrowserRouter>
        <DetailsData data={item} />
      </BrowserRouter>,
    );

    const titleElement = screen.getByText(`${title}, ${numberOfPages} pages (${publishedYear})`);
    const seriesTitleElement = screen.getByText(`Magazine series: ${seriesTitle}`);
    const publisherElement = screen.getByText(`Publisher: ${publisherName}`);

    expect(titleElement).toBeInTheDocument();
    expect(seriesTitleElement).toBeInTheDocument();
    expect(publisherElement).toBeInTheDocument();
  });

  it('should render detail data in card with title only', () => {
    render(
      <BrowserRouter>
        <DetailsData data={itemEmpty} />
      </BrowserRouter>,
    );

    const titleElement = screen.getByText(`${title}`);
    const seriesTitleElement = screen.getByText(`Magazine series: No data`);
    const publisherElement = screen.getByText(`Publisher: No data`);

    expect(titleElement).toBeInTheDocument();
    expect(seriesTitleElement).toBeInTheDocument();
    expect(publisherElement).toBeInTheDocument();
  });
});
