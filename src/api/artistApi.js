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
}
export default new ArtistApi();
