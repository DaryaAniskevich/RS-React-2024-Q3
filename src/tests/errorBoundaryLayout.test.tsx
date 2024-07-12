import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundaryLayout from '../components/common/ErrorBoundaryLayout';

describe('ErrorBoundary layout render', () => {
  it('ErrorBoundary catches child component error', () => {
    const errorFallbackText = 'Something went wrong';
    const mockError = new Error('This is a test error');

    const MockChildComponent = vi.fn(() => {
      throw mockError;
    });

    render(
      <BrowserRouter>
        <ErrorBoundaryLayout>
          <MockChildComponent />
        </ErrorBoundaryLayout>
      </BrowserRouter>,
    );

    const fallbackUI = screen.getByText(errorFallbackText);
    expect(fallbackUI).toBeInTheDocument();
  });
});
