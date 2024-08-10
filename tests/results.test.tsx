import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { useRouter } from 'next/router';
import type { Mock } from 'jest-mock';
import { ResultProvider } from '../context/resultContext';
import Results from '../components/main/Results';
import { magazineListResponse } from './mockData';

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
});
