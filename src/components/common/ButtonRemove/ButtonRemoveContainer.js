import { connect } from 'react-redux';
import ButtonRemove from './ButtonRemove';
import { removeIDFromFavorites } from '../../../redux/favoritesIDRedux';

import { removeSingle } from '../../../redux/favoritesRedux';

const mapDispatchToProps = (dispatch) => ({
  remove: (arg) => dispatch(removeIDFromFavorites(arg)),
  removeData: (arg) => dispatch(removeSingle(arg)),
});

export default connect(null, mapDispatchToProps)(ButtonRemove);
