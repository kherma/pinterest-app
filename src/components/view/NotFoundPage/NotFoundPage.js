import React from 'react';
import styles from './NotFoundPage.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const NotFoundPage = ({ theme }) => {
  return (
    <div
      className={clsx(
        styles.root,
        theme === 'light' ? styles.light : styles.dark
      )}
    >
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.text}>404</h2>
          <h3 className={styles.text}>Page not found</h3>
        </div>
      </div>
    </div>
  );
};

NotFoundPage.propTypes = {
  theme: PropTypes.string,
};

export default NotFoundPage;
