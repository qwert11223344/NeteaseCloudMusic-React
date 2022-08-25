import CommonHeaderRcm from '@/components/common-header-recommend';
import { setIsShowLogin } from '@/store/action/login';
import { formatDate, formatMinuteSecond, getImageSize } from '@/utils';
import SongItem from '@/views/discover/children/toplist/children/song-item';
import { Button, Skeleton, Tag } from 'antd';
import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
export default function PlaylistDetailLeft({ playlistDetail }) {
  const disPatch = useDispatch();
  const { isLogin } = useSelector(state => state.loginReducer, shallowEqual);

  const coverPicUrl =
    playlistDetail && getImageSize(playlistDetail.coverImgUrl, 200);
  const title = playlistDetail && playlistDetail.name;
  const avatarPic =
    playlistDetail &&
    playlistDetail.creator &&
    playlistDetail.creator.avatarUrl &&
    getImageSize(playlistDetail.creator.avatarUrl, 35);
  const userId =
    playlistDetail && playlistDetail.creator && playlistDetail.creator.userId;
  const avatarName =
    playlistDetail && playlistDetail.creator && playlistDetail.creator.nickname;
  const avatarDatetime =
    playlistDetail &&
    playlistDetail.createTime &&
    formatDate(playlistDetail.createTime, 'yyyy-MM-dd');
  const labelsArr = playlistDetail && playlistDetail.tags;
  const description = playlistDetail && playlistDetail.description;
  const playCount = playlistDetail && playlistDetail.playCount;
  const trackCount = playlistDetail?.trackCount;
  const playlist =
    playlistDetail &&
    playlistDetail.tracks &&
    playlistDetail.tracks.slice(0, 10);

  //收藏歌单
  const collectPlaylist = useCallback(() => {
    !isLogin && disPatch(setIsShowLogin(true));
  }, [isLogin, disPatch]);
  return (
    <div className={styles.playlistDetailLeft}>
      {playlistDetail ? (
        <>
          <div className='playlist-info'>
            <div className='cover-img'>
              <img src={coverPicUrl} alt='' />
              <span className='image_cover'></span>
            </div>

            <div className='song-detail'>
              <div className='detail-title-wrapper'>
                <i className='icons'></i>
                <h2 className='detail-title'>{title}</h2>
              </div>
              <div className='avatar'>
                <div className='avatar-pic'>
                  <img src={avatarPic} alt='' />
                </div>
                <a href={`#/user?id=${userId}`} className='avatar-name'>
                  {avatarName}
                </a>
                <div className='avatar-datetime'>{avatarDatetime}创建</div>
              </div>
              <div className='label-wrapper gap'>
                <span>标签: </span>
                {labelsArr
                  ? labelsArr.map(i => (
                      <Tag key={i} color='#de021d'>
                        {i}
                      </Tag>
                    ))
                  : ''}
                <div className='collect-playlist' onClick={collectPlaylist}>
                  收藏歌单
                </div>
              </div>
              <div className='description-info gap'>
                <div className='descript-detail'>介绍: {description}</div>
              </div>
            </div>
          </div>
          <div className='main-detail'>
            <CommonHeaderRcm
              title='歌曲列表'
              showIcon={false}
              left={`${trackCount}首歌曲`}
              right={
                <span>
                  播放：
                  <span style={{ color: '#c20c0c', fontWeight: 700 }}>
                    {playCount}
                  </span>
                  次
                </span>
              }
            />
            <div className='toplist-main-container'>
              <div className='main-header'>
                <div className='sprite_table header-item'></div>
                <div className='sprite_table header-item header-title'>
                  歌曲标题
                </div>
                <div className='sprite_table header-item header-time'>时长</div>
                <div className='sprite_table header-item header-singer'>
                  歌手
                </div>
                <div className='sprite_table header-item header-album'>
                  专辑
                </div>
              </div>
              {playlist &&
                playlist.map((i, index) => (
                  <SongItem
                    key={i.id}
                    index={index + 1}
                    dr={formatMinuteSecond(i.dt)}
                    songName={`${i.name} ${
                      i?.alia.length ? ` -(${i?.alia.join(',')})` : ''
                    }`}
                    songId={i.id}
                    artist={i.ar.map(ci => ci.name).join('/')}
                    al={i.al.name}
                    i={i}
                  />
                ))}
            </div>
            <div className='show-more'>
              <p>查看更多内容，请下载客户端</p>
              <Button
                shape='round'
                danger
                type='primary'
                onClick={() => window.open('https://music.163.com/#/download')}
              >
                立即下载
              </Button>
            </div>
          </div>
        </>
      ) : (
        <Skeleton active />
      )}
    </div>
  );
}
