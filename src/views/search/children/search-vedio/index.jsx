import VideoCover from '@/components/vedio-cover';
import styles from './index.module.scss';
export default function SearchVideo({ searchList }) {
  return (
    <div className={styles.searchVideo}>
      {searchList.length
        ? searchList.map(i => <VideoCover key={i.vid} item={i} />)
        : ''}
    </div>
  );
}
