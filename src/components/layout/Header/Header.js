import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { FaBars } from 'react-icons/fa';

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
      {window.matchMedia('(min-width: 768px)').matches && <Navbar />}
      <ThemeSwitch />
      {window.matchMedia('(max-width: 767px)').matches && (
        <FaBars
          className={clsx(
            styles.icon,
            theme === 'light' ? styles.light : styles.dark
          )}
        />
      )}
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
};

export default Header;
