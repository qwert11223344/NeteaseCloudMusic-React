import { formatDate, getImageSize } from '@/utils';
import styles from './index.module.scss';
export default function AlbumCover({
  item,
  imgWidth = 100,
  showArtist = true,
  showCreateTime = false
}) {
  return (
    <div className={styles.albumCover} style={{ width: 153 }}>
      <div
        className={'album-image'}
        style={{
          height: imgWidth,
          backgroundPosition: `0 ${imgWidth === 130 ? '-845px' : '-570px'}`
        }}
      >
        <img src={getImageSize(item.picUrl, imgWidth)} alt=''></img>

        <i className='sprite_icon play'></i>
      </div>
      <div className='album-name text-nowrap' style={{ width: 130 }}>
        {item?.name}
      </div>
      {showArtist && (
        <div className='artist text-nowrap'>{item?.artist?.name}</div>
      )}
      {showCreateTime && (
        <div className='createTime text-nowrap'>
          {formatDate(item?.publishTime, 'yyyy.MM.dd')}
        </div>
      )}
    </div>
  );
}
