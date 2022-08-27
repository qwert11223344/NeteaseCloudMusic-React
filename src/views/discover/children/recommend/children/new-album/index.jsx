import recommendApi from '@/api/recommendApi';
import AlbumCover from '@/components/album-cover';
import CommonHeaderRcm from '@/components/common-header-recommend';
import { Carousel } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.scss';
export default function NewAlum() {
  const [newAlum, setNewAlum] = useState([]);
  const albumCarouselRef = useRef('');
  const history = useHistory();
  useEffect(() => {
    const getNewAlbum = async () => {
      const { albums } = await recommendApi.getNewAlbum();
      setNewAlum(albums);
    };
    getNewAlbum();
  }, []);
  return (
    <div className={styles.newAlbum}>
      <CommonHeaderRcm
        title='新碟上架'
        clickRight={() => history.push(`/album`)}
      />
      <div className='new-album-content'>
        <div className='inner'>
          <Carousel dots={false} autoplay={false} ref={albumCarouselRef}>
            {[0, 1].map(i => (
              <div key={i} className='page'>
                {newAlum.slice(i * 5, (i + 1) * 5).map(ci => (
                  <AlbumCover key={ci.id} item={ci}>
                    {ci.name}
                  </AlbumCover>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
        <div
          className='sprite_02 arrow arrow-left'
          onClick={_ => albumCarouselRef.current.prev()}
        ></div>
        <div
          className='sprite_02 arrow arrow-right'
          onClick={_ => albumCarouselRef.current.next()}
        ></div>
      </div>
    </div>
  );
}
