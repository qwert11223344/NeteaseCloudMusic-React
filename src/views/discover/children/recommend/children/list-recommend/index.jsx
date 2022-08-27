import CommonHeaderRcm from '@/components/common-header-recommend';
import TopListRecommend from '@/components/toplist-recommen';
import { asyncChangeTopList } from '@/store/action/recommend';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './index.module.scss';
export default function ListRecommend() {
  const history = useHistory();
  const { upList, newList, originalList } = useSelector(
    state => state.recommendReducer
  );
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(asyncChangeTopList(19723756));
    disPatch(asyncChangeTopList(3779629));
    disPatch(asyncChangeTopList(2884035));
  }, [disPatch]);
  return (
    <div className={styles.listRecommend}>
      <CommonHeaderRcm
        title='榜单'
        clickRight={() => history.push('/discover/toplist')}
      />
      <div className='ranking-info'>
        <TopListRecommend item={upList} />
        <TopListRecommend item={newList} />
        <TopListRecommend item={originalList} />
      </div>
    </div>
  );
}
