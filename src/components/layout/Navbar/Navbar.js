import React from 'react';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Navbar = ({ navLinks, toggleAside }) => {
  const toggler = () => {
    window.matchMedia('(max-width: 767px)').matches && toggleAside();
  };

  return (
    <nav className={clsx(styles.root)}>
      {navLinks.map(({ id, linkTo, text }) => (
        <NavLink
          key={id}
          exact
          to={linkTo}
          className={styles.menuLink}
          activeClassName={styles.active}
          onClick={toggler}
        >
          <p className={styles.menuText}>{text}</p>
        </NavLink>
      ))}
    </nav>
  );
};

Navbar.propTypes = {
  navLinks: PropTypes.array,
  toggleAside: PropTypes.func,
};

Navbar.defaultProps = {
  navLinks: [],
};

export default Navbar;
