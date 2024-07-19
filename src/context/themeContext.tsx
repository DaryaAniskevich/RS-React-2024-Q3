import { createContext, ReactNode, useMemo, useState } from 'react';
import { LIGHT, DARK } from '../helpers/constants';

export const ThemeContext = createContext({
  theme: LIGHT,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<typeof LIGHT | typeof DARK>(LIGHT);

  const toggleTheme = () => {
    setTheme(theme === LIGHT ? DARK : LIGHT);
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
