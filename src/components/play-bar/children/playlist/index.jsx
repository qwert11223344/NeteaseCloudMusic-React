import localKey from '@/common/localStorageKey';
import { changePlayList } from '@/store/action/playbar';
import localCache from '@/utils/localStorage';
import { ClearOutlined, CloseOutlined, HeartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import PlayListItem from '../playlist-item';
import styles from './index.module.scss';
export default function PLayBarList({
  changeShowPlayList,
  isShowPlayList,
  playListInfo
}) {
  const disPatch = useDispatch();
  const { playList, currentSong } = useSelector(state => state.playBarReducer);

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
          <div className='song-name'>晴天</div>
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
      </div>
    </div>
  );
}

//最左侧那个点击的时候去获取底板id，然后存在父组件中

//left
//点击添加的时候，数据传递到父组件中由父组件添加

//父组件
//在拿到数据后，创建一个对象，最后加上当前的底板id作为标识，然后使用一个计算属性，来计算中间组件，也就是不同的底板需要的数据
//就用所有组件数据.filter()找到底板id为当前底板id的

//底板组件
//父组件已经把需要的数据通过计算属性计算好了，直接使用
