import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { useRouter } from 'next/navigation';
import DetailsCard from '../components/details/DetailsCard';
import DetailsData from '../components/details/DetailsData';
import { item, numberOfPages, publishedYear, publisherName, seriesTitle, title } from './mockData';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}));

describe('Details card render', () => {
  const pushMock = vi.fn();
  useRouter().push = pushMock;

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

  it('should call router.push on close button click', () => {
    render(<DetailsCard data={item} isLoading={false} isError={false} />);

    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);
  });
});
