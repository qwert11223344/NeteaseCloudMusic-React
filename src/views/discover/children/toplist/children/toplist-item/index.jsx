import {
  asyncGetCurrentTopListInfo,
  setCurrentTopListIndex
} from '@/store/action/toplist';
import { getImageSize } from '@/utils';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';
export default function TopListItem({ topList }) {
  const disPatch = useDispatch();
  const { currentTopListIndex } = useSelector(state => state.topListReducer);
  useEffect(() => {
    disPatch(asyncGetCurrentTopListInfo());
  }, [disPatch]);
  const clickItem = (e, index, id) => {
    e.preventDefault();
    disPatch(setCurrentTopListIndex(index));
    disPatch(asyncGetCurrentTopListInfo(id));
  };
  return (
    <div className={styles.topListItem}>
      {topList.map((list, index) => (
        <div key={list.id}>
          <h3 style={{ marginTop: index === 4 ? '17px' : '4px' }}>
            {index === 0 ? '云音乐特色榜' : index === 4 ? '全球媒体榜' : ''}
          </h3>
          <NavLink
            className={`info ${currentTopListIndex === index ? 'bg' : ''}`}
            onClick={e => clickItem(e, index, list.id)}
            to={{ pathname: `/discover/songs`, search: `?id=${list.id}` }}
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
