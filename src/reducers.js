import {combineReducers} from 'redux';
import {SELECT_TAG, CLEAR_SELECTED_TAG, UPDATE_SELECTIONS, SET_IMAGE, SET_IMAGE_SIZE} from './actions';

function selections(state = [], action) {
  switch (action.type) {
    case UPDATE_SELECTIONS:
      return [...action.selections];
      break;
    case SET_IMAGE:
      return []
      break;
    default:
      return state;
  }
}

function image(state={src: "", size: {w:0, h:0}}, action) {
  switch (action.type) {
    case SET_IMAGE:
      return Object.assign({}, state, {src: action.image}) ;
      break;
    case SET_IMAGE_SIZE:
      return Object.assign({}, state, {size: action.size}) ;
      break;
    default:
      return state;
  }
}

function selectedTag(state={selected: false}, action) {
  switch (action.type) {
    case SELECT_TAG:
      return Object.assign({}, {selected: true}, {id: action.tagId});
      break;
    case CLEAR_SELECTED_TAG:
      return Object.assign({}, {selected: false});
    default:
      return state;
  }
}

function tags(state=[], action) {
  return state;
}

const imageTaggerApp = combineReducers({
  selectedTag,
  selections,
  image,
  tags
});

export default imageTaggerApp;
