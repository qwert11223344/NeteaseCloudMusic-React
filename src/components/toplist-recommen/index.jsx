import { useAddPlayList, usePlayMusic } from '@/hooks/music';
import { setIsShowLogin } from '@/store/action/login';
import { getImageSize } from '@/utils';
import { message } from 'antd';
import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './index.module.scss';
export default function TopListRecommend({ item }) {
  const addPlaylist = useAddPlayList();
  // const { currentSong } = useSelector(
  //   state => state.playBarReducer,
  //   shallowEqual
  // );
  const { isLogin } = useSelector(state => state.loginReducer, shallowEqual);
  const history = useHistory();
  const disPatch = useDispatch();
  const play = usePlayMusic();
  //单机每一项
  const clickSongItem = useCallback(
    (e, item) => {
      e.preventDefault();
      //点击后更新播放列表，更新当前音乐
      // disPatch(changeIsFirstLoad(true));
      // disPatch(changeCurrentSong(item));
      // addPlaylist(item.id);
      // resetMusic(item);
      history.push(`/song?id=${item.id}`);
    },
    [history]
  );

  //播放
  const playMusic = useCallback(
    (e, item) => {
      e.preventDefault();
      // disPatch(changeIsFirstLoad(true));
      // disPatch(changeCurrentSong(item));
      // addPlaylist(item.id);
      const audio = document.querySelector('#audio');
      play(audio, item);
    },
    [play]
  );

  //收藏歌曲
  const collectSong = useCallback(
    e => {
      e.preventDefault();
      isLogin ? message.info('以后会有的') : disPatch(setIsShowLogin(true));
    },
    [isLogin, disPatch]
  );
  return (
    <>
      <div className={styles.topListRecommend}>
        <div className='ranking-header'>
          <div className='image'>
            <img src={getImageSize(item.coverImgUrl ?? '', 80)} alt='' />
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
                    href={`/#/song?id=${item.id}`}
                    className='song-name text-nowrap'
                    onClick={(e, id) => clickSongItem(e, item)}
                  >
                    {item.name}
                  </a>
                  <div className='oper'>
                    <a
                      href='/discover/recommend'
                      className='sprite_02 btn play'
                      onClick={e => playMusic(e, item)}
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
                    <a
                      href='/play'
                      className='sprite_02 btn favourite'
                      onClick={collectSong}
                    >
                      {item.name}
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
        <div className='ranking-footer'>
          <a href={`#/discover/toplist?id=${item.id}`} className='show-all'>
            查看全部&gt;
          </a>
        </div>
      </div>
    </>
  );
}
