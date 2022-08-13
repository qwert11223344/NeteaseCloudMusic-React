import { asyncGetTopList } from '@/store/action/toplist';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopListItem from './children/toplist-item';
import TopListMain from './children/toplist-main';
import TopListMainHeader from './children/toplist-main-header';
import styles from './index.module.scss';
export default function Ranking() {
  const disPatch = useDispatch();
  const { topList } = useSelector(state => state.topListReducer);
  useEffect(() => {
    disPatch(asyncGetTopList());
  }, [disPatch]);
  return (
    <div className={`${styles.discoverTopList} wrap-bg2`}>
      <div className='discoverTopListContent w980'>
        <div className='left'>
          <div className='top-list-container'>
            <TopListItem topList={topList} />
          </div>
        </div>
        <div className='right'>
          <TopListMainHeader />
          <TopListMain />
        </div>
      </div>
    </div>
  );
}
