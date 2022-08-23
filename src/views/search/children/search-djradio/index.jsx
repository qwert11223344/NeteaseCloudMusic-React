import { getImageSize } from '@/utils';
import styles from './index.module.scss';
export default function SearchDjradio({ searchList }) {
  return (
    <div className={styles.searchDjradio}>
      {searchList.length
        ? searchList.map(i => (
            <a className='dj-item' key={i?.id} href={`#/djradio?id=${i?.id}`}>
              <img src={getImageSize(i?.picUrl, 150)} alt='' />
              <span className='title'>{i?.name}</span>
              <span className='creator-name'>by {i?.dj?.nickname}</span>
            </a>
          ))
        : ''}
    </div>
  );
}
