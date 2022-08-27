import ArtistCover from '@/components/artist-cover';
import styles from './index.module.scss';
export default function SearchArtist({ searchList }) {
  return (
    <div className={styles.searchArtist}>
      {searchList
        ? searchList.map(i => <ArtistCover item={i} key={i.id} />)
        : ''}
    </div>
  );
}
