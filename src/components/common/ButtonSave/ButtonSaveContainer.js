import { connect } from 'react-redux';
import ButtonSave from './ButtonSave';
import { addIDToFavorites } from '../../../redux/favoritesIDRedux';

import { getLoading, fetchSingleFromAPI } from '../../../redux/favoritesRedux';

const mapStateToProps = (state) => ({
  loading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  add: (arg) => dispatch(addIDToFavorites(arg)),
  fetch: (arg) => dispatch(fetchSingleFromAPI(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSave);
