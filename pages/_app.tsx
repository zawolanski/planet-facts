import type { AppProps } from 'next/app';
import { GlobalStyle } from 'styles/theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme/theme';
import Layout from 'components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
