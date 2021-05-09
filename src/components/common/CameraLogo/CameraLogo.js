import React from 'react';
import styles from './CameraLogo.module.scss';
import clsx from 'clsx';

import { NavLink } from 'react-router-dom';

const CameraLogo = () => {
  return (
    <h1 className={clsx(styles.root)}>
      <NavLink exact to="/" className={styles.logoLink}>
        <span className={styles.cameraIcon}></span>
      </NavLink>
    </h1>
  );
};

export default CameraLogo;
