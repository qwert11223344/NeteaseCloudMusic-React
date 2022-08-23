import styles from './index.module.scss';
import { headerLinks, loginMenu } from '@/common/localData/index';
import { NavLink } from 'react-router-dom';
import { Avatar, Badge, Dropdown, Input, Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShowLogin } from '@/store/action/login';
import CommonLogin from '../common-login';
import { useEffect } from 'react';
import searchApi from '@/api/searchApi';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { changeCurrentSong } from '@/store/action/playbar';
export default function Header() {
  const disPatch = useDispatch();
  const { isLogin } = useSelector(state => state.loginReducer);
  const GroupItem = ({ item, index }) => {
    return index > 2 ? (
      <a href={item.link} className='header-item'>
        {item.title}
      </a>
    ) : (
      <NavLink
        to={item.link}
        className='header-item'
        activeClassName='link-active'
      >
        {item.title}
        <i className='icon'></i>
      </NavLink>
    );
  };

  const SearchInput = () => {
    const history = useHistory();
    const disPatch = useDispatch();
    const [searchKeyWords, setSearchKeyWords] = useState('');
    const [searchSuggest, setSearchSuggest] = useState({});

    useEffect(() => {
      const asyncGetSearchSuggest = async () => {
        const {
          result: { albums, artists, songs, playlists }
        } = await searchApi.getSearchSuggest(searchKeyWords);

        setSearchSuggest({ albums, artists, songs, playlists });
      };
      searchKeyWords && asyncGetSearchSuggest();
    }, [searchKeyWords]);

    const searchSong = useCallback(
      id => {
        history.push(`song?id=${id}`);
        disPatch(changeCurrentSong());
      },
      [history, disPatch]
    );
    return (
      <div className='search-wrapper'>
        <Input
          className='search'
          prefix={<SearchOutlined />}
          placeholder='音乐/视频/电台/用户'
          value={searchKeyWords}
          onChange={e => setSearchKeyWords(e.target.value.trim())}
        />
        <div
          className='down-slider'
          style={{
            display: searchKeyWords ? 'block' : 'none'
          }}
        >
          <div className='search-header'>
            <span className='discover'>搜"{searchKeyWords}"相关用户 &gt;</span>
          </div>

          <div className='content'>
            {searchSuggest.songs && (
              <div className='option'>
                <span className='option-name'>单曲</span>
                <div className='main'>
                  {searchSuggest.songs.map(i => (
                    <div
                      className='item'
                      key={i.id}
                      onClick={() => searchSong(i.id)}
                    >
                      <span className='blue'>{i.name}</span>-
                      {i?.artists[0].name}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {searchSuggest.artists && (
              <div className='option'>
                <span className='option-name'>歌手</span>
                <div className='main'>
                  {searchSuggest.artists.map(i => (
                    <div className='item' key={i.id}>
                      <span>{i.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {searchSuggest.albums && (
              <div className='option'>
                <span className='option-name'>专辑</span>
                <div className='main'>
                  {searchSuggest.albums.map(i => (
                    <div className='item' key={i.id}>
                      <span className='blue'>{i.name}</span>-{i?.artist.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {searchSuggest.playlists && (
              <div className='option'>
                <span className='option-name'>歌单</span>
                <div className='main'>
                  {searchSuggest.playlists.map(i => (
                    <div className='item' key={i.id}>
                      <span>{i.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const profileDownMenu = () => {
    return isLogin ? (
      <Menu className={styles.dropList} items={loginMenu} />
    ) : (
      ''
    );
  };

  const ShowProfileContent = () => {
    return (
      <Badge size='small' count={2}>
        <Avatar></Avatar>
      </Badge>
    );
  };

  return (
    <header className={`${styles.header} `}>
      <div className={`${styles.content}`}>
        <div className='headerLeft'>
          <h1>
            <a href='#/' className='logo sprite_01'>
              网易云音乐
            </a>
          </h1>
          <div className='header-group'>
            {headerLinks.map((i, index) => (
              <GroupItem key={i.title} item={i} index={index} />
            ))}
          </div>
        </div>
        <div className='header-right'>
          <SearchInput />
          <div className='center'>创作者中心</div>
          <Dropdown overlay={profileDownMenu}>
            <div
              className='login'
              onClick={() => !isLogin && disPatch(setIsShowLogin(true))}
            >
              {isLogin ? <ShowProfileContent /> : '登录'}
            </div>
          </Dropdown>
        </div>
      </div>
      {/* <div className='red-line'></div> */}
      {<CommonLogin />}
    </header>
  );
}
