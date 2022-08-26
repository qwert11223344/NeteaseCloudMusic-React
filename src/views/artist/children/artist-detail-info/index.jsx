import { getImageSize } from '@/utils';
import { Button } from 'antd';
import styles from './index.module.scss';
export default function ArtistDetailInfo({ artistInfo }) {
  const { name = '', cover = '' } = artistInfo;
  return (
    <div className={styles.artistDetailInfo}>
      <div className='artist-detail-info-wrapper'>
        <h1 className='artist-name'>{name}</h1>
        <div className='cover-img'>
          <img src={getImageSize(cover, 640, 300)} alt='' />
          <Button className='userHome-btn' shape='round' danger type='default'>
            个人主页
          </Button>
          <Button className='collectArtist-btn' shape='round'>
            收藏歌手
          </Button>
        </div>
      </div>
    </div>
  );
}
