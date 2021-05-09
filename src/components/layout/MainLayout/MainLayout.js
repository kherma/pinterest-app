import React from 'react';
import styles from './MainLayout.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Navbar from '../Navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className={clsx(styles.root)}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
