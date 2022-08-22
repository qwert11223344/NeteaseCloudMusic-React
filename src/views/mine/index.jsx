import { setIsShowLogin } from '@/store/action/login';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
export default function Mine() {
  const disPatch = useDispatch();
  const { isLogin } = useSelector(state => state.loginReducer);
  const NotLogin = () => {
    return (
      <div className='notLogin w980'>
        <div className='show-no-login'>
          <div className='my_music inner'>
            <h2>登录网易云音乐</h2>
            <div
              className='my_music btn-login'
              onClick={() => disPatch(setIsShowLogin(true))}
            >
              立即登录
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <div className={styles.Mine}>{isLogin ? null : <NotLogin />}</div>;
}
