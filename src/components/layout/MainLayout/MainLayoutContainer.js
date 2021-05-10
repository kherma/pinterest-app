import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getCurrentTheme } from '../../../redux/appRedux';

const mapStateToProps = (state) => ({
  theme: getCurrentTheme(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   action: (arg) => dispatch(sampleActionCreator(arg)),
// });

export default connect(mapStateToProps)(MainLayout);
