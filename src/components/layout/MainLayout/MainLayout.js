import React from 'react';
import styles from './MainLayout.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const MainLayout = ({ className, children }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <h2>MainLayout</h2>
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default MainLayout;
