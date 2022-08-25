import CommonHeaderRcm from '@/components/common-header-recommend';
import SongCover from '@/components/song-cover';
import styles from './index.module.scss';
export default function UserPlayList({
  listCount = 0,
  userPlaylist,
  name = '',
  currentPage = 1,
  setCurrentPage
}) {
  return (
    <div className={styles.userPlayList}>
      <CommonHeaderRcm
        title={`${name}创建的歌单 (${listCount})`}
        showIcon={false}
        right=''
      />
      <div className='user-playlist-wrapper'>
        {userPlaylist
          ? userPlaylist.map(i => (
              <SongCover key={i.id} info={i} showWriter={false} />
            ))
          : ''}
      </div>
    </div>
  );
}
