import { http } from '@/plugin/axios';

class songApi {
  //歌曲详情
  getSongDetail(ids) {
    return http.request({
      url: '/song/detail',
      params: {
        ids: ids.join(',')
      }
    });
  }
  //歌曲路径
  getSongUrl(id) {
    return http.request({
      url: '/song/url',
      params: {
        id
      }
    });
  }
  //歌曲歌词
  getSongLyric(id) {
    return http.request({
      url: '/lyric',
      params: {
        id
      }
    });
  }
}

export default new songApi();
