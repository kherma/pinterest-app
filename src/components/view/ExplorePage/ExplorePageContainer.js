import { connect } from 'react-redux';
import ExplorePage from './ExplorePage';
import {
  getAll,
  getLoadingState,
  fetchFromAPI,
} from '../../../redux/imagesRedux';

const mapStateToProps = (state) => ({
  images: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fatchData: () => dispatch(fetchFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage);
