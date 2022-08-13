import { getImageSize } from '@/utils';
import styles from './index.module.scss';
export default function AlbumCover({ item }) {
  return (
    <div className={styles.albumCover} style={{ width: 153 }}>
      <div className={'album-image'} style={{ height: 100 }}>
        <img src={getImageSize(item.picUrl, 100)} alt=''></img>

        <i className='sprite_icon play'></i>
      </div>
      <div className='album-name text-nowrap' style={{ width: 130 }}>
        {item.name}
      </div>
      <div className='artist text-nowrap'>{item.artist.name}</div>
    </div>
  );
}
