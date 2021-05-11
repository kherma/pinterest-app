import React, { useEffect } from 'react';
import styles from './ExplorePage.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ImageItem from '../../common/ImageItem/ImageItemContainer';
import ImageItemMobile from '../../common/ImageItemMobile/ImageItemMobileContainer';
import MasonryGrid from '../../layout/MasonryGrid/MasonryGridContainer';

const ExplorePage = ({ images, loading, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={clsx(styles.root)}>
      <MasonryGrid>
        {images.map((item) => {
          return window.matchMedia('(min-width: 1199px)').matches ? (
            <ImageItem key={item.id} {...item} />
          ) : (
            <ImageItemMobile key={item.id} {...item} />
          );
        })}
      </MasonryGrid>
    </div>
  );
};

ExplorePage.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.object,
  fetchData: PropTypes.func,
};

ExplorePage.defaultProps = {
  images: [],
};

export default ExplorePage;
