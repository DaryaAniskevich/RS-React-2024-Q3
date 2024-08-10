import { useContext } from 'react';
// import { Outlet } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { ErrorBoundaryLayoutProps } from '../../helpers/types';
import { ThemeContext } from '../../context/themeContext';
import { DARK, LIGHT } from '../../helpers/constants';

function ErrorBoundaryLayout({ children = null }: ErrorBoundaryLayoutProps) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <header className={theme}>
        <button type="button" className={`button-theme ${theme}`} onClick={toggleTheme}>
          Set {theme === LIGHT ? DARK : LIGHT} theme
        </button>
      </header>
      {/* <Outlet /> */}
      {children && children}
    </ErrorBoundary>
  );
}

export default ErrorBoundaryLayout;
