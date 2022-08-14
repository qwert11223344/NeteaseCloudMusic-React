import playListApi from '@/api/playListApi';
import handleCategory from '@/utils/handle-category';
import types from './actionTypes';
const setPlayList = payload => ({ type: types.CHANGE_PLAYLIST, payload });
const setPlayListCat = payload => ({
  type: types.CHANGE_PLAYLIST_CATLIST,
  payload
});
const setPlayListTags = payload => ({
  type: types.CHANGE_PLAYLIST_TAGS,
  payload
});

export const setPlayListCurrentCat = payload => ({
  type: types.CHANGE_PLAYLIST_CURRENT_CAT,
  payload
});
export const asyncGetPlayList = (
  limit = 35,
  cat = '全部',
  offset = 0,
  order = 'hot'
) => {
  return async disPatch => {
    const { playlists, total } = await playListApi.getPlayList(
      limit,
      order,
      cat,
      offset
    );
    disPatch(setPlayList({ playlists, total }));
  };
};

export const asyncGetPlayListCat = () => {
  return async disPatch => {
    const res = await playListApi.getPlayListCat();
    disPatch(setPlayListCat(handleCategory(res)));
  };
};

export const asyncGetPlayListTags = () => {
  return async disPatch => {
    const res = await playListApi.getPlayListTags();
  };
};
