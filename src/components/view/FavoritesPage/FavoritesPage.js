import React, { useEffect } from 'react';
import styles from './FavoritesPage.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const FavoritesPage = ({ data, loading }) => {
  return (
    <div className={clsx(styles.root)}>
      <h2>FavoritesPage</h2>
    </div>
  );
};

FavoritesPage.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.object,
};

export default FavoritesPage;
