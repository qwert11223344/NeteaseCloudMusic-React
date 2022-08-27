import { SmileOutlined } from '@ant-design/icons';
import { Result } from 'antd';
import styles from './index.module.scss';
export default function AlbumDetail() {
  return (
    <div className={styles.albumDetail}>
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
    </div>
  );
}
