import { connect } from 'react-redux';
import Navbar from './Navbar';
import { getNavLinks, changeAsideStatus } from '../../../redux/appRedux';

const mapStateToProps = (state) => ({
  navLinks: getNavLinks(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleAside: () => dispatch(changeAsideStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
