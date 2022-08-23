import { formatMinuteSecond } from '@/utils';
import SongItem from '@/views/discover/children/toplist/children/song-item';
import styles from './index.module.scss';
export default function SearchSong({ searchList }) {
  return (
    <div className={styles.searchSong}>
      {searchList.length
        ? searchList.map(i => (
            <div className='search-song-item' key={i.id}>
              <SongItem
                songId={i.id}
                songName={i.name}
                artist={i?.ar[0].name}
                dr={formatMinuteSecond(i.dt)}
                i={i}
              />
            </div>
          ))
        : ''}
    </div>
  );
}
