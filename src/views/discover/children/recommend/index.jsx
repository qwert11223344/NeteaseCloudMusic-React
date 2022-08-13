import Banners from './children/banners';
import HotAnchor from './children/hot-anchor';
import HotRecommend from './children/hot-recommend';
import ListRecommend from './children/list-recommend';
import LoginRecommend from './children/login-recommend';
import NewAlum from './children/new-album';
import SettleSinger from './children/settle-singer';
import styles from './index.module.scss';
export default function Recommend() {
  return (
    <div className={styles.recommendWrapper}>
      <Banners />
      <div className='content w980'>
        <div className='recommend-left'>
          {/* 热门推荐 */}
          <HotRecommend />
          {/* 新碟上架 */}
          <NewAlum />
          {/* 榜单 */}
          <ListRecommend />
        </div>
        <div className='recommend-right'>
          {/* 登录 */}
          <LoginRecommend />
          {/* 入驻歌手 */}
          <SettleSinger />
          {/* 热门主播 */}
          <HotAnchor />
        </div>
      </div>
    </div>
  );
}
