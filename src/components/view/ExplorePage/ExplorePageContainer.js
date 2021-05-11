import { connect } from 'react-redux';
import ExplorePage from './ExplorePage';
import {
  getAll,
  getLoadingState,
  fetchFromAPI,
} from '../../../redux/imagesRedux';

import { changeCurrentPage } from '../../../redux/appRedux';

const mapStateToProps = (state) => ({
  images: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchFromAPI()),
  changePage: () => dispatch(changeCurrentPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage);
