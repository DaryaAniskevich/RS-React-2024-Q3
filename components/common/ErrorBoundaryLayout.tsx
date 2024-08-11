import { useCallback, useMemo, useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { ErrorBoundaryLayoutProps } from '../../helpers/types';
import { DARK, LIGHT } from '../../helpers/constants';
import style from './style.module.css';
import ButtonGreen from './ButtonGreen';
import ThemeContext from '../../context/themeContext';
import { SelectedProvider } from '../../context/selectedContext';

export default function ErrorBoundaryLayout({ children = null }: ErrorBoundaryLayoutProps) {
  const [theme, setTheme] = useState<typeof LIGHT | typeof DARK>(LIGHT);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === LIGHT ? DARK : LIGHT;
    setTheme(newTheme);
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <SelectedProvider>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <header className={`${style[theme]} ${style.header}`}>
            <ButtonGreen className={style.button_theme} onClick={toggleTheme}>
              {`Set ${theme === LIGHT ? DARK : LIGHT} theme`}
            </ButtonGreen>
          </header>
          <div className={style[theme]}>{children && children}</div>
        </ErrorBoundary>
      </SelectedProvider>
    </ThemeContext.Provider>
  );
}
