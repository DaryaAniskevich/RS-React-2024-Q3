import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { useRouter } from 'next/router';
import type { Mock } from 'jest-mock';
import { magazineListResponse, oneProductResponse } from './mockData';
import Details from '../pages/details/[uid]';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

describe('Main page render', () => {
  it('should render 0 items and show no results message on details page', () => {
    const pushMock = vi.fn();

    (useRouter as Mock).mockReturnValue({
      push: pushMock,
      query: { page: '1' },
    });

    render(<Details dataAll={magazineListResponse} dataDetails={oneProductResponse} />);
    const textElement = screen.getByText('No results');
    expect(textElement).toBeInTheDocument();
  });

  it('should show Loader in case of loading on details page', () => {
    render(<Details dataAll={undefined} dataDetails={oneProductResponse} />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
  it('should render relevant details card data', () => {
    render(<Details dataAll={undefined} dataDetails={oneProductResponse} />);

    const titleElement = screen.getByText(
      `${oneProductResponse.magazine.title}, ${oneProductResponse.magazine.numberOfPages} pages (${oneProductResponse.magazine.publishedYear})`,
    );

    expect(titleElement).toBeInTheDocument();
  });
});
