import React from 'react';
import styles from './FavoritesPage.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const FavoritesPage = ({ data }) => {
  console.log(data);
  return (
    <div className={clsx(styles.root)}>
      <h2>FavoritesPage</h2>
    </div>
  );
};

FavoritesPage.propTypes = {
  data: PropTypes.array,
};

export default FavoritesPage;
