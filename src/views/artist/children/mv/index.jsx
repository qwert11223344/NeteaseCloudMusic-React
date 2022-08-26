import artistApi from '@/api/artistApi';
import WNPagination from '@/components/pagination';
import { getImageSize } from '@/utils';
import { Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './index.module.scss';
export default function ArtistMV() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [allVideo, setAllVideo] = useState([]);
  // const cursorRef = useRef('');
  useEffect(() => {
    const id = location.search.split('=').pop();
    const asyncGetArtistInfo = async id => {
      const {
        data: { videoCount }
      } = await artistApi.getArtistDetail(id);
      setTotal(videoCount);
    };
    asyncGetArtistInfo(id);
    const asyncGetAllVideo = async (
      id,
      size,
      offset = (currentPage - 1) * 12
    ) => {
      const {
        data: {
          records
          // page: { cursor }
        }
      } = await artistApi.getArtistVideo(id, size, offset);
      // cursorRef.current = cursor;
      setAllVideo(records);
    };
    asyncGetAllVideo(id, 12);
  }, [location, currentPage]);
  return (
    <>
      <div className={styles.artistAllVideo}>
        {allVideo.length ? (
          allVideo.map(i => (
            <div key={i.id} className='mv-item '>
              <img
                src={getImageSize(
                  i?.resource?.mlogBaseData?.coverUrl,
                  137,
                  103
                )}
                alt=''
              />
              <span className='text-nowrap'>
                {i?.resource?.mlogBaseData?.text}
              </span>
              <i className='sprite_icon play'></i>
            </div>
          ))
        ) : (
          <Skeleton />
        )}
      </div>
      <WNPagination
        total={total}
        onPageChange={setCurrentPage}
        current={currentPage}
        pageSize={12}
      />
    </>
  );
}
