import styles from './index.module.scss';
import { headerLinks, loginMenu } from '@/common/localData/index';
import { NavLink } from 'react-router-dom';
import { Avatar, Badge, Dropdown, Input, Menu, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  asyncGetAccountInfo,
  setCookie,
  setIsLogin,
  setIsShowLogin
} from '@/store/action/login';
import CommonLogin from '../common-login';
import { useEffect } from 'react';
import searchApi from '@/api/searchApi';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import userApi from '@/api/userApi';
import localCache from '@/utils/localStorage';
import localKey from '@/common/localStorageKey';
export default function Header() {
  const disPatch = useDispatch();
  const { isLogin, accountInfo } = useSelector(
    state => state.loginReducer,
    shallowEqual
  );
  useEffect(() => {
    isLogin && disPatch(asyncGetAccountInfo());
  }, [isLogin, disPatch]);
  const GroupItem = ({ item, index }) => {
    return index > 2 ? (
      <a
        href={item.link}
        target='_blank'
        rel='noreferrer'
        className='header-item'
      >
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

    const search = useCallback(
      (type, id) => {
        history.push(`/${type}?id=${id}`);
      },
      [history]
    );
    const pressEnter = useCallback(() => {
      searchKeyWords &&
        (function () {
          history.push(`/search?key=${searchKeyWords}`);
          setSearchKeyWords('');
        })();
    }, [searchKeyWords, history]);

    return (
      <div className='search-wrapper'>
        <Input
          className='search'
          prefix={<SearchOutlined />}
          placeholder='音乐/视频/电台/用户'
          value={searchKeyWords}
          onChange={e => setSearchKeyWords(e.target.value.trim())}
          onPressEnter={pressEnter}
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
                      onClick={() => search('song', i.id)}
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
                    <div
                      className='item'
                      key={i.id}
                      onClick={() => search('artist', i.id)}
                    >
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
                    <div
                      className='item'
                      key={i.id}
                      onClick={() => search('album', i.id)}
                    >
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
                    <div
                      className='item'
                      key={i.id}
                      onClick={() => search('playlist', i.id)}
                    >
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

  const ProfileDownMenu = () => {
    const history = useHistory();
    const changeSelect = item => {
      switch (item.to) {
        case '/user/home':
          history.push(`${item.to}?id=${accountInfo.userId}`);
          break;
        case '/logout':
          (async function () {
            await userApi.logout();
            message.success('退出成功');
            localCache.remove(localKey.USER_COOKIE);
            disPatch(setIsLogin(false));
            disPatch(setCookie(''));
          })();
          break;
        default:
          break;
      }
    };
    return isLogin ? (
      <ul className={styles.dropList}>
        {loginMenu.map(i => (
          <li key={i.key} className='menu-item' onClick={() => changeSelect(i)}>
            <span className='icon'>{i.icon}</span>
            <span className='label'>{i.label}</span>
          </li>
        ))}
      </ul>
    ) : (
      ''
    );
  };

  const ShowProfileContent = () => {
    return (
      <Badge size='small' count={0}>
        <Avatar src={accountInfo?.avatarUrl} />
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
          <Dropdown overlay={<ProfileDownMenu />}>
            <div
              className='login'
              onClick={() => !isLogin && disPatch(setIsShowLogin(true))}
            >
              {isLogin ? <ShowProfileContent /> : '登录'}
            </div>
          </Dropdown>
        </div>
      </div>
      {<CommonLogin />}
    </header>
  );
}
