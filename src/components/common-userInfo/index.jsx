import { formatDate, formateProvince, getCount, getImageSize } from '@/utils';
import { Button, Tag } from 'antd';
import { shallowEqual, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styles from './index.module.scss';
export default function CommonUserInfo({ userInfo }) {
  const history = useHistory();
  const {
    nickname = '',
    avatarUrl = '',
    gender = 0,
    artistId = '',
    detailDescription = '',
    eventCount = 0,
    follows = 0,
    followeds = 0,
    signature = '',
    province = '',
    city = '',
    createTime = 0,
    vipType = 0,
    mainAuthType = {},
    level = 0,
    userId = ''
  } = userInfo;
  const desc = detailDescription || mainAuthType?.desc;
  const tags = mainAuthType?.tags;
  const RenderTags = () => {
    return tags && tags.map(t => <Tag key={t}>{t}</Tag>);
  };
  const { accountInfo } = useSelector(
    state => state.loginReducer,
    shallowEqual
  );
  return (
    userInfo && (
      <div className={styles.commonUserInfo}>
        <div className='cover-img'>
          <img src={getImageSize(avatarUrl, 180)} alt='' />
        </div>
        <div className='user-info'>
          <div className='info-top'>
            <div className='user-name'>
              <h1>
                {nickname}
                <span
                  className='vip'
                  style={{
                    background: `url(${require(vipType === 0
                      ? 'src/assets/img/vip.png'
                      : 'src/assets/img/viptrue.png')})`
                  }}
                ></span>
                <span className='level icon-small'>{level}</span>
                {gender !== 0 && (
                  <span
                    className='gender icons'
                    style={{
                      backgroundPosition: `-41px ${
                        gender === 2 ? '-27px' : '-57px'
                      }`
                    }}
                  ></span>
                )}
                {userId !== accountInfo.userId && (
                  <Button type='primary' danger>
                    ??????
                  </Button>
                )}
              </h1>
              {artistId && (
                <Button
                  shape='round'
                  onClick={() => history.push(`/artist?id=${artistId}`)}
                >
                  ???????????????
                </Button>
              )}
            </div>
            <p>
              <span className='authentication icon-small'></span>
              {desc}
              <RenderTags />
            </p>
          </div>
          <div className='info-middle'>
            <div className='dynamic-count'>
              <span className='count'>{eventCount}</span>
              <span>??????</span>
            </div>
            <div className='concern-count'>
              <span className='count'>{follows}</span>
              <span>??????</span>
            </div>
            <div className='fun-count'>
              <span className='count'>{getCount(followeds)}</span>
              <span>??????</span>
            </div>
          </div>
          <div className='info-bottom'>
            <p className='create-time'>
              ???????????????{formatDate(createTime, 'yyyy???MM???dd???')}
            </p>
            <p className='user-desc'>???????????????{signature || '???...'}</p>
            <p className='location'>???????????????{formateProvince(city)}</p>
          </div>
        </div>
      </div>
    )
  );
}
