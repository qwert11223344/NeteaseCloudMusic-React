import { getCount, getImageSize } from '@/utils';
import styles from './index.module.scss';
export default function SongCover({ info }) {
  const imgUrl = info.picUrl || info.coverImgUrl;
  const writer =
    (info && info.copywriter) || info.nickname || info.creator.nickname;
  return (
    <a
      className={styles.songCover}
      style={{ width: 140 }}
      href={`#/playlist?id=${info.id}`}
    >
      <div className='cover-wrapper'>
        <img src={getImageSize(imgUrl, 140)} alt={info.name} />
        <div className='cover-mask sprite_cover'>
          <div className='bottom-bar sprite_cover'>
            <span>
              <i className='sprite_icon erji'></i>
              {getCount(info.playCount)}
            </span>
            <i className='sprite_icon play'></i>
          </div>
        </div>
      </div>
      <div className='cover-title'>{info.name}</div>
      <div className='cover-source'>{writer}</div>
    </a>
  );
}
