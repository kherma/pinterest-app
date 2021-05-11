import React, { useEffect } from 'react';
import styles from './ExplorePage.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import InfiniteScroll from 'react-infinite-scroll-component';

import ImageItem from '../../common/ImageItem/ImageItemContainer';
import ImageItemMobile from '../../common/ImageItemMobile/ImageItemMobileContainer';
import MasonryGrid from '../../layout/MasonryGrid/MasonryGridContainer';
import Loading from '../../common/Loading/LoadingContainer';

const ExplorePage = ({ images, fetchData, changePage, more }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const loadMore = () => {
    changePage();
    fetchData();
  };

  const calcHeight = () => {
    let height;

    if (window.matchMedia('(min-width: 1199px)').matches) {
      height = window.innerHeight - 101;
    }

    if (window.matchMedia('(max-width: 1199px)').matches) {
      height = window.innerHeight - 91;
    }

    if (window.matchMedia('(max-width: 700px)').matches) {
      height = window.innerHeight - 61;
    }

    return height;
  };

  return (
    <div className={clsx(styles.root)}>
      <InfiniteScroll
        className={styles.gridContainer}
        dataLength={images.length}
        next={loadMore}
        hasMore={more}
        loader={<Loading />}
        height={calcHeight()}
        scrollThreshold={0.8}
        endMessage={
          <p className={styles.endMEssage}>Yay! You have seen it all</p>
        }
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
  more: PropTypes.bool,
};

ExplorePage.defaultProps = {
  images: [],
};

export default ExplorePage;
