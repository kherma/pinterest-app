import React from 'react';
import styles from './AsideMobile.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { IoClose } from 'react-icons/io5';

const AsideMobile = ({ children, theme, aside, toggleAside }) => {
  return (
    <div
      className={clsx(
        styles.root,
        aside ? styles.show : styles.hide,
        theme === 'light' ? styles.light : styles.dark
      )}
    >
      <div className={styles.iconContainer}>
        <IoClose className={styles.icon} onClick={toggleAside} />
      </div>
      {children}
    </div>
  );
};

AsideMobile.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string,
  aside: PropTypes.bool,
  toggleAside: PropTypes.func,
};

export default AsideMobile;
