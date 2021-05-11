import { connect } from 'react-redux';
import FavoritesPage from './FavoritesPage';
import { getAll, getLoading } from '../../../redux/favoritesRedux';

const mapStateToProps = (state) => ({
  data: getAll(state),
  loading: getLoading(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchData: (arg) => dispatch(fetchAllFromAPI(arg)),
// });

export default connect(mapStateToProps)(FavoritesPage);
