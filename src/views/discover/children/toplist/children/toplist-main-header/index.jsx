import { formatDate, formatMonthDay, getImageSize } from '@/utils';
import { shallowEqual, useSelector } from 'react-redux';
import { FieldTimeOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
export default function TopListMainHeader() {
  const { currentTopListInfo } = useSelector(
    state => state.topListReducer,
    shallowEqual
  );

  const {
    coverImgUrl,
    name,
    trackNumberUpdateTime,
    subscribedCount,
    shareCount,
    commentCount
  } = currentTopListInfo;
  return (
    <div className={styles.topListMainHeader}>
      <div className='title-image'>
        <img src={getImageSize(coverImgUrl, 150)} alt='' />
        <div className='image_cover msk'></div>
      </div>
      <div className='title-info'>
        <h2>{name}</h2>
        <div className='update-info'>
          <FieldTimeOutlined className='timer' />
          最近更新: {formatMonthDay(trackNumberUpdateTime)}
        </div>
        <div className='controls'>
          <div className='sprite_button play'>
            <i className='sprite_button inner'>
              <em className='sprite_button play-icon'></em>
              播放
            </i>
          </div>
          <div className='sprite_button favorite'>
            <i className='sprite_button inner'>
              <em className='sprite_button favorite-icon'></em>(
              {subscribedCount})
            </i>
          </div>
          <div className='sprite_button share'>
            <i className='sprite_button inner'>
              <em className='sprite_button favorite-icon'></em>({shareCount})
            </i>
          </div>
          <div className='sprite_button download'>
            <i className='sprite_button inner'>
              <em className='sprite_button favorite-icon'></em>
              下载
            </i>
          </div>
          <div className='sprite_button comment'>
            <i className='sprite_button inner'>
              <em className='sprite_button favorite-icon'></em>({commentCount})
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
