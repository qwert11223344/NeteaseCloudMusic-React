import { http } from '@/plugin/axios';

class ArtistApi {
  //歌手列表
  getArtistList(type, area, initial, offset) {
    return http.request({
      url: '/artist/list',
      params: {
        type,
        area,
        initial,
        offset,
        limit: 30
      }
    });
  }
  //热门歌手
  getHotArtistList(offset, limit) {
    return http.request({
      url: '/top/artists',
      params: {
        offset,
        limit
      }
    });
  }
  //歌手详情
  getArtistDetail(id) {
    return http.request({
      url: '/artist/detail',
      params: {
        id
      }
    });
  }
  //歌手热门50首歌
  getArtistHotSong(id) {
    return http.request({
      url: '/artist/top/song',
      params: {
        id
      }
    });
  }
  //歌手所有歌曲
  getArtistAllSong(id, offset, limit) {
    return http.request({
      url: '/artist/songs',
      params: {
        id,
        offset,
        limit
      }
    });
  }
  //所有专辑
  getArtistAllAlbum(id, offset, limit) {
    return http.request({
      url: '/artist/album',
      params: {
        id,
        offset,
        limit
      }
    });
  }
  //歌手相关视频
  getArtistVideo(id, size, cursor, order) {
    return http.request({
      url: '/artist/video',
      params: {
        id,
        size,
        cursor, //上次请求结果的cursor，用来返回下一页数据
        order //排序方式 时间：0，热度：1，默认时间排序
      }
    });
  }
  //歌手描述
  getArtistDesc(id) {
    return http.request({
      url: '/artist/desc',
      params: {
        id
      }
    });
  }
}
export default new ArtistApi();
