import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';

import CameraLogo from '../../common/CameraLogo/CameraLogo';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className={clsx(styles.root)}>
      <CameraLogo />
      <Navbar />
    </header>
  );
};

export default Header;
