import styles from './index.module.scss';
import { Input } from 'antd';
import { useState } from 'react';
import { searchCategories } from '@/common/localData';
import { NavLink } from 'react-router-dom';
export default function SearchDetail() {
  const { Search } = Input;
  const [searchKeyWords, setSearchKeyWords] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputChange = e => {
    setSearchKeyWords(e.target.value.trim());
  };
  return (
    <div className={styles.search}>
      <div className='search-detail-wrapper w980'>
        <div className='search-detail-input'>
          <Search
            bordered={false}
            value={searchKeyWords}
            onChange={inputChange}
            style={{ width: 490 }}
          />
        </div>
        <div className='search-detail-content'>
          <div className='search-info'>
            搜索"{'1234'}",找到<span className='music-amount'>20</span>首单曲
          </div>
          <div className='m-tab search-detail-category'>
            {searchCategories.map((i, index) => (
              <NavLink
                key={i.link}
                to={{ pathname: i.link + `&song=${'song'}` }}
                className={`route-item m-tab ${
                  currentIndex === index ? 'active' : ''
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <em>{i.title}</em>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
