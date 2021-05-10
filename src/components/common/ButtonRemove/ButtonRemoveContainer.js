import { connect } from 'react-redux';
import ButtonRemove from './ButtonRemove';
import { removeFromFavorites } from '../../../redux/favoritesRedux';

const mapDispatchToProps = (dispatch) => ({
  remove: (arg) => dispatch(removeFromFavorites(arg)),
});

export default connect(null, mapDispatchToProps)(ButtonRemove);
