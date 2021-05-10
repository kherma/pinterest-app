import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ButtonSave from '../../common/ButtonSave/ButtonSaveContainer';
import ButtonRemove from '../../common/ButtonRemove/ButtonRemoveContainer';

const ButtonContainer = ({ className, favorites, id }) => {
  if (!favorites.length || !favorites.includes(id)) {
    return <ButtonSave className={clsx(className)} id={id} />;
  }

  if (favorites.includes(id)) {
    return <ButtonRemove className={clsx(className)} id={id} />;
  }
};

ButtonContainer.propTypes = {
  className: PropTypes.string,
  favorites: PropTypes.array,
  id: PropTypes.string,
};

ButtonContainer.defaultProps = {
  favorites: [],
};

export default ButtonContainer;
