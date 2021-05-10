import { connect } from 'react-redux';
import ButtonContainer from './ButtonContainer';
import { getFavorites } from '../../../redux/favoritesRedux';

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
});

export default connect(mapStateToProps)(ButtonContainer);
