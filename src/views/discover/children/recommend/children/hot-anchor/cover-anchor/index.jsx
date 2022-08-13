import { getImageSize } from '@/utils';
import styles from './index.module.scss';
export default function CoverAnchor({ info }) {
  const { dj } = info;

  return (
    <div className={styles.coverAnchor}>
      <div className='artist-image'>
        <img src={getImageSize(dj.avatarUrl, 40)} alt='' />
      </div>
      <div className='artist-info'>
        <a href={`#/user/home?id=${dj.userId}`} className='artist-name'>
          {dj.nickname}
        </a>
        <p className='artist-detail text-nowrap'>{dj.signature}</p>
      </div>
    </div>
  );
}
