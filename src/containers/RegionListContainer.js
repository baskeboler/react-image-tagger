import RegionList from '../RegionList'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    regions: state.selections
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const RegionListContainer = connect(mapStateToProps, mapDispatchToProps)(RegionList);
export default RegionListContainer;
