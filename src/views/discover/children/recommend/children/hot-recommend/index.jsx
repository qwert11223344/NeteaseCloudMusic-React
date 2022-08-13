import recommendApi from '@/api/recommendApi';
import CommonHeaderRcm from '@/components/common-header-recommend';
import SongCover from '@/components/song-cover';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.scss';
export default function HotRecommend() {
  const history = useHistory();
  const [recommendList, setRecommendList] = useState([]);
  const handleClickKeywords = item => {
    history.push(`/discover/playlist?cat=${item}`);
  };
  useEffect(() => {
    const getHotRecommend = async () => {
      const { result } = await recommendApi.getHotRecommend(8);
      setRecommendList(result);
    };
    getHotRecommend();
  }, []);
  return (
    <div className={styles.hotRecommend}>
      <CommonHeaderRcm
        title='热门推荐'
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        clickKeywords={item => handleClickKeywords(item)}
      />
      <div className='recommend-list'>
        {recommendList.map(l => (
          <SongCover key={l.id} info={l} className='recommend-list' />
        ))}
      </div>
    </div>
  );
}
