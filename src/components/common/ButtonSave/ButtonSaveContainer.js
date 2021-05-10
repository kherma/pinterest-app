import { connect } from 'react-redux';
import ButtonSave from './ButtonSave';
import { addToFavorites } from '../../../redux/favoritesRedux';

const mapDispatchToProps = (dispatch) => ({
  add: (arg) => dispatch(addToFavorites(arg)),
});

export default connect(null, mapDispatchToProps)(ButtonSave);
