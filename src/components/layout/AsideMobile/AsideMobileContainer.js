import { connect } from 'react-redux';
import AsideMobile from './AsideMobile';
import {
  getCurrentTheme,
  getAsideStatus,
  changeAsideStatus,
} from '../../../redux/appRedux';

const mapStateToProps = (state) => ({
  theme: getCurrentTheme(state),
  aside: getAsideStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleAside: () => dispatch(changeAsideStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AsideMobile);
