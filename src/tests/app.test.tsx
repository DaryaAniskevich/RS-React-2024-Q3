import { render, screen } from '@testing-library/react';
import { it } from 'vitest';
import App from '../App';

describe('App render', () => {
  it('should render RouterProvider and navigate to initial route', () => {
    render(<App />);

    const initialRouteElement = screen.getByText('Magazines Results');
    expect(initialRouteElement).toBeInTheDocument();
  });
});
