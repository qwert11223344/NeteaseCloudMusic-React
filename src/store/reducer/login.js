import localKey from '@/common/localStorageKey';
import localCache from '@/utils/localStorage';
import types from '../action/login/actionTypes';
const defaultState = {
  isShowLogin: false,
  isLogin: localCache.get(localKey.USER_COOKIE) ? true : false,
  cookie: localCache.get(localKey.USER_COOKIE) ?? '',
  accountInfo: {}
};
export default function loginReducer(state = defaultState, action) {
  switch (action.type) {
    case types.CHANGE_IS_SHOW_LOGIN:
      return { ...state, isShowLogin: action.payload };
    case types.CHANGE_IS_LOGIN:
      return { ...state, isLogin: action.payload };
    case types.CHANGE_USER_COOKIE:
      return { ...state, cookie: action.payload };
    case types.CHANGE_ACCOUNT_INFO:
      return { ...state, accountInfo: action.payload };
    default:
      return state;
  }
}
