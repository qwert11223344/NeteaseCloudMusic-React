import { getImageSize } from '@/utils';
import { NavLink } from 'react-router-dom';
import { PlayCircleOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import { useAddPlayList } from '@/hooks/music';
export default function SongItem({
  index = '',
  songId,
  songName,
  artist,
  dr = 0,
  coverPic = ''
}) {
  const addPlaylist = useAddPlayList();
  return (
    <div className={styles.songItemContainer}>
      <div className='song-wrapper'>
        <div className='song-item rank-count'>{index}</div>
        {coverPic && (
          <NavLink
            to='/song'
            className='song-item'
            // onClick={e => playMusic(e, true)}
          >
            <img src={getImageSize(coverPic, 50)} alt='' />
          </NavLink>
        )}
        <div className='song-item song-info'>
          <div className='left-info' style={{ width: coverPic ? 258 : 328 }}>
            <PlayCircleOutlined
              className='font-active'
              // onClick={e => playMusic(e)}
            />
            <a href='/play' className='text-nowrap'>
              {songName}
            </a>
          </div>
          <div className='dr-btn'>
            <div className='song-item duration'>{dr}</div>
            <div className='btn-group'>
              <a
                href='#/discover/toplist'
                title='添加到播放器'
                className='btn add'
                onClick={e => {
                  e.preventDefault();
                  addPlaylist(songId);
                }}
              >
                {''}
              </a>
              <a href='#/discover/toplist' title='收藏' className='btn collect'>
                {''}
              </a>
              <a href='#/discover/toplist' title='分享' className='btn share'>
                {''}
              </a>
              <a
                href='#/discover/toplist'
                title='下载'
                className='btn download'
              >
                {''}
              </a>
            </div>{' '}
          </div>
          <NavLink
            to='/discover/song'
            className='song-item singer'
            // onClick={e => playMusic(e, true)}
          >
            {artist}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
