import { http } from '@/plugin/axios';

class PlayListApi {
  getPlayList(limit, order, cat, offset) {
    return http.request({
      url: '/top/playlist',
      params: {
        limit,
        cat,
        offset,
        order
      }
    });
  }
  getPlayListCat() {
    return http.request({
      url: '/playlist/catlist'
    });
  }
  getPlayListTags() {
    return http.request({
      url: '/playlist/highquality/tags'
    });
  }
}
export default new PlayListApi();
