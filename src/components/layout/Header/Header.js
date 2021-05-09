import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { FaBars } from 'react-icons/fa';

import CameraLogo from '../../common/CameraLogo/CameraLogo';
import Navbar from '../Navbar/NavbarContainer';
import ThemeSwitch from '../../feature/ThemeSwitch/ThemeSwitchContainer';
import AsideMobile from '../AsideMobile/AsideMobileContainer';

const Header = ({ theme, toggleAside }) => {
  return (
    <header
      className={clsx(
        styles.root,
        theme === 'light' ? styles.light : styles.dark
      )}
    >
      <CameraLogo />

      {window.matchMedia('(min-width: 768px)').matches ? (
        <Navbar />
      ) : (
        <AsideMobile>
          <Navbar />
        </AsideMobile>
      )}

      <ThemeSwitch />

      {window.matchMedia('(max-width: 767px)').matches && (
        <FaBars onClick={toggleAside} className={styles.icon} />
      )}
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
  toggleAside: PropTypes.func,
};

export default Header;
