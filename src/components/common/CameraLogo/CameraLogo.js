import React from 'react';
import styles from './CameraLogo.module.scss';
import clsx from 'clsx';

import { Link } from 'react-router-dom';

const CameraLogo = () => {
  return (
    <h1 className={clsx(styles.root)}>
      <Link exact to="/" className={styles.logoLink}>
        <span className={styles.cameraIcon}></span>
      </Link>
    </h1>
  );
};

export default CameraLogo;
