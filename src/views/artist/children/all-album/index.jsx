import styles from './index.module.scss';
import artistApi from '@/api/artistApi';
import AlbumCover from '@/components/album-cover';
import { Skeleton } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WNPagination from '@/components/pagination';

export default function ArtistAllAlbum() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [allAlbum, setAllAlbum] = useState([]);
  useEffect(() => {
    const id = location.search.split('=').pop();
    const asyncGetAllAlbum = async (
      id,
      offset = (currentPage - 1) * 12,
      limit = 12
    ) => {
      const {
        hotAlbums,
        artist: { albumSize }
      } = await artistApi.getArtistAllAlbum(id, offset, limit);
      setAllAlbum(hotAlbums);
      setTotal(albumSize);
    };
    asyncGetAllAlbum(id);
  }, [location, currentPage]);
  return (
    <>
      <div className={styles.artistAllAlbums}>
        {allAlbum.length ? (
          allAlbum.map(i => (
            <AlbumCover
              key={i.id}
              item={i}
              imgWidth={130}
              showArtist={false}
              showCreateTime={true}
            />
          ))
        ) : (
          <Skeleton active />
        )}
      </div>
      <WNPagination
        total={total}
        current={currentPage}
        onPageChange={setCurrentPage}
        pageSize={12}
      />
    </>
  );
}
