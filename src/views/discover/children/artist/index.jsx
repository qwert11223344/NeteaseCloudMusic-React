import artistApi from '@/api/artistApi';
import { artistCategories } from '@/common/localData';
import qs from 'qs';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DiscoverArtistLeft from './discover-artist-left';
import DiscoverArtistRight from './discover-artist-right';
import styles from './index.module.scss';
export default function DisCoverArtist() {
  const lastArtists = useRef([]); //用于记录上一次的歌手列表
  const [currentPage, setCurrentPage] = useState(1); //当前页
  const [artistList, setArtistList] = useState([]); //歌手列表
  const [more, setMore] = useState(false); //下一页
  const [title, setTitle] = useState('');
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [type, setType] = useState(-1);
  const [area, setArea] = useState(-1);
  const [initial, setInitial] = useState('');
  const location = useLocation();
  useEffect(() => {
    const params = qs.parse(location.search);
    const isEmpty = !Object.keys(params).length;
    !isEmpty &&
      isFirstLoad &&
      (function () {
        Object.entries(params).forEach(([k, v]) => {
          k.includes('type') && v != type && setType(+v);
          k.includes('area') && v != area && setArea(+v);
        });
        setIsFirstLoad(false);
      })();
  }, [location, type, area, isFirstLoad]);
  //当选项变化的时候重置数据
  useEffect(() => {
    // setCurrentPage(1);
    lastArtists.current = [];
    const title = artistCategories
      .find(i => i.area == area)
      ?.artists?.find(i => i.type == type)?.name;
    setTitle(title);
  }, [type, area, initial]);
  //请求数据
  useEffect(() => {
    const asyncGetArtistList = async (
      type,
      area,
      initial,
      offset = (currentPage - 1) * 30
    ) => {
      const { artists, more } = await artistApi.getArtistList(
        type,
        area,
        initial,
        offset
      );

      if (currentPage === 1) lastArtists.current = [];
      lastArtists.current.push(...artists);

      setArtistList([...lastArtists.current]);
      setMore(more);
    };
    asyncGetArtistList(type, area, initial);
  }, [type, area, initial, currentPage]);

  //分页
  // const changeCurrentPage = v => {
  //   setCurrentPage(v);
  // };

  return (
    <div className={styles.discoverArtist}>
      <div className='artist-container'>
        <div className='artist-container-left'>
          <DiscoverArtistLeft
            setCurrentPage={setCurrentPage}
            setArea={setArea}
            setType={setType}
            area={area}
            type={type}
          />
        </div>
        <div className='artist-container-right'>
          <DiscoverArtistRight
            artists={artistList}
            more={more}
            title={title}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setInitial={setInitial}
          />
        </div>
      </div>
    </div>
  );
}
