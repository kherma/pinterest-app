import React, { useEffect } from 'react';
import styles from './FavoritesPage.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import ImageItem from '../../common/ImageItem/ImageItemContainer';
import ImageItemMobile from '../../common/ImageItemMobile/ImageItemMobileContainer';
import MasonryGrid from '../../layout/MasonryGrid/MasonryGridContainer';

const FavoritesPage = ({ data, loading }) => {
  return (
    <div className={clsx(styles.root)}>
      {data.length ? (
        <MasonryGrid>
          {data.map((item) => {
            return window.matchMedia('(min-width: 1199px)').matches ? (
              <ImageItem key={item.id} {...item} />
            ) : (
              <ImageItemMobile key={item.id} {...item} />
            );
          })}
        </MasonryGrid>
      ) : (
        <div className={styles.container}>
          <p className={styles.text}>You haven&apos;t saved any Pins yet</p>
          <Link to="/" className={styles.btnLink}>
            Find ideas
          </Link>
        </div>
      )}
    </div>
  );
};

FavoritesPage.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.object,
};

FavoritesPage.defaultProps = {
  data: [],
};

export default FavoritesPage;
