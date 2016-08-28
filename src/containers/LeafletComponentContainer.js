import LeafletComponent from '../Leaflet';
import { updateSelections, setImageSize, selectTag, clearSelectedTag } from '../actions';
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
  return {
    imgSrc: state.image.src,
    imgSize: {
      height: state.image.size.h,
      width: state.image.size.w
    },
    // width: '400px',
    height: '300px',
    selectedTag: state.selectedTag
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectionsUpdate: (selections) => {
      dispatch(updateSelections(selections));
    },
    onSetImageSize: (size) => {
      dispatch(setImageSize(size));
    },
    onTagSelected: (id) => {
      dispatch(selectTag(id));
    },
    onClearSelectedTag: () => {
      dispatch(clearSelectedTag());
    }
  }
};

const LeafletComponentContainer = connect(mapStateToProps, mapDispatchToProps)(LeafletComponent);
export default LeafletComponentContainer;
