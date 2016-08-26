import LeafletComponent from '../Leaflet';
import { updateSelections } from '../actions';
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
  return {
    imgSrc: state.image
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectionsUpdate: (selections) => {
      dispatch(updateSelections(selections));
    }
  }
};

const LeafletComponentContainer = connect(mapStateToProps, mapDispatchToProps)(LeafletComponent);
export default LeafletComponentContainer;
