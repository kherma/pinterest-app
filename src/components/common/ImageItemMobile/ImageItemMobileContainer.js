import { connect } from 'react-redux';
import ImageItemMobile from './ImageItemMobile';
import { toggleImageInfo } from '../../../redux/infoRedux';

// const mapStateToProps = (state) => ({
//   selector: sampleSelector(state),
// });

const mapDispatchToProps = (dispatch) => ({
  toggleInfo: (arg) => dispatch(toggleImageInfo(arg)),
});

export default connect(null, mapDispatchToProps)(ImageItemMobile);
