import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getCurrentTheme } from '../../../redux/appRedux';
import { setFavorites } from '../../../redux/favoritesRedux';

const mapStateToProps = (state) => ({
  theme: getCurrentTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  favoritesFromLocalstorage: (arg) => dispatch(setFavorites(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
