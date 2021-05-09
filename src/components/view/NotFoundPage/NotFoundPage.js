import React from 'react';
import styles from './NotFoundPage.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const NotFoundPage = ({ className, children }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <h2>NotFoundPage</h2>
      {children}
    </div>
  );
};

NotFoundPage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default NotFoundPage;
