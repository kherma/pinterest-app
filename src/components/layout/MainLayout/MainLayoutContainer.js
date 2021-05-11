import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getCurrentTheme } from '../../../redux/appRedux';
import { setFavoritesID } from '../../../redux/favoritesIDRedux';

const mapStateToProps = (state) => ({
  theme: getCurrentTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  favoritesFromLocalstorage: (arg) => dispatch(setFavoritesID(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
