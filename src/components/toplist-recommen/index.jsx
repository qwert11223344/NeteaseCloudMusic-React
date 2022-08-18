import { useAddPlayList } from '@/hooks/music';
import { getImageSize } from '@/utils';
import styles from './index.module.scss';
export default function TopListRecommend({ item }) {
  const addPlaylist = useAddPlayList(item.id);
  return (
    <div className={styles.topListRecommend}>
      <div className='ranking-header'>
        <div className='image'>
          <img src={getImageSize(item.coverImgUrl, 80)} alt='' />
          <div className='image_cover '>{item.name}</div>
        </div>
        <div className='tit'>
          <div>
            <h3>{item.name}</h3>
          </div>
          <div className='btn'>
            <a
              href='/discover/recommend'
              className='no-link sprite_02 text-indent play'
            >
              播放
            </a>
            <a
              href='/discover/recommend'
              className='no-link sprite_02 text-indent favourite'
            >
              收藏
            </a>
          </div>
        </div>
      </div>
      <div className='ranking-list'>
        {item.tracks &&
          item.tracks.length &&
          item.tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className='list-item'>
                <div className='number'>{index + 1}</div>
                <a
                  href='/play'
                  className='song-name text-nowrap'
                  // onClick={e => playMusic(e, item)}
                >
                  {item.name}
                </a>
                <div className='oper'>
                  <a
                    href='/discover/recommend'
                    className='sprite_02 btn play'
                    // onClick={e => playMusic(e, item)}
                  >
                    {item.name}
                  </a>
                  <a
                    href='/discover/recommend'
                    className='sprite_icon2 btn addto'
                    onClick={e => {
                      e.preventDefault();
                      addPlaylist(item.id);
                    }}
                  >
                    {item.name}
                  </a>
                  <a href='/play' className='no-link sprite_02 btn favourite'>
                    {item.name}
                  </a>
                </div>
              </div>
            );
          })}
      </div>
      <div className='ranking-footer'>
        <a href='/all' className='show-all'>
          查看全部&gt;
        </a>
      </div>
    </div>
  );
}
