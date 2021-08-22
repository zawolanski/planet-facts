import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
