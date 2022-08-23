import { usePlayMusic } from '@/hooks/music';
import { setIsShowLogin } from '@/store/action/login';
import { downloadFile, getImageSize, getSongUrl } from '@/utils';
import { Collapse, message } from 'antd';
import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
export default function SongInfo({ currentSong }) {
  const { Panel } = Collapse;
  const disPatch = useDispatch();
  const { lyric } = useSelector(state => state.playBarReducer, shallowEqual);
  const { totalComment } = useSelector(state => state.commentReducer);
  const { isLogin } = useSelector(state => state.loginReducer, shallowEqual);
  const playMusic = usePlayMusic();
  const picUrl = currentSong.al && currentSong.al.picUrl;
  const songName = currentSong.name ? currentSong.name : '';
  const singer = currentSong.ar && currentSong.ar[0].name;
  const album = currentSong.al && currentSong.al.name;

  //下载音乐
  const downloadSong = useCallback(() => {
    const url = getSongUrl(currentSong.id);

    isLogin
      ? downloadFile(url, currentSong.name)
      : disPatch(setIsShowLogin(true));
    // window.open(url);
  }, [currentSong, isLogin, disPatch]);
  return (
    <div className={styles.songInfo}>
      <div className='album'>
        <img src={getImageSize(picUrl, 130)} alt='' />
        <div className='image_cover cover'></div>
      </div>
      <div className='song-detail-wrapper'>
        <div className='song-title'>
          <i className='sprite_icon2 single-song'></i>
          <h2 className='song-name'>{songName}</h2>
          <em className='sprite_icon2 mv'></em>
        </div>
        <div className='singer'>
          <span>歌手：</span>
          <a href='/discover/recommend'>{singer}</a>
        </div>
        <div className='settle-album'>
          <span>所属专辑：</span>
          <a href='/discover/recommend' className='no-link'>
            {album}
          </a>
        </div>
        <div className='controls'>
          <div
            className='sprite_button play pointer'
            onClick={() =>
              playMusic(document.querySelector('#audio'), currentSong)
            }
          >
            <i className='sprite_button inner'>
              <em className='sprite_button play-icon'></em>
              播放
            </i>
          </div>
          <div
            className='sprite_button download pointer'
            onClick={downloadSong}
          >
            <i className='sprite_button inner'>
              <em className='sprite_button favorite-icon'></em>
              下载
            </i>
          </div>
          <div
            className='sprite_button favorite'
            onClick={() => message.info('以后会有的')}
          >
            <i className='sprite_button inner'>
              <em className='sprite_button favorite-icon'></em>
              收藏
            </i>
          </div>
          <div
            className='sprite_button share'
            onClick={() => message.info('以后会有的')}
          >
            <i className='sprite_button inner'>
              <em className='sprite_button favorite-icon'></em>
              分享
            </i>
          </div>
          <div className='sprite_button comment'>
            <i className='sprite_button inner'>
              <em className='sprite_button favorite-icon'></em>({totalComment})
            </i>
          </div>
        </div>
        <Collapse ghost>
          <Panel header='展开歌词'>
            {lyric &&
              lyric.map(i => (
                <p className='lyric-item' key={i.beginTime}>
                  {i.content}
                </p>
              ))}
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
