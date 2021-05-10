import React from 'react';
import styles from './ImageItemMobile.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { imgSize } from '../../../utils/itemIamgeSize';

const ImageItemMobile = ({
  id,
  author,
  width,
  height,
  url,
  toggleInfo,
  theme,
}) => {
  return (
    <div
      className={clsx(
        styles.root,
        theme === 'light' ? styles.light : styles.dark
      )}
    >
      <Link to="/favorites">
        <img
          className={styles.img}
          src={`https://picsum.photos/id/${id}/300/${imgSize(
            width,
            height,
            300
          )}`}
          alt={author}
        />
      </Link>
      <button
        className={styles.btnMore}
        onClick={() => toggleInfo({ id, author, url })}
      >
        <p>...</p>
      </button>
    </div>
  );
};

ImageItemMobile.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  url: PropTypes.string,
  toggleInfo: PropTypes.func,
  theme: PropTypes.string,
};

export default ImageItemMobile;
