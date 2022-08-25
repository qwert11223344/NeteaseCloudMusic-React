import { http } from '@/plugin/axios';

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
}

export default new UserApi();
