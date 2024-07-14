import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { it } from 'vitest';
import NotFound from '../pages/notFound';

describe('Not found render', () => {
  it('should render Not found page', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );

    const textElement = screen.getByText('OOPS! This page is not found...');

    expect(textElement).toBeInTheDocument();
  });
});
