import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../context/themeContext';
import ErrorBoundaryLayout from '../components/common/ErrorBoundaryLayout';
import { DARK, LIGHT, localStorageTheme } from '../helpers/constants';

describe('ThemeContext', () => {
  it('should toggle theme from light to dark and save in LS', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <ErrorBoundaryLayout />
        </BrowserRouter>
      </ThemeProvider>,
    );

    const toggleButton = screen.getByText('Set dark theme');
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton, () => {
      const LSValue = localStorage.getItem(localStorageTheme);
      expect(LSValue).toBe(LIGHT);
    });

    expect(screen.getByText('Set light theme')).toBeInTheDocument();
  });

  it('should take saved theme from LS and set ad chosen', () => {
    localStorage.setItem(localStorageTheme, DARK);

    render(
      <ThemeProvider>
        <BrowserRouter>
          <ErrorBoundaryLayout />
        </BrowserRouter>
      </ThemeProvider>,
    );

    const toggleButton = screen.getByText('Set light theme');
    expect(toggleButton).toBeInTheDocument();
  });
});
