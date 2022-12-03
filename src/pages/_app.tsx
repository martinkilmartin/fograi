import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'

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
    </ThemeProvider>
  )
}

export default MyApp
