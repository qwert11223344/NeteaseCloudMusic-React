import userApi from '@/api/userApi';
import types from './actionTypes';

export const setIsShowLogin = payload => ({
  type: types.CHANGE_IS_SHOW_LOGIN,
  payload
});

export const setIsLogin = payload => ({
  type: types.CHANGE_IS_LOGIN,
  payload
});

export const setCookie = payload => ({
  type: types.CHANGE_USER_COOKIE,
  payload
});

const setAccountInfo = payload => ({
  type: types.CHANGE_ACCOUNT_INFO,
  payload
});

export const asyncGetAccountInfo = () => {
  return async disPatch => {
    const {
      profile: { userId }
    } = await userApi.getAccountInfo();
    const { level, profile } = await userApi.getUserInfo(userId);
    profile.level = level;
    disPatch(setAccountInfo(profile));
  };
};
