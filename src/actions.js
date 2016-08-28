
export const UPDATE_SELECTIONS = 'UPDATE_SELECTIONS';
export const SET_IMAGE='SET_IMAGE';
export const SET_IMAGE_SIZE='SET_IMAGE_SIZE';
// export const GET
export const SAVE_TAGS='SAVE_TAGS';
export const LOAD_TAGS='LOAD_TAGS';
export const SELECT_TAG='SELECT_TAG';
export const CLEAR_SELECTED_TAG='CLEAR_SELECTED_TAG'
export function selectTag(tagId) {
  console.log(`tag selected: ${tagId}`);
  return {
    type: SELECT_TAG,
    tagId: tagId
  };
}

export function clearSelectedTag() {
  return {
    type: CLEAR_SELECTED_TAG
  };
}

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
export function setImageSize(size) {
  return {
    type: SET_IMAGE_SIZE,
    size: size
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
