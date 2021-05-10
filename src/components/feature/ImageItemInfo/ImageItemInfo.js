import React from 'react';
import styles from './ImageItemInfo.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { IoClose } from 'react-icons/io5';

const ImageItemInfo = ({ data: { id, author, url }, status, toogleInfo }) => {
  return (
    <section className={clsx(styles.root, status ? styles.show : styles.hide)}>
      <article className={styles.menu}>
        <header className={styles.header}>
          <IoClose className={styles.icon} onClick={() => toogleInfo({})} />
          <h6 className={styles.author}>{author}</h6>
        </header>
        <main className={styles.main}>
          <button className={styles.btnSave}>save</button>
          <a
            className={styles.link}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            source
          </a>
        </main>
        <footer className={styles.footer}>
          <p className={styles.text}>This Pin was inspired by the internet</p>
        </footer>
      </article>
    </section>
  );
};

ImageItemInfo.propTypes = {
  data: PropTypes.object,
  status: PropTypes.bool,
  toogleInfo: PropTypes.func,
};

ImageItemInfo.defaultProps = {
  data: { id: '', author: '', url: '' },
};

export default ImageItemInfo;
