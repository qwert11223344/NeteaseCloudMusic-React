import { setIsShowLogin } from '@/store/action/login';
import { SmileOutlined } from '@ant-design/icons';
import { Result } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
export default function Friend() {
  const disPatch = useDispatch();
  const { isLogin } = useSelector(state => state.loginReducer);
  const NotLogin = () => {
    return (
      <div className='notLogin w980'>
        <div className='not-login inner'>
          <h2>登录网易云音乐</h2>
          <div className='detail'>
            你可以关注明星和好友品味他们的私房歌单
            通过他们的动态发现更多精彩音乐
          </div>
          <div
            className='not-login btn-login'
            onClick={() => disPatch(setIsShowLogin(true))}
          >
            立即登录
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.Friend}>
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
