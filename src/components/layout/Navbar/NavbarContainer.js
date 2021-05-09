import { connect } from 'react-redux';
import Navbar from './Navbar';
import { getNavLinks } from '../../../redux/appRedux';

const mapStateToProps = (state) => ({
  navLinks: getNavLinks(state),
});

export default connect(mapStateToProps)(Navbar);
