import topListApi from '@/api/topListApi';
import types from './actionTypes';

const changeTopList = payload => ({ type: types.CHANGE_TOP_LIST, payload });

const setCurrentTopListInfo = payload => ({
  type: types.CHANGE_CURRENT_TOP_LIST_INFO,
  payload
});

export const setCurrentTopListIndex = payload => ({
  type: types.CHANGE_TOP_LIST_INDEX,
  payload
});

export const asyncGetTopList = () => {
  return async disPatch => {
    const { list } = await topListApi.getTopList();
    disPatch(changeTopList(list));
  };
};
export const asyncGetCurrentTopListInfo = (currentTopListId = 19723756) => {
  return async disPatch => {
    const { playlist } = await topListApi.getTopListDetail(currentTopListId);
    disPatch(setCurrentTopListInfo(playlist));
  };
};
