import songApi from '@/api/songApi';
import localKey from '@/common/localStorageKey';
import { changePlayList } from '@/store/action/playbar';
import localCache from '@/utils/localStorage';
import { useDispatch } from 'react-redux';

export const usePlayMusic = (ref, isPlaying) => {};

export const useAddPlayList = id => {
  const disPatch = useDispatch();
  return id => {
    const playlist = localCache.get(localKey.PLAY_BAR_LIST) ?? [];
    if (playlist.includes(id)) return;
    playlist.push(id);
    localCache.set(localKey.PLAY_BAR_LIST, playlist);
    disPatch(changePlayList(playlist));
  };
};

export const useDelPlayListById = id => {
  const disPatch = useDispatch();
  return id => {
    let playlist = localCache.get(localKey.PLAY_BAR_LIST) ?? [];
    playlist = playlist.filter(i => i !== id);
    localCache.set(localKey.PLAY_BAR_LIST, playlist);
    disPatch(changePlayList(playlist));
  };
};
