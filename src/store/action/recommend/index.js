import topListApi from '@/api/topListApi';
import types from './actionTypes';
//飙升榜单
const changeUpList = payload => ({
  type: types.CHANGE_UP_LIST,
  payload
});
const changeNewList = payload => ({
  type: types.CHANGE_NEW_LIST,
  payload
});
const changeOriginalList = payload => ({
  type: types.CHANGE_ORIGINAL_LIST,
  payload
});
export const asyncChangeTopList = id => {
  return async disPatch => {
    const { playlist } = await topListApi.getTopListDetail(id);
    switch (id) {
      case 19723756:
        disPatch(changeUpList(playlist));
        break;
      case 3779629:
        disPatch(changeNewList(playlist));
        break;
      case 2884035:
        disPatch(changeOriginalList(playlist));
        break;
      default:
        break;
    }
  };
};
