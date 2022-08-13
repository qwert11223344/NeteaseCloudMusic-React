import recommendApi from '@/api/recommendApi';
import { Carousel } from 'antd';
import { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
export default function Banners() {
  const carouselRef = useRef(null);
  const [banners, setBanners] = useState([]);
  const [currentBanner, setCurrentBanner] = useState(0);
  useEffect(() => {
    const getBanners = async () => {
      const { banners } = await recommendApi.getBanners();
      setBanners(banners);
    };
    getBanners();
  }, []);
  return (
    <div
      className={styles.bannerWrapper}
      style={{
        background: banners.length
          ? `url(${banners[currentBanner].imageUrl}?imageView&blur=40x20) center center/6000px`
          : ''
      }}
    >
      <div className='banner w980'>
        <div className='banner-left'>
          <Carousel
            autoplay={true}
            effect='fade'
            ref={carouselRef}
            beforeChange={(from, to) => setCurrentBanner(to)}
          >
            {banners.map(banner => (
              <div key={banner.imageUrl}>
                <img src={banner.imageUrl} alt={banner.typeTitle} />
              </div>
            ))}
          </Carousel>
        </div>
        <a
          className='banner-right'
          href='https://d1.music.126.net/dmusic/cloudmusicsetup2.8.0.198822.exe'
        >
          ''
        </a>
        <div className='banner-control'>
          <button
            className='btn'
            onClick={() => carouselRef.current.prev()}
          ></button>
          <button
            className='btn'
            onClick={() => carouselRef.current.next()}
          ></button>
        </div>
      </div>
    </div>
  );
}
