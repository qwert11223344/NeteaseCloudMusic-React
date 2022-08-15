import types from './actionTypes';

export const setIsShowLogin = payload => ({
  type: types.CHANGE_IS_SHOW_LOGIN,
  payload
});

export const setIsLogin = payload => ({
  type: types.CHANGE_IS_LOGIN,
  payload
});
