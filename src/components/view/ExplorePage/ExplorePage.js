import React, { useEffect } from 'react';
import styles from './ExplorePage.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ExplorePage = ({ images, loading, fatchData }) => {
  useEffect(() => {
    fatchData();
  }, [fatchData]);
  return (
    <div className={clsx(styles.root)}>
      <h2>ExplorePage</h2>
    </div>
  );
};

ExplorePage.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.object,
  fatchData: PropTypes.func,
};

export default ExplorePage;
