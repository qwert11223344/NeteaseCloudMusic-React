import { asyncGetPlayListCat } from '@/store/action/playlist';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './index.module.scss';
export default function PlayListCategory() {
  const disPatch = useDispatch();
  const history = useHistory();
  const { playListCat } = useSelector(state => state.playListReducer);
  useEffect(() => {
    disPatch(asyncGetPlayListCat());
  }, [disPatch]);
  return (
    <div className={styles.playListCategory}>
      <div className='arrow sprite_icon'></div>
      <div className='all'>
        <a className='link' href='#/discover/playlist'>
          全部风格
        </a>
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
                        onClick={() =>
                          history.push(`/discover/playlist?cat=${si.name}`)
                        }
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
