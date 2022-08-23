import { setIsShowLogin } from '@/store/action/login';
import { getCount, getImageSize } from '@/utils';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
export default function SearchUser({ searchList }) {
  const { isLogin } = useSelector(state => state.loginReducer, shallowEqual);
  const disPatch = useDispatch();
  return (
    <div className={styles.searchUser}>
      {searchList?.length
        ? searchList.map(i => (
            <div className='user-item' key={i?.userId}>
              <div className='info'>
                <a href={`#/user?id=${i?.userId}`}>
                  <img src={getImageSize(i?.avatarUrl, 50)} alt='' />
                  <div className='user-info'>
                    <span className='user-name'>
                      {i?.nickname}
                      {i?.gender !== 0 && (
                        <span
                          className='gender icons'
                          style={{
                            backgroundPosition: `-70px ${
                              i?.gender === 1 ? '-20px' : 0
                            }`
                          }}
                        ></span>
                      )}
                    </span>
                    <span className='user-desc'>{i?.signature}</span>
                  </div>
                </a>
              </div>

              <div className='right'>
                <span className='btn'>
                  <Button
                    size='middle'
                    icon={<PlusOutlined />}
                    onClick={() => {
                      !isLogin && disPatch(setIsShowLogin(true));
                    }}
                  >
                    关注
                  </Button>
                </span>
                <span className='playlist-count'>
                  歌单数：{i?.playlistCount}
                </span>
                <span className='fun-count'>
                  粉丝数：{getCount(i?.followeds)}
                </span>
              </div>
            </div>
          ))
        : ''}
    </div>
  );
}
