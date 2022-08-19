import songApi from '@/api/songApi';
import {
  asyncGetLyric,
  changeCurrentLyricIndex,
  changeCurrentSong,
  changeIsFirstLoad,
  changePlaySequence
} from '@/store/action/playbar';
import { formatDate, getImageSize, getRandom } from '@/utils';
import { message, Slider } from 'antd';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PLayBarList from './children/playlist';
import styles from './index.module.scss';
export default function PlayBar() {
  const disPatch = useDispatch();
  const audioRef = useRef(null);
  const [playListInfo, setPlayListInfo] = useState([]); //播放列表信息
  const [isPlaying, setIsPlaying] = useState(false); //是否播放
  const [isShowVolume, setIsShowVolume] = useState(false); //是否显示音量
  const [isFixedBar, setIsFixedBar] = useState(false); //是否固定bar
  const [isShowBar, setIsShowBar] = useState(false); //是否显示bar
  const [isShowPlayList, setIsShowPlayList] = useState(false); //是否显示播放列表
  const [progress, setProgress] = useState(0); //播放进度
  const [currentTime, setCurrentTime] = useState(0); //当前播放时间
  const [alreadyPlay, setAlreadyPlay] = useState([]); //已经播放的歌曲,用于随机播放时避免重复
  let { playList, playSequence, currentSong, isFirstLoad, lyric } = useSelector(
    state => state.playBarReducer,
    shallowEqual
  );
  //获取播放列表的歌曲信息
  useEffect(() => {
    const getPlayListInfo = async ids => {
      const { songs } = await songApi.getSongDetail(playList);
      setPlayListInfo(songs);
      // songs.length && disPatch(changeCurrentSong(songs[0]));
    };
    getPlayListInfo();
  }, [playList, disPatch]);
  //设置歌曲播放顺序
  const changeSequence = () => {
    let newPlaySequence = playSequence + 1;
    if (newPlaySequence > 2) playSequence = newPlaySequence = 0;
    disPatch(changePlaySequence(newPlaySequence));
  };
  //显示播放列表
  const changeShowPlayList = useCallback(() => {
    setIsShowPlayList(!isShowPlayList);
  }, [isShowPlayList]);

  //拖动滑钮
  const sliderChange = useCallback(
    value => {
      setIsPlaying(false);
      const currentTime = (value / 100) * currentSong.dt;
      setCurrentTime(currentTime);
      setProgress(value);
    },
    [currentSong]
  );
  //拖动结束
  const slideAfterChange = useCallback(
    value => {
      const currentTime = ((value / 100) * currentSong.dt) / 1000;
      audioRef.current.currentTime = currentTime;
      setIsPlaying(true);
    },
    [currentSong]
  );
  //第一次加载音乐路径
  useEffect(() => {
    const getMusicUrl = async () => {
      const {
        data: [{ url }]
      } = await songApi.getSongUrl(currentSong.id);
      audioRef.current.src = url;
      setIsPlaying(true + Math.random());
      disPatch(asyncGetLyric(currentSong.id));
      disPatch(changeCurrentLyricIndex(0));
      disPatch(changeIsFirstLoad(false));
    };

    isFirstLoad && currentSong.id && getMusicUrl();
  }, [disPatch, isFirstLoad, currentSong]);
  //播放音乐
  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
    //播放过的音乐存起来
    isPlaying &&
      !alreadyPlay.includes(currentSong.id) &&
      setAlreadyPlay([...alreadyPlay, currentSong.id]);
    if (alreadyPlay.length === playList.length) setAlreadyPlay([]);
  }, [isPlaying, currentSong, alreadyPlay, playList]);
  const playMusic = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);
  // 切换音乐
  const changeSong = useCallback(
    val => {
      const index = playListInfo.findIndex(i => i.id === currentSong.id);
      let newIndex = 0;
      //判断播放顺序是否为随机
      if (playSequence === 1) {
        while (alreadyPlay.includes(playListInfo[newIndex]?.id)) {
          newIndex = getRandom(playListInfo.length);
        }
      } else {
        if (val === 1 && index + 1 < playListInfo.length) {
          newIndex = index + 1;
        } else if (val === -1 && index > 0) {
          newIndex = index - 1;
        }
      }
      disPatch(changeCurrentSong(playListInfo[newIndex]));
      disPatch(changeIsFirstLoad(true));
    },
    [playListInfo, playSequence, currentSong, disPatch, alreadyPlay]
  );
  //歌曲播放处理进度条
  const timeUpdate = useCallback(
    e => {
      let currentTime = e.target.currentTime;
      setCurrentTime(currentTime * 1000);
      setProgress(((currentTime * 1000) / currentSong.dt) * 100);
      const index = lyric.findIndex(l => l.beginTime > currentTime * 1000);
      index === -1
        ? disPatch(changeCurrentLyricIndex(lyric.length))
        : disPatch(changeCurrentLyricIndex(index - 1));
    },
    [disPatch, lyric, currentSong]
  );
  //歌曲播放完成
  const timeEnd = useCallback(() => {
    if (playSequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      changeSong(1);
    }
  }, [playSequence, changeSong]);
  //改变音量
  const changeVolume = value => {
    audioRef.current.volume = value / 100;
  };
  return (
    <div
      className={`${styles.playBar} sprite_player`}
      style={{
        transform:
          isShowPlayList || isShowBar || isFixedBar
            ? 'translateY(0)'
            : 'translateY(80%)'
      }}
      onMouseEnter={() => setIsShowBar(true)}
      onMouseLeave={() => {
        setTimeout(() => setIsShowBar(false), 1000);
      }}
    >
      {/* 显示小锁 */}
      <div className='lock' onClick={() => setIsFixedBar(!isFixedBar)}>
        <span
          className='sprite_player'
          style={{
            backgroundPosition: `${isFixedBar ? '-100px' : '-80px'} -377px`
          }}
        ></span>
      </div>
      <div className='w980 content'>
        {/* 控制按钮 */}
        <div className='control'>
          <button
            className='sprite_player pre'
            onClick={() => changeSong(-1)}
          ></button>
          <button
            className='sprite_player play'
            style={{
              backgroundPosition: `0 ${isPlaying ? '-165px' : '-204px'}`
            }}
            onClick={playMusic}
          ></button>
          <button
            className='sprite_player next'
            onClick={() => changeSong(1)}
          ></button>
        </div>

        <div className='playInfo'>
          <NavLink to='discover/song' className='image'>
            <img src={getImageSize(currentSong?.al?.picUrl, 35)} alt='' />
          </NavLink>
          <div className='play-detail'>
            <div className='song-info'>
              <NavLink to='/discover/song' className='song-name'>
                {currentSong.name}
              </NavLink>
              <a href='/author' className='no-link singer-name'>
                {currentSong?.ar?.map(i => i.name).join('/')}
              </a>
            </div>
            <Slider
              tooltipVisible={false}
              value={progress}
              onChange={sliderChange}
              onAfterChange={slideAfterChange}
            />
          </div>
          <div className='song-time'>
            <span className='now-time'>{formatDate(currentTime, 'mm:ss')}</span>
            <span className='total-time'>
              {' '}
              / {formatDate(currentSong.dt, 'mm:ss')}
            </span>
          </div>
        </div>

        <div className='operator'>
          <div className='left'>
            <div
              className='btn'
              title='画中画歌词'
              onClick={() => message.info('以后会有的')}
            ></div>
            <div className='btn sprite_player' title='收藏'></div>
            <div className='btn sprite_player' title='分享'></div>
          </div>
          <div className='right sprite_player'>
            <div
              className='sprite_player btn volume'
              onClick={() => setIsShowVolume(!isShowVolume)}
            ></div>
            <div
              className={`sprite_player btn loop-${playSequence}`}
              title={['循环', '随机播放', '单曲循环'][playSequence]}
              onClick={changeSequence}
            ></div>
            <div className='sprite_player playlist'>
              <span
                className='playlist-count'
                title='播放列表'
                onClick={changeShowPlayList}
              >
                {playList.length}
              </span>

              <PLayBarList
                isShowPlayList={isShowPlayList}
                changeShowPlayList={changeShowPlayList}
                playListInfo={playListInfo}
              />
            </div>
          </div>
          {/* Slide 音量条 */}
          <div
            className='sprite_player top-volume'
            style={{ display: isShowVolume ? 'block' : 'none' }}
          >
            <Slider
              vertical
              defaultValue={30}
              tooltipVisible={false}
              onChange={changeVolume}
            />
          </div>
          <audio
            ref={audioRef}
            onTimeUpdate={timeUpdate}
            onEnded={timeEnd}
            id='audio'
            preload='auto'
          />
        </div>
      </div>
    </div>
  );
}
