import { connect } from 'react-redux';
import ImagePage from './ImagePage';
import { getCurrentTheme } from '../../../redux/appRedux';

const mapStateToProps = (state) => ({
  theme: getCurrentTheme(state),
});

export default connect(mapStateToProps)(ImagePage);
