import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { LIGHT, DARK, localStorageTheme } from '../helpers/constants';

export const ThemeContext = createContext({
  theme: LIGHT,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<typeof LIGHT | typeof DARK>(LIGHT);

  useEffect(() => {
    const savedTheme = localStorage.getItem(localStorageTheme);
    if (savedTheme) {
      setTheme(savedTheme as typeof LIGHT | typeof DARK);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === LIGHT ? DARK : LIGHT;
    setTheme(newTheme);
    localStorage.setItem(localStorageTheme, newTheme);
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
