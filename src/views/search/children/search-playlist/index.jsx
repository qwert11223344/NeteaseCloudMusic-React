import { getCount, getImageSize } from '@/utils';
import styles from './index.module.scss';
export default function SearchPlaylist({ searchList }) {
  return (
    <div className={styles.searchPlaylist}>
      {searchList.length
        ? searchList.map(i => (
            <div className='playlist-item' key={i.id}>
              <div className='info'>
                <a href={`#/playlist?id=${i?.id}`}>
                  <img src={getImageSize(i?.coverImgUrl, 50)} alt='' />
                  <span>{i?.name}</span>
                </a>
              </div>
              <div className='count-wrapper'>
                <span className='track-count'>{i?.trackCount}首</span>
                <span>by</span>
                <span className='creator-name'>{i?.creator?.nickname}</span>
              </div>
              <div className='collect-wrapper'>
                <span className='collect-count'>
                  收藏：{getCount(i?.bookCount)}
                </span>
                <span className='play-count'>
                  收听：{getCount(i?.playCount)}
                </span>
              </div>
            </div>
          ))
        : ''}
    </div>
  );
}
