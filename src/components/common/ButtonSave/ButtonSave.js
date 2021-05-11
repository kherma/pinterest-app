import React from 'react';
import styles from './ButtonSave.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ButtonSave = ({ id, add, className, fetch, loading }) => {
  return (
    <button
      onClick={() => {
        add(id);
        fetch(id);
      }}
      className={clsx(styles.root, className)}
    >
      save
    </button>
  );
};

ButtonSave.propTypes = {
  id: PropTypes.string,
  add: PropTypes.func,
  className: PropTypes.string,
  fetch: PropTypes.func,
  loading: PropTypes.object,
};

export default ButtonSave;
