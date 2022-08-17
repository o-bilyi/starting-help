import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ToastProvider } from 'react-toast-notifications';

import * as styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <ToastProvider>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </ToastProvider>
  );
};

export default Layout;