import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import * as styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;