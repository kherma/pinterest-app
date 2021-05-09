import React from 'react';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Navbar = ({ navLinks }) => {
  return (
    <nav className={clsx(styles.root)}>
      {navLinks.map(({ id, linkTo, text }) => (
        <NavLink
          key={id}
          exact
          to={linkTo}
          className={styles.menuLink}
          activeClassName={styles.active}
        >
          <p className={styles.menuText}>{text}</p>
        </NavLink>
      ))}
    </nav>
  );
};

Navbar.propTypes = {
  navLinks: PropTypes.array,
};

export default Navbar;
