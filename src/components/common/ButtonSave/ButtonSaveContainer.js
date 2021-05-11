import { connect } from 'react-redux';
import ButtonSave from './ButtonSave';
import { addIDToFavorites } from '../../../redux/favoritesIDRedux';

const mapDispatchToProps = (dispatch) => ({
  add: (arg) => dispatch(addIDToFavorites(arg)),
});

export default connect(null, mapDispatchToProps)(ButtonSave);
