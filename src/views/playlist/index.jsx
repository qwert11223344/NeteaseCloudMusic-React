import playListApi from '@/api/playListApi';
import DiscoverNav from '@/components/navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PlaylistDetailLeft from './children/playlist-detail-left';
import styles from './index.module.scss';
export default function PlaylistDetail() {
  const location = useLocation();
  const [playlistInfo, setPlaylistInfo] = useState({});
  useEffect(() => {
    const id = location.search.split('=').pop();
    const asyncGetPlaylistDetail = async id => {
      const { playlist } = await playListApi.getPlaylistDetail(id);
      setPlaylistInfo(playlist);
    };
    asyncGetPlaylistDetail(id);
  }, [location]);
  return (
    <div className={styles.playlistDetail}>
      <DiscoverNav />
      <div className='playlist-detail-content'>
        <PlaylistDetailLeft playlistDetail={playlistInfo} />
      </div>
    </div>
  );
}
