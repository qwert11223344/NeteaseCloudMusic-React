import CommonHeaderRcm from '@/components/common-header-recommend';
import { formatMinuteSecond } from '@/utils';
import { shallowEqual, useSelector } from 'react-redux';
import SongItem from '../song-item';
import styles from './index.module.scss';
export default function TopListMain() {
  const { currentTopListInfo } = useSelector(
    state => state.topListReducer,
    shallowEqual
  );
  const right = () => (
    <span>
      播放：
      <em style={{ color: '#c20c0c', fontWeight: 'bold' }}>
        {currentTopListInfo.playCount}
      </em>
      次
    </span>
  );
  const left = () => (
    <span style={{ marginLeft: 25 }}>
      <em>
        {currentTopListInfo.tracks && currentTopListInfo.tracks.length}首歌
      </em>
    </span>
  );
  return (
    <div className={styles.topListMain}>
      <CommonHeaderRcm
        title='歌曲列表'
        showIcon={false}
        left={left()}
        right={right()}
      />
      <div className='toplist-main-container'>
        <div className='main-header'>
          <div className='sprite_table header-item'></div>
          <div className='sprite_table header-item header-title'>标题</div>
          <div className='sprite_table header-item header-time'>时长</div>
          <div className='sprite_table header-item header-singer'>歌手</div>
        </div>
        <div className='main-list'>
          {currentTopListInfo.tracks &&
            currentTopListInfo.tracks.map((i, index) => (
              <SongItem
                key={i.id}
                index={index + 1}
                coverPic={index < 3 ? i.al.picUrl : ''}
                dr={formatMinuteSecond(i.dt)}
                songName={`${i.name} ${
                  i.alia.length ? ` -(${i.alia.join(',')})` : ''
                }`}
                songId={i.id}
                artist={i.ar.map(ci => ci.name).join('/')}
                i={i}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
