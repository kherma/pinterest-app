import { connect } from 'react-redux';
import ImageItemInfo from './ImageItemInfo';
import {
  getData,
  getDisplayStatus,
  toggleImageInfo,
} from '../../../redux/infoRedux';

const mapStateToProps = (state) => ({
  data: getData(state),
  status: getDisplayStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  toogleInfo: (arg) => dispatch(toggleImageInfo(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageItemInfo);
