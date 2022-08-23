import { http } from '@/plugin/axios';

class songApi {
  //歌曲详情
  getSongDetail(ids) {
    return http.request({
      url: '/song/detail',
      params: {
        ids: Array.isArray(ids) ? ids.join(',') : ids
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
  //歌曲下载地址
  getSongDownloadUrl(id) {
    return http.request({
      url: '/song/download/url',
      params: { id }
    });
  }
  //相似歌单
  getPlayerHasSong(id) {
    return http.request({
      url: '/simi/playlist',
      params: {
        id
      }
    });
  }
  //相似歌曲
  getSimilarSong(id) {
    return http.request({
      url: '/simi/song',
      params: {
        id
      }
    });
  }
}

export default new songApi();
