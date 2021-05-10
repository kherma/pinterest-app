import React from 'react';
import styles from './ImageItem.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { imgSize } from '../../../utils/itemIamgeSize';

const ImageItem = ({ id, author, width, height, url, theme }) => {
  return (
    <div
      className={clsx(
        styles.root,
        theme === 'light' ? styles.light : styles.dark
      )}
    >
      <Link to="/favorites" className={styles.imgLink}>
        <img
          className={styles.img}
          src={`https://picsum.photos/id/${id}/200/${imgSize(
            width,
            height,
            200
          )}`}
          alt={author}
        />
      </Link>
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
  theme: PropTypes.string,
};

export default ImageItem;
