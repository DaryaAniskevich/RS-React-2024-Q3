import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/themeContext';
import '../styles/index.css';
import '../styles/App.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
