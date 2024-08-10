import { render, screen } from '@testing-library/react';
import { it } from 'vitest';
import NotFound from '../pages/404';

describe('Not found render', () => {
  it('should render Not found page', () => {
    render(<NotFound />);

    const textElement = screen.getByText('OOPS! This page is not found...');

    expect(textElement).toBeInTheDocument();
  });
});
