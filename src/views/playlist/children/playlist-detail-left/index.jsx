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
    playlistDetail && getImageSize(playlistDetail.coverImgUrl ?? '', 200);
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

  //ζΆθζ­ε
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
                <div className='avatar-datetime'>{avatarDatetime}εε»Ί</div>
              </div>
              <div className='label-wrapper gap'>
                <span>ζ η­Ύ: </span>
                {labelsArr
                  ? labelsArr.map(i => (
                      <Tag key={i} color='#de021d'>
                        {i}
                      </Tag>
                    ))
                  : ''}
                <div className='collect-playlist' onClick={collectPlaylist}>
                  ζΆθζ­ε
                </div>
              </div>
              <div className='description-info gap'>
                <div className='descript-detail'>δ»η»: {description}</div>
              </div>
            </div>
          </div>
          <div className='main-detail'>
            <CommonHeaderRcm
              title='ζ­ζ²εθ‘¨'
              showIcon={false}
              left={`${trackCount}ι¦ζ­ζ²`}
              right={
                <span>
                  ζ­ζΎοΌ
                  <span style={{ color: '#c20c0c', fontWeight: 700 }}>
                    {playCount}
                  </span>
                  ζ¬‘
                </span>
              }
            />
            <div className='toplist-main-container'>
              <div className='main-header'>
                <div className='sprite_table header-item'></div>
                <div className='sprite_table header-item header-title'>
                  ζ­ζ²ζ ι’
                </div>
                <div className='sprite_table header-item header-time'>ζΆιΏ</div>
                <div className='sprite_table header-item header-singer'>
                  ζ­ζ
                </div>
                <div className='sprite_table header-item header-album'>
                  δΈθΎ
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
              <p>ζ₯ηζ΄ε€εε?ΉοΌθ―·δΈθ½½ε?’ζ·η«―</p>
              <Button
                shape='round'
                danger
                type='primary'
                onClick={() => window.open('https://music.163.com/#/download')}
              >
                η«ε³δΈθ½½
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
