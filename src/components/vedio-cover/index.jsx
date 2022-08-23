import { formatMinuteSecond, getCount, getImageSize } from '@/utils';
import styles from './index.module.scss';
export default function VideoCover({ item }) {
  const {
    vid = '',
    title = '',
    coverUrl = '',
    creator = [{ userName: '' }],
    playTime = 0,
    durationms = 0
  } = item;
  return (
    <a className={styles.videoCover} href={`#/video?id=${vid}`}>
      <div className='video-cover-content'>
        <div className='video-img'>
          <img src={getImageSize(coverUrl, 160, 90)} alt='' />
          <span className='playTime'>{getCount(playTime)}</span>
          <span className='duration'>{formatMinuteSecond(durationms)}</span>
        </div>
        <span className='title'>{title}</span>
        <span className='author-name'>{creator[0].userName}</span>
      </div>
    </a>
  );
}
