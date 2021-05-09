import React, { useEffect } from 'react';
import styles from './ThemeSwitch.module.scss';
import PropTypes from 'prop-types';
import useLocalStorage from '../../../utils/useLocalSorage';

import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitch = ({ theme, changeTheme }) => {
  const [lsTheme, setLsTheme] = useLocalStorage('theme', theme);

  useEffect(() => {
    lsTheme && changeTheme(lsTheme);
  }, [changeTheme, lsTheme]);

  const toogleTheme = (theme) => {
    setLsTheme(theme);
    changeTheme(theme);
  };

  return (
    <div className={styles.root}>
      {theme === 'light' ? (
        <h3
          className={styles.iconContainer}
          onClick={() => toogleTheme('dark')}
        >
          <FaSun className={styles.sun} />
        </h3>
      ) : (
        <h3
          className={styles.iconContainer}
          onClick={() => toogleTheme('light')}
        >
          <FaMoon className={styles.moon} />
        </h3>
      )}
    </div>
  );
};

ThemeSwitch.propTypes = {
  theme: PropTypes.string,
  changeTheme: PropTypes.func,
};

export default ThemeSwitch;
