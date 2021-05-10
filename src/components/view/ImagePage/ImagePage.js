import React from 'react';
import styles from './ImagePage.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { imgSize } from '../../../utils/itemIamgeSize';
import { Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

const ImagePage = ({
  location: {
    state: { id, author, url, width, height },
  },
}) => {
  return (
    <div className={clsx(styles.root)}>
      <Link to="/" className={styles.iconContainer}>
        <FaArrowLeft className={styles.icon} />
      </Link>
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src={`https://picsum.photos/id/${id}/${500}/${imgSize(
            width,
            height,
            500
          )}`}
          alt={author}
        />
      </div>
      <div className={styles.info}>
        <h5 className={styles.author}>{author}</h5>
        <button className={styles.btnSave}>save</button>
        <a className={styles.link} href={url} target="_blank" rel="noreferrer">
          source
        </a>
      </div>
    </div>
  );
};

ImagePage.propTypes = {
  location: PropTypes.object,
};

ImagePage.defaultProps = {
  location: { state: {} },
};

export default ImagePage;
