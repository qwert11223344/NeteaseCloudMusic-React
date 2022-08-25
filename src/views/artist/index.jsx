import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import ArtistDetailInfo from './children/artist-detail-info';
import styles from './index.module.scss';
export default function ArtistDetail() {
  const location = useLocation();
  useEffect(() => {
    // const id = location.search.split('=').pop();
  }, [location]);
  return (
    <div className={styles.artistDetail}>
      {/* <ArtistDetailInfo /> */}
      <Result
        status='error'
        icon={<SmileOutlined />}
        title='由于接口问题，暂时没有歌手详情页面'
        extra={
          <Button type='primary' danger>
            <NavLink to='/'>首页</NavLink>
          </Button>
        }
      />
    </div>
  );
}
