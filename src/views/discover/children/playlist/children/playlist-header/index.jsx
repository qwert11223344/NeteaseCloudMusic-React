import { useState } from 'react';
import { useSelector } from 'react-redux';
import PlayListCategory from '../playlist-category';
import styles from './index.module.scss';
export default function PlayListHeader() {
  const [showCategory, setShowCategory] = useState(false);
  const { currentCat } = useSelector(state => state.playListReducer);
  return (
    <div className={styles.playListHeader}>
      <div className='header-left'>
        <span className='title'>{currentCat || '全部'}</span>
        <button
          className='select'
          onClick={() => setShowCategory(!showCategory)}
        >
          <span>选择分类</span>
          <i className='sprite_icon2'></i>
        </button>
        {showCategory ? <PlayListCategory /> : null}
      </div>
      <div className='header-right'>
        <a href='#/discover/playlist?order=hot' className='hot'>
          热门
        </a>
      </div>
    </div>
  );
}
