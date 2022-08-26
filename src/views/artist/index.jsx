import artistApi from '@/api/artistApi';
import ArtistCover from '@/components/artist-cover';
import { Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ArtistDetailInfo from './children/artist-detail-info';
import styles from './index.module.scss';
export default function ArtistDetail({ route }) {
  const [artistInfo, setArtistInfo] = useState(null);
  const [hotArtistList, setHotArtistList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const id = location.search.split('=').pop();
    const asyncGetArtistInfo = async id => {
      const {
        data: { artist }
      } = await artistApi.getArtistDetail(id);
      setArtistInfo(artist);
    };
    asyncGetArtistInfo(id);
  }, [location]);

  useEffect(() => {
    const asyncGetHotArtistList = async (offset, limit) => {
      const { artists } = await artistApi.getHotArtistList(offset, limit);
      setHotArtistList(artists);
    };
    asyncGetHotArtistList(0, 6);
  }, []);
  return (
    <div className={styles.artistDetail}>
      {artistInfo ? (
        <>
          <div className='artist-detail-left'>
            <ArtistDetailInfo artistInfo={artistInfo} />
            <div className='option-group m-tab'>
              <NavLink
                to={`/artist?id=${artistInfo.id}`}
                exact={true}
                className='m-tab'
              >
                热门作品
              </NavLink>
              <NavLink
                to={`/artist/album?id=${artistInfo.id}`}
                className='m-tab'
              >
                所有专辑
              </NavLink>
              <NavLink to={`/artist/mv?id=${artistInfo.id}`} className='m-tab'>
                相关MV
              </NavLink>
              <NavLink
                to={`/artist/desc?id=${artistInfo.id}`}
                className='m-tab'
              >
                艺人介绍
              </NavLink>
            </div>

            <div className='artist-detail-content'>
              {/* 改进方案：子路由的数据可以从这里获取然后通过provider注入到子组件中，不需要子组件一个一个获取 */}
              {renderRoutes(route.routes)}
            </div>
          </div>
          <div className='artist-detail-right'>
            <section>
              <p className='title'>热门歌手</p>
              <div className='hot-artist-list'>
                {hotArtistList.length &&
                  hotArtistList.map(i => (
                    <ArtistCover key={i.id} item={i} imgWidth={50} />
                  ))}
              </div>
            </section>
            <section>
              <p className='title'>网易云多端下载</p>
              <div className='download sprite-download'>
                <span
                  className='ios sprite-download'
                  onClick={() =>
                    window.open('https://apps.apple.com/cn/app/id590338362')
                  }
                ></span>
                <span
                  className='windows sprite-download'
                  onClick={() =>
                    window.open('https://music.163.com/api/pc/download/latest')
                  }
                ></span>
                <span
                  className='android sprite-download'
                  onClick={() =>
                    window.open(
                      'https://music.163.com/api/android/download/latest2'
                    )
                  }
                ></span>
              </div>
              <em>同步歌单，随时畅听320k好音乐</em>
            </section>
          </div>
        </>
      ) : (
        <Skeleton active />
        // <Result
        //   status='error'
        //   icon={<SmileOutlined />}
        //   title='由于接口问题，暂时没有歌手详情页面'
        //   style={{ height: 600 }}
        //   extra={
        //     <Button type='primary' danger>
        //       <NavLink to='/'>首页</NavLink>
        //     </Button>
        //   }
        // />
      )}
    </div>
  );
}
