import { connect } from 'react-redux';
import MasonryGrid from './MasonryGrid';
import { getBreakpoints } from '../../../redux/appRedux';

const mapStateToProps = (state) => ({
  breakpoints: getBreakpoints(state),
});

export default connect(mapStateToProps)(MasonryGrid);
