import React, { useState, useEffect } from 'react';
import styles from './ExplorePage.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import InfiniteScroll from 'react-infinite-scroll-component';

import ImageItem from '../../common/ImageItem/ImageItemContainer';
import ImageItemMobile from '../../common/ImageItemMobile/ImageItemMobileContainer';
import MasonryGrid from '../../layout/MasonryGrid/MasonryGridContainer';

const ExplorePage = ({ images, fetchData, changePage }) => {
  const [more, setMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const loadMore = () => {
    setMore(false);
    changePage();
    fetchData();
    setMore(true);
  };

  return (
    <div className={clsx(styles.root)}>
      <InfiniteScroll
        className={styles.gridContainer}
        dataLength={images.length}
        next={loadMore}
        hasMore={more}
        loader={<h4>Loading...</h4>}
        height={window.innerHeight - 100}
        scrollThreshold={0.8}
      >
        <MasonryGrid>
          {images.map((item) => {
            return window.matchMedia('(min-width: 1199px)').matches ? (
              <ImageItem key={item.id} {...item} />
            ) : (
              <ImageItemMobile key={item.id} {...item} />
            );
          })}
        </MasonryGrid>
      </InfiniteScroll>
    </div>
  );
};

ExplorePage.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.object,
  fetchData: PropTypes.func,
  changePage: PropTypes.func,
};

ExplorePage.defaultProps = {
  images: [],
};

export default ExplorePage;
