import React, { useEffect } from 'react';
import styles from './ExplorePage.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ImageItem from '../../common/ImageItem/ImageItem';
import MasonryGrid from '../../layout/MasonryGrid/MasonryGridContainer';

const ExplorePage = ({ images, loading, fatchData }) => {
  useEffect(() => {
    fatchData();
  }, [fatchData]);

  return (
    <div className={clsx(styles.root)}>
      <MasonryGrid>
        {images.map((item) => (
          <ImageItem key={item.id} {...item} />
        ))}
      </MasonryGrid>
    </div>
  );
};

ExplorePage.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.object,
  fatchData: PropTypes.func,
};

ExplorePage.defaultProps = {
  images: [],
};

export default ExplorePage;
