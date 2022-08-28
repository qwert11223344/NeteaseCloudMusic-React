import { setIsShowLogin } from '@/store/action/login';
import { getImageSize } from '@/utils';
import { Button, message } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
export default function LoginRecommend() {
  const disPatch = useDispatch();
  const { isLogin, accountInfo } = useSelector(
    state => state.loginReducer,
    shallowEqual
  );
  const NotLogin = () => {
    return (
      <div className='profile-info sprite_02'>
        <p className='login-detail'>
          登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
        </p>
        <button
          className='user-login sprite_02'
          onClick={() => disPatch(setIsShowLogin(true))}
        >
          用户登录
        </button>
      </div>
    );
  };
  const AlreadyLogin = () => {
    return (
      <>
        <div className='already-login-top'>
          <img
            className='avatar'
            src={getImageSize(accountInfo?.avatarUrl ?? '', 80)}
            alt=''
          />
          <div className='info'>
            <p className='nickname text-nowrap'>{accountInfo?.nickname}</p>
            <p className='level icon-small'>
              <i className='icon-small'>{accountInfo?.level}</i>
            </p>
            <Button size='small' onClick={() => message.info('以后会有的')}>
              签到
            </Button>
          </div>
        </div>
        <div className='already-login-bottom'>
          <div className='event'>
            <span className='event-count'>{accountInfo?.eventCount}</span>
            <span>动态</span>
          </div>
          <div className='flowers'>
            <span className='fun-count'>{accountInfo?.follows}</span>
            <span>关注</span>
          </div>
          <div className='fun'>
            <span className='fun-count'>{accountInfo?.followeds}</span>
            <span>粉丝</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className={styles.loginRecommend}>
      {isLogin ? <AlreadyLogin /> : <NotLogin />}
    </div>
  );
}
