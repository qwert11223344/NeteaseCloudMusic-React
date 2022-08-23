import AlbumCover from '@/components/album-cover';
import styles from './index.module.scss';
export default function SearchAlbum({ searchList }) {
  return (
    <div className={styles.searchAlbum}>
      {searchList?.length
        ? searchList.map(i => <AlbumCover key={i.id} item={i} imgWidth={130} />)
        : ''}
    </div>
  );
}
