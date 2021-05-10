import React from 'react';
import styles from './MasonryGrid.module.scss';
import PropTypes from 'prop-types';

import Masonry from 'react-masonry-css';

const MasonryGrid = ({ children, breakpoints }) => {
  return (
    <Masonry
      breakpointCols={breakpoints}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {children}
    </Masonry>
  );
};

MasonryGrid.propTypes = {
  children: PropTypes.node,
  breakpoints: PropTypes.object,
};

MasonryGrid.defaultProps = {
  breakpoints: {
    default: 7,
    1199: 3,
    700: 2,
    360: 1,
  },
};

export default MasonryGrid;
