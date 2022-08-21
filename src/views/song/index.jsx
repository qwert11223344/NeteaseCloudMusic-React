import songApi from '@/api/songApi';
import { useAddPlayList, usePlayMusic } from '@/hooks/music';
import { getImageSize } from '@/utils';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SongComment from './children/song-comment';
import SongInfo from './children/song-info';
import styles from './index.module.scss';
export default function SongDetail() {
  const [playerHasSong, setPlayHasSong] = useState('');
  const [similarSong, setSimilarSong] = useState('');
  const { currentSong } = useSelector(state => state.playBarReducer);
  const playMusic = usePlayMusic();
  const addPlaylist = useAddPlayList();
  useEffect(() => {
    const asyncGetSimilar = async id => {
      const { songs } = await songApi.getSimilarSong(id);
      const { playlists } = await songApi.getPlayerHasSong(id);
      setPlayHasSong(playlists);
      setSimilarSong(songs);
    };
    currentSong.id && asyncGetSimilar(currentSong.id);
  }, [currentSong]);
  return (
    <div className={styles.songDetail}>
      <div className='song-content w980'>
        <div className='song-left'>
          <SongInfo />
          <SongComment />
        </div>
        <div className='song-right'>
          {/* 包含该歌曲的歌单 */}
          <div className='similar-player'>
            <h4 className='title'>包含这首歌的歌单</h4>
            {playerHasSong &&
              playerHasSong.map(i => (
                <div className='similar-player-item' key={i.id}>
                  <img src={getImageSize(i.coverImgUrl, 50)} alt={i.name} />
                  <div className='similar-player-item-right'>
                    <a href={`/#/playlist?id=${i.id}`} className='desc'>
                      {i.name}
                    </a>
                    <a
                      href={`/#/user?id=${i.creator.userId}`}
                      className='author'
                    >
                      by-{i.creator.nickname}
                    </a>
                  </div>
                </div>
              ))}
          </div>
          {/* 相似歌曲 */}
          <div className='similar-song'>
            <h4 className='title'>相似歌曲</h4>
            {similarSong &&
              similarSong.map(i => (
                <div key={i.id} className='similar-song-item'>
                  <div className='similar-song-item-left'>
                    <a className='songName' href={`/#/song?id=${i.id}`}>
                      {i.name}
                    </a>
                    <a
                      className='artistName'
                      href={`/#/artists?id=${i.artists[0].id}`}
                    >
                      {i.artists[0].name}
                    </a>
                  </div>
                  <div className='similar-song-item-right'>
                    <span
                      className='play icon-small'
                      onClick={() => playMusic(i)}
                    ></span>
                    <span
                      className='add icon-small'
                      onClick={() => addPlaylist(i.id)}
                    ></span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
