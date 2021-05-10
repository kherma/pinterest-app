import React from 'react';
import styles from './ImageItemInfo.module.scss';
// import PropTypes from 'prop-types';
import clsx from 'clsx';

import { IoClose } from 'react-icons/io5';

const ImageItemInfo = () => {
  return (
    <section className={clsx(styles.root)}>
      <article className={styles.menu}>
        <header className={styles.header}>
          <IoClose className={styles.icon} />
          <h6 className={styles.author}>Sample Author</h6>
        </header>
        <main className={styles.main}>
          <button className={styles.btnSave}>save</button>
          <a
            className={styles.link}
            href="https://google.com"
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

// ImageItemInfo.propTypes = {
// };

export default ImageItemInfo;
