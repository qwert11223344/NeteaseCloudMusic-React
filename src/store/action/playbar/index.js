import songApi from '@/api/songApi';
import { parseLyric } from '@/utils';
import types from './actionTypes';

export const changePlaySequence = payload => ({
  type: types.CHANGE_PLAY_SEQUENCE,
  payload
});

export const changePlayList = payload => ({
  type: types.CHANGE_PLAY_LIST,
  payload
});

export const changeCurrentSong = payload => ({
  type: types.CHANGE_CURRENT_SONG,
  payload
});

export const changeIsFirstLoad = payload => ({
  type: types.CHANGE_IS_FIRST_LOAD,
  payload
});
export const changeCurrentLyricIndex = payload => ({
  type: types.CHANGE_CURRENT_LYRIC_INDEX,
  payload
});
const changeLyric = payload => ({
  type: types.CHANGE_LYRIC,
  payload
});

export const asyncGetLyric = id => {
  return async disPatch => {
    const {
      lrc: { lyric }
    } = await songApi.getSongLyric(id);
    disPatch(changeLyric(parseLyric(lyric)));
  };
};
