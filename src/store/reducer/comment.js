import types from '../action/comment/actionTypes';
const defaultState = {
  totalComment: 0
};
export default function commentReducer(state = defaultState, action) {
  switch (action.type) {
    case types.CHANGE_TOTAL_COMMENT:
      return { ...state, totalComment: action.payload };
    default:
      return state;
  }
}
