import React from 'react';
import styles from './ExplorePage.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ExplorePage = ({ className, children }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <h2>ExplorePage</h2>
      {children}
    </div>
  );
};

ExplorePage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ExplorePage;
