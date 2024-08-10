import { useContext } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { ErrorBoundaryLayoutProps } from '../../helpers/types';
import { ThemeContext } from '../../context/themeContext';
import { DARK, LIGHT } from '../../helpers/constants';
import style from './style.module.css';
import ButtonGreen from './ButtonGreen';

function ErrorBoundaryLayout({ children = null }: ErrorBoundaryLayoutProps) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <header className={`${style[theme]} ${style.header}`}>
        <ButtonGreen className={style.button_theme} onClick={toggleTheme}>
          Set {theme === LIGHT ? DARK : LIGHT} theme
        </ButtonGreen>
      </header>
      {children && children}
    </ErrorBoundary>
  );
}

export default ErrorBoundaryLayout;
