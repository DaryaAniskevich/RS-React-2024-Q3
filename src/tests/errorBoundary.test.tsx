import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/common/ErrorBoundary';

describe('ErrorBoundary render', () => {
  it('ErrorBoundary catches child component error', () => {
    const errorFallbackText = 'Error';
    const mockError = new Error('This is a test error');

    const MockChildComponent = vi.fn(() => {
      throw mockError;
    });

    render(
      <ErrorBoundary fallback={<div>{errorFallbackText}</div>}>
        <MockChildComponent />
      </ErrorBoundary>,
    );

    const fallbackUI = screen.getByText(errorFallbackText);
    expect(fallbackUI).toBeInTheDocument();
  });
});
