import { connect } from 'react-redux';
import NotFoundPage from './NotFoundPage';
import { getCurrentTheme } from '../../../redux/appRedux';

const mapStateToProps = (state) => ({
  theme: getCurrentTheme(state),
});

export default connect(mapStateToProps)(NotFoundPage);
