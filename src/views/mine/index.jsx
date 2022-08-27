import { setIsShowLogin } from '@/store/action/login';
import { SmileOutlined } from '@ant-design/icons';
import { Result } from 'antd';
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
  return (
    <div className={styles.Mine}>
      {isLogin ? (
        <Result
          status='error'
          title='以后会有的'
          style={{
            height: 400,
            width: 980,
            margin: '0 auto',
            background: '#fff'
          }}
          icon={<SmileOutlined />}
        />
      ) : (
        <NotLogin />
      )}
    </div>
  );
}
