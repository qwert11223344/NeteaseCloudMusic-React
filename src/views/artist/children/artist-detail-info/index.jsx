import { getImageSize } from '@/utils';
import styles from './index.module.scss';
export default function ArtistDetailInfo({ name = '', picUrl = '' }) {
  return (
    <div className={styles.artistDetailInfo}>
      <div className='artist-detail-info-wrapper'>
        <h1 className='artist-name'>{name}</h1>
        <img src={getImageSize(picUrl, 640, 300)} alt='' />
      </div>
    </div>
  );
}
