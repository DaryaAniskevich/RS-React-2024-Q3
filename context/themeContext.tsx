import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { LIGHT, DARK, localStorageTheme } from '../helpers/constants';

export const ThemeContext = createContext({
  theme: LIGHT,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<typeof LIGHT | typeof DARK>(LIGHT);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(localStorageTheme);
      if (savedTheme) {
        setTheme(savedTheme as typeof LIGHT | typeof DARK);
      }
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === LIGHT ? DARK : LIGHT;
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(localStorageTheme, newTheme);
    }
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
