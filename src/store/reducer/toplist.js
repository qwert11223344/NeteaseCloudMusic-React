import types from '../action/toplist/actionTypes';
const defaultState = {
  topList: [],
  currentTopListInfo: {},
  currentTopListIndex: 0
};

export default function topListReducer(state = defaultState, action) {
  switch (action.type) {
    case types.CHANGE_TOP_LIST:
      return { ...state, topList: action.payload };
    case types.CHANGE_CURRENT_TOP_LIST_INFO:
      return { ...state, currentTopListInfo: action.payload };
    case types.CHANGE_TOP_LIST_INDEX:
      return { ...state, currentTopListIndex: action.payload };
    default:
      return state;
  }
}
