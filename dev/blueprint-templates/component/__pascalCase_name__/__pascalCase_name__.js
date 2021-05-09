import React from 'react';
import styles from './{{pascalCase name}}.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const {{pascalCase name}} = ({ className, children }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <h2>{{pascalCase name}}</h2>
      {children}
    </div>
  );
};

{{pascalCase name}}.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default {{pascalCase name}};
