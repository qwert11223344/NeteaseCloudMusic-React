import { useDelPlayListById } from '@/hooks/music';
import { changeCurrentSong, changeIsFirstLoad } from '@/store/action/playbar';
import { formatDate } from '@/utils';
import {
  DeleteOutlined,
  DownloadOutlined,
  LikeOutlined
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import styles from './index.module.scss';
export default function PlayListItem({ song, isActive }) {
  const disPatch = useDispatch();
  const { name, dt, ar, id } = song;
  const artist = ar.map(a => a.name).join('/');
  const delPlayListById = useDelPlayListById();

  const setCurrentSong = e => {
    disPatch(changeCurrentSong(song));
    disPatch(changeIsFirstLoad(true));
    e.stopPropagation();
  };

  return (
    <div className={styles.playListItem}>
      <div
        className={`list-item-content ${isActive ? 'active' : ''}`}
        onClick={setCurrentSong}
      >
        <div className='song-name'>{name}</div>
        <div className='control-and-singer'>
          <LikeOutlined />
          <DownloadOutlined />
          <DeleteOutlined
            onClick={e => {
              e.stopPropagation();
              delPlayListById(id);
            }}
          />
          <span className='artist-name'>{artist}</span>
        </div>
        <div className='duration'>{formatDate(dt, 'mm:ss')}</div>
      </div>
    </div>
  );
}
