import { asyncGetPlayListCat } from '@/store/action/playlist';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
export default function PlayListCategory() {
  const disPatch = useDispatch();
  const { playListCat } = useSelector(state => state.playListReducer);
  useEffect(() => {
    disPatch(asyncGetPlayListCat());
  }, [disPatch]);
  return (
    <div className={styles.playListCategory}>
      <div className='arrow sprite_icon'></div>
      <div className='all'>
        <span className='link'>全部风格</span>
      </div>
      <div className='category'>
        {playListCat.map((item, index) => {
          return (
            <dl key={item.cat} className={'item' + index}>
              <dt>
                <i className='icon sprite_icon2'></i>
                <span>{item.cat}</span>
              </dt>
              <dd>
                {item.sub.map(si => {
                  return (
                    <div className='item' key={si.name}>
                      <span
                        className='link'
                        // onClick={e => selectCategory(sItem.name)}
                      >
                        {si.name}
                      </span>
                      <span className='divider'>|</span>
                    </div>
                  );
                })}
              </dd>
            </dl>
          );
        })}
      </div>
    </div>
  );
}
