import localKey from '@/common/localStorageKey';
import { http } from '@/plugin/axios';
import localCache from '@/utils/localStorage';

class UserApi {
  getUserInfo(uid) {
    return http.request({
      url: '/user/detail',
      params: {
        uid
      }
    });
  }
  //用户等级
  getUserLevel() {}

  //用户歌单
  getUserPlaylist(uid, offset, limit) {
    return http.request({
      url: '/user/playlist',
      params: {
        uid,
        offset,
        limit
      }
    });
  }
  //获取帐号信息
  getAccountInfo() {
    return http.request({
      url: '/user/account',
      method: 'post',
      data: {
        cookie: localCache.get(localKey.USER_COOKIE) ?? ''
      }
    });
  }

  //退出登录
  logout() {
    return http.request({
      url: '/logout',
      method: 'post',
      data: {
        cookie: localCache.get(localKey.USER_COOKIE) ?? ''
      }
    });
  }
}

export default new UserApi();
