import {combineReducers} from 'redux';
import {SAVE_TAG_DATA, SELECT_TAG, CLEAR_SELECTED_TAG, UPDATE_SELECTIONS, SET_IMAGE, SET_IMAGE_SIZE} from './actions';

function selections(state = [], action) {
  switch (action.type) {
    case UPDATE_SELECTIONS:
      return action.selections.map(l => {
        return Object.assign({}, state.find(l2 => l2.id === l.id), l);
      });
    case SET_IMAGE:
      return [];
    case SAVE_TAG_DATA:
      return state.map(l => {
        if (l.id == action.tag.id) {
          return Object.assign({}, l, action.tag);
        }
        return Object.assign({}, l);
      });
    default:
      return state;
  }
}

function image(state={src: "", size: {w:0, h:0}}, action) {
  switch (action.type) {
    case SET_IMAGE:
      return Object.assign({}, state, {src: action.image}) ;
    case SET_IMAGE_SIZE:
      return Object.assign({}, state, {size: action.size}) ;
    default:
      return state;
  }
}

function selectedTag(state={selected: false}, action) {
  switch (action.type) {
    case SELECT_TAG:
      return Object.assign({}, {selected: true}, {id: action.tagId});
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
