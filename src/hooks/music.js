import songApi from '@/api/songApi';
import localKey from '@/common/localStorageKey';
import {
  changeCurrentSong,
  changeIsFirstLoad,
  changePlayList
} from '@/store/action/playbar';
import localCache from '@/utils/localStorage';
import { message } from 'antd';
import { useDispatch } from 'react-redux';

export const usePlayMusic = () => {
  const disPatch = useDispatch();
  const addPlaylist = useAddPlayList();
  return async song => {
    const {
      songs: [newSong]
    } = await songApi.getSongDetail([song.id]);
    disPatch(changeIsFirstLoad(true));
    disPatch(changeCurrentSong(newSong));
    addPlaylist(song.id);
  };
};

export const useAddPlayList = () => {
  const disPatch = useDispatch();
  return id => {
    const playlist = localCache.get(localKey.PLAY_BAR_LIST) ?? [];
    if (playlist.includes(id)) return;
    playlist.push(id);
    localCache.set(localKey.PLAY_BAR_LIST, playlist);
    disPatch(changePlayList(playlist));
    message.success('添加成功');
  };
};

export const useDelPlayListById = () => {
  const disPatch = useDispatch();
  return id => {
    let playlist = localCache.get(localKey.PLAY_BAR_LIST) ?? [];
    playlist = playlist.filter(i => i !== id);
    localCache.set(localKey.PLAY_BAR_LIST, playlist);
    disPatch(changePlayList(playlist));
    message.success('删除成功');
  };
};
