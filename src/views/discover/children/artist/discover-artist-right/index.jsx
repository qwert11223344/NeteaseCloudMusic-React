import { surname } from '@/common/localData';
import ArtistCover from '@/components/artist-cover';
import CommonHeaderRcm from '@/components/common-header-recommend';
import { Skeleton } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './index.module.scss';
export default function DiscoverArtistRight({
  artists,
  more,
  title,
  currentPage,
  setCurrentPage,
  setInitial
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  //滚动加载
  useEffect(() => {
    let intersectionObs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            intersectionObs.unobserve(e.target);
            setCurrentPage(currentPage + 1);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        thresholds: 1
      }
    );

    if (more && artists.length === 30 * currentPage) {
      const index = artists.length - 5;
      const el = document.querySelector(`.artist-item-${index}`);
      intersectionObs.observe(el);
    }
    return () => {
      intersectionObs.disconnect();
      intersectionObs = null;
    };
  }, [artists, more, currentPage, setCurrentPage]);
  return (
    <div className={styles.discoverArtistRight}>
      <CommonHeaderRcm title={title} showIcon={false} right='' />
      <div className='surname'>
        {surname.map((i, index) => (
          <span
            className={`surname-item ${index === currentIndex ? 'active' : ''}`}
            key={i.label}
            onClick={() => {
              setCurrentIndex(index);
              setCurrentPage(1);
              setInitial(i.value);
            }}
          >
            {i.label}
          </span>
        ))}
      </div>
      <div className='artist-wrapper'>
        {artists.length ? (
          artists.map((i, index) => (
            <div className={`artist-item-${index}`} key={i.id}>
              <ArtistCover item={i} imgWidth={130} />
            </div>
          ))
        ) : (
          <Skeleton active />
        )}
      </div>
    </div>
  );
}
