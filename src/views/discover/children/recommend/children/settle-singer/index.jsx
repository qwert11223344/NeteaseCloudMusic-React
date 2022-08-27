import recommendApi from '@/api/recommendApi';
import { useEffect, useState } from 'react';
import CoverSinger from './cover-singer';
import HeaderLine from './header-line';
import styles from './index.module.scss';
export default function SettleSinger() {
  const [settleArtist, setSettleArtist] = useState([]);
  useEffect(() => {
    const getSettleArtist = async limit => {
      const { artists } = await recommendApi.getSettleArtist(limit);
      setSettleArtist(artists);
    };
    getSettleArtist(5);
  }, []);
  return (
    <div className={styles.settleSinger}>
      <HeaderLine
        title='入驻歌手'
        right={<a href='#/discover/artist'>查看全部 ></a>}
      />
      <div className='singer-container'>
        {settleArtist.length &&
          settleArtist.map(i => <CoverSinger key={i.id} info={i} />)}
      </div>
      <div className='singer-footer'>
        <a
          target='_blank'
          href='https://music.163.com/st/musician'
          rel='noreferrer'
          className='a-btn1 a-btn2'
        >
          <i> 申请成为网易音乐人</i>
        </a>
      </div>
    </div>
  );
}
