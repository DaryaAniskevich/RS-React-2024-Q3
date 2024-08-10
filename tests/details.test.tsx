import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import type { Mock } from 'jest-mock';
import { useRouter } from 'next/router';
import DetailsCard from '../components/details/DetailsCard';
import DetailsData from '../components/details/DetailsData';
import {
  currentPage,
  item,
  numberOfPages,
  publishedYear,
  publisherName,
  seriesTitle,
  title,
} from './mockData';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

describe('Details card render', () => {
  const pushMock = vi.fn();

  (useRouter as Mock).mockImplementation(() => ({
    query: { page: currentPage.toString() },
    push: pushMock,
  }));

  it('should render relevant details card data', () => {
    render(<DetailsCard data={item} isLoading={false} isError={false} />);

    const titleElement = screen.getByText(`${title}, ${numberOfPages} pages (${publishedYear})`);

    expect(titleElement).toBeInTheDocument();
  });

  it('should show loader while fetching data', () => {
    render(<DetailsCard data={null} isLoading isError={false} />);

    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('should show error message if error', () => {
    render(<DetailsCard data={null} isLoading={false} isError />);

    const errorElement = screen.getByText('Something went wrong');

    expect(errorElement).toBeInTheDocument();
  });

  it('should render detail data in card', () => {
    render(<DetailsData data={item} />);

    const titleElement = screen.getByText(`${title}, ${numberOfPages} pages (${publishedYear})`);
    const seriesTitleElement = screen.getByText(`Magazine series: ${seriesTitle}`);
    const publisherElement = screen.getByText(`Publisher: ${publisherName}`);

    expect(titleElement).toBeInTheDocument();
    expect(seriesTitleElement).toBeInTheDocument();
    expect(publisherElement).toBeInTheDocument();
  });
});
