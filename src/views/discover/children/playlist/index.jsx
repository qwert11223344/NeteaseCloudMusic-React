import PlayListHeader from './children/playlist-header';
import PlayListMain from './children/playlist-main';
import styles from './index.module.scss';
export default function PlayList() {
  return (
    <div className={`${styles.discoverPlayList} wrap-v2`}>
      <PlayListHeader />
      <PlayListMain />
    </div>
  );
}
