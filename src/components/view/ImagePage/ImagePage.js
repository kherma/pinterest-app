import React from 'react';
import styles from './ImagePage.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { imgSize } from '../../../utils/itemIamgeSize';
import { useHistory } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

import ButtonContainer from '../../feature/ButtonContainer/ButtonContainerContainer';
const ImagePage = ({
  location: {
    state: { id, author, url, width, height },
  },
  theme,
}) => {
  const history = useHistory();
  return (
    <section
      className={clsx(
        styles.root,
        theme === 'light' ? styles.light : styles.dark
      )}
    >
      <button
        onClick={() => {
          history.goBack();
        }}
        className={styles.iconContainer}
      >
        <FaArrowLeft className={styles.icon} />
      </button>
      <div className={styles.dataWrapper}>
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
        <div className={styles.infoContainer}>
          <h5 className={styles.author}>{author}</h5>
          <ButtonContainer id={id} className={styles.btn} />
          <a
            className={styles.link}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            source
          </a>
        </div>
      </div>
    </section>
  );
};

ImagePage.propTypes = {
  location: PropTypes.object,
  theme: PropTypes.string,
};

ImagePage.defaultProps = {
  location: { state: {} },
};

export default ImagePage;
