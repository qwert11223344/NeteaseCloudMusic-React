import types from '../action/login/actionTypes';
const defaultState = {
  isShowLogin: false,
  isLogin: false
};
export default function loginReducer(state = defaultState, action) {
  switch (action.type) {
    case types.CHANGE_IS_SHOW_LOGIN:
      return { ...state, isShowLogin: action.payload };
    case types.CHANGE_IS_LOGIN:
      return { ...state, isLogin: action.payload };
    default:
      return state;
  }
}
