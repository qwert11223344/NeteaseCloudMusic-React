import styles from './index.module.scss';
import { Input } from 'antd';
import { useState } from 'react';
import { searchCategories } from '@/common/localData';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import searchApi from '@/api/searchApi';
import SearchSong from './children/search-song';
import WNPagination from '@/components/pagination';
import SearchArtist from './children/search-artist';
import SearchAlbum from './children/search-album';
import SearchVideo from './children/search-vedio';
import SearchLyric from './children/search-lyric';
import SearchPlaylist from './children/search-playlist';
import SearchDjradio from './children/search-djradio';
import SearchUser from './children/search-user';
import { useHistory } from 'react-router-dom';
export default function SearchDetail() {
  const { Search } = Input;
  const location = useLocation();
  const history = useHistory();
  const [searchKeyWords, setSearchKeyWords] = useState(''); //搜索关键字
  const [type, setType] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0); //选中索引
  const [searchList, setSearchList] = useState([]); //搜索列表
  const [searchCount, setSearchCount] = useState(0); //搜索数量
  const [currentPage, setCurrentPage] = useState(1); //当前页数
  useEffect(() => {
    const paramsArray = decodeURI(location.search).split('=');
    //对路径的中文进行解码
    const keywords = paramsArray[1] ?? '';
    setSearchKeyWords(keywords);
    const asyncGetSearchList = async (
      keywords,
      type,
      limit = 20,
      offset = (currentPage - 1) * 20
    ) => {
      const { result } = await searchApi.getSearchKeyWords(
        keywords,
        type,
        limit,
        offset
      );
      // 单曲 专辑 歌手 歌单 用户 视频 主播
      const total =
        result?.songCount ||
        result?.albumCount ||
        result?.artistCount ||
        result?.playlistCount ||
        result?.userprofileCount ||
        result?.videoCount ||
        result?.djRadioCount;
      const list =
        result?.songs ||
        result?.albums ||
        result?.artists ||
        result?.playlists ||
        result?.userprofiles ||
        result?.videos ||
        result?.djRadios;
      setSearchCount(total);
      setSearchList(list);
    };
    asyncGetSearchList(keywords, type);
  }, [location.search, type, currentPage]);
  const inputChange = e => {
    setSearchKeyWords(e.target.value.trim());
  };
  const currentPageChange = v => {
    setCurrentPage(v);
    window.scrollTo(0, 0);
  };
  const changeSearchOption = (e, i, index) => {
    e.preventDefault();
    setCurrentIndex(index);
    setSearchList([]);
    setType(+i.link.split('=').pop());
  };
  const pressEnter = () => {
    searchKeyWords && history.push(`/search?key=${searchKeyWords}`);
  };
  return (
    <div className={styles.search}>
      <div className='search-detail-wrapper w980'>
        <div className='search-detail-input'>
          <Search
            bordered={false}
            value={searchKeyWords}
            onChange={inputChange}
            style={{ width: 490 }}
            onSearch={pressEnter}
          />
        </div>
        <div className='search-detail-content'>
          <div className='search-info'>
            搜索"{decodeURI(location.search.split('=').pop())}",找到
            <span className='music-amount'> {searchCount} </span>个
            {searchCategories[currentIndex].title}
          </div>
          <div className='m-tab search-detail-category'>
            {searchCategories.map((i, index) => (
              <NavLink
                key={i.link}
                to={{ pathname: i.link }}
                className={`route-item m-tab ${
                  currentIndex === index ? 'active' : ''
                }`}
                onClick={e => changeSearchOption(e, i, index)}
              >
                <em>{i.title}</em>
              </NavLink>
            ))}
          </div>
          {/* 单曲 */}
          {type === 1 && <SearchSong searchList={searchList} />}
          {/* 歌手 */}
          {type === 100 && <SearchArtist searchList={searchList} />}
          {/* 专辑 */}
          {type === 10 && <SearchAlbum searchList={searchList} />}
          {/* 视频 */}
          {type === 1014 && <SearchVideo searchList={searchList} />}
          {/* 歌单 */}
          {type === 1000 && <SearchPlaylist searchList={searchList} />}
          {/* 声音主播 */}
          {type === 1009 && <SearchDjradio searchList={searchList} />}
          {/* 用户 */}
          {type === 1002 && <SearchUser searchList={searchList} />}
          {/* 歌词 */}
          {type === 1006 && <SearchLyric />}
        </div>
        <WNPagination
          current={currentPage}
          pageSize={20}
          total={searchCount}
          onPageChange={currentPageChange}
        />
      </div>
    </div>
  );
}
