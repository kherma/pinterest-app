import React from 'react';
import styles from './FavoritesPage.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const FavoritesPage = ({ className, children }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <h2>FavoritesPage</h2>
      {children}
    </div>
  );
};

FavoritesPage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default FavoritesPage;
