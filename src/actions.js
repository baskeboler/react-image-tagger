
export const UPDATE_SELECTIONS = 'UPDATE_SELECTIONS';
export const SET_IMAGE='SET_IMAGE';
export const SAVE_TAGS='SAVE_TAGS';
export const LOAD_TAGS='LOAD_TAGS';

export function updateSelections(selections) {
  return {
    type: UPDATE_SELECTIONS,
    selections: selections
  };
}

export function setImage(img) {
  return {
    type: SET_IMAGE,
    image: img
  };
}
export function saveTags(tags) {
  return {
    type: SAVE_TAGS,
    tags: tags
  };
}
export function loadTags(tags) {
  return {
    type: LOAD_TAGS,
    tags: tags
  };
}
