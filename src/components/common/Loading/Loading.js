import React from 'react';
import styles from './Loading.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Loading = ({ className, theme }) => {
  return (
    <div
      className={clsx(
        styles.root,
        className,
        theme === 'light' ? styles.light : styles.dark
      )}
    >
      <span className={styles.loading}></span>
    </div>
  );
};

Loading.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
};

export default Loading;
