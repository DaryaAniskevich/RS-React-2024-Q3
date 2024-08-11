import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { useRouter } from 'next/router';
import type { Mock } from 'jest-mock';
import { ResultProvider } from '../context/resultContext';
import Results from '../components/main/Results';
import { magazineListResponse, magazineListResponseWithData } from './mockData';
import { SelectedProvider } from '../context/selectedContext';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

describe('Results page render', () => {
  it('should render 0 items and show no results message', () => {
    const pushMock = vi.fn();

    (useRouter as Mock).mockReturnValue({
      push: pushMock,
      query: {},
    });

    render(
      <ResultProvider>
        <Results data={magazineListResponse} />
      </ResultProvider>,
    );
    const textElement = screen.getByText('No results');
    expect(textElement).toBeInTheDocument();
  });

  it('should show Loader in case of loading', () => {
    render(
      <ResultProvider>
        <Results data={undefined} />
      </ResultProvider>,
    );
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('should select and unselect list item', () => {
    const pushMock = vi.fn();

    (useRouter as Mock).mockReturnValue({
      push: pushMock,
      query: {},
    });

    render(
      <SelectedProvider>
        <ResultProvider>
          <Results data={magazineListResponseWithData} />
        </ResultProvider>
      </SelectedProvider>,
    );
    const checkboxElements = screen.getAllByRole('checkbox');

    expect(checkboxElements.length).toBe(magazineListResponseWithData.magazines.length);
    const firstElement = checkboxElements[0];

    fireEvent.click(firstElement);

    expect(firstElement).toBeChecked();
    expect(screen.getByText(`1 item selected`)).toBeInTheDocument();

    fireEvent.click(firstElement);

    expect(firstElement).not.toBeChecked();
    expect(screen.queryByText(`1 item selected`)).not.toBeInTheDocument();
  });
});
