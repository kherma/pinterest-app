import React from 'react';
import styles from './Navbar.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Navbar = ({ className }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <h2 className={styles.title}>Navbar</h2>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
