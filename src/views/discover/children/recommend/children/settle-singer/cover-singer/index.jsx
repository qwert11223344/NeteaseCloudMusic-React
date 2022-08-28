import { getImageSize } from '@/utils';
import styles from './index.module.scss';
export default function CoverSinger({ info }) {
  return (
    <>
      {info && (
        <a className={styles.coverSinger} href={`#/artist?id=${info.id}`}>
          <div className='image'>
            <img src={getImageSize(info.picUrl, 62)} alt='' />
          </div>
          <div className='singer-title'>
            <div className='text-nowrap singer-name'>{info.name}</div>
            <div className='text-nowrap singer-detail'>流行歌手</div>
          </div>
        </a>
      )}
    </>
  );
}
