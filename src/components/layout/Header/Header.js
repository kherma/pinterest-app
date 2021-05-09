import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import CameraLogo from '../../common/CameraLogo/CameraLogo';
import Navbar from '../Navbar/NavbarContainer';
import ThemeSwitch from '../../feature/ThemeSwitch/ThemeSwitchContainer';

const Header = ({ theme }) => {
  return (
    <header
      className={clsx(
        styles.root,
        theme === 'light' ? styles.light : styles.dark
      )}
    >
      <CameraLogo />
      <Navbar />
      <ThemeSwitch />
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
};

export default Header;
