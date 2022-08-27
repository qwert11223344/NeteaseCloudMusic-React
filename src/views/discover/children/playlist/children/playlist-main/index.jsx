import WNPagination from '@/components/pagination';
import SongCover from '@/components/song-cover';
import {
  asyncGetPlayList,
  setPlayListCurrentCat
} from '@/store/action/playlist';
import { Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styles from './index.module.scss';

export default function PlayListMain() {
  const disPatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    const type = decodeURI(location.search.split('=').pop());
    disPatch(setPlayListCurrentCat(type));
  }, [location, disPatch]);

  const {
    playList: { total, playlists },
    currentCat
  } = useSelector(state => state.playListReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 35;
  const onPageChange = page => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };
  useEffect(() => {
    disPatch(
      asyncGetPlayList(pageSize, currentCat, pageSize * (currentPage - 1))
    );
  }, [disPatch, currentPage, currentCat]);

  return (
    <div className={styles.playListMain}>
      {playlists?.length ? (
        <div className='songs-list'>
          {playlists.map(item => {
            return <SongCover key={item.id} info={item} />;
          })}
        </div>
      ) : (
        <Skeleton active />
      )}
      <WNPagination
        current={currentPage}
        total={total}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}
