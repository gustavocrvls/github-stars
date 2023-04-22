import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { UserProvider } from 'hooks/useUser';
import { GlobalStyles, theme } from 'styles';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      {/** @ts-ignore */}
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Component {...pageProps} />
          {/** @ts-ignore */}
          <GlobalStyles />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}
