import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import './masonry.css';
import './bg.css';

const lightTheme = createTheme({
  type: 'light',
  theme: {},
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {},
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <Analytics />
        </QueryClientProvider>
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default MyApp;
