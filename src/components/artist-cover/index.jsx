import { getImageSize } from '@/utils';
import styles from './index.module.scss';
export default function ArtistCover({ item, imgWidth = 150 }) {
  const { picUrl = '', name = '', id = '' } = item;
  return (
    <a
      href={`/#/artist?id=${id}`}
      className={styles.artistCover}
      style={{ width: imgWidth, height: imgWidth + 40 }}
    >
      <div className='artist-cover-wrapper'>
        <img src={getImageSize(picUrl, imgWidth)} alt={name} />
        <span className='artist-name' style={{ width: imgWidth }}>
          {name}
        </span>
      </div>
    </a>
  );
}
