import React from 'react';
import styles from './ImageItem.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const ImageItem = ({ id, author, width, height, url, download_url }) => {
  return (
    <div className={clsx(styles.root)}>
      <Link to="/favorites" className={styles.imgLink}>
        <img
          className={styles.img}
          src={`https://picsum.photos/id/${id}/200/${Math.round(
            (height * 200) / width
          )}`}
          alt={author}
        />
      </Link>
      <span
        className={styles.overlay}
        style={{
          width: '200px',
          height: `${Math.round((height * 200) / width)}px`,
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
  download_url: PropTypes.string,
};

export default ImageItem;
