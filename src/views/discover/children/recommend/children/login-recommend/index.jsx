import { setIsShowLogin } from '@/store/action/login';
import { useDispatch } from 'react-redux';
import styles from './index.module.scss';
export default function LoginRecommend() {
  const disPatch = useDispatch();
  return (
    <div className={styles.loginRecommend}>
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
    </div>
  );
}
