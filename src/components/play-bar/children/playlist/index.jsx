import localKey from '@/common/localStorageKey';
import Lyric from '@/components/common-lyric';
import { changePlayList } from '@/store/action/playbar';
import localCache from '@/utils/localStorage';
import { ClearOutlined, CloseOutlined, HeartOutlined } from '@ant-design/icons';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import PlayListItem from '../playlist-item';
import styles from './index.module.scss';
export default function PLayBarList({
  changeShowPlayList,
  isShowPlayList,
  playListInfo
}) {
  const disPatch = useDispatch();
  const { playList, currentSong } = useSelector(
    state => state.playBarReducer,
    shallowEqual
  );

  const clearAllPlaylist = e => {
    e.preventDefault();
    localCache.remove(localKey.PLAY_BAR_LIST);
    disPatch(changePlayList([]));
  };

  const NoLength = () => {
    return (
      <div className='no-length'>
        <p>您还没有添加任何歌曲</p>
        <p>
          去首页<a href='#/discover/'>发现音乐</a>，或在
          <a href='#/discover'>我的音乐</a>
          收听自己收藏的歌单
        </p>
      </div>
    );
  };
  const HasLength = () => {
    return (
      <>
        {playListInfo &&
          playListInfo.map(i => (
            <PlayListItem
              key={i.id}
              song={i}
              isActive={currentSong.id === i.id ? true : false}
            />
          ))}
      </>
    );
  };
  return (
    <div
      className={styles.playBarList}
      style={{ display: isShowPlayList ? 'block' : 'none' }}
    >
      <div className='list-header'>
        <div className='playlist-header-left'>
          <h3 className='header-title'>播放列表({playList.length})</h3>
          <div>
            <a
              href='/favorite'
              className='header-icon'
              onClick={e => e.preventDefault()}
            >
              <HeartOutlined />
              <span>收藏</span>
            </a>
            <a
              href='#/discover/recommend'
              onClick={clearAllPlaylist}
              className='header-icon'
            >
              <ClearOutlined />
              <span>清除</span>
            </a>
          </div>
        </div>
        <div className='playlist-header-right'>
          <div className='song-name'>{currentSong.name}</div>
          <div
            className='close-window'
            onClick={() => changeShowPlayList(false)}
          >
            <CloseOutlined />
          </div>
        </div>
      </div>
      <div className='list-main'>
        <div className='main-playlist'>
          {playList.length ? <HasLength /> : <NoLength />}
        </div>
        <div className='main-line'></div>
        <Lyric />
      </div>
    </div>
  );
}
