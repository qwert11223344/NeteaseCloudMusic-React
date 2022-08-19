import types from '../action/playbar/actionTypes';
import localCache from '@/utils/localStorage';
const defaultState = {
  playSequence: 0, //0顺序播放 1随机播放 2循环播放
  playList: localCache.get('playBarList') ?? [],
  currentSong: {},
  isFirstLoad: true,
  lyric: [],
  currentLyricIndex: 0
};

export default function playBarReducer(state = defaultState, action) {
  switch (action.type) {
    case types.CHANGE_PLAY_SEQUENCE:
      return { ...state, playSequence: action.payload };
    case types.CHANGE_PLAY_LIST:
      return { ...state, playList: action.payload };
    case types.CHANGE_CURRENT_SONG:
      return { ...state, currentSong: action.payload };
    case types.CHANGE_IS_FIRST_LOAD:
      return { ...state, isFirstLoad: action.payload };
    case types.CHANGE_LYRIC:
      return { ...state, lyric: action.payload };
    case types.CHANGE_CURRENT_LYRIC_INDEX:
      return { ...state, currentLyricIndex: action.payload };
    default:
      return state;
  }
}
