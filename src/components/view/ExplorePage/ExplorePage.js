import React, { useEffect } from 'react';
import styles from './ExplorePage.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ImageItem from '../../common/ImageItem/ImageItem';

const ExplorePage = ({ images, loading, fatchData }) => {
  useEffect(() => {
    fatchData();
  }, [fatchData]);

  return (
    <div className={clsx(styles.root)}>
      {images.map((item) => (
        <ImageItem key={item.id} {...item} />
      ))}
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
