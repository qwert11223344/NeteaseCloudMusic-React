import userApi from '@/api/userApi';
import CommonUserInfo from '@/components/common-userInfo';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './index.module.scss';
import UserPlayList from './user-playlist';
export default function UserDetail() {
  const location = useLocation();
  const [userInfo, setUserInfo] = useState({});
  const [userPlaylist, setUserPlaylist] = useState([]);
  //获取用户信息
  useEffect(() => {
    const id = location.search.split('=').pop();
    const asyncGetUserInfo = async id => {
      const { profile, level } = await userApi.getUserInfo(id);
      profile.level = level;
      setUserInfo(profile);
    };

    asyncGetUserInfo(id);
  }, [location]);
  //获取歌单
  useEffect(() => {
    const id = location.search.split('=').pop();
    const limit = userInfo?.playlistCount - 1 || 0;
    const asyncGetUserPlaylist = async (id, offset = 0, limit) => {
      const { playlist } = await userApi.getUserPlaylist(id, offset, limit);
      setUserPlaylist(playlist);
    };
    asyncGetUserPlaylist(id, 0, limit);
  }, [location, userInfo]);
  return (
    <div className={styles.userHome}>
      <CommonUserInfo userInfo={userInfo} />
      {userPlaylist ? (
        <UserPlayList
          name={userInfo?.nickname}
          listCount={userInfo?.playlistCount}
          userPlaylist={userPlaylist}
        />
      ) : (
        ''
      )}
    </div>
  );
}
