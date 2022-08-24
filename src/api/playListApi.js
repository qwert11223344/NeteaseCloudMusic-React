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
  //歌单详情
  getPlaylistDetail(id) {
    return http.request({
      url: '/playlist/detail',
      params: {
        id
      }
    });
  }
}
export default new PlayListApi();
