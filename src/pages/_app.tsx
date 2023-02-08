import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import { SSRProvider } from '@react-aria/ssr';

const lightTheme = createTheme({
  type: 'light',
  theme: {},
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {},
})

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SSRProvider>
      <ThemeProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        {' '}
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </ThemeProvider></SSRProvider>
  )
}

export default MyApp
