import types from '../action/playlist/actionTypes';
const defaultState = {
  playList: {},
  currentCat: '全部',
  playListCat: [],
  playListTags: []
};
export default function playListReducer(state = defaultState, action) {
  switch (action.type) {
    case types.CHANGE_PLAYLIST:
      return { ...state, playList: action.payload };
    case types.CHANGE_PLAYLIST_CATLIST:
      return { ...state, playListCat: action.payload };
    case types.CHANGE_PLAYLIST_TAGS:
      return { ...state, playListTags: action.payload };
    case types.CHANGE_PLAYLIST_CURRENT_CAT:
      return { ...state, currentCat: action.payload };
    default:
      return state;
  }
}
