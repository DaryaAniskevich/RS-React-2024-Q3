import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { useRouter } from 'next/router';
import type { Mock } from 'jest-mock';
import Page from '../pages';
import { magazineListResponse } from './mockData';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

describe('Main page render', () => {
  it('should render 0 items and show no results message on main page', () => {
    const pushMock = vi.fn();

    (useRouter as Mock).mockReturnValue({
      push: pushMock,
      query: { page: '1' },
    });

    render(<Page data={magazineListResponse} />);
    const textElement = screen.getByText('No results');
    expect(textElement).toBeInTheDocument();
  });

  it('should show Loader in case of loading on main page', () => {
    render(<Page data={undefined} />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('should update query page if page is not chosen', () => {
    const replaceMock = vi.fn();

    (useRouter as Mock).mockReturnValue({
      replace: replaceMock,
      query: {},
    });

    render(<Page data={undefined} />);

    expect(replaceMock).toHaveBeenCalledWith({ query: { page: '1' } });
  });
});
