import { getImageSize } from '@/utils';
import styles from './index.module.scss';
export default function ArtistCover({ item }) {
  const { picUrl = '', name = '', id = '' } = item;
  return (
    <a href={`/#/artist?id=${id}`} className={styles.artistCover}>
      <div className='artist-cover-wrapper'>
        <img src={getImageSize(picUrl, 150)} alt={name} />
        <span className='artist-name'>{name}</span>
      </div>
    </a>
  );
}
