import styles from './index.module.scss';
import { headerLinks, loginMenu } from '@/common/localData/index';
import { NavLink } from 'react-router-dom';
import { Avatar, Badge, Dropdown, Input, Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShowLogin } from '@/store/action/login';
import CommonLogin from '../common-login';
export default function Header() {
  const disPatch = useDispatch();
  const [searchSongList, setSearchSongList] = useState([]);
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
    const [searchKeyWords, setSearchKeyWords] = useState('');
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
            <div className='zuo'>
              <span className='song'>单曲</span>
            </div>
            <span className='main'>
              {searchSongList &&
                searchSongList.map((item, index) => {
                  return (
                    <div
                      className='song-item '
                      key={item.id}
                      // onClick={() => changeCurrentSong(item.id, item)}
                    >
                      <span>{item.name}</span>-{item.artists[0].name}
                    </div>
                  );
                })}
            </span>
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
