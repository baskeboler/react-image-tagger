import ImageForm from '../ImageForm';
import {connect} from 'react-redux';
import {setImage} from '../actions';

const mapStateToProps = (state) => {
  return {
    imgSrc: state.image.src,
    size: state.image.size
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFormSubmit: (url) => {
      dispatch(setImage(url));
    }
  }
}

const ImageFormContainer = connect(mapStateToProps, mapDispatchToProps)(ImageForm);
export default ImageFormContainer;
