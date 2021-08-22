import { PropsWithChildren } from 'react';
import Header from './navbar';

const Layout = ({ children }: PropsWithChildren<unknown>) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
