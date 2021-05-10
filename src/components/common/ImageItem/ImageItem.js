import React from 'react';
import styles from './ImageItem.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { imgSize } from '../../../utils/itemIamgeSize';

const ImageItem = ({ id, author, width, height, url }) => {
  return (
    <div className={clsx(styles.root)}>
      <Link to="/favorites" className={styles.imgLink}>
        <img
          className={styles.img}
          src={`https://picsum.photos/id/${id}/200/${imgSize(width, height)}`}
          alt={author}
        />
      </Link>
      <span
        className={styles.overlay}
        style={{
          width: '20rem',
          height: `${imgSize(width, height)}px`,
        }}
      ></span>
      <button className={styles.btnSave}>save</button>
      <a className={styles.btnLink} href={url} target="_blank" rel="noreferrer">
        source
      </a>
      <p className={styles.author}>{author}</p>
    </div>
  );
};

ImageItem.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  url: PropTypes.string,
};

export default ImageItem;
