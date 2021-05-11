import { connect } from 'react-redux';
import ButtonRemove from './ButtonRemove';
import { removeIDFromFavorites } from '../../../redux/favoritesIDRedux';

const mapDispatchToProps = (dispatch) => ({
  remove: (arg) => dispatch(removeIDFromFavorites(arg)),
});

export default connect(null, mapDispatchToProps)(ButtonRemove);
