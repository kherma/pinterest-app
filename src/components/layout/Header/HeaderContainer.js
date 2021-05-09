import { connect } from 'react-redux';
import Header from './Header';
import { getCurrentTheme } from '../../../redux/appRedux';

const mapStateToProps = (state) => ({
  theme: getCurrentTheme(state),
});

export default connect(mapStateToProps)(Header);
