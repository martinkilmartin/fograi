import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import './masonry.css';
import './bg.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider
      defaultTheme="light"
      attribute="data-theme"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Analytics />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
