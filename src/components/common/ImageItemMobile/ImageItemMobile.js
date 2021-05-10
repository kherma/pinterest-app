import React from 'react';
import styles from './ImageItemMobile.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { imgSize } from '../../../utils/itemIamgeSize';

const ImageItemMobile = ({ id, author, width, height }) => {
  return (
    <div className={clsx(styles.root)}>
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
      <button className={styles.btnMore}>
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
};

export default ImageItemMobile;
