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
