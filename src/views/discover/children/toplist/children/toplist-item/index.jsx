import {
  asyncGetCurrentTopListInfo,
  setCurrentTopListIndex
} from '@/store/action/toplist';
import { getImageSize } from '@/utils';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';
export default function TopListItem({ topList }) {
  const location = useLocation();
  const disPatch = useDispatch();
  const { currentTopListIndex } = useSelector(state => state.topListReducer);
  useEffect(() => {
    const toplistId = +location.search.split('=').pop();
    toplistId
      ? disPatch(asyncGetCurrentTopListInfo(toplistId))
      : disPatch(asyncGetCurrentTopListInfo());

    disPatch(setCurrentTopListIndex(toplistId));
  }, [disPatch, location]);
  return (
    <div className={styles.topListItem}>
      {topList.map((list, index) => (
        <div key={list.id}>
          <h3 style={{ marginTop: index === 4 ? '17px' : '4px' }}>
            {index === 0 ? '云音乐特色榜' : index === 4 ? '全球媒体榜' : ''}
          </h3>
          <NavLink
            className={`info ${currentTopListIndex === list.id ? 'bg' : ''}`}
            to={{ pathname: `/discover/toplist`, search: `?id=${list.id}` }}
          >
            <div className='image'>
              <img src={getImageSize(list.coverImgUrl, 44)} alt='' />
            </div>
            <div className='info-right'>
              <div className='info-title'>{list.name}</div>
              <div className='info-update'>{list.updateFrequency}</div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
