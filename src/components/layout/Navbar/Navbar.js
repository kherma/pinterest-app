import React from 'react';
import styles from './Navbar.module.scss';
import clsx from 'clsx';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={clsx(styles.root)}>
      <NavLink
        exact
        to="/"
        className={styles.menuLink}
        activeClassName={styles.active}
      >
        <p className={styles.menuText}>home</p>
      </NavLink>
      <NavLink
        exact
        to="/favorites"
        className={styles.menuLink}
        activeClassName={styles.active}
      >
        <p className={styles.menuText}>favorites</p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
