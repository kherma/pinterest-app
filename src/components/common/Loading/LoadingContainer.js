import { connect } from 'react-redux';
import Loading from './Loading';
import { getCurrentTheme } from '../../../redux/appRedux';

const mapStateToProps = (state) => ({
  theme: getCurrentTheme(state),
});

export default connect(mapStateToProps)(Loading);
