import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import ErrorBoundaryLayout from '../components/common/ErrorBoundaryLayout';

describe('ThemeContext', () => {
  it('should toggle theme from light to dark and save in LS', () => {
    render(<ErrorBoundaryLayout />);

    const toggleButton = screen.getByText('Set dark theme');
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(screen.getByText('Set light theme')).toBeInTheDocument();
  });
});
