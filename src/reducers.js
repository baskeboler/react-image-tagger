import {combineReducers} from 'redux';
import {UPDATE_SELECTIONS, SET_IMAGE} from './actions';

function selections(state = [], action) {
  switch (action.type) {
    case UPDATE_SELECTIONS:
      return [...action.selections];
      break;
    default:
      return state;
  }
}

function image(state="", action) {
  switch (action.type) {
    case SET_IMAGE:
      return action.image;
      break;
    default:
      return state;
  }
}

function tags(state=[], action) {
  return state;
}

const imageTaggerApp = combineReducers({
  selections,
  image,
  tags
});

export default imageTaggerApp;
