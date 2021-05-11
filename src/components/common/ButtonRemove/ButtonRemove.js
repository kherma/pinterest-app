import React from 'react';
import styles from './ButtonRemove.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ButtonRemove = ({ id, remove, className, removeData }) => {
  return (
    <button
      onClick={() => {
        remove(id);
        removeData(id);
      }}
      className={clsx(styles.root, className)}
    >
      remove
    </button>
  );
};

ButtonRemove.propTypes = {
  id: PropTypes.string,
  remove: PropTypes.func,
  className: PropTypes.string,
  removeData: PropTypes.func,
};

export default ButtonRemove;
