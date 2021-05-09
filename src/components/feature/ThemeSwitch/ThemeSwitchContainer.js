import { connect } from 'react-redux';
import ThemeSwitch from './ThemeSwitch';
import { getCurrentTheme, changeCurrentTheme } from '../../../redux/appRedux';

const mapStateToProps = (state) => ({
  theme: getCurrentTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: (arg) => dispatch(changeCurrentTheme(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
