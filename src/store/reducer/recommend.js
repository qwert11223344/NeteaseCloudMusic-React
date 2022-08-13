import types from '../action/recommend/actionTypes';
const defaultState = {
  upList: [],
  newList: [],
  originalList: []
};
export default function recommendReducer(state = defaultState, action) {
  switch (action.type) {
    case types.CHANGE_UP_LIST:
      return { ...state, upList: action.payload };
    case types.CHANGE_NEW_LIST:
      return { ...state, newList: action.payload };
    case types.CHANGE_ORIGINAL_LIST:
      return { ...state, originalList: action.payload };
    default:
      return state;
  }
}
