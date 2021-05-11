import { connect } from 'react-redux';
import FavoritesPage from './FavoritesPage';
import {
  getAll,
  getLoading,
  fetchAllFromAPI,
} from '../../../redux/favoritesRedux';

import { getFavorites } from '../../../redux/favoritesIDRedux';

const mapStateToProps = (state) => ({
  data: getAll(state),
  loading: getLoading(state),
  favoritesID: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchAllFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
