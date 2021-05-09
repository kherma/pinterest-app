import { connect } from 'react-redux';
import Header from './Header';
import { getCurrentTheme, changeAsideStatus } from '../../../redux/appRedux';

const mapStateToProps = (state) => ({
  theme: getCurrentTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleAside: () => dispatch(changeAsideStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
