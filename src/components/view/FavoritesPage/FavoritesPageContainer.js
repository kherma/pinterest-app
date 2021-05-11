import { connect } from 'react-redux';
import FavoritesPage from './FavoritesPage';
import { getFavorites } from '../../../redux/favoritesIDRedux';

const mapStateToProps = (state) => ({
  data: getFavorites(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   action: (arg) => dispatch(sampleActionCreator(arg)),
// });

export default connect(mapStateToProps)(FavoritesPage);
