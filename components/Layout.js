import React from 'react';
import Head from 'next/head';

import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Next.js with Auth0</title>
    </Head>

    <Header />

    <main>
      <div className="container">{children}</div>
    </main>
  </>
);

export default Layout;