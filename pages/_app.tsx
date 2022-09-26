import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DarkTheme, LightTheme } from '@theme/theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '@components/Layout';
import { ThemeContext } from '@lib/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(LightTheme);

  useEffect(() => {
    setTheme(
      localStorage.getItem('darkToggle') === 'dark' ? DarkTheme : LightTheme
    );
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <CssBaseline enableColorScheme />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
