import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';

import CameraLogo from '../../common/CameraLogo/CameraLogo';
import Navbar from '../Navbar/NavbarContainer';
import ThemeSwitch from '../../feature/ThemeSwitch/ThemeSwitchContainer';

const Header = () => {
  return (
    <header className={clsx(styles.root)}>
      <CameraLogo />
      <Navbar />
      <ThemeSwitch />
    </header>
  );
};

export default Header;
