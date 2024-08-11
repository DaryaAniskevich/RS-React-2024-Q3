'use client';

import { createContext } from 'react';
import { LIGHT } from '../helpers/constants';

const ThemeContext = createContext({
  theme: LIGHT,
  toggleTheme: () => {},
});

export default ThemeContext;
