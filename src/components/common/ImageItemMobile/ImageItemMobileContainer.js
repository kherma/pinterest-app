import { connect } from 'react-redux';
import ImageItemMobile from './ImageItemMobile';
import { toggleImageInfo } from '../../../redux/infoRedux';
import { getCurrentTheme } from '../../../redux/appRedux';

const mapStateToProps = (state) => ({
  theme: getCurrentTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleInfo: (arg) => dispatch(toggleImageInfo(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageItemMobile);
