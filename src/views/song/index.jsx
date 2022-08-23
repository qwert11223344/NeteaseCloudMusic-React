import songApi from '@/api/songApi';
import { useAddPlayList, usePlayMusic } from '@/hooks/music';
import { changeCurrentSong } from '@/store/action/playbar';
import { getImageSize } from '@/utils';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SongComment from './children/song-comment';
import SongInfo from './children/song-info';
import styles from './index.module.scss';
export default function SongDetail() {
  const [playerHasSong, setPlayHasSong] = useState('');
  const [similarSong, setSimilarSong] = useState('');
  const [currentSong, setCurrentSong] = useState({});
  // const { currentSong } = useSelector(state => state.playBarReducer);
  const playMusic = usePlayMusic();
  const addPlaylist = useAddPlayList();
  const location = useLocation();
  const disPatch = useDispatch();
  useEffect(() => {
    const id = +location.search.split('=').pop();
    const asyncGetSongDetail = async () => {
      const { songs } = await songApi.getSongDetail(id);
      // disPatch(changeCurrentSong(songs[0]));
      setCurrentSong(songs[0]);
    };
    asyncGetSongDetail();
  }, [location, disPatch]);
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
          <SongInfo currentSong={currentSong} />
          <SongComment currentSong={currentSong} />
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
                    <a
                      className='songName'
                      href={`#/song?id=${i.id}`}
                      // onClick={() => history.push(`#song?id=${i.id}`)}
                    >
                      {i.name}
                    </a>
                    <a
                      className='artistName'
                      href={`/#/artists?id=${i.artists[0].id}`}
                      // onClick={() =>
                      //   history.push(`/artists?id=${i.artists[0].id}`)
                      // }
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
